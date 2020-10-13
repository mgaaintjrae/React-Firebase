import React from "react";
import MessageForm from "./MessageForm";
import useForm from "./../hooks/useForm";
import validateMessage from './../utils/validateMessage';

const INITIAL_STATE = {
  message: ""
  //mail: ""
};

export default function CreateMessage() {
  const handleCreateMessage = () => {
    const { message } = values;
    const newMessage = {
      message,
      postedBy: {
        id: "76",
        name: "Priscilla Roy",
      },
      likes: [],
      createAt: Date.now(),
      photo:
        "https://avatars0.githubusercontent.com/u/49270171?s=460&u=b97ff4e2e67d73f4238d733e6973b26cf2eae63b&v=4",
    };
    console.log(newMessage);
  };

  const { handleSubmit, handleKeyDown, handleChange, values } = useForm(
    INITIAL_STATE,
    validateMessage,
    handleCreateMessage
  );

  return (
    <MessageForm
      handleSubmit={handleSubmit}
      handleKeyDown={handleKeyDown}
      handleChange={handleChange}
      values={values}
    />
  );
}
