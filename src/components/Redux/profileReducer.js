const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

let initialState = {
        posts: [
            {id: '1', post: 'Hello I\'m glad to see you here!!', likesCount: '10'},
            {id: '2', post: 'Hey everyone it\'s my first post!!!', likesCount: '7'}
        ],
        newPostText: ''

}
const profileReducer = (state = initialState, action) => {
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