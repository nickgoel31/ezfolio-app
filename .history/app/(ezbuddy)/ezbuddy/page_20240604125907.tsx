"use client"

import { googleGeminiGenerativeAiChat } from '@/ai-generative'
import { TiptapAnswerAutomaticEzBuddyReadOnly, TiptapAnswerReadOnly } from '@/components/tiptap-read-only'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { BookOpen, Bot, Code2, MessagesSquareIcon, Paintbrush, User } from 'lucide-react'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import useLocalStorage from "use-local-storage";
import TurndownService from 'turndown'
import { marked } from 'marked'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { Puff, ThreeDots } from 'react-loader-spinner'

const turndownService = new TurndownService();

interface HistoryMessage {
  role: string,
  message: string
}

const EzBuddyChatBot = () => {
  const [text, setText] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const [messages, setMessages] = useState<HistoryMessage[]>([])
  const [htmlMessages, setHtmlMessages] = useState<HistoryMessage[]>([]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    // Step 1: Update state with user's message instantly
    setMessages(prev => [...prev, { role: "user", message: text }])
    setText('') // Clear the input field

    // Step 2: Set loading state
    setIsLoading(true)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  useEffect(() => {
    const fetchAIResponse = async () => {
      if (isLoading ) {
        const userMessage = messages[messages.length - 1].message
        const msg = await googleGeminiGenerativeAiChat(userMessage, messages)
        
        // Step 3: Update state with AI's response
        setAiResponse(msg)
        setMessages(prev => [...prev, { role: "model", message: msg }])
        setIsLoading(false)
      }
    }
    const fetchHtmlMessages = async () => {
      const promises = messages.map(async (msg) => {
        const htmlMsg = await marked(msg.message);
        return {message:htmlMsg, role:msg.role};
      });

      const resolvedHtmlMessages = await Promise.all(promises);
      setHtmlMessages(resolvedHtmlMessages);
    };

    fetchAIResponse()
    fetchHtmlMessages();
  }, [isLoading, messages, setMessages])

  return (
    div
  )
}

export default EzBuddyChatBot
