import { Input } from '@/components/ui/input'
import { Eye, Search, ThumbsUp } from 'lucide-react'
import React, { Suspense } from 'react'
import AddQuestionBtn from '../../_components/questions/add-ques-btn'
import { getQuestionPosts } from '@/helpers/get-question-post'
import Link from 'next/link'
import { getUserById } from '@/helpers/get-user'
import { getLikesForQuestionPost } from '@/helpers/get-likes'
import { trendingQuestionsAlgorithm } from '@/algorithms/trending-ques'

const QuestionsPage = async () => {

  const questionPosts = await getQuestionPosts()
  const trendingQuestions = await trendingQuestionsAlgorithm();

  return (
    <div className='w-full h-full px-6 max-w-screen-xl mx-auto'>

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
            {questionPosts.map(async (q)=> {

              const quesUser = await getUserById(q.userId)
              const likes = await getLikesForQuestionPost(q.id)

              // Sample HTML text
              const htmlText = q.description

              // Regular expression to match HTML tags
              const htmlTagRegex = /<[^>]*>/g;

              // Remove HTML tags from the HTML text
              const plainText = htmlText.replace(htmlTagRegex, '');

              const formattedDate = q.createdAt.toLocaleDateString()

              return (
              <Link href={`/connect/questions/${q.id}`} key={q.id} className='bg-foreground/5 rounded-lg p-3'>
                <h3 className='text-lg font-semibold'>{q.title}</h3>
                <p className='text-muted-foreground text-sm font-medium line-clamp-2'>{plainText}</p>
                
                <div className='flex gap-2 pt-4 items-center'>
                  {/* <div className='font-medium text-muted-foreground text-xs flex items-center gap-1'>
                    <Eye size={18}/>
                    17
                  </div> */}
                  <div className='font-medium text-muted-foreground text-xs flex items-center gap-1'>
                    <ThumbsUp size={18}/>
                    {likes.length}
                  </div>

                  <p className='font-medium text-muted-foreground text-xs flex items-center gap-1'>•</p>

                  <div className='capitalize font-semibold text-muted-foreground text-xs'>
                    Asked by&nbsp;
                    <span className='text-foreground'>{quesUser?.username}</span>
                  </div>

                  <p className='font-medium text-muted-foreground text-xs flex items-center gap-1'>•</p>

                  <div className='capitalize font-semibold text-muted-foreground text-xs'>
                    <span className=''>{formattedDate}</span>
                  </div>
                </div>
              </Link>
          )})}
          </div>

          
          <div className='flex-[1] w-full'>
            <Suspense>
              <div className='bg-foreground/5 rounded-lg p-3 font-medium'>
                Trending Questions
                {trendingQuestions.map((ques) => (
                  <div key={ques.id}>
                    <Link clas href={`/connect/questions/${ques.id}`}>
                      {ques.title}
                    </Link>
                  </div>
                ))}

              </div>
            </Suspense>
          </div>
        </div>
      </div>
      <div className='pb-16'>
      
      </div>
    </div>
  )
}

export default QuestionsPage