import React from 'react'
import Header from '../components/Header'
import books from "/img/bibliotheque.jpg"

function Lessons() {
    return (
        <>
            <Header image={books}/>
            <main className='px-4'>
                <h1 className='mt-4'>Liste des leçons</h1>
            </main>
        </>
    )
}

export default Lessons
