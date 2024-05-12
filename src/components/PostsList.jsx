import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from 'react-router-dom';

function PostsList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>No posts yet. Would you like to add one?</h2>
                    <p>Click the button below to start the process.</p>
                </div>
            )}
        </>
    );
}

export default PostsList;