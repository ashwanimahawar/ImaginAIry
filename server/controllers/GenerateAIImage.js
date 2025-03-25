import * as dotenv from "dotenv";
import { createError } from "../error.js";
import OpenAI from "openai";

dotenv.config();

//Setup OpenAI Api Key
const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};
const openai = new OpenAI(configuration);

//Controller to generate Image
export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "Act as a highly accurate image generator, focus on each word of the prompt given to you and create only what is described in the prompt. Generate a high-resolution, photorealistic image according to the prompt provided. Avoid including any other text in the image. Do not rephrase the prompt. Do not include any personal information in the image. The image should be of high resolution. The image should be photorealistic. The image should only depict what the prompt asks for. Do not add additional text to the image. Make sure the image is generated with the exact words and details as the prompt. This is the prompt: " + prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const generatedImage = response.data[0].b64_json;
    return res.status(200).json({ imgSrc: generatedImage });
  } catch (error) {
    console.log(error);
    next(createError(error.status, error.message));
    return res.status(500).json({ errorMessage: error?.error?.message });
  }
};
