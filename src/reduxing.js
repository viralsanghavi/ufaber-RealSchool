import redux from 'redux'

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

const initialState = {
    numOfCakes: 10
}

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Redux action'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:

            return {
                numOfCakes: state.numOfCakes - 1
            };

        default:
            return state;
    }
}

const store = createStore(reducer)

console.log("inital", store.getState());
const unsubscribe = store.subscribe(() => console.log("updated", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()