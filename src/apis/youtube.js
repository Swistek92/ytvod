import axios from "axios";
const KEY = "AIzaSyC5Mh2xHGRCkx8zx6S9_gzLXIqTRAl_eeU";

export default axios.create({
  baseURL:  "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
  }

});

