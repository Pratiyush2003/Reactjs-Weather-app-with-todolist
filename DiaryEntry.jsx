import React, { useState } from 'react'
import DiaryEntryRender from './DiaryEntryRender'
import DiaryEntryForm from './DiaryEntryForm'

const DiaryEntry = () => {
  const [diary , setDiary] = useState([
    {
      id: Math.random(),
      AboutDay : 'this is just random text'
    }
  ])

  function deleteDiary(id){
    setDiary(diary.filter((d)=> d.id !== id))
  }

  const [id , setId] = useState('');
  
  return (
    <div>
      <DiaryEntryForm setDiary = {setDiary} diary = {diary} id = {id}  deleteDiary = {deleteDiary}/>
      <DiaryEntryRender diary = {diary} deleteDiary = {deleteDiary} setId = {setId}/>
    </div>
  )
}

export default DiaryEntry
