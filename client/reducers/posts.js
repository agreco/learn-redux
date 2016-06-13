// a reducer takes in two things:
//
//   1. action (info about what happened)
//   2. a copy of the current state

function posts (state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            console.log('Incrementing likes');
            return [
                ...state.slice(0, i), // before one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), // before one we are updating
            ]
        default:
            return state
    }
}

export default posts;
