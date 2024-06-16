import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useState } from "react";

export default function LoginPage() {
  const [value, setValue] = useState("");
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user?.email || "");
        console.log(data.user);
        localStorage.setItem("email", data.user?.email || "");
        // @ts-ignore
        // dispatch(loginSuccess(data.user.displayName as string));
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };
  return <div onClick={handleLogin}>Login</div>;
}
