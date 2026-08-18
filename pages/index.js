import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I’m Patrick Gabriel M. Naguit, a BSIT student who enjoys playing games, listening to OPM and pop music, watching movies, and spending time with family and friends. My favorite foods include salmon, sisig, and chicken barbecue. Five years from now, I see myself as a successful IT professional with a stable career, continuously improving my skills and achieving my goals.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
