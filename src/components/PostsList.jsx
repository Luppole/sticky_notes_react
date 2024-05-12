import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import NewPost from "./NewPost";

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPosts((prevPosts) => [postData, ...prevPosts]);
    }
    
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
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