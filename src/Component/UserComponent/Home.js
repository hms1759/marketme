import React from 'react'

export default function Home() {
  return (
    <div id="Home" >
    <div className='Home_container'>
        <div className='home_img'>
            {/*market banner */}
           <img src='https://images.unsplash.com/photo-1589470288084-ecad61835772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFya2V0c3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='Banner'/>
        </div>
        <div className='home_txt'>
            <div>
                
            {/*Topic 1 */}
             <div className='txt_one'>This is the first Paragraph </div>
             
            {/*Topic 2 */}
             <div className='txt_two'> This is the Second Paragraph </div>
             
            {/*Topic 3 */}
             <div className='txt_three'> This is the third Paragraph </div>
            </div>
            
        </div>


    </div>
    
    <div className='spacer'></div>
    </div>
  )
}
