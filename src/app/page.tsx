"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const handleSignIn = () => {
    signIn();
  };
  const handleSignOut = () => {
    signOut();
  };

  return (
    <main>
      {session ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleSignIn}>Sign in</button>
      )}
    </main>
  );
}
