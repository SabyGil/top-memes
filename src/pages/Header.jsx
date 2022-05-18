import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className=''>
      <ul>
        <li>
          <Link to={'/'}>HOME</Link>
        </li>
        <li>
          <Link to={'/all-memes'}>ALL MEMES</Link>
        </li>
      </ul>
    </header>
  )
}
