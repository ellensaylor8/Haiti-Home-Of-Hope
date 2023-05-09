import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          "A Father of the fatherless and a Judge of the widow is God in His
          holy habitation." -Psalm 68:5
        </p>
        {/* <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      {/* <div className={styles.center}><h1>Haiti Home of Hope</h1></div> */}
      <div className={styles.grid}>
        <a href="/about" className={styles.card} rel="noopener noreferrer">
          <h2>
            Who We Are <span>-&gt;</span>
          </h2>
          <p>Learn about the Haiti Home of Hope mission and people.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            What We Do <span>-&gt;</span>
          </h2>
          <p>Learn about the Haiti Home of Hope ministries!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Get Involved<span>-&gt;</span>
          </h2>
          <p>
            Donate or learn more about sponsoring a child at the Haiti Home of
            Hope Orphanage.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Connect<span>-&gt;</span>
          </h2>
          <p>Get in contact with someone from our team </p>
        </a>
      </div>
    </main>
  );
}
