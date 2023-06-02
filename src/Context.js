import React from "react"
const Context = React.createContext()

function ContextProvider({children}){
    const[allPhotos, setAllPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    React.useEffect(() => {
        fetch(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id){
        const newArr = allPhotos.map(photo => {
           return photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo
        })
        setAllPhotos(newArr)
    }

    function addToCart(newItem){
        setCartItems(prevArr => [...prevArr, newItem])
    }
    
    function removeFromCart(img){
        setCartItems(prevState => {
            return prevState.filter(photo => photo.id !== img.id)
        })
    }

    return(
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}