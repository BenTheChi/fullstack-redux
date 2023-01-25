import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
	name: 'notification',
	initialState: '', 
	reducers: {
		newNotification(state, action){
			return state = action.payload
		},
		clearNotification(state, action){
			return state = ''
		}
	}
})

export const { newNotification, clearNotification } = notificationSlice.actions

export const setNotification = (content, time) => {
	return dispatch => {
		dispatch(newNotification(content));
		setTimeout(() => {
			dispatch(clearNotification(null))
		}, time*1000)
	}
}

export default notificationSlice.reducer