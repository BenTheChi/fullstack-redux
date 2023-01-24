import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
	name: 'anecdotes',
	initialState, 
	reducers: {
		createVote(state, action){	

			for(let i=0; i<state.length; i++){
				if(state[i].id === action.payload){
					state[i].votes = state[i].votes+1;
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
		createAnecdote(state, action){
			state.push({
				content: action.payload,
				id: getId(),
				votes: 0
			})
		}
	}
})


// export const createVote = (id) => {
// 	return {
// 		type: 'VOTE',
// 		data: { id }
// 	}
// }

// export const createAnecdote = (content) => {
// 	return {
// 		type: 'NEW',
// 		data: {
// 			content,
// 			id: getId(),
// 			votes: 0
// 		}	
// 	}
// }

// const reducer = (state = initialState, action) => {
// 	let newState = [...state]

// 	if(action.type === 'VOTE'){
// 		for(let i=0; i<newState.length; i++){
// 			if(newState[i].id === action.data.id){
// 				newState[i].votes++
// 			}
// 		}
// 	}

// 	if(action.type === 'NEW'){
// 		newState = [...newState, action.data]
// 	}

// 	newState = newState.sort((a, b) => {
// 		if(a.votes > b.votes){
// 			return -1;
// 		}

// 		return 1;
// 	})

//   return newState
// }

export const { createVote, createAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer