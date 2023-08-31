import video from "../data/video.js";
import VideoDisplay from "./videodisplay.js";
import VideoDetail from "./videodetail.js";
import VideoComments from "./videocomments.js";
import {useState} from "react";

function App() {
  //after the data is loaded, set the state to show
  const [showComments, setShowComments] = useState(true);
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay video={video} />
      //this is where you put the comments
      <VideoDetail video={video} showComments={showComments} setShowComments={setShowComments}/>
      <VideoComments comments={video.comments} showComments={showComments}/>
    </div>
  );
}

export default App;
