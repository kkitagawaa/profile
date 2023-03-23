import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
// import './home.css'

export const HomePage = () => {
    const profile = {
        name: "ぺんぎん",
        age: 15,
        introduction: "ぺんぎんです。よろしくおねがいします。",
    }

    return (
        <div className='home-container'>
            <Header />
            <Profile  name={profile.name} age={profile.age} introduction={profile.introduction} />
        </div>
    )
}