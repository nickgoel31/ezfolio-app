export const themesList = [
    {name:'vs-dark',value:'vs-dark'},
    {name:'vs-light',value:'vs-light'},
    {name:'hc-black',value:'hc-black'},
    {name:'hc-white',value:'hc-white'},
]

export const boilerCode = 
`<div className='w-full h-[85vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
        <div className='sticky top-0 w-full h-12 border-b'>

        </div>

        <div className='p-4 bg-foreground/[0.02] w-full h-full'>
        <CodeEditor
            value={code}
            language="html"
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
                fontSize:20,
                backgroundColor: "#0E0E10",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
        />
        </div>
    </div>`

export const fontSizeList = [
    {name:'10',value:10},
    {name:'12',value:12},
    {name:'14',value:14},
    {name:'16',value:16},
    {name:'18',value:18},
    {name:'20',value:20},
    {name:'22',value:22},
    {name:'24',value:24},
    {name:'26',value:26},
    {name:'28',value:28},
    {name:'30',value:30},

]