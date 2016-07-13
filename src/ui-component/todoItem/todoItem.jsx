import React from 'react';

export default class TodoItem extends React.Component {
    static propTypes = {
        text: React.PropTypes.string,
        deleteClick: React.PropTypes.func,
        id: React.PropTypes.number,
        isFinished: React.PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.deleteClick = this.deleteClick.bind(this);
    }

    deleteClick() {
        this.props.deleteClick(this.props.id);
    }

    render() {
        const textClass = this.props.isFinished
            ? 'todo'
            : 'finished';
        return (
            <div>
                <h4 className={textClass}>{this.props.children}</h4>
                <span onClick={this.deleteClick}>X</span>
            </div>
        );
    }
}
