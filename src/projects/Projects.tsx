import React from 'react';
import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {

    const projects = [
        {title: 'To-Do List', description: 'A collection of tasks that outlines the work a project manager or team plans to complete during a project.'},
        {title: 'Social Network', description: 'A web based application developed in React & Redux. A social networking site is an online platform that allows people to create a public account and interact with other people on the website using internet.'},
    ]

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project project={projects[0]}/>
                    <Project project={projects[1]}/>
                </div>
            </div>

        </div>
    );
};
