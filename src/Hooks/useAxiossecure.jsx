import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiossecure = () => {
    const {userLogOut} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response
        }, error => {
            console.log('Error caught in interceptor', error)
            if(error.status === 401 || error.status === 403){
                userLogOut()
                .then(()=>{
                    console.log('logOut user')
                    navigate('/login')
                })
                .catch(error => console.log(error))
            }
            return Promise.reject(error)
        })
    },[navigate, userLogOut])



  return axiosInstance;
};

export default useAxiossecure;
