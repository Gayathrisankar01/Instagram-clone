import React from 'react'
import "./Sugesstions.css"
import { Avatar } from '@mui/material'

function Sugesstions() {
  return (
    <div className='sugesstions'>
      <div className="sugesstions__title">
        suggestions for you
      </div>
      <div className="suggestions__usernames">

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>reddh</span>
              <span className='relation'> new to instagram</span>
            </div>
          </div>
          <button className="follow__button"> follow </button>
        </div>
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>reddh</span>
              <span className='relation'> new to instagram</span>
            </div>
          </div>
          <button className="follow__button"> follow </button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>reddh</span>
              <span className='relation'> new to instagram</span>
            </div>
          </div>
          <button className="follow__button"> follow </button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className='username'>reddh</span>
              <span className='relation'> new to instagram</span>
            </div>
          </div>
          <button className="follow__button"> follow </button>
        </div>

        
      </div>
    </div>
  )
}

export default Sugesstions
