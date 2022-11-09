import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
           <div className={`${styleContainer.container} ${style.contactsContainer}`}>
               {/*<h2 className={style.title}>Contacts</h2>*/}
               <Title title="Contacts"/>
               <form className={style.contactForm}>
                   <input type="text"/>
                   <input type="text"/>
                   <textarea></textarea>
                   <div>
                       <button type="submit" className={style.submitBtn}>Send</button>
                   </div>
               </form>

           </div>
        </div>
    );
};
