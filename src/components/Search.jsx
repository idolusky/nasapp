import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'
import { Button, TextField, Box } from '@material-ui/core'


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
            const data = await Axios.get(`https://images-api.nasa.gov/search?q=${input}&media_type=image`)
            const newResults = data.data.collection.items
            setResults(newResults)
        })()
    }, [input])

    return (
        <div>
            <div className='search-bar'>
                <input id='input' name='input' type="text" placeholder='Search The Galaxy' />
                <Box paddingTop='10px'>
                    <Button variant="contained" color="secondary" onClick={handleInput}> Search</Button>
                </Box>
            </div>
            <div>
                {results.map((r, i) => <div><MediaCard match={props.match} addToFavourites={addToFavourites} result={r} index={i} />  </div>)}
            </div>
        </div>
    )
}