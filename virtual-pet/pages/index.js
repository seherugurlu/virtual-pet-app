import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css"; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Virtual Pet</title>
        <meta name="description" content="Adopt a virtual kawaii pet!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>🐾 Welcome to Virtual Pet! 🐾</h1>
          <p className={styles.description}>Adopt a cute virtual companion and take care of them!</p>

          <Link href="/adopt">
            <button className={styles.adoptButton}>Adopt a Pet</button>
          </Link>
        </main>
      </div>
    </>
  );
}
