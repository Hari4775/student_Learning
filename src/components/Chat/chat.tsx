import React, { useState } from "react";
import "./chat.scss";
import { ReactComponent as SendIcon } from "../../assets/icons/icon-send.svg";
import { ReactComponent as MessageQuestionIcon } from "../../assets/icons/icon-message-question.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icons/icon-arrow-down.svg";

const Chat = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  const chats = [
    {
      id: 1,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 2,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 3,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 4,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 5,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 6,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
  ];
  return (
    <>
      <div
        className={`chat-component d-block d-xl-none ${
          showChatBox === true && "show"
        }`}
      >
        <div
          className={`doubts-wrapper mb-1 ${showChatBox === true && "show"}`}
        >
          <div className="title-sec">
            <h5 className="title">Doubts</h5>
          </div>
          <div className="chat-section">
            <div className="scroll-area">
              {chats.map((chat) => (
                <div className="chat-bubble-wrapper" key={chat.id}>
                  {chat.isUser !== true ? (
                    <div>
                      <div className="avatar-wrap me-3">
                        <img
                          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                          alt="avatar"
                        />
                      </div>
                    </div>
                  ) : null}
                  <div
                    className={`chat-bubble ${
                      chat.isUser === true
                        ? "user-chat-bubble"
                        : "tutor-chat-bubble"
                    }`}
                  >
                    <p className="message">{chat.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="input-wrapper">
            <div className="form-group">
              <input type="text" className="form-control" />
              <button className="send-btn">
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex d-xl-none justify-content-end">
        <div>
          <button
            type="button"
            role="button"
            className="floating-btn"
            onClick={() => setShowChatBox(!showChatBox)}
          >
            {showChatBox === true ? <DownArrowIcon /> : <MessageQuestionIcon />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
