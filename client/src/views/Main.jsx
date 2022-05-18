import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DisplayTable from '../components/DisplayTable'

const Main = () => {

    const [authors, setAuthors] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
        .then(response => {
            setAuthors(response.data)
        })
        .catch(err => console.log(err))
    }, [refresh])

    const reload = () => {
        setRefresh(!refresh)
    }

    return (
        <div>
            <DisplayTable authors={authors} reloadList={reload}/>
        </div>
    )
}

export default Main