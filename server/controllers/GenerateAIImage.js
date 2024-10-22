import * as dotenv from "dotenv";
import { createError } from "../error.js";
import OpenAI from "openai";

dotenv.config();

//Setup OpenAI Api Key
const configuration = {
    apiKey : process.env.OPENAI_API_KEY,
};
const openai = new OpenAI(configuration);

//Controller to generate Image

export const generateImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;

        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
          });
          const generatedImage = response.data.data[0].b64_json;
        return res.status(200).json({ imgSrc: generatedImage });
    } catch (error) {
        console.log(error);
        next(
            createError(
                error.status,
                error.message
            )
        );
    }
};