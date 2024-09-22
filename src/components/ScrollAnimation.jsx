import React from 'react'
import useScrollReveal from '../customhook/useScrollReveal';

export const ScrollAnimation = ({children}) => {
    //Home Section
    useScrollReveal('.home .content h3',{delay: 200}); 
    useScrollReveal('.home .content p',{delay: 200}); 
    useScrollReveal('.home .content .btn',{delay: 200}); 
    
    useScrollReveal('.home .image',{delay: 400}); 
    useScrollReveal('.home .linkedin',{interval: 600}); 
    useScrollReveal('.home .github',{interval: 800}); 
    useScrollReveal('.home .twitter',{interval: 1000});
    useScrollReveal('.home .telegram',{interval: 600}); 
    useScrollReveal('.home .instagram',{interval: 600}); 
    useScrollReveal('.home .dev',{interval: 600}); 
    //About Section
    useScrollReveal('.about .content h3',{delay: 300});
    useScrollReveal('.about .content .tag',{delay: 400}); 
    useScrollReveal('.about .content p',{delay: 300}); 
    useScrollReveal('.about .content .box-container',{delay: 300}); 
    useScrollReveal('.about .content .resumebtn',{delay: 300}); 
    //Skills Section
    useScrollReveal('.skills .container',{interval: 200}); 
    useScrollReveal('.skills .container .bar',{delay: 400}); 
    //Education Section
    useScrollReveal('.education .box',{interval: 200}); 
    //project Section
    useScrollReveal('.work .box',{interval: 200}); 
    //Experience Section
    useScrollReveal('.experience .timeline',{delay: 400});
    useScrollReveal('.experience .timeline .container',{interval: 400});
    //Contact Section
    useScrollReveal('.contact .container',{delay: 350});
    useScrollReveal('.contact .container .form-group',{delay: 350});
  return (
    <>
        <div>{children}</div>
    </>
  )
}
