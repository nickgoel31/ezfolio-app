import React from 'react'

const TiptapReadOnly = ({description}:{description:string}) => {
    const editor = useEditor({
        editable,
        content: `
            <p>
              This text is <strong>read-only</strong>. No matter what you try, you are not able to edit something. Okay, if you toggle the checkbox above you’ll be able to edit the text.
            </p>
            <p>
              If you want to check the state, you can call <code>editor.isEditable()</code>.
            </p>
          `,
        extensions: [StarterKit],
      })
  return (
    <div>
        <EditorContent  editor={editor} />
    </div>
  )
}

export default TiptapReadOnly