import { createStore } from 'redux'

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

export const store = createStore(reducer)

export function increment() {
    return {
        type: 'INCREMENT'
    }
}
export function decrement() {
    return {
        type: 'DECREMENT'
    }
}