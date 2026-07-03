import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import ContactItem from './components/ContactItem/ContactItem'

function App() {
  const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    } else {
      return [
        { id: 1, firstName: "Denis", lastName: "Uvarenko", email: "aata195532@gmail.com", phone: "380680742204" },
        { id: 2, firstName: "Oleh", lastName: "Malutin", email: "oleh@gmail.com", phone: "380975271445" }
      ];
    }
  });

  const [selectedContact, setSelectedContact] = useState(null);
  const [formFirstName, setFormFirstName] = useState('');
  const [formLastName, setFormLastName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const clearForm = () => {
    setFormFirstName('');
    setFormLastName('');
    setFormEmail('');
    setFormPhone('');
  };

  const SelectContact = (contact) => {
    setSelectedContact(contact);
    setFormFirstName(contact.firstName);
    setFormLastName(contact.lastName);
    setFormEmail(contact.email);
    setFormPhone(contact.phone);
  };

  const SaveContact = () => {
    if (!formFirstName || !formLastName || !formEmail || !formPhone) return;

    if (selectedContact) {
      const updatedContacts = contacts.map(contact => {
        let result;
        if (contact.id === selectedContact.id) {
          result = {
            id: contact.id,
            firstName: formFirstName,
            lastName: formLastName,
            email: formEmail,
            phone: formPhone
          };
        } else {
          result = contact;
        }
        return result;
      });

      setContacts(updatedContacts);
    } else {
      const newContact = {
        id: Date.now(),
        firstName: formFirstName,
        lastName: formLastName,
        email: formEmail,
        phone: formPhone
      };

      setContacts(contacts.concat(newContact));
      setSelectedContact(null);
      clearForm();
    }

    
  };

  const DeleteContact = (id) => {
  const updateContact = contacts.filter(c => c.id !== id);
  setContacts(updateContact);

  if (selectedContact && selectedContact.id === id) {
    setSelectedContact(null);
    clearForm();
  }
};

  return (
    <div className="App">
      <div className="contact-list-container">
        <div className="box-title">Contact list</div>
        <div className="contact-box">
          <ContactList contacts={contacts} onSelectContact={SelectContact} onDeleteContact={DeleteContact} />
          <ContactForm
            firstName={formFirstName}
            setFirstName={setFormFirstName}
            lastName={formLastName}
            setLastName={setFormLastName}
            email={formEmail}
            setEmail={setFormEmail}
            phone={formPhone}
            setPhone={setFormPhone}
          />
        </div>
        <div className="button-panel">
        <button className="action-btn" onClick={() => { setSelectedContact(null); clearForm(); }} >New</button>
        <button className="action-btn" onClick={SaveContact}>Save</button>
        {selectedContact && (
        <button className="action-btn" onClick={() => DeleteContact(selectedContact.id)}>Delete</button>
        )}
      </div>
      </div>

      
    </div>
  )
}

export default App
