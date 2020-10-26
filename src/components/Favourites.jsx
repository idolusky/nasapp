import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import Axios from 'axios'
import { Link, Route, useLocation } from 'react-router-dom'

export default function Favourites(props) {

    const [favourites, setFavourites] = useState([])
    let location = useLocation().pathname
    const [path, setPath] = useState(location)

    useEffect(() => {
        (async () => {
            if (location === '/favourites') {
                const newFavourites = await Axios.get('http://localhost:3555/images')
                setFavourites(newFavourites.data)
                setPath(location)
                console.log(props);
            } else {
                const expandedFavourite = await Axios.get(`http://localhost:3555/images/${props.match.params.id}`)
                console.log(expandedFavourite)
                setFavourites(expandedFavourite.data[0])
                setPath(location)
            }
        })()
    }, [])



    const deleteFavourite = async (id) => {
        console.log(id)
        await Axios.put(`http://localhost:3555/image/${id}`)
        let tempFavourites = [...favourites]
        let index = tempFavourites.findIndex(f => f._id === id)
        tempFavourites.splice(index, 1)
        setFavourites(tempFavourites)
    }
    const deleteExpandedFavourite = async (id) => {
        await Axios.put(`http://localhost:3555/image/${id}`,)
        const tempFavourites = await Axios.get('http://localhost:3555/images')
        console.log(tempFavourites.data);
        let index = tempFavourites.data.findIndex(f => f._id === id)
        tempFavourites.data.splice(index, 1)
        setFavourites(tempFavourites)
    }


    return (
        <div>
            {location === '/favourites' ?
                favourites.map((f, i) => <MediaCard deleteFavourite={deleteFavourite} favourites={favourites} match={props.match} favourite={f} fIndex={i} />)
                :
                <MediaCard deleteExpandedFavourite={deleteExpandedFavourite} favourites={favourites} match={props.match} />
            }
        </div>
    )
}