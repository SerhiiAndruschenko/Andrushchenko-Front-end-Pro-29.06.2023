import { useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Home = () => {
  const [signUpVisibility, setSignUpVisibility] = useState(false);

  const handleSignUpVisibility = () => {
    return setSignUpVisibility(!signUpVisibility);
  }

  return (
    <>
      { signUpVisibility ? <SignUp setVisibility={() => handleSignUpVisibility()} /> : <SignIn setVisibility={() => handleSignUpVisibility()} />}
    </>
  )
}

export default Home;