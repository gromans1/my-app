import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

 /* let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: '20'},
        {id: 2, message: 'Hi', likesCount: '30'}
    ];*/

    let postsElements =
        props.posts.map ((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);



    return (<div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                    {postsElements}
                {/*<Post
                    id={postsData[0].id}
                    message={postsData[0].message}
                    likesCount={postsData[0].likesCount}/>
                <Post
                    id={postsData[1].id}
                    message={postsData[1].message}
                    likesCount={postsData[1].likesCount}/>*/}
            </div>
        </div>
    )

}

export default MyPosts;