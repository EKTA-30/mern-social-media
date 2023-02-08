import {useState,React,useEffect} from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material' 
import axios from 'axios';
import {format} from 'timeago.js';
export default function Post({post}) { 

  const [like, setLike] = useState(post.likes.length);
  const[isLiked, setIsLiked] = useState(false);
  const[user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
    const fetchUsers = async () => {
    const res = await axios.get(`users/${post.userId}`);
    setUser(res.data);
    };
     fetchUsers();
  },[]);

  const likeHandler = () =>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(isLiked ? false :true);
  }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImage' src={user.profilePicture || PF+"person/noAvatar.png"}alt="" />
                    <span className="postUserName">{user.userName}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                  <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post.desc}</span>
                <img className = 'postImage' src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className='likeIcon' src={`${PF}like.png`} alt="" onClick={likeHandler}/>
                <img className='likeIcon' src={`${PF}heart.png`}alt="" onClick={likeHandler} />
                <span className="postLikeCounter">{like} people like this</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment}</span>
              </div>
            </div>
        </div>
    </div>
  )
}
