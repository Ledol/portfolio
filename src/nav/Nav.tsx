import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.text} href='#'>Main</a>
            <a className={style.text} href='#'>Skills</a>
            <a className={style.text} href='#'>Projects</a>
            <a className={style.text} href='#'>Contact</a>
        </div>
    );
};
