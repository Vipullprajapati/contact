import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
// import uuid4, { valid } from "uuid4";

function App() {
  // at time of starting
  // const [contact , setContact]=useState([]);

  // local storage
  const localStorageKey = "contact";

  // at time of showing last saved data or local storage data
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const addContact = (data) => {
    // console.log(data,"From App.js");
    setContact([...contact, { id: uuid4(), data }]); // contact ki copy raho or next data ko add karo
  };

  const removeContact = (id) => {
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updatedList);
  };

  return (
    <>
      <Header />
      <div className="home-page">
        <AddContact addContact={addContact} />
        <ContactList contact={contact} removeContact={removeContact} />
      </div>
    </>
  );
}

export default App;