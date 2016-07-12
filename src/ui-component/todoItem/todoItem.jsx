import React from 'react';

export default class TodoItem extends React.Component {
    static propTypes = {
        text: React.propTypes.string,
        deleteClick: React.propTypes.func
    }

    constructor(props) {
        super(props);
        this.deleteClick = this.deleteClick.bind(this);
    }

    deleteClick() {
        this.props.deleteClick(this.props.id);
    }

    render() {
        return (
            <div>
                <h4>{this.props.children}</h4>
                <span onClick={this.deleteClick}>X</span>
            </div>
        );
    }
}
