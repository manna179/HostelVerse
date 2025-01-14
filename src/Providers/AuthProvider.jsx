import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/cordova";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
  const [loading, setLoading] = useState(true);
  const [user,setUser]= useState(null)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
 

  const info = {
    createUser,
    loading,
    user,
    googleSignIn,
    logout,
    signIn,
    profileUpdate,
   

  };
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  return (
    
      <AuthContext.Provider value={info}> {children}</AuthContext.Provider>
    
  );
};

export default AuthProvider;
