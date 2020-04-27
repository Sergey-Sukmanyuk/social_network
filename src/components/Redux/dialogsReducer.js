const ADD_MESSAGE = 'ADD-MESSAGE'


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
        ]


}

const dialogsReducer = (state = initialSate, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: '5',
                message: action.newMessageText
            }
        return {
            ...state,
            messages: [message, ...state.messages],

        }

        default:
            return state

    }
}

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})



export default dialogsReducer;