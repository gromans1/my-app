import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
            <div>
                <img src='https://oir.mobi/uploads/posts/2021-06/1623239272_44-oir_mobi-p-leto-more-solntse-plyazh-priroda-krasivo-f-48.jpg'/>
            </div>
            <div>
                ava+discription
            </div>
        <div>
                My posts
                <div>
                    New post
                </div>
            <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
            </div>
        </div>
    </div>

            }

export default Profile;