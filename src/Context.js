import React, {useState, useEffect} from "react"
const Context = React.createContext()

function ContextProvider({children}){
    const[allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems") || []))

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])
   

    useEffect(() => {
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
    
    function removeFromCart(id){
        setCartItems(prevState => {
            return prevState.filter(photo => photo.id !== id)
        })
    }

    function emptyCart(){
        setCartItems([])
    }

    return(
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            addToCart, 
            cartItems, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}