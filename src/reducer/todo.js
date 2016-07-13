import TodoActionType from '../constant/TodoItemActionType';

export default (state, action) => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return state.push({
                text: action.text,
                id: action.id,
                isFinished: false
            });
        case TodoActionType.DELETE_TODO:
            return state.filter((ele) => {
                if (ele.id === action.id) {
                    return false;
                } else {
                    return true;
                }
            });
        case TodoActionType.TOGGLE_TODO:
            return state
                .find((ele) => {
                    if (ele.id === action.id) {
                        return true;
                    }
                })
                .set('isFinished', true);
        default:
            return state;
    }
};
