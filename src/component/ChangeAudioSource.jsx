import React from "react";
import { SERVER_URL } from "../constants";

function ChangeAudioSource() {
  const changeAudioSource = (newSource) => {
    fetch(SERVER_URL + "/change-audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newAudioSource: newSource }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Audio source updated:", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="App">
      <h1>Cambiar fuente de audio</h1>
      <div>
        <button
          onClick={() =>
            changeAudioSource(
              "https://stream-172.zeno.fm/woe8snbz8pntv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ3b2U4c25iejhwbnR2IiwiaG9zdCI6InN0cmVhbS0xNzIuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkNqbEo0NHNXU1B5T1ZqUDV0ZW1JbUEiLCJpYXQiOjE3MjU0MTUxNDUsImV4cCI6MTcyNTQxNTIwNX0.Io4CyyPJGEfPuv1GpmhoiY-73oZSOjtUsAVWSU-r04w",
            )
          }
        >
          Canal 1
        </button>
        <button
          onClick={() => changeAudioSource("https://fm939.wnyc.org/wnycfm-web")}
        >
          WNYC FM 93.9
        </button>
        <button
          onClick={() =>
            changeAudioSource("https://streams.kqed.org/kqedradio")
          }
        >
          KQED Public Radio
        </button>{" "}
      </div>
    </div>
  );
}

export default ChangeAudioSource;
