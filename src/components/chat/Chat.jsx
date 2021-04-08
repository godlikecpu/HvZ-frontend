import io from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import "./Chat.css";

const Chat = () => {
  const [socket] = useState(io("//hvz-chat-server.herokuapp.com"));

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    var chatArea = document.getElementById("chatArea");
    chatArea.scrollTop = chatArea.scrollHeight;
  };

  //objDiv.scrollTop = objDiv.scrollHeight;

  //scrollIntoView({ behavior: "smooth" })

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleChange = (evt) => {
    evt.preventDefault();
    setCurrentMessage(evt.target.value);
  };

  const sendChat = (evt) => {
    if (document.getElementById("inputField").value === "") {
      //empty input should NOT send message
    } else {
      evt.preventDefault();
      socket.emit("message", currentMessage);
      document.getElementById("inputField").value = ""
    }
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
      <div id="chatArea"
        className="ChatFrame">
        {listMessages}
        <div ref={messagesEndRef} />
      </div>
      <div className="Input">
        <input id="inputField"
          onChange={handleChange}
          type="text"
          className="InputField"
          placeholder="Your message here"
        ></input>
        <button onClick={sendChat} className="SendButton">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
