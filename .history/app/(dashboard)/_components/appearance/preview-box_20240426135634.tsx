"use client"

import { useEffect, useRef } from "react";

const PreviewBox = ({ username }: { username: string }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const reloadIframe = () => {
        if (iframeRef.current) {
            iframeRef.current.contentDocument?.location.reload();
        }
    };
    

    return (
        <div className='flex-[1] border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
            <iframe id="preview-iframe" ref={iframeRef} src={`https://www.ezfolio.social/${username}`} className='border-0 w-full h-full' name="myiFrame" scrolling="no"></iframe>
            <button onClick={reloadIframe}>Reload iframe</button>
        </div>
    );
}

export default PreviewBox;
