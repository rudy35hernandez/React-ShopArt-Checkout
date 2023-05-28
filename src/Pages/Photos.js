import React, {useContext} from "react"
import Image from "../Components/Image.js"
import {Context} from "../Context.js"
import getClass from "../utils/index.js"


function Photos(){
    const {allPhotos} = useContext(Context)
    const allImages = allPhotos.map((img, i) => {
        return (
            <Image key={img.id} img={img} className={getClass(i)} />
        )
    })
    return(
        
            <main className="photos">
                {allImages}
            </main>
           
    )
}

export default Photos