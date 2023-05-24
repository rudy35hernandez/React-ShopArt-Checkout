import React, {useContext} from "react"
import Image from "../Components/Image.js"
import {Context} from "../Context.js"
import getClass from "../utils/index.js"


function Photos(){
    const allPics = useContext(Context)
    const allImages = allPics.allPhotos.map((img, i) => {
        console.log(getClass(i))
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