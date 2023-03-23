import React from 'react'
import { Diary } from '../components/Diary'
import Header from '../components/Header'
// import './home.scss'

export const DiaryPage = () => {
    const diary = {
        title: '今日の出来事',
        content: 'TypeScriptの勉強をしました。',
        date: new Date('2023-03-23'),
    }
    return (
        <div>
            <Header />
            <Diary title={diary.title} content={diary.content} date={diary.date} />
        </div>
    )
}