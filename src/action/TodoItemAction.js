import TodoActionType from '../constant/TodoItemActionType';

let id = 0;
const addTodo = (text) => {
    return {
        type: TodoActionType.ADD_TODO,
        id: id++,
        text: text
    };
};

const deleteTodo = (id) => {
    return {
        type: TodoActionType.DELETE_TODO,
        id: id
    };
};

const toggleTodo = (id) => {
    return {
        type: TodoActionType.TOGGLE_TODO,
        id: id
    };
};

export default {
    addTodo,
    deleteTodo,
    toggleTodo
};
