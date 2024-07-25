import React, { useState } from 'react';
import "./Timeline.css";
import Sugesstions from './Sugesstions';
import Post from './posts/Post';

function Timeline() {
    const[posts] = useState([
      {
      user : "redian",
      postImage: "https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?rs=1&pid=ImgDetMain",
      likes: 12,
      timestamp:"2d",
      },
      {
        user : "visnu",
        postImage: "https://th.bing.com/th/id/OIP.xung4mlBfvUR3RKzjnRY2AHaEK?rs=1&pid=ImgDetMain",
        likes: 57,
        timestamp:"12h",
        },
        {
          user : "gayu",
          postImage: "https://th.bing.com/th/id/OIP.DpcLyyRCeTWoiiMNdCTXxQHaEK?rs=1&pid=ImgDetMain",
          likes: 170,
          timestamp:"5d",
        },
        {
            user : "Kobee_18",
            postImage: "https://th.bing.com/th/id/OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo?rs=1&pid=ImgDetMain",
            likes: 200,
            timestamp:"10d",
        },
  ]);
  return (
    <div className='timeline'>
        <div className="timeline__left">
          <div className="timeline__posts">
            {posts.map((post) =>  (
              <Post user={post.user} 
              postImage={post.postImage} 
              likes={post.likes} 
              timestamp={post.timestamp} />
            ))}
          </div>   
        </div>

        <div className="timeline__right">
            <Sugesstions />
        </div>
    </div>
  )
}

export default Timeline
