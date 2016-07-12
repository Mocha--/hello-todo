import React from 'react';
import TodoItem from '../todoItem/todoItem.jsx';

export default class TodoList extends React.Component {
    static propTypes = {
        list: React.PropTypes.array,
        deleteItem: React.PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                {this.props.list.map((ele) => {
                    return (
                        <TodoItem deleteClick={this.props.deleteItem}>{ele.text}</TodoItem>
                    )
                })}
            </section>
        );
    }
}
