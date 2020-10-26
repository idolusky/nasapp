import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function MediaCard(props) {

    const savePhoto = async () => {
        let newImage = {
            title: props.result.data[0].title,
            imgUrl: props.result.links[0].href,
            description: props.result.data[0].description
        }

        await props.addToFavourites(newImage)
    }
    const saveHomePhoto = async () => {
        let newImage = {
            title: props.data.title,
            imgUrl: props.data.url,
            description: props.data.explanation
        }
        await props.addToFavourites(newImage)
    }
    const deletePhoto = async () => {
        console.log(props);
        props.favourite ? props.deleteFavourite(props.favourite._id) : props.deleteExpandedFavourite(props.favourites._id)

    }


    return (

        <div>
            {props.match.url === '/home' ?
                <div>
                    <div className='title'>{props.data.title}</div>
                    <img src={props.data.url} alt="" className='image' />
                    <Button onClick={saveHomePhoto} ><FavoriteIcon /> </Button>
                    <div className='description'>{props.data.explanation}</div>
                </div> :
                props.match.url === '/search' ?
                    <div>  <div className='title'>{props.result.data[0].title}</div>
                        <img src={props.result.links[0].href} alt="" className='image' />
                        <Button onClick={savePhoto} color="secondary"><FavoriteIcon /> </Button>
                    </div> :
                    props.match.url === '/favourites' ?
                        <div>
                            <div className='title'>{props.favourite.title}</div>
                            <Link to={`favourite/${props.favourite._id}`} > <img src={props.favourite.imgUrl} alt="" /></Link>
                            <Button variant="contained" color="secondary" onClick={deletePhoto} > <DeleteOutlinedIcon /></Button>
                        </div>
                        :
                        < div >
                            <div className='title'>{props.favourites.title}</div>
                            <img src={props.favourites.imgUrl} alt="" />
                            <Button variant="contained" color="secondary" onClick={deletePhoto} ><DeleteOutlinedIcon /> </Button>
                            <div className='description'>{props.favourites.description}</div>
                        </div>
            }

        </div >
    )
}