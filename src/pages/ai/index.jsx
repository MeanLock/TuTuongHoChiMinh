import { Send } from "lucide-react";
import "./styles.css";
import { useRef, useState } from "react";
import { sendMessageToAI } from "../../services/aiService";

const AITalkingAvatar = () => {
  return (
    <div className="w-[50px] h-[50px] p-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F95D46] to-[#F4B82A]">
      <img
        src="images/ai-chatbot/avatar-talking.png"
        className="w-full h-full max-w-[25px] max-h-[25px] object-contain"
      />
    </div>
  );
};

const AIResponse = ({ text }) => {
  return (
    <div className="w-full flex relative ">
      <div className="absolute top-0 left-0 z-10 w-[50px] h-[50px]">
        <AITalkingAvatar />
      </div>
      <div className="ml-15 mt-2">
        <p className="text-[15px]">{text}</p>
      </div>
    </div>
  );
};
const UserPrompt = ({ text }) => {
  return (
    <div className="w-full flex items-center justify-end">
      <div
        className="relative p-3 bg-[#EADDD3] text-[#48201E] rounded-tl-2xl rounded-tr-2xl 
            rounded-bl-2xl rounded-br-none"
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

const AIPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "ai",
      text: `Chào bạn, tui là Tèo. Tui sẽ là trợ lý trả lời hỗ trợ bạn về các kiến thức về “Tư Tưởng Hồ Chí Minh về Đảng Cộng Sản Việt Nam”. Thắc mắc gì thì hỏi Tèo nha! Chào bạn, tui là Tèo. Tui sẽ là trợ lý trả lời hỗ trợ bạn về các kiến thức về “Tư Tưởng Hồ Chí Minh về Đảng Cộng Sản Việt Nam”. Thắc mắc gì thì hỏi Tèo nha!`,
    },
  ]);
  const inputRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();

    if (!userMessage || isLoading) {
      return;
    }

    // Thêm tin nhắn user vào history
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Clear input ngay
    inputRef.current.value = "";
    setIsLoading(true);

    // Thêm loading message
    setChatHistory((history) => [
      ...history,
      { role: "ai", text: "Tèo đang suy nghĩ..." },
    ]);

    try {
      // Format lại history để gọi API
      const formattedHistory = chatHistory.map((msg) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.text,
      }));

      // Gọi AI service
      const response = await sendMessageToAI(userMessage, formattedHistory);

      // Thay thế loading message bằng response thật
      setChatHistory((history) => {
        const newHistory = [...history];
        newHistory[newHistory.length - 1] = {
          role: "ai",
          text: response,
        };
        return newHistory;
      });
    } catch (error) {
      console.error("Error:", error);

      // Thay loading bằng error message
      setChatHistory((history) => {
        const newHistory = [...history];
        newHistory[newHistory.length - 1] = {
          role: "ai",
          text: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.",
        };
        return newHistory;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="ai_page"
      className="w-full h-screen flex items-center justify-center z-0 p-20"
    >
      <div className="w-10/12 chat_container bg-[#FDF4E9] flex p-10 rounded-2xl h-[800px]">
        <div
          id="chat_box"
          className="flex-1 flex flex-col justify-between pr-10 text-[#48201E]"
        >
          {/* Chat Contents */}
          <div
            id="chat_content"
            className="w-full flex flex-col gap-5 h-[632px] overflow-y-auto overflow-x-hidden"
          >
            {chatHistory.map((message, index) =>
              message.role === "ai" ? (
                <AIResponse key={index} text={message.text} />
              ) : (
                <UserPrompt key={index} text={message.text} />
              )
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={handleFormSubmit}
            action="#"
            className="w-full bg-[#EADDD3] rounded-lg p-3 flex items-center justify-between"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập câu hỏi..."
              className="w-full border-none focus:border-transparent focus:outline-none focus:ring-0 focus:shadow-none appearance-none"
              required
            />
            <button
              disabled={isLoading}
              className="flex cursor-pointer items-center justify-center bg-[#0A2D79] hover:bg-[#2454bb] rounded-full p-2"
            >
              <Send color="white" size={16} />
            </button>
          </form>
        </div>

        <div
          id="chat_avatar"
          className="w-1/3 h-full flex flex-col justify-between items-center text-white bg-gradient-to-b from-[#F95D46] to-[#F4B82A] rounded-xl"
        >
          <div className="w-full flex flex-col items-center gap-2 text-center p-5">
            <p className="font-bold text-[18px]">
              Trợ lý AI Tư Tưởng Hồ Chí Minh về ĐCSVN
            </p>
            <p className="font-light text-[18px]">
              Historical Research Assistant
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-end">
            <img
              src="images/ai-chatbot/avatar-standing.png"
              className="w-8/12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
