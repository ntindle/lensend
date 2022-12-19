import type { NextPage } from 'next';
import Head from 'next/head';
import Frame from '../components/UI/Frame';

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Lensend.xyz</title>
        <meta
          name="description"
          content="Send your crypto to your friends and family"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      </Head>

      <main >
        <Frame />
      </main>
    </div>
  );
};

export default Home;
