import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../routes/axiosInstance";

const UserDashBoard = () => {
  // const{loggedINUser}=useContext(AuthContext)
  // console.log(loggedINUser);
  let { id } = useParams();

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
          <div className="text-2xl font-semibold bg-gray-50 p-3 rounded-xl">Create Blog</div>
        </aside>
        <article className="p-5 h-[calc(100vh-80px)]">
            <h1 className="p-5 text-center font-extrabold text-4xl">
              User DashBoard
            </h1>
        </article>
      </section>
    </div>
  );
};

export default UserDashBoard;
