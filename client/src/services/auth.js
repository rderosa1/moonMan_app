import api from './apiConfig'

export const signUp = async credentials => {
  try {
    const resp = await api.post('/sign-up', credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const signInUser = async credentials => {
  try {
    const resp = await api.post('/sign-in', credentials)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}

//get user by id
export const getUserById = async id => {
  try {
    const resp = await api.get(`/users/${id}`)
    return resp.data.user
  } catch (error) {
    throw error
  }
}

export const updateUsersItems = async (userId, user) => {
  try {
    const resp = await api.put(`/users/${userId}/items`, user)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const removeWishlistItem = async (userId, itemId) => {
  try {
    const resp = await api.put(`/users/${userId}/items/${itemId}`)
    return resp.data
  } catch (error) {
    throw error
  }
}


export const signOut = async user => {
  try {
    await localStorage.clear()
    return true
  } catch (error) {
    throw error
  }
}

export const changePassword = async (passwords, user) => {
  try {
    console.log(user)
    const resp = await api.post(`/change-password/${user.id}`, passwords)
    localStorage.setItem('token', resp.data.token)
    return resp.data
  } catch (error) {
    throw error
  }
}


export const verifyUser = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const res = await api.get('/verify');
    return res.data;
  }
  return false;
}