import { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import NewPost from "./NewPost";

function PostsList({isPosting, onStopPosting}) {
    const[modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

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