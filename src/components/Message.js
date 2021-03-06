import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../firebase";
import {
  FiHeart,
  FiX,
  FiMessageCircle,
  FiUpload,
  FiRefreshCw,
} from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import IconContainer from "./IconContainer";

const Message = ({ message }) => {
  const { user, firebase } = useContext(FirebaseContext);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (user) {
      const isLike = message.likes.some((like) => like.likeBy.id === user.uid);
      setIsLike(isLike);
    }
  }, [user, message.likes]);

  const handleLike = () => {
    setIsLike((prevIsLike) => !prevIsLike);
    // On récupère la référence dans la Database
    const likeRef = firebase.db.collection("message").doc(message.id);

    // Si le post n'est pas liké
    if (!isLike) {
      const like = { likeBy: { id: user.uid, name: user.displayName } };
      const updatedLikes = [...message.likes, like];
      likeRef.update({ likes: updatedLikes });
      // Si il est déjà liké, on va supprimer le like
    } else {
      const updatedLikes = message.likes.filter(
        (like) => like.likeBy.id !== user.uid
      );
      likeRef.update({ likes: updatedLikes });
    }
  };

  const handleDeleteMessage = () => {
    const messageRef = firebase.db.collection("message").doc(message.id);
    messageRef.delete()
  };

  //Est-ce le propriétaire du message, si non on retire la croix pour supprimer le message car ce n'est pas notre message
  const isOwner = user && user.uid === message.postedBy.id;

  return (
    <div className="message-container">
      <div>
        <img
          src={message.postedBy.photo}
          alt="Profil"
          className="profil-picture"
        />
      </div>
      <div className="message">
        <header>
          <h3>{message.postedBy.name} </h3>
          <span>• {formatDistanceToNow(message.createAt, { locale: fr })}</span>
        </header>
        <p>{message.message}</p>
        {user && (
          <footer>
            <IconContainer color="blue">
              <FiMessageCircle />
            </IconContainer>
            <IconContainer color="green">
              <FiRefreshCw />
            </IconContainer>
            <IconContainer
              onClick={handleLike}
              color="red"
              count={message.likes.length}
              isLike={isLike}
            >
              <FiHeart />
            </IconContainer>
            <IconContainer color="blue">
              <FiUpload />
            </IconContainer>
            {/* Si tu es le propiétaire du message tu affiche la croix sinon tu n'affiches pas */}
            {isOwner && (
              <IconContainer onClick={handleDeleteMessage} color="red">
                <FiX />
              </IconContainer>
            )}
          </footer>
        )}
      </div>
    </div>
  );
};

export default Message;
