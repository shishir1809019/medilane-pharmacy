import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //email and password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  /***************/

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleError = (e) => {
    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password must contain 2 uppercase");
      return;
    }
  };

  const registerNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((result) => {
    //   setUserName();
    //   const { email, displayName } = result.user;
    //   console.log(displayName);
    //   const userInfo = {
    //     displayName: displayName,
    //     email: email,
    //   };
    //   setUser(userInfo);
    //   console.log(result.user);
    //   console.log(userInfo);

    //   setError("");
    // })
    // .catch((error) => {
    //   setError(error.message);
    // });
  };

  const processLogin = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {
      // Profile updated!
    });
  };

  /**************************************/

  //observe whether user auth state change or not
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    user,
    error,
    email,
    password,
    isLoading,
    setUser,
    setUserName,
    setError,
    setIsLoading,

    signInUsingGoogle,
    logOut,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleError,
    registerNewUser,
    processLogin,
  };
};

export default useFirebase;
