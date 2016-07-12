import React from 'react';

import Header from '../ui-component/header/header.jsx';
import TodoList from '../ui-component/todoList/TodoList.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Header></Header>
                <todoList></todoList>
            </main>
        );
    }
}
