import React from 'react'

const PreviewBox = ({username}:{username:string}) => {
    const reloadIframe = () => {
        const iframe = document.getElementById('preview-iframe') as HTMLIFrameElement | null;
        if (iframe) {
          iframe.contentDocument?.location.reload();
        }
      };
  return (
    <div>
        <iframe id="preview-iframe" src={`https://www.ezfolio.social/${user.username}`} className='border-0 w-full h-full' name="myiFrame" scrolling="no"></iframe>
        <button onClick={reloadIframe}>Reload iframe</button>
    </div>
  )
}

export default PreviewBox