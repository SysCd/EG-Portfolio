import { useEffect, useState } from "react";
import "../index.css";

function TypewriterEffect() {
  const [text, setText] = useState("");
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const fullText = "ERIK GOMBAR";

  useEffect(() => {
    let index = 0;

    function typeCharacter() {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
        setTimeout(typeCharacter, 150);
      } else {
        setIsTypingFinished(true); // Typing is complete
      }
    }

    typeCharacter();

    return () => setText(""); // Cleanup on unmount
  }, []);

  return (
    <h1
      className={`typewriter-text ${isTypingFinished ? "typing-finished" : ""}`}
    >
      {text}
    </h1>
  );
}

export default TypewriterEffect;
