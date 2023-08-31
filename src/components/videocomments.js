import CommentCard from "./commentcard";

function VideoComments({comments, showComments}){
    const commentsComponets=comments.map((comment)=>{
        return <CommentCard key={comment.id} comment={comment}/>
    })
  
     return(
     
    <div>
        
        {
        showComments? commentsComponets : <></>
        }
        
    </div>
    )
}
export default VideoComments;