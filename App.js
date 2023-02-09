
import React, { useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Carde from "./Components/Carde";
import Example from "./Components/Example";
import { add_post, delete_post, get_post, update_post } from './redux/Action/PostAction';

function App() {
  const [body,setBody]=useState("");
  const [createdAt,setCreatedAt]=useState("");
  const [id,setId]=useState(Math.random());
  const [imageUrl, setImageUrl]=useState("");
  const [namee,setNamee]=useState("");
  const [title, setTitle]=useState("");
  const [video, setVideo]=useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch (get_post())
  }, [dispatch])
  const posts = useSelector((state)=>state.post);
  console.log(posts);
  return (
    <div className="App">
      <Example />
      <input type="text" placeholder="enter image url" onChange={(e)=>setImageUrl(e.target.value)}></input>
      <button onClick={()=>dispatch(add_post({id,title,namee,imageUrl,createdAt,body,video}))}>add</button>
      {posts.map((el)=>
       <Carde el={el}/>
        )}
    </div>
  );
}

export default App;
