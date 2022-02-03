import {useState} from 'react'
import video from "../data/video.js";
import CommentsContainer from './CommentsContainer.jsx';
import MainContent from './MainContent.jsx';
import VideoDisplay from "./VideoDisplay.jsx";

function App() {
  const [videoObj, setVideoObj] = useState(video)
  const [toggleComments, setToggleComments] = useState(true)


  function addVote(){
    // const newObj = {...videoObj, upvotes: videoObj.upvotes + 1}
    // setVideoObj(newObj)

    setVideoObj(currentState => {
      return {...currentState, upvotes: currentState.upvotes + 1}
    })
  }
  
  function subtractVote(){
    // const newObj = {...videoObj, downvotes: videoObj.downvotes - 1}
    // setVideoObj(newObj)
  
    setVideoObj(currentState => {
      return {...currentState, downvotes: currentState.downvotes - 1}
    })
  }
  
  function handleCommentToggle() {
    setToggleComments(currentToggleState => !currentToggleState)
  }

  return (
    <div className="App">
      <VideoDisplay embedUrl={videoObj.embedUrl}/>
      <MainContent addVote={addVote} subtractVote={subtractVote} toggleComments={toggleComments} handleCommentToggle={handleCommentToggle} title={videoObj.title} createdAt={videoObj.createdAt} views={videoObj.views} upvotes={videoObj.upvotes} downvotes={videoObj.downvotes}/>
      {toggleComments && <CommentsContainer comments={videoObj.comments}/> }
    </div>
  );
}

export default App;
