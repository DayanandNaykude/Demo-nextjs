import { Router } from "next/router";
import React from "react";
import Card from "../components/Card";

const blog = ({ posts }) => {
  console.log(posts.nodes);
  return (
    <div className="post-list max-h-full">
      {posts.nodes.map((post) => {
        return (
          <Card
            key={post.id}
            post_id = {post.id}
            post_title={post.title}
            post_content={post.content}
            post_date={post.date}
          />
        );
      })}
    </div>
  );
};

export default blog;

export async function getStaticProps() {
  const res = await fetch(`http://testwp.local/graphql`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `
        query NewQuery {
          posts {
            nodes {
              id
              slug
              title
              content
              date
            }
          }
        }
        `,
    }),
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
    },
  };
}
