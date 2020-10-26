import React from 'react'
import { AppBar, Toolbar, Button, Box } from "@material-ui/core"
import { Link } from 'react-router-dom'

export default function NavBar() {



    return (
        <div className="tool-bar">
            <AppBar position='sticky/' >
                <Toolbar color='primary' >
                    <Box ml={56} >
                        <Button variant="contained" >
                            <Link to='/home' >Home</Link>
                        </Button>
                    </Box>
                    <Box ml={4} >
                        <Button variant="contained" >
                            < Link to='/search' > Search</Link >
                        </Button>
                    </Box>
                    <Box ml={4} >
                        <Button variant="contained" >
                            <Link to='/favourites' >Favourites</Link>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>

    )
}   