let state = {
    profilePage: {
        posts: [
            {id: '1', post: 'Hello I\'m glad to see you here!!', likesCount: '10'},
            {id: '2', post: 'Hey everyone it\'s my first post!!!', likesCount: '7'}
        ]
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
        ]
    }
}

export let addPost = (textPost) => {
    let post = {
        id: '5',
        post: textPost,
        likesCount: '0'
    }
    state.profilePage.posts.push(post)
}

export let addMessage = (textMessage) => {
    let message = {
        id: '5',
        message: textMessage
    }
    state.dialogsPage.messages.push(message)
}

export default state;