import io from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import "./Chat.css";

const Chat = () => {
  const [socket] = useState(io("ws://hvz-chat-server.herokuapp.com:80"));

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleChange = (evt) => {
    evt.preventDefault();
    setCurrentMessage(evt.target.value);
  };

  const sendChat = (evt) => {
    evt.preventDefault();
    socket.emit("message", currentMessage);
  };

  useEffect(() => {
    socket.on("connect", () => {
      socket.on("message", (data) => {
        setMessages((messages) => [...messages, data]);
        scrollToBottom();
      });
    });

    // eslint-disable-next-line
  }, []);

  const listMessages = messages.map((message, i) => (
    <p key={"message-" + i}>USER: {message} </p>
  ));

  return (
    <div className="container">
      GAME CHAT
      <div className="ChatFrame">
        {listMessages}
        <div ref={messagesEndRef} />
      </div>
      <div className="Input">
        <input
          onChange={handleChange}
          type="text"
          className="InputField"
        ></input>
        <button onClick={sendChat} className="SendButton">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
