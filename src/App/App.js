import React, { Component } from 'react'
import Section from '../Components/section/Section';
import Form from '../Components/form/Form';
import {v4 as uuidv4} from 'uuid'
import Contacts from '../Components/contacts/Contacts';
import Filter from '../Components/filter/Filter';

export class App extends Component {

    _INITIAL_STATE_={
        contacts: [],
        filter: ''
    }

    state={...this._INITIAL_STATE_}

    addContact=(name,number)=>{
        if(this.state.contacts.some(i=>i.number===number)){
            alert("This phone is already exist.")
            return 1;
        }
        if(this.state.contacts.some(i=>i.name===name)){
            alert("This person is already exist.")
            return 1;
        }
        this.setState(prev=>{
            prev.contacts.push({id:uuidv4(),name,number})
            return prev
        })
        return 0;
    }

    delContact=(e)=>{
        this.setState(prev=>({contacts: prev.contacts.filter(i=>i.id!==e.target.id)}))
    }

    filter=(e)=>{
        this.setState({filter: e.target.value.trim()})
    }


    render() {           
        return (
            <>
                <h1>Phonebook</h1>
                <Section title="">
                    <Form addContact={this.addContact}/>
                </Section>
                <Section title="Contacts">
                    <Filter value={this.state.filter} onChange={this.filter}/>
                    <Contacts 
                        contacts={this.state.contacts} 
                        onDelete={this.delContact} 
                        filter={this.state.filter}
                    />
                </Section>
            </>
        )
    }
}

export default App
