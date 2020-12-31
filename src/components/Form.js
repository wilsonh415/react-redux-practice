import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../js/actions/action';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

// form for adding new items to our application
class ConnectedForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {title} = this.state;
        this.props.addArticle({
            title
        });
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
                </div> <br/>
                <button type="submit">SAVE</button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;