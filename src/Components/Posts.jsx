import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { addAllPosts, selectPost } from "../features/postSlice";
import axios from "axios";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";
  useEffect(() => {
    const fetchData = () => {
      const response = axios.get(FACEBOOK_CLONE_ENDPOINT).then((response) => {
        dispatch(addAllPosts(response.data));
      });
    };
    fetchData();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Posts;
