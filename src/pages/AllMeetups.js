import MeetupList from '../components/meetups/MeetupList'

const AllMeetupsPage = ({lists, isLoading}) => {
  console.log(isLoading)

  return (
    <section className="AllMeetupsPage">
      <h1>All Meetups</h1>
      {!isLoading ? 
      (<MeetupList meetups={lists} />):
      (
        <p>Loading meetups...</p>
      )
      }
    </section>
  )
}

export default AllMeetupsPage
