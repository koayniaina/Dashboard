import Link from "next/link";
import React from "react";

// Define the type for a post
interface Post {
  id: number;
  title: string;
  content?: string; // Add other fields as needed
}

const getData = async (): Promise<Post[]> => {
  const res = await fetch("http://localhost:4000/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts: Post[] = await getData();
  return (
    <div>
        <h1>Posts</h1>
        <Link className="bg-blue-400" href="/create">Create</Link>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <p>{post.title}</p>

          <button>
            <p>Edit</p>
            <p>Delete</p>
          </button>
        </div>
      ))}
    </div>
  );
}
