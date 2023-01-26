import { useDispatch, useSelector } from 'react-redux'
import { saveVote } from '../reducers/anecdoteReducer'
import { clearNotification, setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const anecdotes = useSelector(state => state.anecdotes)
	const currId = useSelector(state => state.notification.id)
	const dispatch = useDispatch()

	const vote = (id, votes, content) => {
		let voteObj = {id, content, votes: votes+1};
		dispatch(saveVote(id, voteObj))
		dispatch(clearNotification)
		dispatch(setNotification(`New vote for '${content}'`, 5, currId))
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