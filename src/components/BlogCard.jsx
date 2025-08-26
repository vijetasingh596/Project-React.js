import React from "react";
import EditModal from "./EditModal";

const BlogCard = (props) => {
    let{id,category,title,description}=props.blog
  return (
    <div
      key={id}
      className=" m-2 rounded-2xl p-5 border shadow-2xl border-gray-200"
    >
      <h4 className="text-blue-800 font-semibold mb-4">{category}</h4>
      <h1 className="font-semibold  text-lg">{title}</h1>
      <p  className="text-gray-600 mb-15">{description}</p>
      <div className="flex">
        <div className="border py-1 px-5 rounded cursor-pointer font-bold">
            <EditModal/>
        </div>
        <button className="border py-1 px-5 ms-2 rounded cursor-pointer font-bold">Delete</button>
      </div>
    </div>
  );
};

export default BlogCard;
