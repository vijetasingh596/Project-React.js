import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosInstance } from "../routes/axiosInstance";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";

const UserDashBoard = () => {
  // const{loggedINUser}=useContext(AuthContext)
  // console.log(loggedINUser);
  let navigate=useNavigate()
  const[newBlog,setNewBlog]=useState({
    title:"",
    category:"",
    description:""
  })
  const handleBlog=(e)=>{
   let {name,value}=e.target
   setNewBlog({...newBlog,[name]:value})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(newBlog)
    let payload={
      ...newBlog,
      createBy:{
        _id:user.id,
        userName:user.username
      },
      createdAt:new Date(),
      updatedAt:new Date(),
    }
    let res=await AxiosInstance.post("/blogs",payload)
    console.log(res);
    if(res.status===201){
      toast.success("Blog created")
      navigate("/")
    }else{
      toast.error("Failed to created")

    }
    setNewBlog({title:"",category:"",description:""})
    
    
  }
  let { id } = useParams();//return object {id:"bd08"}

  const [user, setUser] = useState({});


  async function getAuthUser() {
    let { data } = await AxiosInstance.get(`/users/${id}`);
    console.log(data);
    setUser(data);
  }
  useEffect(() => {
    getAuthUser();
  }, [id]);
  return (
    <div>
      <section className="flex">
        <aside className="w-[30%] bg-white shadow-xl  h-[calc(100vh-80px)]">
          <div className="text-2xl font-semibold bg-gray-50 p-3 capitalize mb-3 rounded-xl">
            Welcome {user.username}
          </div>
          <div className="text-2xl font-semibold bg-gray-50 p-3 rounded-xl">Create Blog

          </div>
        </aside>
        <article className="p-5 h-[calc(100vh-80px)] w-[100%]">
            <h1 className="p-5 text-center font-extrabold text-4xl">
              User DashBoard
            </h1>
            <form onSubmit={handleSubmit} action="" className="flex p-5 flex-col gap-10">
              <h2 className="font-bold text-2xl">Create blog</h2>
              <TextField
              value={newBlog.category}
              onChange={handleBlog}
              label="category"
              name="category"
              type="text"
              variant="outlined"
              fullWidth
              />
               <TextField
              value={newBlog.title}
              onChange={handleBlog}
              name="title"
              label="title"
              type="text"
              variant="outlined"
              fullWidth
              />
               <TextField
              value={newBlog.description}
              onChange={handleBlog}
              label="description"
              type="text"
              name="description"
              variant="outlined"
              fullWidth
              />
              <button  className="bg-orange-400 text-white text-2xl p-3 rounded font-bold">Create Blog</button>
            </form>
        </article>
      </section>
    </div>
  );
};

export default UserDashBoard;
