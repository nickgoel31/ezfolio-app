"use client"

import { Input } from '@/components/ui/input'
import { SendIcon } from 'lucide-react';
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { onBoardingSchema } from '@/form-schemas';

const OnBoardingAI = () => {

    const [currentSection,setCurrentSection] = useState(3);

    // setTimeout(() => {
    //     setCurrentSection(2);
    // }, 3000);

    const section3Submit = (UserPageTitle:string) => {
        setUserDetails({pageTitle:UserPageTitle})
        setCurrentSection(4)
    }


    const [userDetails, setUserDetails] = useState({
        pageBio:"",
        pageTitle:"",
    })





    const form = useForm<z.infer<typeof onBoardingSchema>>({
        resolver: zodResolver(onBoardingSchema),
        defaultValues: {
          pageBio:"",
          pageTitle:"",
        },
    })

    const {isValid} = form.formState
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof onBoardingSchema>) {
        // createUserPageInDB(values,projects,username,imageUrl)
        // router.push("/d/redirect")
      }


  return (
    <div className='w-full h-full relative flex items-center justify-center'>

        {currentSection === 1 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-5xl leading-normal'>Hi! I'm <span className='text-violet-400'>Ez</span>Buddy</h1>
            <h1 className='font-semibold text-5xl'>Your personal Assistant</h1>
        </div>}

        {currentSection === 2 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-5xl leading-normal'>Let's set up your page</h1>
            
        </div>}

        {currentSection === 3 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-5xl leading-normal'>To start things off</h1>
            <h1 className='font-semibold text-5xl leading-normal'>What can I call you?</h1>
            
            <div className='relative'>
                <Input className='mt-8 bg-foreground/[0.05]' placeholder='Enter your name here'/>
                <button className='absolute right-0 top-0 h-full px-4 py-2 bg-violet-500 text-white font-semibold rounded-tr-lg rounded-br-lg'>
                    <FaPaperPlane />
                </button>
            </div>
            
        </div>}

        {currentSection === 4 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-5xl leading-normal'>Let's set up your page</h1>
            
        </div>}

        {/* AI INPUT TEXT FIELD */}
        {/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2  w-full max-w-screen-md rounded-lg'>
            <Input className='w-full h-full bg-foreground/[0.08]' placeholder='Type your message here...'/>
        </div> */}
    </div>
  )
}

export default OnBoardingAI