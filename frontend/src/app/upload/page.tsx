import React, { useState } from "react";
import { uploadVideo } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "../../components/ui/input";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { VideoPlayer } from "../../components/VideoPlayer";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    try {
      setProcessing(true);
      const videoUrl = await uploadVideo(file, setUploadProgress);
      setVideoUrl(videoUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setProcessing(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-extrabold text-center text-gray-100">Sentinel AI: Weapon Detection</h1>
        <p className="text-gray-400 text-center mt-2">Upload a video for real-time AI-powered threat detection.</p>
      </motion.div>
      
      <Card className="mt-8 w-full max-w-lg bg-gray-800 rounded-lg shadow-lg">
        <CardContent className="p-6">
          <Input type="file" accept="video/*" className="text-white" onChange={handleFileChange} />
          {uploadProgress > 0 && <Progress value={uploadProgress} className="mt-4" />}
          <Button onClick={handleUpload} disabled={processing || !file} className="mt-4 w-full">
            {processing ? "Processing..." : "Upload & Analyze"}
          </Button>
        </CardContent>
      </Card>
      
      {videoUrl && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-8 w-full max-w-2xl">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">Detection Results</h2>
          <VideoPlayer src={videoUrl} />
        </motion.div>
      )}
    </div>
  );
}