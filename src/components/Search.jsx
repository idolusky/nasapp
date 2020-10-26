import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'
import { Button, TextField } from '@material-ui/core'


export default function Search(props) {
    const [input, setInput] = useState('')
    const [results, setResults] = useState([])

    const handleInput = (e) => {
        const newInput = document.getElementById('input').value
        setInput(newInput)
    }

    const addToFavourites = async (image) => {
        await Axios.post('http://localhost:3555/image', image)
    }

    useEffect(() => {
        (async () => {
            console.log(input)
            const data = await Axios.get(`https://images-api.nasa.gov/search?q=${input}&media_type=image`)
            const newResults = data.data.collection.items
            console.log(newResults)
            setResults(newResults)
        })()
    }, [input])

    return (
        <div>
            <div className='search-bar'>
                <input id='input' name='input' type="text" />
                <Button variant="contained" color="secondary" onClick={handleInput}> Search</Button>
            </div>
            <div>
                {results.map((r, i) => <div><MediaCard match={props.match} addToFavourites={addToFavourites} result={r} index={i} />  </div>)}
            </div>
        </div>
    )
}