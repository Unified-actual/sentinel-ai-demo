import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/**
 * Uploads a video file to the backend for AI processing.
 * @param {File} file - The video file to be uploaded.
 * @param {Function} onUploadProgress - Callback function for tracking progress.
 * @returns {Promise<string>} - The processed video URL.
 */
export const uploadVideo = async (file: File, onUploadProgress?: (progress: number) => void): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(`${BASE_URL}/detect/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        if (onUploadProgress) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
          onUploadProgress(percentCompleted);
        }
      },
    });

    return response.data.output_file;
  } catch (error) {
    console.error("Upload failed:", error);
    throw new Error("Failed to upload video. Please try again.");
  }
};

/**
 * Fetches the processed video URL after AI detection.
 * @param {string} videoId - The ID of the processed video.
 * @returns {Promise<string>} - The processed video URL.
 */
export const getProcessedVideo = async (videoId: string): Promise<string> => {
  try {
    const response = await axios.get(`${BASE_URL}/videos/${videoId}`);
    return response.data.video_url;
  } catch (error) {
    console.error("Error fetching processed video:", error);
    throw new Error("Failed to retrieve processed video.");
  }
};
