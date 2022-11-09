import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Title} from "../common/components/Title/Title";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
           <div className={`${styleContainer.container} ${style.footerContainer}`}>
               {/*<h2 className={style.title}>Dmitry Leonenko</h2>*/}
               <Title title="Dmitry Leonenko"/>
               <div className={style.networks}>
                       <a className={style.button} href='#'>Email</a>
                       <a className={style.button} href='#'>LinkedIn</a>
                       <a className={style.button} href='#'>Instagram</a>
                       <a className={style.button} href='#'>FaceBook</a>
           </div>
               <div>©2022</div>
        </div>
        </div>
    );
};
