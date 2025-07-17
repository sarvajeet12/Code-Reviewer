import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Offline from "./components/Offline";
import LoadingEffect from "./components/LoadingEffect";

const App = () => {
  // --------------------------------------- offline or not -----------------------------------------------------------------------
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline); // Clean up event listeners on component unmount

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // simulate load
  }, []);

  return (
    <>{isOnline ? loading ? <LoadingEffect /> : <Outlet /> : <Offline />}</>
  );
};

export default App;
