import { createStore, replaceReducer } from 'redux';

const store = createStore(addReducer);

const initialState = {
  tasks: []
}

function addReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
};

store.dispatch(addTask('Storeを学ぶ'));

console.log(store.getState());
// {
//   tasks: ['Storeを学ぶ']
// }

function resetReducer(state = initialState, action) {
  switch(action.type) {
    case 'RESET_TASK':
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
};

store.replaceReducer(resetReducer);

console.log(store.getState());
// {
//   tasks: ['Storeを学ぶ']
// }

const resetTasks = () => ({
  type: RESET_TASK
});

store.dispatch(resetTasks());

console.log(store.getState());
// {
//   tasks: []
// }
