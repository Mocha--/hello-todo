import React from 'react';

export default class Header extends React.Component {
    static propTypes = {
        addTodoItem: React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.enterPress = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({'input': e.target.value});
    }

    enterPress(e) {
        if (e.key === 'ENTER') {
            this.props.addTodoItem(this.state.input);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <input placeholder="What's next" onChange={this.handleChange} value={this.state.input} onKeyDown={this.enterPress}/>
                </form>
            </div>
        );
    }
}
