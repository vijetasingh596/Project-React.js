import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { AxiosInstance } from "../routes/axiosInstance";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  async function getAllBlogs() {
    let res = await AxiosInstance.get("/blogs");
    console.log(res.data);
    setAllBlogs(res.data);
  }
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div>
      <NavBar />
      <section>
        {allBlogs.length === 0 ? (
          <h2>NO blogs available</h2>
        ) : (
          <article className="grid grid-cols-1 md:grid-cols-4">
            {allBlogs.map((blog,idx) => {
              // let { id, title, description, category } = blog;
              return <BlogCard key={idx} blog={blog}/>
            })}
          </article>
        )}
      </section>
    </div>
  );
};

export default Home;
