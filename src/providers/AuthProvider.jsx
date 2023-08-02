import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import firebaseApp from '../config/_Firebase.conf'
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const fAuth = getAuth(firebaseApp)
  // Create user with email and password
  const registerUser = (email, password) => {
    setLoading(true)
    console.log(email, password)
    return createUserWithEmailAndPassword(fAuth, email, password)
  }
  // Login user using email and password
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(fAuth, email, password)
  }
  // user logout
  const logout = () => {
    setLoading(true)
    localStorage.removeItem('access-token')
    return signOut(fAuth)
  }
  // upgrade profile and photo
  const updateUser = (name, photo) => {
    setLoading(true)
    return updateProfile(fAuth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  // continue With Google
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider()
    setLoading(true)
    return signInWithPopup(fAuth, provider)
  }
  // Watch user state changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fAuth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [user])
  const authPacket = {}
  return (
    <AuthContext.Provider value={authPacket}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
