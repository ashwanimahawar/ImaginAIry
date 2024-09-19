import axios from "axios";

const baseURL = "https://imaginairy-cowi.onrender.com/api" || "http://localhost:5000/api";

export const GetPosts = async () => await axios.get( baseURL + "/post/");
export const CreateNewPost = async (data) => await axios.post(baseURL + "/post/", data);
export const GenerateAIImage = async (data) => await axios.post(baseURL + "/generateImage/", data);
