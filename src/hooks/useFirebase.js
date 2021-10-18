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
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  /***************/

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   console.log(result.user);
    // })
    // .catch((error) => {
    //   //
    // })
    // .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  //sign in using email and password
  // const toggleLogin = (e) => {
  //   setIsLogin(e.target.checked);
  // };

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
    // e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password must contain 2 uppercase");
      return;
    }

    // isLogin ? processLogin(email, password) : registerNewUser(email, password);
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserName();
        const { email, displayName } = result.user;
        console.log(displayName);
        const userInfo = {
          displayName: displayName,
          email: email,
        };
        setUser(userInfo);
        console.log(result.user);
        console.log(userInfo);

        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const processLogin = () => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { email, displayName } = result.user;
        const userInfo = {
          displayName: displayName,
          email: email,
        };
        setUser(userInfo);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
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
    isLoading,
    setIsLoading,
    signInUsingGoogle,
    logOut,
    isLogin,
    error,
    handleError,
    setIsLogin,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    registerNewUser,
    email,
    password,
    processLogin,
  };
};

export default useFirebase;
