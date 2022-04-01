import React from 'react';
import classes from './Dialogs.module.css'
import {Link, NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (<div className={classes.messages}>{props.message}</div>
    );
};


const Dialogs = (props) => {

    let dialogsData = [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Vova'},
            {id: 3, name: 'Slava'}
    ];

    let messagesData = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Hi yo'}
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>

            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>

        </div>


    )

}

export default Dialogs;