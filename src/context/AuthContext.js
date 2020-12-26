import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../helpers/navitationRef'

const authReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ERROR':
      return { ...state, errorMessage: action.payload }
    case 'CLEAR_ERROR':
      return { ...state, errorMessage: '' }
    case 'SIGNIN':
      return { errorMessage: '', token: action.payload }
    case 'SIGNOUT':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
     dispatch({ type: 'SIGNIN', payload: token })
     navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'CLEAR_ERROR' })
}

const signup = dispatch => (
  async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signup', {
        email,
        password,
      })
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({ type: 'SIGNIN', payload: res.data.token })
      navigate('TrackList')
    } catch (error) {
      dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' })
    }
  }
)

const signin = dispatch => (
  async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signin', {
        email,
        password,
      })
      await AsyncStorage.setItem('token', res.data.token)
      dispatch({ type: 'SIGNIN', payload: res.data.token })
      navigate('TrackList')
    } catch (error) {
      dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' })
    }
  }
)

const signout = dispatch => (
  async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'SIGNOUT' })
    navigate('loginFlow')
  }
)

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  {
    token: null,
    errorMessage: '',
  },
)