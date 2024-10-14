import { createContext,useContext,useEffect,useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { auth } from "../firebase";
const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [user,setUser] = useState({})

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)

    }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })

    return ()=>{
        unsubscribe()
    }
})


    function LogIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)

    }
    function logOut(email,password){
        return signOut(auth)

    }
 return(
<AuthContext.Provider value={{signUp,LogIn,user,logOut}}>
{children}

</AuthContext.Provider>
 )
}


export function UserAuth(){
   return  useContext(AuthContext)   
}