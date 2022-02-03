import Comment from './Comment';

function CommentsContainer({comments}) {

  const commentList = comments.map(commentObj => <Comment  key={commentObj.key} user={commentObj.user} comment={commentObj.comment}/>)

  return (
    <div>
      <h3>{comments.length} Comments </h3>
      {commentList}
    </div>
  )
}


export default CommentsContainer;