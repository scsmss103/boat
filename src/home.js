import React from 'react'
import test from './pics/boat.jpg'


export function Home() {

    return (
        <>
            <h2>HOME</h2>
        </>
    )

}

export function Test() {
    return (
        <>
            <div style={{height:'25vh',border:'solid 1px black'}} >
                <img src={test} style={{ width: '100vw', height: '25vh' }} />
                <h2 style={{ position: 'relative', top: '50%', left: '50%' }} >TEST SCREEN</h2>
            </div>
        </>
    )
}