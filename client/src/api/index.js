import axios from "axios";

const baseURL = window.location.hostname === "localhost" 
? "http://localhost:5000/api" 
: process.env.REACT_APP_SERVER_URL;


export const GetPosts = async () => await axios.get( baseURL + "/post/");
export const CreateNewPost = async (data) => await axios.post(baseURL + "/post/", data);
export const GenerateAIImage = async (data) => await axios.post(baseURL + "/generateImage/", data);
