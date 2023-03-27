import React from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
    return (
        <>
            <nav className='bg-lightgreen px-4 py-4'>
                <h3 className='font-bold'><Link to="/">MaduMaja</Link></h3>
            </nav>
            {props.image && <header className='width-full h-48' style={{backgroundImage: `url(${props.image})`, backgroundSize: "contain"}}>
                
            </header>}
        </>
    )
}

export default Header
