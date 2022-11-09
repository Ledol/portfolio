import React from 'react';
import style from "./Projects.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/Project";
import {DescriptionType} from "../skills/Skills";
import {Title} from "../common/components/Title/Title";
import todoImage from "./../assets/image/Todolist.jpg"
import socialImage from "./../assets/image/socialNetwork.jpeg"



export const Projects = () => {

    const projects: Array<DescriptionType> = [
        {title: 'To Do List', description: 'Complex project that using React-hooks, Redux, Axios and Rest API'},
        {title: 'Social Network', description: 'A web based application developed in React & Redux. A social networking site is an online platform that .'},
    ]

    const social = {backgroundImage: `url(${socialImage})`}
    const todolist = {backgroundImage: `url(${todoImage})`}

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <Title title="My projects"/>
                <div className={style.projects}>
                    <Project style={todolist} project={projects[0]}/>
                    <Project style={social} project={projects[1]}/>
                </div>
            </div>

        </div>
    );
};
