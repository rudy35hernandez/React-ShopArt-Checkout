import React from "react"
const Context = React.createContext()

function ContextProvider({children}){
    const[allPhotos, setAllPhotos] = React.useState([])
    return(
        <Context.Provider value={{allPhotos: allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}