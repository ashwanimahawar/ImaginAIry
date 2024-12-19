# ImaginAIry

ImaginAIry is an AI-powered web application that lets users generate images from text prompts. Users can input a prompt, generate an image, and then post it along with the author name and the original prompt used for generation. Explore and download images shared by other users on the platform.

## Features

- **AI Image Generation**: Create images from descriptive text prompts.
- **Post and Share**: Add your name and prompt to the generated image, and post it on the platform for others to see.
- **Explore Section**: Discover and download images shared by other users.
- **User-Friendly Interface**: Simple and intuitive design to make image generation fun and accessible to everyone.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

To run ImaginAIry locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ashwanimahawar/ImaginAIry.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ImaginAIry
   ```

3. Install dependencies for both the client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Create a `.env` file in the `server` folder and add the following environment variables:

   ```bash
   MONGODB_URL=your-mongodb-uri
   OPENAI_API_KEY=your-openai-api-key
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   API_KEY=your-cloudinary-api-key
   API_SECRET=your-cloudinary-api-secret
   ```

   Replace `your-mongodb-uri`, `your-openai-api-key`, `your-cloudinary-cloud-name`, `your-cloudinary-api-key`, and `your-cloudinary-api-secret` with your actual credentials.

5. Create a `.env` file in the `clieht` folder and add the following environment variables:

   ```bash
   REACT_APP_SERVER_URL=http://localhost:5000/api
   ```
6. Run the development server:
   ```bash
   cd server
   npm start
   ```

7. In another terminal window, run the client:
   ```bash
   cd client
   npm start
   ```

8. Open your browser and go to `http://localhost:3000` to use the application.

## Usage

Once you have the project running:

1. Enter a descriptive prompt to generate an image using AI.
2. Add your name as the author and post the image along with the prompt.
3. Head to the **Explore** section to view images posted by others and download them.

## Live Project

The project is currently deployed, you can access it through [https://imaginairy.site](https://imaginairy.site)

## Contributing

We welcome contributions to improve ImaginAIry! Here’s how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit:
   ```bash
   git commit -m "Added feature XYZ"
   ```

4. Push your changes to your forked repo:
   ```bash
   git push origin feature-name
   ```

5. Open a pull request, and we’ll review it as soon as possible!

## Contact

We’d love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out.

- **Email**: [imaginairy77@gmail.com](mailto:imaginairy77@gmail.com)

Join us on the journey of creativity with AI-powered image generation!
