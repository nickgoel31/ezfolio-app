"use client"

import { useEffect } from "react";

const PreviewBox = ({username}:{username:string}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const reloadIframe = () => {
        useEffect(() => {
            if (iframeRef.current) {
              iframeRef.current.contentDocument?.location.reload(true);
            }
          }, []);
      };
  return (
    <div>
        <iframe id="preview-iframe" ref={iframeRef} src={`https://www.ezfolio.social/${username}`} className='border-0 w-full h-full' name="myiFrame" scrolling="no"></iframe>
        <button onClick={reloadIframe}>Reload iframe</button>
    </div>
  )
}

export default PreviewBox