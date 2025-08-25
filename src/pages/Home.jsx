import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { AxiosInstance } from "../routes/axiosInstance";

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
      <section className="h-full w-full">
        {allBlogs.length === 0 ? (
          <h2>NO blogs available</h2>
        ) : (
          <article className=" flex justify-evenly gap-5 flex-wrap">
            {allBlogs.map((blog) => {
              let { id, title, description, category } = blog;
              return (
                <div
                  key={id}
                  className="h-[200px] flex shadow-2xl flex-col items-center gap-4 justify-center w-[300px] rounded-2xl "
                >
                  <h4>{category}</h4>
                  <h1>{title}</h1>
                  <p className="text-center">{description}</p>
                </div>
              );
            })}
          </article>
        )}
      </section>
    </div>
  );
};

export default Home;
