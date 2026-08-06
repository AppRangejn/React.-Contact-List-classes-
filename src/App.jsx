import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <div className="App">
      <div className="contact-list-container">
        <div className="box-title">Contact list</div>
        <div className="contact-box">
          <ContactList/>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default App