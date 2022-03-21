import React from "react";
import memesData from '../data/memesData.js'

export default function Meme() {
    function MemeTrigger() {
        const memesArray = memesData.data.memes
        const url = memesArray[[(Math.random() * memesArray.length) | 0]].url
        console.log(url)
        
        // const memesArray = memesData.data.memes
        // const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
        // console.log(url)
    }

    return (
        <main>
            <div className="form">
                <input placeholder="Top Text" className="form--input" type="text"></input>
                <input placeholder="Bottom Text" className="form--input" type="text"></input>
                <button onClick={MemeTrigger} className="form--button">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}