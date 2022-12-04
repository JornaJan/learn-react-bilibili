import { useState, createContext } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (favoriteMeetup) => {},
  itemIsFavorite: (favoriteMeetup) => {}
})

export const FavoritesContextProvider = ({children}) => {

  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((preUserFavorites) => {
      console.log(preUserFavorites)
      console.log(favoriteMeetup)
      return [...preUserFavorites, favoriteMeetup]
      //return preUserFavorites.contact(favoriteMeetup)
    })
    //setUserFavorites(userFavorites.contact(favoriteMeetup))
  }

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.filter(meetup => meetup.id !== meetupId)
    })
  }
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  }

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}


export default FavoritesContext
