import api from './api/posts'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'
import Layout from './components/layout/Layout'
import NotFound from './components/NotFound'

const App = () => {
  const [lists, setLists] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchProps = async () => {
      try {
        const response = await api.get('/lists')
        setIsLoading(false)
        console.log(isLoading)
        setLists(response.data)
      } catch (e) {
        if (e.response) {
          console.log(e.response.data)
        } else {
          console.log(`Error: ${e.message}`)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchProps()
  }, [isLoading])
  return (
    <Routes>
      <Route path="/" exact element={<Layout />}>
        <Route index element={<AllMeetupsPage isLoading={isLoading} lists={lists} />}></Route>
        <Route path="new-meetup" element={<NewMeetupPage lists={lists} setLists={setLists} />}></Route>
        <Route path="favorites" element={<FavoritesPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App
