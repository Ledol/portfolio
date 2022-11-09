import React from 'react';
import style from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
import photo from './../img/Photo - 012 (2).jpg'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi, I'm a Frontend Developer</span>
                    <h3> Dmitry Leonenko</h3>
                </div>
                <div className={style.photo}>
                    <img className={style.photo} src={photo} alt="myPhoto"/>
                    </div>
            </div>
        </div>
    );
};

