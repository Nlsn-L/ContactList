import React, {useState} from "react";
import { useEffect } from "react";
import ContactList from "./ContactsList";
import SingleContact from "./SingleContact"

const Main = () => {
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState({})

   async function getContacts(){
    let response = await fetch('http://jsonplace-univclone.herokuapp.com/users')
    let jsonData = await response.json()
    setContacts(jsonData)

   }

   useEffect(() => {
    getContacts();
   },[]);
  
   const selectContact = async (contactId) => {
    let response = await fetch(`http://jsonplace-univclone.herokuapp.com/users/${contactId}`)
    let contact = await response.json()
    setSelectedContact(contact);


   }





  return (
    <div id="main">
    <div id="navbar">
      <div>Contact List</div>
    </div>
    <div id="container">
    {
      selectedContact.id ? <SingleContact selectedContact={selectedContact}/> : <ContactList contacts={contacts} selectContact={selectContact}/>}
    </div>
  </div>
  );
};

export default Main;
