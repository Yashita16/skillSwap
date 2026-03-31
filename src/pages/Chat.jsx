import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Chat = ({ users, currentUserId }) => {
  const { id } = useParams();

  const currentUser = users.find(u => u.id === currentUserId);
  const otherUser = users.find(u => u.id.toString() === id);

  const [messages, setMessages] = useState([
    { text: "Hey 👋", sender: id, type: "text" },
    { text: "Hello 😄", sender: currentUserId, type: "text" },
  ]);

  const [input, setInput] = useState("");
  const [showCall, setShowCall] = useState(false);

  const bottomRef = useRef();

  // 🔥 auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { text: input, sender: currentUserId, type: "text" }
    ]);

    setInput("");
  };

  // 🔥 START CALL
  const startCall = (type) => {
    const roomId = "room_" + Math.random().toString(36).substring(2, 8);

    setMessages(prev => [
      ...prev,
      {
        sender: currentUserId,
        type: "call",
        roomId,
        callType: type,
      }
    ]);

    setShowCall(true);

    // 👇 call init
    setTimeout(() => {
      initCall(roomId, type);
    }, 100);
  };

  // 🔥 JOIN CALL
  const joinCall = (room, type) => {
    setShowCall(true);

    setTimeout(() => {
      initCall(room, type);
    }, 100);
  };

  // 🔥 ZEGO INIT
  const initCall = (roomId, type) => {
    const appID = 55243146;

    // ⚠️ TEMP TEST ONLY (backend ke bina)
    const serverSecret = "2dfe08d7cfecf3c055b871ac9e92c8c4";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      currentUserId,
      currentUser?.name || "User"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: document.getElementById("call-container"),
      sharedLinks: [],
      showPreJoinView: false,
      scenario: {
        mode:
          type === "video"
            ? ZegoUIKitPrebuilt.VideoConference
            : ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">

      {/* 🔝 HEADER */}
      {!showCall && (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
          <div className="flex items-center gap-3">
            <img
              src={otherUser?.image}
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <p className="font-semibold">{otherUser?.name}</p>
          </div>

          <div className="flex gap-4 text-xl cursor-pointer">
            <span onClick={() => startCall("audio")}>📞</span>
            <span onClick={() => startCall("video")}>🎥</span>
          </div>
        </div>
      )}

      {/* 💬 CHAT */}
      {!showCall && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === currentUserId
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {msg.type === "call" ? (
                  <div className="bg-yellow-100 p-3 rounded shadow max-w-xs">
                    <p className="text-sm mb-2">
                      📞 {msg.sender === currentUserId
                        ? "You started a call"
                        : "Incoming Call"}
                    </p>

                    <button
                      onClick={() => joinCall(msg.roomId, msg.callType)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Join Call
                    </button>
                  </div>
                ) : (
                  <div className="bg-white px-4 py-2 rounded shadow max-w-xs">
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* ✍️ INPUT */}
          <div className="p-3 flex gap-2 bg-white border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Type a message..."
              className="flex-1 border p-2 rounded"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 rounded"
            >
              Send
            </button>
          </div>
        </>
      )}

      {/* 🔥 CALL SCREEN */}
      {showCall && (
        <div className="relative w-full h-screen bg-black">

          <button
            onClick={() => setShowCall(false)}
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded z-10"
          >
            End Call
          </button>

          <div id="call-container" className="w-full h-full"></div>
        </div>
      )}

    </div>
  );
};

export default Chat;