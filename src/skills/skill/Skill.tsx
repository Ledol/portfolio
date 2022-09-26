import React, {FC} from 'react';
import style from './Skill.module.css'
import {SkillType} from "../Skills";

type SkillPropsType = {
    skill: SkillType
}


export const Skill: FC<SkillPropsType> = ({skill}) => {



    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3 className={style.title}>{skill.title}</h3>
            <span className={style.description}>{skill.description}</span>
        </div>
    );
};
