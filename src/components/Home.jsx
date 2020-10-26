import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Home(props) {

    const apiKey = 'D7DoSPccbeW3RjxkKsflfoWGR8cvCMN6lgod852x'
    const [data, setData] = useState({})




    useEffect(() => {
        (async () => {
            const response = await Axios.get(`https://api.nasa.gov/planetary/apod/?api_key=${apiKey}`)
            setData(response.data)
        })()

    }, [])
    const addToFavourites = async (image) => {
        await Axios.post('http://localhost:3555/image', image)
    }

    return (
        <div>
            <MediaCard data={data} match={props.match} addToFavourites={addToFavourites} />
        </div>
    )
}