import React from 'react';

export default class Header extends React.Component {
    static propTypes = {
        addTodoItem: React.propTypes.func
    }
    
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    handleChange(e) {
        this.setState({input: e.target.value})
    };

    enterPress(e) {
        if (e.key === 'enter') {
            this.props.addTodoItem(this.state.get('input'));
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="What's next" onChange={this.handleChange} value={this.state.input} onKeyDown={this.enterPress}/>
                </form>
            </div>
        );
    }
}
