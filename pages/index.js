import Head from 'next/head';
import MDXBlocksEditor from '../components/MDXBlocksEditor';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + Slate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Editor Demo</h1>

        <div className={styles.demo}>
          <MDXBlocksEditor />
        </div>

        <div>
          <h2 className={styles.subheading}>About</h2>

          <p className={styles.description}>
            <span className={styles.branding}>Slate + Next.js</span>
            This Branch adds the latest{' '}
            <code className={styles.code}>slate</code> package to the project.
          </p>
          <p className={styles.description}>
            No custom configuration or packages were added.
          </p>
        </div>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
