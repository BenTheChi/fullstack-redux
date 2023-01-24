import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { newNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
	const dispatch = useDispatch()

	const addAnedote = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		dispatch(createAnecdote(content))
		dispatch(newNotification('Added - ' + content))
		setTimeout(() => {
			dispatch(clearNotification(null))
		}, 5000)
	}
	
	return (
		<>
			<h2>create new</h2>
			<form onSubmit={addAnedote}>
				<div><input name="anecdote"/></div>
				<button>create</button>
			</form>
		</>
	)
}

export default AnecdoteForm;