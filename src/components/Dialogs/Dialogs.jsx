import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./DialogsMessage/Message";


const Dialogs = (props) => {



    let dialogsElements = props.dialogsData
        .map( ( dialog) => <DialogsItem name={dialog.name} key={dialog.id}/> );

    let messagesElements = props.messages
        .map((m) =>  <Message message ={m.message} key={m.id} />);


    {/*   [ <div>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
      ]  </div>*/}




    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <ul>{dialogsElements}</ul>

                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}

            </div>

            <div className={classes.messages}>
                <ul>{messagesElements}</ul>
               {/* <Message message={messages[0].message} id={messages[0].id}/>
                <Message message={messages[1].message} id={messages[1].id}/>
                <Message message={messages[2].message} id={messages[2].id}/>*/}
            </div>

        </div>








    )

}

export default Dialogs;

/*https://reactjs.org/docs/lists-and-keys.html#keys ключ к каждому пунту списка*/
