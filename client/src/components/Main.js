import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';



const Main = (props) => {
    
    const [list, setList] = useState([])
    
    const navigate = useNavigate();

    const {id} = useParams()

    const [note, setNote] = useState('');

    const [body, setBody] = useState('');

    
  
    // const deleteStore = (item) => {
    //     console.log("HERE!!")
    //     axios.delete('http://localhost:8000/api/deleteStore/' + item)
    //         .then(res => {
    //             removeFromDom(item)
    //         })
    //         .catch(err => console.log(err))
    // }
    
    // const removeFromDom = (id) => {
    //     setList(list.filter(item => item._id !== id)); //We could also write this in our PersonList component
    // }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/getAll')
            .then((res) => {
                console.log(res.data);
                setList(res.data)
                // setNote(res.data)
                // setBody(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
    
        axios.put(`http://localhost:8000/api/addNote/${id}`, {
            note, 
            body
        }) 
        .then((res) => {
            console.log("LOOK HERE--->",res);
            navigate('/new/')
        })
        .catch((err) => {
            console.log("finding me", )
            console.log("found me", err);
    
            // setErrors(err.response.data.errors)
        })
      }
    
    return (
        <div className='p-4'>
        
        <form onSubmit={submitHandler} >
            
            <h2 className='mb-5'>Note Wall</h2>
            <p>Leave A Note</p>
            <div className='d-flex flex-wrap justify-content-around'>
            
            <button onClick={submitHandler}>Write Note</button>
            
    
   
            </div>
            
            </form>
            {
                list.map((item) => (
                    
                    <div className='p-3 m-3 w-25 item' key={item._id}>
                        {/* {console.log("item-->",item)} */}
                        
                        <h3 className="text-primary">{item.note}</h3>
                        <div>{item.body}</div>

                        
                        
                    
                        <Link to={`/edititem/${item._id}`} className="btn btn-primary">Edit</Link>
                    
                    </div>

                ))
                   
            }
        </div>
    )
}

export default Main;