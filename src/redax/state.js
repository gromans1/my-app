/*let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: '20'},
    {id: 2, message: 'Hi', likesCount: '30'}
]

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Vova'},
    {id: 3, name: 'Slava'}
];

let  messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hi yo'}
];
}*/

import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 20},
            {id: 2, message: 'Hi', likesCount: 30}


        ]
    },

    dialogsPage: {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hi yo'},
        {id: 4, message: 'Hi yo'},
        {id: 5, message: 'Hi yo'},
        {id: 6, message: 'Hi yo'}
    ],
    dialogsData: [
       /* {id: 1, name: 'Dima',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3dnP1UUHCINfAEEv0m_LEqnZ9HEWcEFDQ&usqp=CAU'},*/
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vova'},
        {id: 3, name: 'Slava'},
        {id: 4, name: 'Slava'},
        {id: 5, name: 'Slava'},
        {id: 6, name: 'Slava'}
    ]
}
}

export let addPost = (postMessage) => {
   let newPost = {
       id: 3,
       message: postMessage,
       likesCount: 5
   };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree (state); //одноразово передаем стейт
};

export default state;