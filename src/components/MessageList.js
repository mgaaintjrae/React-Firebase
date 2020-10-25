import React, { useContext, useState, useEffect } from "react";
import FirebaseContext from "./../firebase/context";
import Message from "./Message";

const MessageList = () => {
  const { firebase } = useContext(FirebaseContext);
  const [messages, setMessages] = useState([]);

  const handleSnapshot = (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMessages(messages);
  };

  useEffect(() => {
    const getMessages = () => {
        // Requête
      firebase.db
        .collection("message")
        .orderBy("createAt", "desc")
        .onSnapshot(handleSnapshot);
    };

    return getMessages();
  }, [firebase]);

  return (
    <div>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList
