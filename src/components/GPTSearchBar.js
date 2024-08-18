import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

  const currentLang = useSelector(store => store.config?.lang);

  return (
    <div className='bg-gray-200'>
        <form className=' pt-24'>
            <input type='text' className='p-3 m-6 border w-8/12' placeholder={lang[currentLang].gptSearchPlaceholder}></input>
            <button className='p-3 hover:cursor-pointer'>{lang[currentLang].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar