import React from "react"
const Context = React.createContext()

function ContextProvider({children}){
    const[allPhotos, setAllPhotos] = React.useState([])

    React.useEffect(() => {
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    return(
        <Context.Provider value={{allPhotos: allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}