import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
           <div className={`${styleContainer.container} ${style.contactsContainer}`}>
               <h2 className={style.title}>Contacts</h2>
               <form action="#" className={style.form}>
                   <input type="text"/>
                   <input type="text"/>
                   <textarea></textarea>
               </form>
               <button>Send</button>
           </div>
        </div>
    );
};
