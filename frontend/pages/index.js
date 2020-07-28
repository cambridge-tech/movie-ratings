import Head from 'next/head'
import SearchContainer from '../components/SearchContainer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Ratings App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">movie-ratings!</a>
        </h1>

        <p className={styles.description}>
          Type in the name of a movie here: 
        </p>

        <div>
          <SearchContainer />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/cambridge-tech/movie-ratings"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/GitHub-Mark-64px.png" alt="GitHub Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

