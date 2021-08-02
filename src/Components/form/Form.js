import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';

export default class Form extends Component {

    static propTypes={
        addContact: PropTypes.func.isRequired,
    }

    _INITIAL_STATE_={
        name:"",
        number: "",
    }

    state={...this._INITIAL_STATE_}

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value.trim()})
    }

    handleSubmit=(e)=>{
        e.preventDefault()

        let incorrectName = false
        

        if(this.props.addContact(this.state.name,this.state.number)) return
            
        this.setState({...this._INITIAL_STATE_})
    }

    render() {
        return(
            <form>
                <label>
                    <h3>Name</h3>
                    <input value={this.state.name} type="text" name="name" onChange={this.handleChange}/>
                </label>
                <label>
                    <h3>Number</h3>
                    <InputMask mask="+99(999)-99-99" value={this.state.number} type="tel" name="number" onChange={this.handleChange}/>
                </label>
                <button type="submit" onClick={this.handleSubmit}>Add contact</button>
            </form>
        )
    } 
}