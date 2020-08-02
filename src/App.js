import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setisLoading(true);
                let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
                setPosts(response.data);
                setisLoading(false);
            } catch (error) {
                console.log(error.response.data);
            }
        };
        fetchPosts();
    }, []);

    const getPostLastIndex = currentPage*postsPerPage;
    const getPostFirstIndex= getPostLastIndex-postsPerPage;

    return (
        <div className="container mt-5">
            <h1 className="text-primary text-center mb-3">My Posts</h1>
            <Posts isLoading={isLoading} posts={posts.slice(getPostFirstIndex,getPostLastIndex)} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} currentPage={currentPage} handleClick={(page)=>setCurrentPage(page)}/>
        </div>
    );
};

export default App;
