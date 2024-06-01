import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import AddQuestionBtn from '../../_components/questions/add-ques-btn'
import { getQuestionPosts } from '@/helpers/get-question-post'
import Link from 'next/link'

const QuestionsPage = async () => {

  const questionPosts = await getQuestionPosts()
  return (
    <div className='w-full h-full px-6'>

      <div className='space-y-14 lg:px-24'>
        <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col'>
                <h1 className='text-4xl font-bold leading-normal'>Questions</h1>
                <p className='text-muted-foreground text-sm font-medium'>
                    Ask questions to developers and get answers. 
                </p>
            </div>

            <div className='flex items-center gap-4'>
                <AddQuestionBtn />
                <div className='relative flex overflow-hidden rounded-lg border w-64'>
                    <div>
                        <Input className='w-full border-none focus:border-none focus' placeholder='Search your question'/>
                    </div>
                    <div className='absolute right-0 top-0 h-full px-2 py-0.5 flex items-center justify-center bg-foreground/[0.1] text-foreground font-semibold rounded-tr-lg rounded-br-lg cursor-pointer'>
                        <Search size={20}/>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex gap-4'>
          <div className='grid grid-cols-1 w-full gap-4 flex-[3]'>
            {questionPosts.map((q)=> (
              <Link href={`/connect/questions/${q.id}`} key={q.id} className='bg-foreground/5 rounded-lg p-3'>
                <h3 className='text-lg font-semibold'>{q.title}</h3>
                <p className='text-muted-foreground text-sm font-medium'>{q.description}</p>
              </Link>
            ))}
          </div>

          <div className='flex-[1] w-full'>
            <div className='bg-foreground/5 rounded-lg p-3'>Trending Questions</div>
          </div>
        </div>
      </div>
      <div className='pb-16'>
      
      </div>
    </div>
  )
}

export default QuestionsPage