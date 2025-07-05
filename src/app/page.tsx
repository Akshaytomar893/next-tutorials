import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome home</h1>
      <Link href={"/blog"}>Blogs</Link>
      <Link href={"/products"}>Products</Link>
    </div>
  );
};

export default Home;
