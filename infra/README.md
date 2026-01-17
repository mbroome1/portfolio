[← Back to Root](../README.md) / **Infrastructure**
---
# Azure Infrastructure (Terraform)

This folder contains the IaC setup for hosting the portfolio on Azure.


## Local Environment
AzureRM v4.x.x and above requires explicit Subscription Id without hardcoding it into Terraform files, this project uses a local environment loader.

#### Azure CLI:
We need to be authenticated into Azure CLI to fetch  account information

`az login`



### 1. Environment file (.env)
Create `.env` file in this folder (double check it is ignored in .gitignore)

`ARM_SUBSCRIPTION_ID=<subscription_id_secret>`

Use bash script to export the variables into current terminal session:

`source load.sh`

### 2. Terraform setup
`terraform init`

`terraform plan`

`terraform apply`

`apply` will fail the first time round during the `www` custom domain step, but this is expected as we need to output the `txt_token_for_metaname` on the first fail and set up the domain name TXT record in **Metaname**:

*Get the TXT token for apex domain validation:*

`terraform output -raw txt_token_for_metaname`

*Get the Azure created domain address which becomes the **CNAME** record for the DNS:*

`terraform output cname_target_for_metaname`

### 3. Manual DNS Configuration
Because we are using a manual DNS provider (Metaname) without CNAME flattening, the following records were added manually:

| Type  | Host  | Value | Purpose |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `[azure-url].azurestaticapps.net.` | Subdomain Routing |
| **TXT** | `@` | `ms=ms[token]` | Domain Verification |
| **A** | `@` | `20.xxx.xxx.xxx` (Stable Inbound IP) | Apex Domain Routing |

**Important**: 
- Don't forget the trailing dot at the end of the URL for CNAME value.
- `@` is short for domain name with a dot. Full domain name may be required for TXT and A records instead. Example: `mydomain.com.`

#### Stable Inbound IP 
This can be found in the json config settings in the overview section of the created app. Since Metaname does not support ALIAS record type, and that CNAME is forbidden to be used as with an apex domain for redirection, the only way for apex domains to work is by using the IP address directly. 

#### Set Default Domain
To ensure all traffic (including www and the azurestaticapps.net URL) redirects to your clean root domain:

  - In the Custom domains blade, click the ... next to your apex domain.
  - Select Set default.
  - Verify that the apex and www versions of yourdomain.com now display the SSL padlock.

### 4. Finalization: 
Run terraform apply one last time once the DNS is live to ensure the state is fully synchronized and the domain is marked as "Ready."

*Get the GitHub Deployment Secret:*

`terraform output -raw swa_deployment_token`

*Put this token in your GitHub Actions repository secrets as:*

`AZURE_STATIC_WEB_APPS_API_TOKEN` 


## ⚠️ Important Notes
- **Region:** App is hosted in `eastasia` (closest hub supporting SWA).
- **Default Domain:** After validation, the Apex domain must be manually set to **Default** in the Azure Portal to handle `www` redirection.
- **SSL:** Root domain SSL binding can take up to 2 hours after A-record creation.

<br>

# Key Features
- **Global CDN:** Content served from edge nodes for low-latency in New Zealand.
- **Automated CI/CD:** Fully managed deployment pipeline via GitHub Actions.
- **Infrastructure as Code:** 100% reproducible environment using Terraform v4.x.
