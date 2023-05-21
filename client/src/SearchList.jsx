import React, { Fragment } from 'react'

const SearchList = ({ data, clickHandler, ClassName ,key}) => {

  const ClickFunc = (event) => {
    clickHandler(event.target.innerText)
  }
  return (
    <Fragment>
      <div  key={key} className={ClassName}>
        <img src={`https://image.tmdb.org/t/p/w92/${data.poster_path}`} alt="not " />
        <div className="content">
          <h5 className='' onClick={ClickFunc} >{data.title}</h5>
          {/* <p>&#x20B9;{data.price}</p> */}
        </div>

      </div>
    </Fragment>
  )
}

export default SearchList