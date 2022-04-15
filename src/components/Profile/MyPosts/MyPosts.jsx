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



    /*нативный пример js. НО в реакте нельзя воздействовать на DOM  напрямую - document.getElementById
    , это делает реакт мы работаем с Virtual DOM*/
  /*  let addPost = () => {
        let text = document.getElementById('new-post').value;
        alert(text);
    }*/
   /* <textarea id='new-post'></textarea>*/
/*    <button onClick={addPost}>Add post</button>*/

 /*     let newPostElement = React.createRef();
        let addPost = () => {
       /!* debugger;*!/
        let text = newPostElement.current.value;
        { alert(text);
        }
    };*/
        let newPostElement = React.createRef();
        let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ''; // зануляем. делаем пустое техтэриа после ввода текста 
    };



    return (<div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button >Remove</button>
                  {/*  <button onClick={() =>{alert('')}}>Add post</button>
                    <button onClick={() =>{alert('')}}>Remove</button>*/}



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