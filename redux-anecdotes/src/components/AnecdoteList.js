import { useDispatch, useSelector } from 'react-redux'
import { saveVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
	const anecdotes = useSelector(state => state.anecdotes)
	const dispatch = useDispatch()

	const vote = (id, votes, content) => {
		let voteObj = {id, content, votes: votes+1};
		dispatch(saveVote(id, voteObj))
		dispatch(setNotification(`New vote for '${content}'`, 3))
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