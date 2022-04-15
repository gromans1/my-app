import React from 'react';
/*import classes from './../Dialogs.module.css'*/
import classes from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";
import Message from "../DialogsMessage/Message";



const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

/*    let img = props.img.substring((img) => (0, img.length - 1));*/

  /*  const str = "DelftStacks";
    const str2 = str.substring(0, str.length - 1);
    console.log(str2);*/

   /* let messagesElements = props.messages
        .map((m) =>  <Message message ={m.message} id={m.id} key={m.id} />);*/


    return (
        <div className={`${classes.dialogsItems} ${classes.active}`}>

            <NavLink to={path}>
               {<img src='https://encrypted-tbn0.gstatic.com/
                    images?q=tbn:ANd9GcQ_G3dnP1UUHCINfAEEv0m_LEqnZ9HEWcEFDQ&usqp=CAU'/>
                }

                {props.img}
             {/*   {img}*/}
                {props.name}

            </NavLink>
        </div>
    );
};


export default DialogsItem;
