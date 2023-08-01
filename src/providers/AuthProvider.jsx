import { createContext } from 'react'

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
  const authPacket = {}
  return (
    <AuthContext.Provider value={authPacket}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
