import Head from 'next/head'
import styles from '../styles/Home.module.css'
import User from '../components/User'

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://reqres.in/api/users/1', {
        method: 'GET'
    })
    const json = await res.json()
    if (res.status !== 200) {
        console.error(json)
        throw new Error('Failed to fetch API')
    }

    const user = json.data;
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props:  {
            user
        },
    }
}

export default function Home( {user} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 >
          Welcome
        </h1>
          <User user={user} />


      </main>


    </div>
  )
}
