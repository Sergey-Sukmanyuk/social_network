const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: '3',
                post: state.newPostText,
                likesCount: '0'
            }
            state.posts.unshift(post)
            state.newPostText = ''
            return state;
        case UPDATE_POST:
            state.newPostText = action.updateText
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updatePostAC = (text) => ({type: UPDATE_POST, updateText: text})

export default profileReducer;