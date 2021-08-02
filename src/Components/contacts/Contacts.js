import React from 'react'
import PropTypes from 'prop-types'
import Contact from './contact/Contact';

function Contacts({contacts, onDelete, filter}) {
    filter=filter.split(" ").join("").toLowerCase()
    contacts=contacts.filter(i=>i.name.toLowerCase().startsWith(filter))
    return (
        <ul>
            {contacts.map(contact=>(
                <Contact key={contact.id} contact={contact} onDelete={onDelete} />
            ))}
        </ul>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    filter:PropTypes.string.isRequired
}

export default Contacts

