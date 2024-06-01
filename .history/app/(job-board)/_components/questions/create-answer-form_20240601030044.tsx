import React from 'react'

const CreateNewAnswer = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Create New Answer</h1>
        </div>
        <div>
            <form>
            <div>
                <label htmlFor="answer">Answer</label>
                <textarea name="answer" id="answer" cols={30} rows={10}></textarea>
            </div>
            <div>
                <button type='submit' className='bg-primary text-white px-4 py-2 rounded-md'>Submit</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CreateNewAnswer