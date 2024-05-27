"use client"


import { addSkillsInDB } from '@/actions/skill/add-skills'
import { deleteSkillsInDB } from '@/actions/skill/delete-skills'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { popularSkills, softSkills, techSkills } from '@/data/skills'
  

const SkillsInfo = ({skills, userPageId}:{skills:string[],userPageId:string}) => {

    const [newSkillName, setNewSkillName] = useState<string>("")
    const [skillsArrayState, setSkillsArrayState] = useState<string[] | []>(skills)

    const [recentlySelectedSkill,setRecentlySelectedSkill] = useState<string>("")
    const [selectedSkills,setSelectedSkills] = useState<string[] | []>([])

    const handleAddSkill = () => {
        addSkillsInDB(newSkillName,userPageId)
        setSkillsArrayState(prev => [...prev,newSkillName])
        setNewSkillName("")
    }

    const handleDeleteSkill = (title:string) => {
        const filteredSkills = skillsArrayState.filter(skill => skill !== title)
        setSkillsArrayState(filteredSkills)
        deleteSkillsInDB(filteredSkills, userPageId)
    }
    



  return (
    <div className='w-full flex flex-col space-y-4'>
        <div className='space-y-1 flex items-center justify-between w-full'>
            <h5 className='text-xl font-semibold'>Your Skills</h5>
            {/* <AddSkillsBtn userPageId={userPageId}/> */}
        </div>

        <div className='flex flex-wrap flex-row md:flex-row items-center gap-3'>
            {skillsArrayState.map((skill,index) => (
                <div key={index} className='border rounded-lg p-3 shadow-sm bg-card hover:bg-neutral-100/5 cursor-pointer transition flex items-center gap-3'>
                    <p className='font-medium text-sm'>{skill}</p>
                    <Trash2 onClick={( )=> handleDeleteSkill(skill)} size={16} className='text-destructive'/>
                </div>
            ))}


            <div>
                <Dialog>
                    <DialogTrigger>
                        <div className='border rounded-lg p-3 shadow-sm bg-background hover:bg-neutral-100/5 cursor-pointer transition'>
                            <p className='font-medium text-sm'>+ Add a new skill</p>
                        </div>
                    </DialogTrigger>

                    <DialogContent className=''>
                        <DialogHeader>
                            <DialogTitle>
                                Add a skill
                            </DialogTitle>
                            <DialogDescription>
                                Select the name of your desired skill.
                            </DialogDescription>
                        </DialogHeader>

                        {/* <Input placeholder='Skill name' className='bg-foreground/5' onChange={(e) => setNewSkillName(e.target.value)}/> */}

                        <div className='flex items-start justify-start '>
                            <Command>
                                <CommandInput placeholder="Type a command or search..." />
                                <CommandList>
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup heading="Suggestions">
                                    {popularSkills.map((pop,index) => (
                                        <CommandItem key={index} onClick={() => {handleSelectSkill(pop)}}>{pop}</CommandItem>
                                    ))}
                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup heading="Technical Skills">
                                    {techSkills.map((tech,index) => (
                                        <CommandItem key={index}>{tech}</CommandItem>
                                    ))}
                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup heading="Soft Skills">
                                    {softSkills.map((soft,index) => (
                                        <CommandItem key={index}>{soft}</CommandItem>
                                    ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </div>


                        {/* <div className='flex justify-end w-full'>
                            <DialogClose disabled={newSkillName === ""}>
                                <Button disabled={newSkillName === ""} onClick={handleAddSkill}  type='submit'>
                                    Add
                                </Button>
                            </DialogClose>
                        </div> */}
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>
  )
}

export default SkillsInfo