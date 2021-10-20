// Simply create a JS file under the pages directory, and the path to the file becomes the URL path.
// index.js is the default home page meaning it is just the URL (localhost:3000 if working locally) and a forwardslash /
// Creating more .js files in the 'pages' directory will simply allow you to view that new file by adding the name of the file
// to the end of the url.
// EX: create hello-world.js with the following content:
// export default function Hello() {
//   return <h1>Hello World!</h1>
// }
// and you can access the above webpage at localhost:3000/hello-world

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, we're <strong>Contract Squad</strong>. We are a group on Twilio Contractors that wanted to mess around with Twilio API while working on our Web Developer skills.
          You can contact us on{' '}
          <a href="https://github.com/Mercyfulsin/TwilioProject">GitHub</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About Us</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
