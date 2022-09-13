import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>Hello World !</div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://testwp.local/graphql`, {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        posts {
          nodes {
            id
            slug
            title
          }
        }
      }
      `
    })
  })

  const json = await res.json()

  return (
    {
      props: {
        posts: json.data.posts
      }
    }
  )
}
