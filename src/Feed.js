import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* <Post
        profilePic="https://i.pinimg.com/originals/18/06/80/1806803ffd5037deebae2e4b9b93c7c4.jpg"
        message="โครตอโลนเลย"
        timestamp="this is timestamp..."
        username="suphasin yosang"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsjnCG3opvBQfwC70WZHR_QvNj440azWD9g&usqp=CAU"
      />
      <Post
        profilePic="https://i.pinimg.com/originals/18/06/80/1806803ffd5037deebae2e4b9b93c7c4.jpg"
        message="อะไรกันคับเนี่ยยย"
        timestamp="this is timestamp..."
        username="suphasin yosang"
        image="data:image/jpeg;base64,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"
      />
      <Post
        profilePic="https://i.pinimg.com/originals/18/06/80/1806803ffd5037deebae2e4b9b93c7c4.jpg"
        message="หัวหมอสุด ๆ"
        timestamp="this is timestamp..."
        username="suphasin yosang"
        image="https://images.alphacoders.com/736/thumb-350-736461.png"
      /> */}
    </div>
  );
}

export default Feed;
