import React from 'react'

const user = {
    name:'clar',
    age:20,
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:90
};
const profile = () => {
    return (
        <>
        <p>{user.name}</p>
        <h1>{user.age}</h1>
        <image src={user.imageUrl} 
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize}}/>
        </>
    )
}

export default profile