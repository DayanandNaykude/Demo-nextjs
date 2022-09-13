import React from "react";
var moment = require("moment");

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="discription-card">
      <div className="card card-plain dis-card">
        <div className="flex card-main-div ">
          <div className="w-1/3 image">
            <img
              class="rounded-lg max-w-full h-large"
              src="https://wallpapercave.com/wp/wp2722928.jpg"
              alt="card image"
            />
          </div>
          <div class="card-body w-2/3 content">
            <span class="font-bold uppercase text-blue-500 text-5xl">
              Title: {post.title}
            </span>
            <div className="description">
              <div>
                <h2 class="mt-2 font-bold text-3xl">Description:</h2>

                <div
                  class="text-gray-700 text-xl mb-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              <p>
                by <span class="font-bold">Dayanand</span>, 2 days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Post.getInitialProps = async (ctx) => {
//   try {
//     const { post_id } = ctx.query;
//     console.log(post_id);
//     const res = await fetch(`http://testwp.local/graphql`, {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         query: `
//                 query SinglePost($id: ID!, $idType: PostIdType!) {
//                     post(id: $id, idType: $idType) {
//                         date
//                         author {
//                           node {
//                             id
//                             username
//                           }
//                         }
//                         featuredImage {
//                             node {
//                                 sourceUrl
//                             }
//                         }
//                     }
//                 }
//             `,
//         variables: {
//           id: post_id,
//           idType: "ID",
//         },
//       }),
//     });

//     const json = await res.json();

//     return {
//       props: {
//         post: json.data.post,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         post: "error",
//       },
//     };
//   }
// };

export async function getStaticProps(context) {
  console.log(context.params);

  const res = await fetch("http://testwp.local/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
              query SinglePost($id: ID!, $idType: PostIdType!) {
                  post(id: $id, idType: $idType) {
                      title
                      slug
                      content
                      featuredImage {
                          node {
                              sourceUrl
                          }
                      }
                  }
              }
          `,
      variables: {
        id: context.params.post_id,
        idType: "ID",
      },
    }),
  });

  const json = await res.json();

  return {
    props: {
      post: json.data.post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://testwp.local/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query AllPostsQuery {
              posts {
                  nodes {
                        id 
                      slug
                      content
                      title
                      featuredImage {
                          node {
                              sourceUrl
                          }
                      }
                  }
              }
          }
      `,
    }),
  });

  const json = await res.json();
  const posts = json.data.posts.nodes;
  console.log(posts);

  const paths = posts.map((post) => ({
    params: { post_id: post.id },
  }));

  return { paths, fallback: false };
}

export default Post;
