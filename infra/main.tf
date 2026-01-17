# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.57.0"
    }
  }

  required_version = ">= 1.1.0"
}

provider "azurerm" {
  features {}
  # Mandatory in v4.x, load subscription_id from environment variable
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-portfolio"
  location = "newzealandnorth"
}

resource "azurerm_static_web_app" "app" {
  name                = "swa-portfolio"
  resource_group_name = azurerm_resource_group.rg.name
  location            = "eastasia" # closest region currently available in oceania
  sku_tier = "Free"
  sku_size = "Free"
}

# 1. The WWW Subdomain (Manual CNAME in Metaname)
resource "azurerm_static_web_app_custom_domain" "www" {
  static_web_app_id = azurerm_static_web_app.app.id
  domain_name       = "www.mbroome.nz"
  validation_type   = "cname-delegation"
}

# 2. The Apex Root (Manual TXT in Metaname)
resource "azurerm_static_web_app_custom_domain" "apex" {
  static_web_app_id = azurerm_static_web_app.app.id
  domain_name       = "mbroome.nz"
  validation_type   = "dns-txt-token"
}

# 3. Outputs - These will print to your terminal after you run 'terraform apply'
output "cname_target_for_metaname" {
  description = "Copy this into your Metaname CNAME record for 'www'"
  value       = azurerm_static_web_app.app.default_host_name
}

output "txt_token_for_metaname" {
  description = "Copy this into your Metaname TXT record for '_dnsauth'"
  value       = azurerm_static_web_app_custom_domain.apex.validation_token
  sensitive = true
}

# SWA Deployment Token
output "swa_deployment_token" {
  description = "The API key (Deployment Token) for GitHub Actions"
  value       = azurerm_static_web_app.app.api_key
  sensitive   = true 
}