import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
	name: 'notification',
	initialState: {notification: '', id: ''}, 
	reducers: {
		newNotification(state, action){
			state.notification = action.payload
		},
		clearNotification(state, action){
			state.notification = '';
		},
		setId(state, action){
			state.id = action.payload
		}
	}
})

export const { newNotification, clearNotification, setId } = notificationSlice.actions

export const setNotification = (content, time, oldId) => {
	return dispatch => {
		dispatch(newNotification(content));
		clearTimeout(oldId);
		let id = setTimeout(() => {
			dispatch(clearNotification(null))
		}, time*1000)
		dispatch(setId(id));
	}
}

export default notificationSlice.reducer