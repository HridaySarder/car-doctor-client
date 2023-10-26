import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
export const AuthCotext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe();
    }
  },[])

const authInfo ={
  createUser,
  signIn,
  logOut,
user,
loading
}

  return (
    <AuthCotext.Provider value={authInfo}>
      {children}
    </AuthCotext.Provider>
  );
};

export default AuthProvider;