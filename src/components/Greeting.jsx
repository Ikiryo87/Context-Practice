import { useContext } from "react";
import { GlobalContext } from "../context";
import { useEffect } from "react";

const Greeting = () => {
  const { language, setLanguage } = useContext(GlobalContext);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLanguage(null);
  //   }, 5000);
  // }, [language]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLanguage(null);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [language]);

  const handleClick = (e) => {
    setLanguage(e.target.value);
  };

  if (language === "English") {
    return <p>Hello!</p>;
  }

  if (language === "German") {
    return <p>Gutentag!</p>;
  }

  if (language === "Dutch") {
    return <p>Hallo!</p>;
  }

  return (
    <div>
      <button onClick={handleClick} value={"English"}>
        English
      </button>
      <button onClick={handleClick} value={"German"}>
        German
      </button>
      <button onClick={handleClick} value={"Dutch"}>
        Dutch
      </button>
    </div>
  );
};
export default Greeting;
