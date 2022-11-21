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
            
                <img src={test} style={{width:'100vw' ,height:'25vh'}} />
            
        </>
    )
}