import React from "react";
import { signIn, signOut } from "next-auth/react";

const Authenticate = () => {
  return (
    <>
      <button onClick={signIn}>Sign in</button>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default Authenticate;
