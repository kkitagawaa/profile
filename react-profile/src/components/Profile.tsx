import * as React from 'react';

type ProfileProps = {
  name: string;
  age: number;
  introduction: string;
}

const Profile: React.FC<ProfileProps> = ({ name, age, introduction }) => {
  return (
    <div className='profile-container'>
      <h1>{name}のプロフィール</h1>
      <p>名前: {name}</p>
      <p>年齢: {age}歳</p>
      <p>自己紹介: {introduction}</p>
    </div>
  );
};

export default Profile;
