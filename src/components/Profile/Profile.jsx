import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
            <div>
                <img src='https://oir.mobi/uploads/posts/2021-06/1623239272_44-oir_mobi-p-leto-more-solntse-plyazh-priroda-krasivo-f-48.jpg'/>
            </div>
            <div>
                ava+discription
            </div>
        <MyPosts />

    </div>

            }

export default Profile;