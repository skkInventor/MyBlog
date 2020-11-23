import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Book.css'

function Book({ url, title }) {
    const [book,setBook] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(url)
            setBook(request.data.documents[0].thumbnail)
            return request
        }
        fetchData()
    }, [url])

    return(
        <div className = 'book'>
            <img src = {book} />
            <div className = 'book-content'>{title}</div>
        </div>
    )
}

export default Book