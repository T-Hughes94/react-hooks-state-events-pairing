function CommentCard({comment}){
    return(
        <>
        <h1>{comment.user}</h1>
        <p>{comment.comment}</p>
        </>
    )
}
export default CommentCard;
//this comment card will be passed to the videocomment component to display the comments