import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle, name } from '../components/Layout'




export default function Home() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="relative py-16 relative">
      <a id="home" className="absolute -mt-36"></a>
        <div className="wrapper text-center">
          <div class="">
            <div className="inline-block rounded-full border-2 border-blue-200 bg-white p-2 z-40 overflow-hidden dark:border-gray-700 dark:bg-gray-100">
              <div className="relative w-36 h-36 z-20 z-40">
                <Image
                  className="object-cover object-center rounded-full"
                  priority
                  src="/images/profile.jpg"
                  layout="fill"
                  alt={name}
                />
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-2xl mt-10 dark:text-gray-300">Hello, I'm</p>
          <h1 className="text-blue-400 text-5xl sm:text-6xl my-4 dark:text-blue-300">Michael Broome</h1>
          <h2 className="text-gray-600 text-3xl font-semibold mb-4 dark:text-gray-200">I'm a Web Developer</h2>
          <p className="py-8">I have a mix of frontend and backend development experience using well known languages.</p>
          <button className="btn btn-dark">Click Me</button>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <a id="about" className="absolute -mt-24"></a>

        <div className="wrapper">
          <h2 className="text-center text-blue-400 font-semibold text-3xl my-8 dark:text-blue-300">About Me</h2>
          <p className="my-4 ">My name is Michael and I like Technology</p>
          <p className="my-4">I hold a Bachelor's Degree in Commerce and Administration with majors in Information Systems and E-Commerce from Victoria University of Wellington.</p>
          <p className="my-4 ">Placeholder</p>
          <div className="my-4 text-3xl space-x-4 text-center mt-16">
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
          </div>
        </div>

      </section>

      <section className="relative py-16">
        <a id="experience" className="absolute -mt-24"></a>

        <div className="wrapper"> 
          <h2 className="text-center text-blue-400 font-semibold text-3xl my-8 dark:text-blue-300">Experience</h2>

          {/* Job */}
          <div className="job">
            <h3 className="text-2xl py-2">Booker Spalding Ltd</h3>
            <h4 className="text-lg text-indigo-700 dark:text-indigo-300">Web Developer | IT Support</h4>
            <p className="text-gray-500 dark:text-blue-200">2015 - Current</p>
            <ul className="list-outside list-disc ml-4 my-4">
              <li>Provide support to the IT team by modifying and updating client ordering websites.</li>
              <li>Updating and modernising older website templates to provide a better client experience.</li>
              <li>Providing IT support to office staff and assisting with IT related issues.</li>
            </ul>
          </div>

            {/* Job */}
            <div className="job">
            <h3 className="text-2xl py-2">The Uniform Centre</h3>
            <h4 className="text-lg text-indigo-700 dark:text-indigo-300">Accounts Reconciliation</h4>
            <p className="text-gray-500 dark:text-blue-200">January 2020 - Current</p>

            <ul className="list-outside list-disc ml-4 my-4">
              <li>Balancing the financial bank accounts against incoming orders and refunds using the companies accounting software </li>

            </ul>
          </div>
        </div>

      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <a id="projects" className="absolute -mt-24"></a>
        <div className="wrapper">
          <h2 className="text-center text-blue-400 font-semibold text-3xl my-8 dark:text-blue-300">Projects</h2>

          {/* Project */}
          <div className="">
            <h3 className="text-2xl py-2">Project 1</h3>
            <h4 className="text-lg text-indigo-700 dark:text-indigo-300">Description of project goes here</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi explicabo voluptatem?.</p>
          </div>

          {/* Project */}
          <div className="project">
            <h3 className="text-2xl py-2">Project 2</h3>
            <h4 className="text-lg text-indigo-700 dark:text-indigo-300">Description of project goes here</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi explicabo voluptatem?.</p>
          </div>
        </div>

      </section>
    </Layout>
  )
}
