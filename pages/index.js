import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Authenticate = () => {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <>
      {data && (
        <>
          <button onClick={signOut}>Sign out</button>
          <Image
            src={data.user.image}
            alt={data.user.image}
            height={100}
            width={100}
          ></Image>
        </>
      )}
      {status === "unauthenticated" && (
        <button onClick={() => signIn("github")}>Sign in</button>
      )}
    </>
  );
};

export default Authenticate;
