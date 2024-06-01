"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiChat, googleGeminiGenerativeAiImage } from '@/ai-generative'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

interface HistoryMessage {
  role: string,
  message: string
}

const ChatComponent = () => {
  const [messages, setMessages] = useState<HistoryMessage[]([]);
  const [aiResponse, setAiResponse] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    // Step 1: Update state with user's message instantly
    setMessages(prev => [...prev, { role: "user", message: text }]);
    setText(''); // Clear the input field

    // Step 2: Set loading state
    setIsLoading(true);
  };

  useEffect(() => {
    const fetchAIResponse = async () => {
      if (isLoading) {
        const userMessage = messages[messages.length - 1].message;
        const msg = await googleGeminiGenerativeAiChat(userMessage, messages);
        
        // Step 3: Update state with AI's response
        setAiResponse(msg);
        setMessages(prev => [...prev, { role: "model", message: msg }]);
        setIsLoading(false);
      }
    };

    fetchAIResponse();
  }, [isLoading]);

  return (
    <div>
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="ai-response">
        {isLoading && <div className="message model">Loading...</div>}
        {!isLoading && aiResponse && <div className="message model">{aiResponse}</div>}
      </div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={handleClick} disabled={isLoading}>Send</button>
    </div>
  );
};

export default ChatComponent;


export default AITest