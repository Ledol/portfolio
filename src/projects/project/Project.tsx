import React from 'react';
import style from './Project.module.scss'
import {DescriptionType} from "../../skills/Skills";

type ProjectsPropsType = {
    project: DescriptionType
    style: { backgroundImage: string }
}

export const Project = (props:ProjectsPropsType) => {


    return (
        <div className={style.project}>
            <div className={style.projectImage} style={props.style}>

               <a className={style.button} href='#' >View</a>
            </div>
            <div className={style.projectInfo}>
                    <h2 className={style.title}>{props.project.title}</h2>
                    <span className={style.description}>{props.project.description}</span>
            </div>

        </div>
    );
};
