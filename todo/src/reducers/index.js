
const initialState ={
    id: Date.now(),
    todo: [],
    completed: false,
    ///coming from redux store
}

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        default:
            return state;
    }
};