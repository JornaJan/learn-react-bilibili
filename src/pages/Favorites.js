import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext)

  let content

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got not favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return (
    <section className="Favorites">
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default Favorites
