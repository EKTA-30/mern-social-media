import React, { useEffect, useState } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import './feed.css'
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  //Empty array --> Run this use Effect only once when you render this feed

  useEffect( () => {
   
    const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8080/api/posts/timeline/63bd5823d3e43d1ad5a62a8b");
    console.log(res);
    setPosts(res.data);
    }
    

    fetchPosts();

  },[]);

  return (
    <div className='feed'>

       <div className="feedWrapper">
       <Share/>
         {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
