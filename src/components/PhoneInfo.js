import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';

const styles = theme => ({
    card: {
        margin: 10,
        padding: 10,
        width: '30%',
        backgroundColor: indigo[500],
        color: 'white',
    }
});


class PhoneInfo extends Component {

    static defaultProps = {
        info: {
          name: '이름',
          phone: '010-0000-0000',
          id: 0
        },
     }

    state = {
        editing : false,
        name : '',
        phone : '',   
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    
    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        // true -> false
            // onUpdate
        // false -> true
            // state에 info 값 넣어주기
        const {info, onUpdate} = this.props;
        if (this.state.editing){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone,
            });
        }
        this.setState({
            editing: !this.state.editing,
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    
    render() {
        const {classes} = this.props;
        const {name, phone} = this.props.info;
        const {editing} = this.state;
       
        //console.log(name);
        
        return (
            <Card className={classes.card}>
                {
                    editing ? (
                        <Fragment>
                            <div >
                                <input 
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div>
                                <input 
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>

                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정'}
                </button>
            </Card>
        );
    }
}

export default withStyles(styles)(PhoneInfo);