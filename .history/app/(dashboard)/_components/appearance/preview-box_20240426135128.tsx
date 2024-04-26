import React from 'react'

const PreviewBox = () => {
  return (
    <div>
        <iframe id="preview-iframe" src={`https://www.ezfolio.social/${user.username}`} className='border-0 w-full h-full' name="myiFrame" scrolling="no"></iframe>
        <button onClick={reloadIframe}>Reload iframe</button>
    </div>
  )
}

export default PreviewBox