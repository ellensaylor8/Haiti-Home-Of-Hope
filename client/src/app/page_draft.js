// import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <blockquote>
          <p>
            A Father of the fatherless and a Judge of the widow is God in His
            holy habitation.
          </p>
          <cite>
            <span>&nbsp;</span>Psalm 68:5
          </cite>
        </blockquote>
      </div>

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
          <p>Learn about the Haiti Home of Hope ministries.</p>
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
          <p>Get in contact with someone from our team.</p>
        </a>
      </div>
    </main>
  );
}
