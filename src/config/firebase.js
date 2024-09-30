import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword , getAuth , signInWithEmailAndPassword , signOut} from "firebase/auth";
import { getFirestore , setDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8r-SdstJ54NlUy-XkJWy7Y_oMwIhjbHY",
  authDomain: "chat-hive-34896.firebaseapp.com",
  projectId: "chat-hive-34896",
  storageBucket: "chat-hive-34896.appspot.com",
  messagingSenderId: "289975502941",
  appId: "1:289975502941:web:f47312c277bf5c23f5e5b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey! I am on Chat-Hive",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData: []
        })
    }
    catch(error)
    {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email,password) =>
{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error)
    {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async() =>
{
    try{
        await signOut(auth)
    }
    catch(error)
    {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

export {signup,login,logout,auth,db};