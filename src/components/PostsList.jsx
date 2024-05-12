import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import NewPost from "./NewPost";

function PostsList({isPosting, onStopPosting}) {
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onCancel={onStopPosting}
                    />
                </Modal> 
            )}
            <ul className={classes.posts}>
                <Post author="Yaniv" body="The Course Isn't Boring"/>
            </ul>
        </>
    );
}

export default PostsList;