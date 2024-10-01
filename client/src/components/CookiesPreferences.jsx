import React from "react";
import Title from "./Title";
import Paragraphs from "./Paragraphs";
import Heading3 from "./Heading3";
import ListItems from "./ListItems";

export default function CookiesPreferences() {
  const updatedDate = " October 1, 2024";

  function Heading2({ text }) {
    return (
      <h2
        id="para"
        className=" h text-3xl font-bold px-20 pt-5 pb-2"
      >
        {text}
      </h2>
    );
  }
  return (
    <section className="min-h-[800px] w-full text-white py-10 pb-20">
      <Title text="Cookies Preferences - ImaginAIry" />

      <div
        id="AC-container"
        className=" border rounded-lg border-zinc-500 mt-8 text-left inter w-[70%] mx-auto py-10"
      >
        <p id="para" className="px-20 text-sm text-gray-500">
          Last updated:{updatedDate}
        </p>
        <br />
        <Heading2 text="Introduction" />
        <Paragraphs text="We use cookies on ImaginAIry to enhance your browsing experience, provide important functionalities, and help us understand how our users interact with the website. Cookies are small text files stored on your device when you visit our website. These files allow us to remember certain information, improving your experience over time." />
        <Paragraphs text="By using this Cookies Preference Page, you can choose which types of cookies you allow, ensuring your privacy while using our website. You can adjust your settings below." />
        <Heading2 text="Types of Cookies We Use" />
        <Heading3 text="1. Essential Cookies" />
        <Paragraphs text="These cookies are necessary for the operation of our website. They allow you to navigate through the pages and use essential features, such as accessing secure areas of the site. Without these cookies, the website cannot function properly. These cookies do not collect any personal data." />
        <ul id="paralist" className="px-20 text-lg mb-5 flex flex-col gap-1">
        <ListItems strong="Examples:" text="Login functionality, session management, security settings." />
        </ul>
        <Heading3 text="2. Analytics Cookies" />
        <Paragraphs text="These cookies help us understand how visitors interact with our website by collecting anonymous information such as the number of visitors, which pages are most popular, and how users move through the site. This data helps us improve website performance and enhance the user experience." />
        <ul id="paralist" className="px-20 text-lg mb-5 flex flex-col gap-1">
        <ListItems strong="What we use:" text="We currently use Google Analytics to gather anonymized insights into site traffic. We do not track users for marketing or advertising purposes at this stage." />
        </ul>
        <Heading3 text="3. Preference Cookies" />
        <Paragraphs text="Preference cookies allow our website to remember your choices, such as language preferences or other customizations, ensuring a more personalized experience during future visits." />
        <ul id="paralist" className="px-20 text-lg mb-5 flex flex-col gap-1">
        <ListItems strong="Examples:" text="Language selection, theme preferences, cookie consent settings." />
        </ul>
        <Heading3 text="4. Marketing Cookies" />
        <Paragraphs text="While we currently do not run ads on ImaginAIry, marketing cookies would typically be used to track visitors across websites. These cookies aim to serve relevant and engaging advertisements. Once we enable advertisements (such as Google AdSense), marketing cookies may be employed for this purpose." />
        <Heading2 text="Your Consent Options" />
        <Paragraphs text="At any time, you can choose whether or not to allow certain types of cookies. Please keep in mind that if you choose to block some cookies, your experience on the website may be affected, and some features might not work as intended." />
        <Heading3 text="Essential Cookies" />
        <ul id="paralist" className="px-20 text-lg mb-5 flex flex-col gap-1">
        <ListItems text="These cookies are always enabled because they are necessary for the basic operation of the site." />
        </ul>
        <Heading3 text="Analytics Cookies" />
        <ul id="paralist" className="px-20 text-lg mb-5 flex flex-col gap-1">
        <ListItems strong="Allow Analytics Cookies:" text="If enabled, this will allow us to gather anonymous information via Google Analytics to improve the performance and usability of our site." />
        <ListItems strong="Decline Analytics Cookies:" text="If declined, we won’t track or collect any analytics data. You will still be able to use the site, but we won’t have insights to optimize it." />
        </ul>
        <Heading3 text="Preference Cookies" />
        <ul id="paralist" className="px-20 text-lg mb-5 flex flex-col gap-1">
        <ListItems strong="Allow Preference Cookies:" text="Enabling these will allow us to remember your preferences (such as cookie settings) for your future visits." />
        <ListItems strong="Decline Preference Cookies:" text="Declining these cookies will mean you have to set preferences each time you visit." />
        </ul>
        <Heading3 text="Marketing Cookies" />
        <ul id="paralist" className="px-20 text-lg mb-5 flex flex-col gap-1">
        <ListItems text="We currently do not use marketing or advertising cookies, but this section will be updated once Google AdSense is integrated and ads are running on our site." />
        </ul>
        <Heading2 text="How We Use Cookies for Analytics" />
        <Paragraphs text="When you accept analytics cookies, we use Google Analytics to track anonymized data. This helps us understand how visitors interact with the site and allows us to make informed decisions about how to improve ImaginAIry. Google Analytics collects this information without identifying individual users." />
        <Heading2 text="How to Change Cookie Settings in Your Browser" />
        <Paragraphs text="You can also manage cookie settings directly from your browser. Most browsers allow you to block or delete cookies by adjusting your settings. Please refer to your browser's help section for guidance." />
      </div>
    </section>
  );
}
