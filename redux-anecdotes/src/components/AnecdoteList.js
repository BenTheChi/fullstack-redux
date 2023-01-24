import { useDispatch, useSelector } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { newNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const anecdotes = useSelector(state => state.anecdotes)
	const dispatch = useDispatch()

	const vote = (id, votes, content) => {
		dispatch(createVote(id, votes))
		dispatch(newNotification('New vote for - ' + content))

		setTimeout(() => {
			dispatch(clearNotification(null))
		}, 5000)
	}

	return (
		<>
			{anecdotes.map(anecdote =>
				<div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => vote(anecdote.id, anecdote.votes, anecdote.content)}>vote</button>
				</div>
				</div>
			)}
		</>
	)
}

export default AnecdoteList;