import React, {FC} from 'react';
import style from './Project.module.css'

type ProjectsPropsType = {
    project: {title: string, description: string}
}

export const Project: FC<ProjectsPropsType> = ({project}) => {



    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button className={style.button}>View</button>
            </div>
                <span className={style.title}>{project.title}</span>
                <span className={style.description}>{project.description}</span>
        </div>
    );
};
