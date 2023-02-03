import Head from "next/head";
import BackgroundVideo from "../components/BackgroundVideo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mobil 1™ Racing Support</title>
        <meta name="description" content="Support for Mobil 1 Racing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundVideo />
    </div>
  );
}
