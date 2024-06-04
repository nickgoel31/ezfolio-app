import { TiptapAnswerAutomaticEzBuddyReadOnly } from '@/components/tiptap-read-only'
import { marked } from 'marked'
import React, { Suspense } from 'react'

interface HistoryMessage {
    role: string,
    message: string
  }

const MessagesList = ({messages}:{messages:HistoryMessage[]}) => {
  return (
    <>
    {messages.map(async (msg, index) => {
        const htmlMsg = await marked(msg.message)
        return (
          <div key={index} className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-foreground/5 text-foreground' : 'bg-violet-400/10 text-foreground'}`}>
            <Suspense fallback="loading...">
              <TiptapAnswerAutomaticEzBuddyReadOnly answer={htmlMsg}/>
            </Suspense>
          </div>
        )
    })}
    </>
  )
}

export default MessagesList