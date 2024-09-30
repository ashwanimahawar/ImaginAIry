import React from "react";
import Title from "./Title";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

export default function AboutUs() {
  return (
    <section className="min-h-[800px] w-full text-white py-10 pb-20">
      <Title text="Contact Us - ImaginAIry"></Title>
      {/* <p id="generate-para" className="inter text-center my-5 text-red-600 tracking-widest">Image Generator Tool!</p> */}
      <div
        id="AC-container"
        className=" border rounded-lg border-zinc-500 mt-8 text-left inter w-[70%] mx-auto py-10"
      >
        <p id="para" className=" px-20 text-lg">
          We’re willing to help! Whether you're a user looking for support, a
          creative enthusiast with questions, or someone with ideas to share,
          the ImaginAIry team is always eager to connect. Your experience and
          satisfaction with our platform are our top priorities, and we are
          committed to providing assistance in any way we can.
        </p>
        <p id="para" className=" px-20 text-lg">
          We'd love to hear from you! Feel free to reach out to us. At
          ImaginAIry, we're always excited to connect with our users and improve
          your experience on the platform. We are always evolving, and your
          feedback plays a crucial role in shaping our platform.
        </p>
        <div id="para-contact" className="px-20 my-10 gap-2 flex items-center">
          <div id="para-contact-div" className="w-[50%]">
            <h1 className="text-2xl font-bold">
              You can contact us via Email:{" "}
            </h1>
            <p>
              For general inquiries, support, or feedback, please email us at{" "}
              <span className="text-red-600 hover:underline">
                <a href="mailto:imaginairy77@gmail.com">
                  imaginairy77@gmail.com
                </a>
              </span>
              . We strive to respond to all emails within 24-48 hours.
            </p>{" "}
          </div>
          <div>
            <a href="mailto:imaginairy77@gmail.com">
              <button
                id="email-btn"
                className="roboto inline-flex items-center justify-center whitespace-nowrap text-lg font-medium focus:outline-none disabled:pointer-events-none hover:bg-red-600 focus:outline-none focus:bg-red-600 focus:text-black disabled:opacity-50 h-10 bg-[#4b5563] text-white px-3 rounded-md"
              >
                <span className="mr-3">Email Us</span>
                <MailRoundedIcon />
              </button>
            </a>
          </div>
        </div>

        <p id="para" className=" px-20 text-lg">
          For any inquiries don't hesitate to get in touch. Unleash your
          creativity!
        </p>
      </div>
    </section>
  );
}
