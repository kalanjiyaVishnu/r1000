import { useState, useEffect } from "react";

const Error = () => {
  const [msg] = useState([
    "¯_(ツ)_/¯",
    ":-(",
    "(•_•)",
    "(⊙_⊙)",

    "(^///^)",
    "🕳",
    "X_X",
    ":/",
    "^3^",
    "~_~",
    ";[",
    "+_+",
    "¬_¬",
    "^_+",
    ">.<",
    "-_-",
    "^_-",
    "Y.Y",
    "=(",
  ]);
  const [index, setindex] = useState("");

  useEffect(() => {
    setindex(Math.floor(Math.random() * (msg.length + 1)));
  }, [msg]);
  return (
    <div className="flex flex-col h-screen w-screen text-xs items-center justify-center p-4 text-black text-opacity-80">
      <p className="text-7xl p-4 ">{msg[index] ? msg[index] : String(":(")}</p>
      <span className="">page not found yet...</span>
    </div>
  );
};

export default Error;
