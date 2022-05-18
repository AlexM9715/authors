import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'

const DisplayTable = (props) => {

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(response => props.reloadList())
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/new">Add an Author</Link>
            <h3>We have quotes by:</h3>
            <table className="table table-dark table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.authors.map((author,i) => (
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`}>Edit</Link>
                                    <button onClick={() => handleDelete(author._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTable