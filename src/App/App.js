import React, { Component } from 'react'
import Section from '../Components/section/Section';
import Form from '../Components/form/Form';
import {v4 as uuidv4} from 'uuid'
import ContactsList from '../Components/contactsList/ContactsList';
import Filter from '../Components/filter/Filter';

export class App extends Component {

    _INITIAL_STATE_={
        contacts: [],
        filter: ''
    }

    state={...this._INITIAL_STATE_}

    addContact=(name,number)=>{

        
        let incorrectName = false

        if(this.state.contacts.some(i=>{
            incorrectName = i.name.toLowerCase()===name.toLowerCase()
            return i.number===number || incorrectName
        })){
            incorrectName ?
            alert("This person is already exist.") :
            alert("This phone is already exist.")
            return true
        }
        
        this.setState(prev=>{
            prev.contacts.push({id:uuidv4(),name,number})
            return prev
        })

        return false
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
                    <ContactsList 
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
