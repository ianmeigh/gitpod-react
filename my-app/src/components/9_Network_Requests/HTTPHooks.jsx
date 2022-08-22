import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HTTPHooks() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [postMessage, setPostMessage] = useState(null);

  // GET data
  useEffect(() => {
    // -- Axios --
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        const data = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setPosts(data);
      })
      .catch((error) => {
        setError(`GET Error, ${error.message}`);
      });

    // -- Vanilla JS --
    /* const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      setPosts(Array.isArray(data) ? data : Array(data));
    };

    fetchPosts().catch((error) => {
      setError(error.message);
    }); */
  }, []);

  // -- Axios --
  const postToApi = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hello world!",
        body: "It works",
        userId: 123,
      })
      .then((response) => {
        console.log(response);
        setPosts([response.data]);
        setPostMessage(`Success! Title: ${response.data.title}`);
      })
      .catch((error) => {
        console.log(error);
        // Clear 'posts' state so POST error is shown in demonstration
        setPosts([]);
        setError(`POST Error, ${error.message}`);
      });
  };

  // -- Vanilla JS --
  /* const postToApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: "Hello world!",
            body: "It works",
            userId: 123,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      setPosts(Array(data));
      setPostMessage(`Success! Title: ${data.title}`);
    } catch (error) {
      setPosts([]);
      setError(`POST Error, ${error.message}`);
    }
  }; */

  return (
    <div>
      <button onClick={postToApi}>Create Post</button>
      <p>{postMessage}</p>
      <h2>Posts:</h2>
      {/* {JSON.stringify(this.state.posts)} */}
      {posts.length ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>
              {post.id}. {post.title}
            </h2>
            <h4>By User ID {post.userId}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      ) : (
        <div>{error ? <p>{error}</p> : <h2>Loading Posts...</h2>}</div>
      )}
    </div>
  );
}
