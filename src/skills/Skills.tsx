import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export type SkillType = {
    title: string
    description: string
}

export const Skills = () => {

    const skills: Array<SkillType> = [
        {title: 'CSS', description: 'A stylesheet language used to describe the presentation of a document written in HTML or XML.'},
        {title: 'JS', description: 'A lightweight, interpreted, object-oriented language with first-class functions.'},
        {title: 'REACT', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'},
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill skill={skills[0]}/>
                    <Skill skill={skills[1]}/>
                    <Skill skill={skills[2]}/>

                </div>
            </div>
        </div>
    );
};
