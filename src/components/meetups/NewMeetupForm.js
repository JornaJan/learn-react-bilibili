import { useRef } from 'react'
import Card from '../ui/Card'

const NewMeetupForm = (props) => {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }
    console.log(meetupData)
    props.onAddMeetup(meetupData)
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" ref={addressInputRef} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
