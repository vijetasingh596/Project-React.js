import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { AxiosInstance } from '../routes/axiosInstance'

const Home = () => {
    const [allBlogs,setAllBlogs]=useState([])
    async function getAllBlogs() {
        let res=await AxiosInstance.get("/blogs")
        console.log(res.data);
        setAllBlogs(res.data)  
    }
    useEffect(()=>{
        getAllBlogs()
    },[])
  return (
    <div>
        <NavBar/>
        <section>
            {
           allBlogs.length===0?(<h2>NO blogs available</h2>):(<article>
           {
            allBlogs.map((blog)=>{
                let {id,title,description,category}=blog
                return <div key={id}>
                 <h4>{category}</h4>
                 <h1>{title}</h1>
                 <p>{description}</p>
                </div>
            })
           }
           </article>)
        }
        </section>
    </div>
  )
}

export default Home