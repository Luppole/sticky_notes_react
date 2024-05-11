import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    return (
    <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author="Itamar" body="Learning ReactJS" />
            <Post author="Yaniv" body="The Course Isn't Boring"/>
        </ul>
    </>
    );
}

export default PostsList;