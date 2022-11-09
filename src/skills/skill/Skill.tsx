import React, {FC} from 'react';
import style from './Skill.module.css'
import {DescriptionType} from "../Skills";

type SkillPropsType = {
    skill: DescriptionType
}


export const Skill: FC<SkillPropsType> = ({skill}) => {



    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h2 className={style.title}>{skill.title}</h2>
            <span className={style.description}>{skill.description}</span>
        </div>
    );
};
