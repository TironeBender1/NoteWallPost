import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const New = (props) => {
  
  const navigate = useNavigate()
  
  const {id} = useParams()
  
  const [Note, setNote] = useState('');

  const [Body, setBody] = useState('');

  const [someNote, setSomeNote] = useState({})

//   const [Status, setStatus] = useState('');
  
  const [errors, setErrors] = useState([]);
  
//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/addNote/${id}`)
//         .then((res) => {
//             console.log(res.data);
//             setSomeNote(res.data)
//             setNote(res.data.Note)
//             setBody(res.data.Body)
//             // setStatus(res.data.Status)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }, [])
  
const submitHandler = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8000/api/Notes`, {
        note: Note, 
        body: Body
    })
    .then((res) => {
        console.log("LOOK HERE--->",res);
       navigate(`/new/${res.data._id}`)
    })
    .catch((err) => {
        console.log("finding me", )
        console.log("found me", err);

        setErrors(err.response.data.errors)
    })
  }
  
  return (
    <div className="border border-4">
       <header>
        Write Notes
       </header>
       <p>Write a New Note</p>
        
        <form onSubmit={submitHandler} >
            
            <div className = 'form-fields'>
            
              <Link to={'/'}>Go Back Home</Link>
              
              {errors.Note && errors.Note.message}
              <label className="form--label">Note:</label>
              <input value={Note} type="text" onChange={(e) => setNote(e.target.value)} />
              
              {errors.Body && errors.Body.message}
              <label className="form--label">Note Body:</label>
              <input value={Body} type="text" onChange={(e) => setBody(e.target.value)} />
             
              <button onClick={submitHandler}>Write This Note!</button>
            </div>
        </form>

    
    </div>
  )
}

export default New;