import React from 'react';
import "./Diary.css"

type DiaryProps = {
    title: string;
    content: string;
    date: Date;
}

export const Diary: React.FC<DiaryProps> = ({title, content, date }) => {
    return (
        <div className='diary'>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{date.toDateString()}</p>
        </div>
    )
}