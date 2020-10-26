import React from 'react'
import { AppBar, Toolbar, Button } from "@material-ui/core"
import { Link } from 'react-router-dom'

export default function NavBar() {



    return (
        <div className="tool-bar">
            <AppBar position='sticky/' >
                <Toolbar>
                    <Button variant="contained" color="secondary">
                        <Link to='/home' >Home</Link>
                    </Button>
                    <Button variant="contained" color="secondary">
                        < Link to='/search' > Search</Link >
                    </Button>
                    <Button variant="contained" color="secondary">
                        <Link to='/favourites' >Favourites</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>

    )
}   