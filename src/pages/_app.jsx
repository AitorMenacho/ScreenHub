import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderIniciado from "@/components/HeaderIniciado";
import "@/styles/globals.css";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const session = localStorage.getItem("sessionId");
    setUsername(localStorage.getItem("usuario"));
    setSessionId(localStorage.getItem("sessionId"));

    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{ isLoggedIn, username, sessionId, userId, setUserId }}
      >
        {isLoggedIn ? <HeaderIniciado /> : <Header />}
        <Component {...pageProps} />
        <Footer />
      </UserContext.Provider>
    </>
  );
}
