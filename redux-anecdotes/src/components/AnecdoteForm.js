import { connect } from 'react-redux' 
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
	const addAnedote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		props.createAnecdote(content)
		props.setNotification(`you added '${content}'`, 5, props.notification.id);
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

const mapStateToProps = (state) => {
	return {
		notification: state.notification
	}
}

export default connect(
	mapStateToProps, 
	{ createAnecdote, setNotification }
)(AnecdoteForm)