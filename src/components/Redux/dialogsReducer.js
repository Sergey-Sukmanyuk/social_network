const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialSate = {
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

const dialogsReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: '5',
                message: state.newMessageText
            }
        return {
            ...state,
            messages: [message, ...state.messages],
            newMessageText: ''
        }

        case UPDATE_MESSAGE:
        return{
            ...state,
            newMessageText: action.updateText
        }

        default:
            return state

    }
}

export const addMessage = () => ({type: ADD_MESSAGE})
export const updateMessage = (textMessage) => ({type: UPDATE_MESSAGE, updateText: textMessage})


export default dialogsReducer;