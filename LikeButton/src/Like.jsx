import { useState } from "react"
export default function Like(){
    let [isLiked,setLiked]=useState(false);
    function toggleLike(){
        isLiked=setLiked(!isLiked);
    }
    let styles={color:"red"}
    return(
        <div>
            <p style={styles} onClick={toggleLike}>{isLiked?(<i class="fa-solid fa-heart"></i>):<i class="fa-regular fa-heart"></i>}
            
            </p>
        </div>
    )
}