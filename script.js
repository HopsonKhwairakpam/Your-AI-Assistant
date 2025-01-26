const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

recognition.lang = "en-US";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //Converts text to voice
  function speak(text) {
    const abc = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(abc);
  }

  function handleCommands(command) {
    if (command.includes("open youtube")) {
      speak("opening youtube...");
      window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open facebook")) {
      speak("opening facebook for you...");
      window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open instagram")) {
      speak("opening instagram for you...");
      window.open("https://www.whatsapp.com", "_blank");
    } else if (command.includes("open whatsapp")) {
      speak("opening whatsapp for you...");
      window.open("https://www.whatsapp.com", "_blank");
    } else if (command.includes("open google")) {
      speak("opening google for you...");
      window.open("https://www.google.com", "_blank");
    } else {
      speak("here's what I found...");
      window.open(`https://www.google.com/search?q=${command}`, "_blank");
    }
  }
  speak("Hello, how can I help you");

  setTimeout(() => {
    recognition.start();
  }, 2000);

  recognition.onresult = (e) => {
    const command = e.results[0][0].transcript.toLowerCase();
    handleCommands(command);
  };
});
