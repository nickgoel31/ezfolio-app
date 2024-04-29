export const themesList = [
    {name:'vs-dark',value:'vs-dark'},
    {name:'vs-light',value:'vs-light'},
    {name:'hc-black',value:'hc-black'},
    {name:'hc-white',value:'hc-white'},
]

export const boilerCodeHtml = 
`<div className='w-full h-[85vh] border shadow-sm rounded-xl bg-background relative overflow-hidden'>
    <div>Portfolio personal</div>
</div>
`

export const boilerCodeCss = 
`.features-card{
    overflow: hidden;
    background-image: radial-gradient(#ffffff37 1px, transparent 0);
    background-size: 45px 45px;
    
  }
  
  .features-card-dark{
    overflow: hidden;
    background-image: radial-gradient(#00000037 1px, transparent 0);
    background-size: 45px 45px;
    
  }
  
  .features-card:hover{
    overflow: hidden;
    background-image: radial-gradient(#ffffff24 1px, transparent 0);
    background-size: 50px 50px;
    background-position: -20px -20px;
    
  }
`

export const files = [
    {
        name:'index',
        language: 'html',
        value: boilerCodeHtml
    },
    {
        name:'style.css',
        language: 'css',
        value: boilerCodeCss
    }
]

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

