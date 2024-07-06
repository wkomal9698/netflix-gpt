import React from 'react'
import { NETFLIX_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className="w-48 px-2 py-2 bg-gradient-to-b from-black">
        <img alt="Netflix logo" src={NETFLIX_LOGO}></img>
        
    </div>
  )
}

export default Header