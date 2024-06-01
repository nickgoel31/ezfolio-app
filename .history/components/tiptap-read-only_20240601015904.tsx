import React from 'react'

const TiptapReadOnly = ({description}:{description:string}) => {
  return (
    <div>
        <EditorContent  editor={editor} placeholder='Write about your query in detail here' />
    </div>
  )
}

export default TiptapReadOnly