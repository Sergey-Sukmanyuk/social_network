import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


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

    _callsubscriber () {
        console.log('State was changed')
    },

    getState(){
        return this._state
    },
    subscribe (observer){
        this._callsubscriber = observer
    },


    dispatch(action) {
        this._state.profilePage  = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage  = dialogsReducer(this._state.dialogsPage, action)

        this._callsubscriber(this._state);

    }

}




export default store;