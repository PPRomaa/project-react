import axios from "axios";
import {baseURL} from "../configs";



const axiosService = axios.create(
    {
        baseURL,
        headers:{
            'Authorization': `Bearer ${process.env.REACT_APP_KEY}`
        }
    });

export {
    axiosService
}