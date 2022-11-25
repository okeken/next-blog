import Post from '@views/post'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Post />
    </div>
  )
}

export default Home
