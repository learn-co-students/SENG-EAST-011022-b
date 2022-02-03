

function MainContent({handleCommentToggle, subtractVote, addVote, toggleComments, title, upvotes, downvotes, createdAt, views}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Created At: {createdAt} - Views: {views}</p>

      <button onClick={addVote}>Upvotes {upvotes}</button>
      <button onClick={subtractVote}>Downvotes {downvotes}</button>
      <br />
      <button onClick={handleCommentToggle}>{toggleComments ? "Hide Comments" : "Show Comments"}</button>
      <hr />

    </div>
  )
}


export default MainContent;
