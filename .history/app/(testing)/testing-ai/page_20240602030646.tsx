"use client"

import { googleGeminiGenerativeAiChat } from '@/ai-generative'
import { TiptapAnswerAutomaticEzBuddyReadOnly, TiptapAnswerReadOnly } from '@/components/tiptap-read-only'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { BookOpen, Code2, MessagesSquareIcon, Paintbrush, User } from 'lucide-react'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import useLocalStorage from "use-local-storage";
import TurndownService from 'turndown'
import { marked } from 'marked'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const turndownService = new TurndownService();

interface HistoryMessage {
  role: string,
  message: string
}

const AITest = () => {
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
    <div className='relative w-full  h-screen overflow-x-hidden mx-auto  px-2 pb-32'>
      <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] z-[-100] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#99F6E415,rgba(255,255,255,0))]"></div>
      <div className="fixed bottom-0 right-[-20%] top-[-10%] h-[500px] z-[-100] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#4F46E515,rgba(255,255,255,0))]"></div>

      {messages.length === 0 && (
        <div className='w-full h-full flex flex-col items-center justify-between max-w-screen-sm mx-auto space-y-6 py-10'>
          <div className='h-full flex flex-col gap-4 items-center justify-between'>
            <div className='h-full flex flex-col gap-4 items-center'>
              <div className='border rounded-lg p-3 bg-foreground/10 '>
                <MessagesSquareIcon className='' size={21} />
              </div>
              <div className='text-center'>
                <h1 className='font-semibold text-6xl leading-normal font-poppins text-center'>Hi, I&apos;m <span className='bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent'>EzBuddy</span></h1>
                <p className='font-medium text-sm text-muted-foreground'>
                  I&apos;m a chatbot powered by <span className='bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent'>Google&apos;s Gemini AI</span>. Ask me anything!
                </p>
              </div>
            </div>
          </div>

          <div className='pb-8 flex flex-wrap gap-4'>
            <div className='bg-foreground/[0.02] backdrop-blur-md p-4 border rounded-lg text-muted-foreground space-y-2 max-w-56'>
              <div className='flex items-center gap-2 '>
                <Code2 />
                <h4 className='text-lg font-semibold text-foreground'>
                  Coding Buddy
                </h4>
              </div>
              <p className='text-sm font-medium'>
                Ask me anything related to code, programming, debugging, etc.
              </p>
            </div>

            <div className='bg-foreground/[0.02] backdrop-blur-md p-4 border rounded-lg text-muted-foreground space-y-2 max-w-56'>
              <div className='flex items-center gap-2 '>
                <BookOpen />
                <h4 className='text-lg font-semibold text-foreground'>
                  Documentation
                </h4>
              </div>
              <p className='text-sm font-medium'>
                Get help with writing, understanding, or improving your project documentation.
              </p>
            </div>
          </div>
        </div>
      )}

      {messages.length > 0 && (
        <div className='sticky top-6 w-full max-w-screen-sm mx-auto py-8 z-[87]'>
          <div className='absolute top-0 left-0 p-2 px-6 border w-full rounded-lg bg-neutral-900 flex items-center justify-between'>
            <div>
              <h3 className='font-bold'>Ez<span className='bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent '>Buddy</span></h3>
            </div>

            <div>
              <button className='flex gap-2 font-medium items-center text-sm border rounded-md text-red-500 p-2'  onClick={() => setMessages([])}>
                <Paintbrush size={20}/>
                Clear chat
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='space-y-4 max-w-screen-sm mx-auto py-10'>
        {htmlMessages.map((msg, index) => 
           (
            <>
              <div key={index} className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-foreground/5 text-foreground' : 'bg-violet-400/10 text-foreground'}`}>
                <Suspense fallback="loading...">
                  <TiptapAnswerAutomaticEzBuddyReadOnly answer={msg.message}/>
                </Suspense>
              </div>
              {msg.role === "user" && (
                <div className='absolute right-0 '>
                  <Avatar>
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                </div>
              )}
            </>
          )
        )}
        <div className="ai-response">
          {isLoading && <div className="message model">Loading...</div>}
        </div>
      </div>
      <div className='fixed w-full max-w-screen-sm bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 z-[10]'>
        <form onSubmit={handleClick} className='flex gap-2 items-center'>
          <Textarea ref={inputRef} className='w-full h-12 max-h-64 min-h-12' placeholder='Write something here' onChange={(e) => setText(e.target.value)} value={text} />
          <Button type='submit' className='bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200' size={"icon"}><FaPaperPlane size={20} /></Button>
        </form>
        <p className='text-center font-medium text-xs text-muted-foreground mt-2'>
          EzBuddy is currently in beta phase. It cannot save chat history
        </p>
      </div>
    </div>
  )
}

export default AITest
