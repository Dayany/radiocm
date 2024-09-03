import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { SERVER_URL } from "../constants";

const socket = io(SERVER_URL);

function App() {
  const [audioSource, setAudioSource] = useState("");
  const audioRef = useRef(null); // Reference to the audio element

  useEffect(() => {
    if (audioRef.current && audioSource) {
      audioRef.current.play(); // Autoplay when the source changes
    }
  }, [audioSource]);

  console.log(audioSource);

  useEffect(() => {
    socket.on("audio-source-changed", (newSource) => {
      setAudioSource(newSource);
    });

    return () => {
      socket.off("audio-source-changed");
    };
  }, []);

  return (
    <div className="App">
      <h1>React Audio Player</h1>
      <audio ref={audioRef} src={audioSource} controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
