import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import Axios from 'axios'
import { Link, Route, useLocation, useHistory } from 'react-router-dom'

export default function Favourites(props) {

    const [favourites, setFavourites] = useState([])

    let location = useLocation().pathname
    const [path, setPath] = useState(location)

    const history = useHistory()

    useEffect(() => {
        (async () => {
            if (location === '/favourites') {
                const newFavourites = await Axios.get('http://localhost:3555/images')
                setFavourites(newFavourites.data)
                setPath(location)
            } else {
                const expandedFavourite = await Axios.get(`http://localhost:3555/images/${props.match.params.id}`)
                setFavourites(expandedFavourite.data[0])
                setPath(location)
            }
        })()
    }, [])



    const deleteFavourite = async (id) => {
        await Axios.put(`http://localhost:3555/image/${id}`)
        let tempFavourites = [...favourites]
        let index = tempFavourites.findIndex(f => f._id === id)
        tempFavourites.splice(index, 1)
        setFavourites(tempFavourites)
    }
    const deleteExpandedFavourite = async (id) => {
        await Axios.put(`http://localhost:3555/image/${id}`,)
        const tempFavourites = await Axios.get('http://localhost:3555/images')
        let index = tempFavourites.data.findIndex(f => f._id === id)
        tempFavourites.data.splice(index, 1)
        setFavourites(tempFavourites)
        history.push('/favourites')
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