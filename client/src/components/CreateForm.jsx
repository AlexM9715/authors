import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const CreateForm = (props) => {

    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, {name})
        .then(response => {
            navigate("/")
            props.reloadList()
        })
        .catch (err => {
            const errArr = []
            const errResData = err.response.data.errors
            console.log(errResData)
            for(const key in errResData){
                errArr.push(errResData[key]["message"])
            }
            setErrors(errArr)
        })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h3>Add New Author</h3>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label>Name:</label> <br />
                    <input type="text" name="name" value={name}
                        onChange={e=>setName(e.target.value)} />
                </div>
                <Link to="/">Cancel</Link>
                <button type="submit">Submit</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{color: "red"}}> {err} </p>
                ))
            }
        </div>
    )
}

export default CreateForm