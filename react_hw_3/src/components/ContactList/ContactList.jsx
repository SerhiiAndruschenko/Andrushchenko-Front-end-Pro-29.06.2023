import { useState, useEffect } from "react";
import './ContactList.css';
import Form from "../Form/Form";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setContacts(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleDelete = (contactId) => {
    const updatedContacts = [...contacts];
    const indexToDelete = updatedContacts.findIndex(contact => contact.id === contactId);
    if (indexToDelete !== -1) {
      updatedContacts.splice(indexToDelete, 1);
      setContacts(updatedContacts);
    }
  }

  const handleSaveContact = (newContact) => {
    const updatedContacts = [...contacts];
    updatedContacts.push(newContact);
    setContacts(updatedContacts);
  }

  return(
    <>
    <table>
      <thead>
        <th>Name</th>
        <th>Username</th>
        <th>Phone</th>
        <th>Action</th>
      </thead>
      <tbody>
      {contacts.map((contact) => (
        <tr key='{contact.id}'>
          <td>{contact.name}</td>
          <td>{contact.username}</td>
          <td>{contact.phone}</td>
          <td><button onClick={() => handleDelete(contact.id)}>Delete</button></td>
        </tr>
      ))}
      </tbody>
    </table>

    <Form onSaveContact={handleSaveContact} />
    
    </>
  )

}

export default ContactList;