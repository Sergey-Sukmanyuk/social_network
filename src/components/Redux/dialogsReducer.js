const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: '5',
                message: state.newMessageText
            }
            state.messages.unshift(message)
            state.newMessageText = ''
           return state
        case UPDATE_MESSAGE:
            state.newMessageText = action.updateText
            return state
        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE})
export const updateMessageAC = (textMessage) => ({type: UPDATE_MESSAGE, updateText: textMessage})


export default dialogsReducer;