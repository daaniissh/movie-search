import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchList from './SearchList'
import './SearchAPI.css'
const SearchAPI = () => {
  const [data, setData] = useState([])
  const [text, setText] = useState('')
  const [change, setChange] = useState('')
  const [items, setItems] = useState(data)
  const [filteredData, setFilteredData] = useState(data)
  const API = "http://localhost:3001/api/movies"
  const fetchData = async () => {
    const response = await axios.get(API, {
      params: { movieName: text }
    })
    const data = await response.data.results
    setFilteredData(data)
    console.log(data);
  }
  const fullData = async () => {
    const response = await axios.get(API)
    const data = await response.data.results
    setFilteredData(data)
    console.log(data);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData()

    }, 300);
    return () => {
      clearTimeout(timeout)
    }
  }, [text])

  const addMovie = async () => {
    const response = await axios.post(API, {
      data: {
        movieName: change
      }
    })
    console.log(change);
    const data = await response.data.results
    setFilteredData(data)
  }
  const deleteMovie =async()=>{
    const response = await axios.delete(API, {
      data: {
        movieName: change
      }
    })
    console.log(change);
    const data = await response.data.results
    setFilteredData(data)
  }
  const handleSearch = (event) => {
    setText(event.target.value)
    if (text === "") {
      fullData()
    }
    // console.log('🚀 ~ App.js ~ Data', item);
  }
  const handleChangesFun = (event) => {
    setChange(event.target.value)
    // console.log('🚀 ~ App.js ~ Data', item);
  }
  const clickHandler = (ClickValue) => {
    setText(ClickValue)
    
  }
  const handleAdd = () => {
    if (change !== "") {
      addMovie()
    }
    // fullData()
    setChange("")

  }
  const handleDelete = () => {
    if (change !== "") {
      deleteMovie()
    }
    // fullData()

  }
  return (
    <div className='parent'>
      <p className='dim'>Enter a movie name and <span>Add</span>  or <span>Delete</span> </p>

      <input onChange={handleChangesFun} value={change} placeholder='Enter movie name' type="text" name="" id="" />
      <button onClick={handleAdd} >Add</button>
      <button onClick={handleDelete} > Delete</button>
      <p className='dim'>Search and active autocomplete comp </p>

      <div className="input-container">
        <input className='' onChange={handleSearch} value={text} type="text" placeholder='Search(API-Comp)' />
        {text.length > 0 && <span onClick={() => setText('')} className="material-symbols-outlined close-icon">
          close
        </span>}

      </div>
      <div className="list-parent">
        {filteredData?.map((data) => (
          <SearchList key={data.id} clickHandler={clickHandler} ClassName="list-sub-parent-two" data={data} />
        ))}
      </div>

    </div>
  )
}

export default SearchAPI