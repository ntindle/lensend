import type { NextPage } from 'next';
import Head from 'next/head';
import Frame from '../components/frame';

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
        {/* @ts-ignore */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <main >
        <Frame />
      </main>
    </div>
  );
};

export default Home;
