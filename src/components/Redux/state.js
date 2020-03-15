let rerenderEntireTree = () => {
    console.log('State was changed')
}

let state = {
    profilePage: {
        posts: [
            {id: '1', post: 'Hello I\'m glad to see you here!!', likesCount: '10'},
            {id: '2', post: 'Hey everyone it\'s my first post!!!', likesCount: '7'}
        ],
        newPostText: ''
    },

    dialogsPage: {

        users: [
            {id: '1', name: 'Sergey'},
            {id: '2', name: 'Vitalik'},
            {id: '3', name: 'Dima'},
            {id: '4', name: 'Irina'}
        ],

        messages: [
            {id: '1', message: 'Hello, how are you?'},
            {id: '2', message: 'I\'m fine. What about you?'},
            {id: '3', message: 'I\'m fine too)'}
        ],
        newMessageText: ''
    }
}

export const addPost = () => {
    let post = {
        id: '3',
        post: state.profilePage.newPostText,
        likesCount: '0'
    }
    state.profilePage.posts.unshift(post)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export  const updatePost = (updateText) => {
    state.profilePage.newPostText = updateText
    rerenderEntireTree(state)
}


export const addMessage = () => {
    let message = {
        id: '5',
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.unshift(message)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}

export  const updateMessage = (updateText) => {
    state.dialogsPage.newMessageText = updateText
    rerenderEntireTree(state)
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer
}



export default state;