import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'



const Edit = (props) => {
    const [item, setItem] = useState([])
    
    
    const navigate = useNavigate()
  
    const {id} = useParams()
   
    useEffect(() => {
        axios.get(`http://localhost:8000/api/selectOneNote/${id}`)
            .then((res) => {
                console.log("HEY YOU THERE!!", res.data);
                setItem(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const deleteHandler = (e) => {
        e.preventDefault();
    
        axios.delete(`http://localhost:8000/api/deleteNote/${id}`)
        .then((res) => {
            // console.log(res);
            navigate('/')
        })
        .catch((err) => {
            console.log("finding me", )
            console.log("found me", err);
   
        })
      }
      const deleteNote = (item) => {
        console.log("HERE!!")
        axios.delete('http://localhost:8000/api/deleteNote/' + item)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }
      
      const removeFromDom = (noteWall) => {
        setItem(item.filter(noteWall => noteWall._id !== id)); //We could also write this in our PersonList component
    }
    //   console.log("HEY YOU***", item)
    
    
    return (
        <div className='p-4'>
            <h2 className='mb-5'>Note</h2>
            <div className='d-flex flex-wrap justify-content-around'>
            <Link to={'/'}>Go Back Home</Link>
                    
                    <div className='p-3 m-3 w-25 item' key={item._id}>
                        
                        <label>Note Title</label>
                        <input type="text" value={item.note}></input>
                        
                        <label>Note Body</label>
                        <input type="text" value={item.body}></input>
                    
                    </div>
                    <Link to={`/`} className='me-3 btn border'>Edit Note</Link>
                    <button onClick={(e)=>{deleteNote(item._id)}}>Delete</button>
                    {/* <Link to={`/`} className='me-3 btn border'>Delete Note</Link> */}
            </div>
        </div>
    )
}

export default Edit;