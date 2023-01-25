import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
	name: 'anecdotes',
	initialState: [], 
	reducers: {
		createVote(state, action){	
			for(let i=0; i<state.length; i++){
				if(state[i].id === action.payload.id){
					state[i].votes = action.payload.votes;
					break;
				}
			}

			state.sort((a, b) => {
				if(a.votes > b.votes){
					return -1;
				}
		
				return 1;
			})
		},
		appendAnecdote(state, action) {
		  state.push(action.payload)
		},
		setAnecdotes(state, action) {
		  return action.payload
		}
	}
})

export const { createVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch(setAnecdotes(anecdotes))
	}
}
  
export const createAnecdote = content => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(content)
		dispatch(appendAnecdote(newAnecdote))
	}
}

export const saveVote = (incId, obj) => {
	return async dispatch => {
		const {id, votes} = await anecdoteService.newVote(incId, obj)
		dispatch(createVote({id, votes}))
	}
}

  
export default anecdoteSlice.reducer