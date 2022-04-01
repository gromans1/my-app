import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profileInfo}>
                <img src='https://oir.mobi/uploads/posts/2021-06/1623239272_44-oir_mobi-p-leto-more-solntse-plyazh-priroda-krasivo-f-48.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+discription
            </div>
        </div>

    );
};


export default ProfileInfo;