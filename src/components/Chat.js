import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";

// Icons
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Chat.scss";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName} </span>
        <div className="chatIcons">
          <VideocamIcon />
          <GroupAddIcon />
          <MoreHorizIcon />
        </div>
      </div>
      
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
