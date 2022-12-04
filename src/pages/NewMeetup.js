import { useNavigate } from 'react-router-dom'
import api from '../api/posts'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup(props) {
  const navigate = useNavigate()
  const addMeetupHandler = async (meetupData) => {
    try {
      const response = await api.post('/lists', meetupData)
      const allLists = [...props.lists, response.data]
      props.setLists(allLists)
      navigate('/')
    } catch (e) {
      console.log(`Error: ${e.meesage}`)
    }
  }
  return (
    <section className="NewMeetup">
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup
