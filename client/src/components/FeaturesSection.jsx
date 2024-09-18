import React from "react";
import FeatureCard from "./FeatureCard";
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';

export default function FeaturesSection() {
    return(
        <section id="features-section" className="inter py-20 bg-neutral-900">
          <div id="feat" className="w-[80%] mx-auto px-4">
            <h2 className="text-6xl font-bold text-center text-red-600 mb-12">Features</h2>
            <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<div className="text-[70px]"><ImageRoundedIcon fontSize="inherit" /></div>}
                title="High-Quality Images"
                description="Generate stunning, high-resolution images that are indistinguishable from human-created art."
              />
              <FeatureCard 
                icon={<div className="text-[70px]"><OfflineBoltIcon fontSize="inherit" /></div>}
                title="Lightning Fast"
                description="Create images in seconds, not hours. Our AI works at the speed of your imagination and typing."
              />
              <FeatureCard 
                icon={<div className="text-[70px]"><AddPhotoAlternateRoundedIcon fontSize="inherit" /></div>}
                title="Share with community"
                description="Share your generated image along with it's prompt and your name with our community."
              />
            </div>
          </div>
        </section>
    );
}