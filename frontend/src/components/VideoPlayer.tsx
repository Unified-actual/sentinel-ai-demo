import React from "react";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  src: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg"
    >
      <video
        controls
        autoPlay
        loop
        className="w-full h-full rounded-lg border border-gray-700 shadow-md"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};