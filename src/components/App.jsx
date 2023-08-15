
import React, { useEffect, useState } from 'react';

import { NewName } from './newName/newName';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';

import css from './styles.module.css'


export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem ('contacts')) ?? []);
  // const [filter, setFilter] = useState('');
  const [filtered, setFiltered] = useState(contacts); 


  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    setFiltered(contacts) }
    , [contacts]);

  const formSubmitHandler = (data) => {
    let exists = contacts.find(contact => contact.name.toLocaleLowerCase() === data.name.toLocaleLowerCase());

    if (!exists) {
      console.log(data);
      setContacts(prev => [...prev, data]);
      console.log('contacts', contacts)
    } else { 
      alert('This contact is already exists 🤓🤓');
    }
  };

  const searchByName = (filter) => {
    setFiltered(contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())))
      }

  const deleteContact = (idToDelete) => {
        console.log(idToDelete); 
        // setFiltered(contacts.filter(contact => contact.id !== idToDelete));
      }
   

  return (
      <>
         <div className={css.page}>
          <NewName onSubmit={formSubmitHandler}
            // contacts ={ contacts }
           />

          {contacts.length !== 0 && (
            <div className={css.filterUp}>
              <ContactList
                deleteContact={deleteContact}
                contacts={filtered}
              />
              <Filter
                searchByName={searchByName}
                // filter={filter}
              />
            </div>
          )}
        </div>
      </>

  )}







    // const normilizedFilter = filter.toLowerCase();
  // const filtered = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));

  // useEffect(() => {
  //   setFilter((prev) => prev.toLowerCase())
  //   }
  //   , [filter]);

  // useEffect(() => {
  //   setFiltered(() => contacts.filter(contact => contact.name.toLowerCase().includes(filter)))
  //   }
  //   , [contacts, filter, filtered]);  




  


