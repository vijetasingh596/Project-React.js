import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import NavBar from "../components/NavBar";
const LoginPage = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [allRegisterUser, setAllRegisterUser] = useState([]);

  const navigate=useNavigate()

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  async function getAllUser() {
    let res = await AxiosInstance.get("/users");
    console.log(res.data);
    setAllRegisterUser(res.data);
  }
  useEffect(() => {
    getAllUser();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginUser);

    let authUser=allRegisterUser.find((ele)=>{
           return ele.email===loginUser.email&& ele.password===loginUser.password
    })
    console.log(authUser);

    if(authUser){
        localStorage.setItem("token",Date.now())
        //navigate to home pages
        navigate("/")
        toast.success("login success")
    }else{
        //navigate to signup page
        navigate("/signup")
        toast.error("login failed")
    }
    
  };

  return (

    <div className="h-full w-full bg-amber-300 flex items-center justify-center">
      <form
        className="bg-white flex flex-col p-5 gap-2 rounded-2xl shadow-2xl"
      >
        <h1 className="text-2xl font-extrabold text-center">Login</h1>

        <TextField
          name="email"
          value={loginUser.email}
          onChange={handleChange}
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <TextField
          name="password"
          value={loginUser.password}
          onChange={handleChange}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />

        <p className="text-sm font-semibold mb-5">Forgot Password ?</p>

        <Button onClick={handleSubmit} variant="contained">Login</Button>

        <p className="mt-5">
          Not a member? <a href=""> Sign-up here</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
