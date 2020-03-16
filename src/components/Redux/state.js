let store = {
    _state: {
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
    },

    getState(){
        return this._state
    },

    _callsubscriber () {
        console.log('State was changed')
    },

    addPost() {
        let post = {
            id: '3',
            post: this._state.profilePage.newPostText,
            likesCount: '0'
        }
        this._state.profilePage.posts.unshift(post)
        this._state.profilePage.newPostText = ''
        this._callsubscriber(this._state)
    },

    updatePost (updateText) {
        this._state.profilePage.newPostText = updateText
        this._callsubscriber(this._state)
    },

    addMessage () {
        let message = {
            id: '5',
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.unshift(message)
        this._state.dialogsPage.newMessageText = ''
        this._callsubscriber(this._state)
    },

    updateMessage (updateText) {
        this._state.dialogsPage.newMessageText = updateText
        this._callsubscriber(this._state)
    },

    subscriber (observer){
        this._callsubscriber = observer
    }
}





export default store;