import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const UpdateAuthor = () => {

    const [name, setName] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    useEffect (() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
            const author = response.data
            setName(author.name)
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
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {name})
            .then(response => navigate("/"))
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
            <h3>Edit This Author</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <Link to="/">Cancel</Link>
                <button type="submit">Update Author</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{color: "red"}}> {err} </p>
                ))
            }
        </div>
    )
}

export default UpdateAuthor