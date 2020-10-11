import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import React from "react";
import {
  FiHeart,
  FiX,
  FiMessageCircle,
  FiUpload,
  FiRefreshCw,
} from "react-icons/fi";
import IconContainer from "./IconContainer";

export default function Message() {
  return (
    <div className="message-container">
      <div>
        <img
          src="https://avatars0.githubusercontent.com/u/49270171?s=460&u=b97ff4e2e67d73f4238d733e6973b26cf2eae63b&v=4"
          alt="Profil"
          className="profil-picture"
        />
      </div>
      <div className="message">
        <header>
          <h3>Priscilla Roy </h3>
          <span>• {formatDistanceToNow(1602423160510, { locale: fr })}</span>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          similique, nemo quos in nostrum suscipit amet assumenda ratione magni
          ea laborum eaque tenetur.
        </p>
        <footer>
          <IconContainer color="blue">
            <FiMessageCircle />
          </IconContainer>
          <IconContainer color="green">
            <FiRefreshCw />
          </IconContainer>
          <IconContainer color="red" count="5">
            <FiHeart />
          </IconContainer>
          <IconContainer color="blue">
            <FiUpload />
          </IconContainer>
          <IconContainer color="red">
            <FiX />
          </IconContainer>
        </footer>
      </div>
    </div>
  );
}
