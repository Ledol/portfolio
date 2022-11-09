import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";

export type DescriptionType = {
    title: string
    description: string
}

export const Skills = () => {

    const skills: Array<DescriptionType> = [
        {title: 'CSS', description: 'A stylesheet language used to describe the presentation of a document written in HTML or XML.'},
        {title: 'JS', description: 'A lightweight, interpreted, object-oriented language with first-class functions.'},
        {title: 'REACT', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'},
        {title: 'REDUX', description: 'Help you write JavaScript apps that behave consistently across client, server, and native environments.'},
        {title: 'TYPE-SCRIPT', description: 'A free and open source programming language developed and maintained by Microsoft.'},

    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title="My skills"/>
                <div className={style.skills}>
                    <Skill skill={skills[0]}/>
                    <Skill skill={skills[1]}/>
                    <Skill skill={skills[2]}/>
                    <Skill skill={skills[3]}/>
                    <Skill skill={skills[4]}/>
                </div>
            </div>
        </div>
    );
};
