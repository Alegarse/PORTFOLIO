import React, { useEffect, useState } from "react";
import botIcon from "../../assets/chatbot.svg";
import { useSelector } from "react-redux";
import { chatBot_data, speech_EN, speech_ES } from "../../core/data/dataChat";
import { useNavigate } from "react-router-dom";

const ChatBotComponent = () => {
  const navigate = useNavigate();

  const [state, setState] = useState("start");
  const [speech, setSpeech] = useState(undefined);
  const [msgBot, setMsgBot] = useState(<span>{speech?.start.text}</span>);
  const [msgUser, setMsgUser] = useState("");
  const [msgUserPrev, setMsgUserPrev] = useState("");
  const [startedChat, setStartedChat] = useState(true);
  const [openedBot, setOpenedBot] = useState(false);

  const { language } = useSelector((state) => state.menuComponentReducer);

  const goToChallenges = () => {
    closeChatBot();
    navigate("/challenges");
    return
  };

  const getBotReply = (currentState, userMessage) => {
    const next = speech.start.next[userMessage];
    let text = msgUser.toLowerCase();

    if (next && next === "contact") {
      text = "contacto";
    } else if (next && next === "challenges"){
      text = "challenge";
    } else if (next) {
      setStartedChat(false);
      setMsgBot(`${speech[next].text}\n\n${speech.exit.text}`);
      return;
    }

    if (
      text.includes("informacion") ||
      text.includes("info") ||
      text.includes("quien eres") ||
      text.includes("who") ||
      text.includes("sobre ti") ||
      text.includes("about")
    ) {
      setStartedChat(false);
      setMsgBot(`${speech.about.text}\n\n${speech.exit.text}`);
      return;
    }
    if (
      text.includes("estudios") ||
      text.includes("stud") ||
      text.includes("formacion") ||
      text.includes("planing") ||
      text.includes("conocimiento") ||
      text.includes("knowl")
    ) {
      setStartedChat(false);
      setMsgBot(`${speech.stds.text}\n\n${speech.exit.text}`);
      return;
    }

    if (
      text.includes("experiencia") ||
      text.includes("experience") ||
      text.includes("realizado") ||
      text.includes("jobs") ||
      text.includes("proyecto") ||
      text.includes("project")
    ) {
      setStartedChat(false);
      setMsgBot(`${speech.exp.text}\n\n${speech.exit.text}`);
      return;
    }

    if (
      text.includes("inquietud") ||
      text.includes("ambicion") ||
      text.includes("mind")
    ) {
      setStartedChat(false);
      setMsgBot(`${speech.mind.text}\n\n${speech.exit.text}`);
      return;
    }

    if (
      text.includes("gustos") ||
      text.includes("alias") ||
      text.includes("hobb") ||
      text.includes("ocio")
    ) {
      setStartedChat(false);
      setMsgBot(`${speech.hobbys.text}\n\n${speech.exit.text}`);
      return;
    }

    if (
      text.includes("inicio") ||
      text.includes("menu") ||
      text.includes("start")
    ) {
      setStartedChat(false);
      setMsgBot(`${speech.start.text}`);
      return;
    }

    if (
      text.includes("contacto") ||
      text.includes("contact") ||
      text.includes("escribir") ||
      text.includes("writ") ||
      text.includes("llamar") ||
      text.includes("call")
    ) {
      const c = speech.contact;
      setStartedChat(false);
      setMsgBot(
        <>
          <div className="cw-contact-data">
            <div className="ref-contact">
              <span>Email:</span>
              <a href={`mailto:${c.email}`} target="_blank">
                {c.email}
              </a>
            </div>

            <div className="ref-contact">
              <span>Teléfono:</span>
              <a href={`tel:${c.phone}`}>{c.phone}</a>
            </div>

            <div className="ref-contact">
              <span>Perfil Prof.:</span>
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <br />
          <div>{speech.exit.text}</div>
        </>,
      );
      return;
    }

    if (text.includes("challenge") || text.includes("desafio")) {
      goToChallenges();
      return;
    }

    setStartedChat(false);
    setMsgBot(`No te he entendido\n\n${speech.start.text}`);
  };

  const handleUserMessage = (message) => {
    setMsgUser(message);
  };

  const handleKeyDown = (key) => {
    if (key === "Enter") {
      if (msgUser.trim() === "") return;
      sendMessage();
      return;
    }
    if (key === "Escape") {
      closeChatBot();
      return;
    }
  };

  const sendMessage = () => {
    const userMessage = msgUser.trim();
    if (userMessage == "") return;
    setMsgUserPrev(userMessage);
    clearInput();

    if (userMessage === "0") {
      setState("start");
      setMsgBot(speech.start.text);
      setStartedChat(true);
      setMsgUser("");
      return;
    }

    const nextState = speech.start.next[userMessage] || state;
    setState(nextState);

    getBotReply(nextState, userMessage);
    setStartedChat(false);
    setMsgUser("");
  };

  const closeChatBot = () => {
    setStartedChat(true);
    setOpenedBot(false);
    setState("start");
    setMsgBot(speech?.start.text);
  };

  const openChatBot = () => {
    setStartedChat(true)
    setOpenedBot(!openedBot)
  }

  const clearInput = () => {
    const input = document.querySelector("#cw-input");
    input.value = "";
  };

  const setSpeechLanguage = async () => {
    const newSpeech = language === "es" ? speech_ES : speech_EN;
    setSpeech(newSpeech);
    setMsgBot(<span>{newSpeech.start.text}</span>);
  };

  useEffect(() => {
    setSpeechLanguage();
  }, [language]);

  return (
    <div className="cw-container">
      {openedBot ? (
        <div className="cw-panel">
          <div className="cw-header">
            <div className="cw-title">
              <strong>Asistente Portfolio</strong>
              <span>Respuestas rápidas</span>
            </div>
            <button
              className="cw-close"
              type="button"
              aria-label="Cerrar"
              onClick={closeChatBot}
            >
              ✕
            </button>
          </div>

          <div className="cw-messages" role="log" aria-live="polite">
            {startedChat ? (
              <div className="cw-bubble cw-bot">{msgBot}</div>
            ) : (
              <>
                <div className="cw-bubble cw-user">{msgUserPrev}</div>
                <div className="cw-bubble cw-bot">{msgBot}</div>
              </>
            )}
          </div>

          <div className="cw-footer">
            <input
              id="cw-input"
              className="cw-input"
              type="text"
              placeholder="Escribe un número (1-7) o una pregunta..."
              onChange={(e) => handleUserMessage(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e.key)}
            />
            <button className="cw-send" type="button" onClick={sendMessage}>
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <img
          alt="Icono del chatBot"
          src={botIcon}
          title={chatBot_data.icon_title[language]}
          className="cw-fab"
          style={{ display: "grid" }}
          onClick={() => openChatBot()}
        />
      )}
    </div>
  );
};

export default ChatBotComponent;
