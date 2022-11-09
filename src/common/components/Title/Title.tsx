import React, {FC} from 'react';
import style from "./Title.module.scss"

type TitlePropsType = {
    title: string
}


export const Title: FC<TitlePropsType> = ({title}) => {
    return (
        <div className={style.title}>
            <h3>{title}</h3>
        </div>
    );
};
