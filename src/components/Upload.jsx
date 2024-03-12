import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === "image" ? img : video);
    data.append(
      "upload_preset",
      type === "image" ? "testImg_preset" : "testVideo_preset"
    );

    try {
    //   let cloudName = process.env.VITE_CLOUD_NAME;
      let resource_type = type === "image" ? "image" : "video";
      let api = `https://api.cloudinary.com/v1_1/ikbalhossain/${resource_type}/upload`;

      const res = await axios.post(api, data);
      const {secure_url}=res.data;
      console.log(secure_url)
      return secure_url
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const imgUrl = await uploadFile("image");
      const videoUrl = await uploadFile("video");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video">Video :</label>
          <br />
          <input
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideo((prev) => e.target.files[0])}
          />
        </div>
        <br />
        <div>
          <label htmlFor="img">Image :</label>
          <br />
          <input
            type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setImg((prev) => e.target.files[0])}
          />
        </div>
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
