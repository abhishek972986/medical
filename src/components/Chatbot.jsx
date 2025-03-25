import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { RiRobot3Line } from "react-icons/ri";

const Chatbot = () => {
  const [inputMessage, setInput] = useState("");
  const [inputHistory, setHistory] = useState([]);

  const genAI = new GoogleGenerativeAI("AIzaSyBVmQQMEYHKWFgR7qhcFRUCIaDMBVRg0p4");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const sendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage = { type: "user", message: inputMessage };
    const botThinkingMessage = { type: "bot", message: "Thinking..." };

    setHistory((prev) => [...prev, userMessage, botThinkingMessage]);

    try {
      const result = await model.generateContent(inputMessage);
      const responseText = await result.response.text();

      setHistory((prev) =>
        prev.map((msg) =>
          msg.message === "Thinking..." ? { type: "bot", message: responseText } : msg
        )
      );
    } catch  {
      setHistory((prev) =>
        prev.map((msg) =>
          msg.message === "Thinking..." ? { type: "bot", message: "Error getting response." } : msg
        )
      );
    }

    setInput("");
  };

  return (
    <div className="relative w-[500px] h-[650px] p-6 bg-white rounded-xl shadow-2xs">
      <div className="flex gap-4 justify-center text-2xl font-extrabold pr-2.5">
       Chat with Bot <RiRobot3Line className="text-3xl font-extrabold "/>
      </div>

      <div className="relative w-full overflow-y-scroll h-[520px]  flex flex-col gap-3 p-3">
        {inputHistory.map((chat, index) => (
          <span
            key={index}
            className={`text-xl p-2 rounded-2xl ${
              chat.type === "user"
                ? "bg-purple-700 text-white self-end"
                : "bg-gray-300 text-black self-start"
            }`}
          >
            {chat.message}
          </span>
        ))}
      </div>

      <div className="absolute bottom-3 left-6 right-6 flex items-center border-t pt-3">
        <form
          className="w-full flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input
            value={inputMessage}
            type="text"
            placeholder="Message here..."
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-full text-xl rounded-2xl p-3 focus:outline-none border"
          />
          <button
            type="submit"
            className="rounded-full p-3 bg-purple-800 cursor-pointer"
          >
            <GrSend className="text-2xl text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
