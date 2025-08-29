import React from "react";
import EditModal from "./EditModal";
import { AxiosInstance } from "../routes/axiosInstance";
import toast from "react-hot-toast";

const BlogCard = (props) => {
  let token=localStorage.getItem("token")
  const deletBlog=async (blogId)=>{
    if(!token){
      toast.error("login Required")
      return;
    }
    let res=await AxiosInstance.delete(`/blogs/${blogId}`);
    if(res.status===200){
      toast.success("Blog deleted")
      props.getAllBlogs()
    }else{
      toast.error("Delete Failed")
    }
    console.log("blog id to be deleted",blogId);  
  }
  let { id, category, title, description } = props.blog;
  return (
    <div
      key={id}
      className=" m-2 rounded-2xl p-5 border shadow-2xl border-gray-200"
    >
      <h4 className="text-blue-800 font-semibold mb-4">{category}</h4>
      <h1 className="font-semibold  text-lg">{title}</h1>
      <p className="text-gray-600 mb-15">{description}</p>
      <div className="flex">
        <div className="border py-1 px-5 rounded cursor-pointer font-bold">
          <EditModal editBlog={props.blog} getAllBlogs={props.getAllBlogs} />
        </div>
        <button onClick={()=>deletBlog(id)} className="border py-1 px-5 ms-2 rounded cursor-pointer font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
