import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remuve</button>
                </div>

            <div className={s.posts}>
                <Post message= 'Hi, how are you'/>
                <Post message= 'Hi' />
            </div>
            </div>
)

    }

export default MyPosts;