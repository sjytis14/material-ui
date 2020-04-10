import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles';

const styles = theme => ({
    
    button: {
        margin: 20,
    },
    textfield: {
        margin: 10,
    }
});

class PhoneForm extends Component {

    input = React.createRef();

    state = {
        name : '',
        phone : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
        this.input.current.focus();
    }

    render() {
        const {classes} = this.props;
        console.log(this.state.name, this.state.phone);
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <TextField className={classes.textfield} label="이름" name="name" variant="outlined"/>
                <TextField className={classes.textfield} label="전화번호" name="phone" variant="outlined"/>
                <Button className={classes.button} variant="contained" color="primary" type="submit">등록</Button>
            </form>
        );
    }
}

export default withStyles(styles)(PhoneForm);