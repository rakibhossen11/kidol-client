import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUSer=>{
            setUser(currentUSer);
            console.log('user from provider',currentUSer);
            setLoading(false);
        })
        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;