import React, { useState } from 'react'

import './App.css'
import { data } from './Data/SearchData'
import SearchList from './SearchList'

 const SearchLocal = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState(data)
  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = (event) => {
    setText(event.target.value)

    let item = items.filter((data) => {
      return data.title.toLowerCase().includes(text.toLowerCase())
    })
    setFilteredData(item)


    // console.log('🚀 ~ App.js ~ Data', item);
  }
  const clickHandler = (ClickValue) => {
    console.log('🚀 ~ click value ~', ClickValue);
    setText(ClickValue)
  }
  return (
    <div className='parent'>
      <div className="input-container">
        <input onChange={handleSearch} value={text} type="text" placeholder='Search' />
        {text.length > 0 && <span onClick={() => setText('')} class="material-symbols-outlined close-icon">
          close
        </span>}
      </div>
      <div className="list-parent">
        {filteredData?.map((data) => (
          <SearchList text={text} ClassName="list-sub-parent" clickHandler={clickHandler} data={data} />
        ))}
      </div>

    </div>
  )
}

export default SearchLocal

