import React from 'react'
import './DiaryRender.css'

const DiaryEntryRender = ({diary , deleteDiary , setId}) => {

  return (
    <div className = "container">
      {
        diary.map((d) => {
          return(
            <div key={d.id}>
            <div className = "textcontainer">
              {d.AboutDay}
            </div>
            <div className='button-container'>
              <button className='btn btn-danger js-diary-button' onClick={() => deleteDiary(d.id)}>
              <i className="bi bi-trash"></i>
              </button>
              <button className='btn btn-success js-diary-button'>
              <i className="bi bi-pen-fill" onClick={() => setId(d.id)}></i>
              </button>
            </div>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default DiaryEntryRender
