import React,{useEffect, useState} from 'react'
import './DiaryForm.css'

const DiaryEntryForm = ({diary, setDiary , id , deleteDiary}) => {

        const [AboutDay, setTextarea] = useState('')
        
        function addDiary(e){
            e.preventDefault();
            const obj = {
                id : Math.random(),
                AboutDay 
            }
            setDiary([...diary , obj])
            setTextarea('')
        }
        
        useEffect(() => {
            if(id){
                const updatedData = diary.filter((d) => d.id === id)
                setTextarea(updatedData[0].AboutDay)
                deleteDiary(id)
            }
        },[id])


  return (
    <div>
        <div className="container">
                <form>
                    <textarea rows="6" cols="34" placeholder='How was your day!' value={AboutDay} onChange={(e) => setTextarea(e.target.value)}></textarea> 
                </form>
                <button onClick={addDiary} className='js-addbutton'>Add</button>
        </div>
        

        
    </div>
  )
}

export default DiaryEntryForm
