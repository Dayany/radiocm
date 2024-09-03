import React from "react";
import { SERVER_URL } from "../constants";

function ChangeAudioSource() {
  const changeAudioSource = (newSource) => {
    fetch(SERVER_URL, {
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
            changeAudioSource("https://npr-ice.streamguys1.com/live.mp3")
          }
        >
          NPR Live Stream
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
