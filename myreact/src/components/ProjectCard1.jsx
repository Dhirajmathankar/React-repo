import React, { useState } from 'react'

export const ProjectCard1 = (props) => {
	const [color, setColor] = useState("indigo");
	let ColorArray = [ 'white', 'black', 'green', 'gray', 'red', 'blue', 'pink', 'yellow', 'orange', 'indigo', 'purpal', 'brown',    'maroon', 'turquise', 'cyan', 'navy', 'gold', 'tomato', 'teal', 'aqua', 'violet', 'azura']
	let backgroundChangeFunction = (index) =>{
		
		switch(index){
			
			case 2 : setColor('black') ; break ;
			case 3 : setColor('green') ; break ;
			case 4 : setColor('gray') ; break ;
			case 5 : setColor('red') ; break ;
			case 6 : setColor('pink') ; break ;
			case 6 : setColor('yellow') ; break ;
			case 7 : setColor('orange') ; break ;
			case 8 : setColor('indigo') ; break ;
			case 9 : setColor('purpal') ; break ;
			case 10 : setColor('brown') ; break ;
			case 11 : setColor('maroon') ; break ;
			case 12 : setColor('turquise') ; break ;
			case 13 : setColor('cyan') ; break ;
			case 14 : setColor('navy') ; break ;
			case 15 : setColor('gold') ; break ;
			case 16 : setColor('tomato') ; break ;
			case 17 : setColor('teal') ; break ;
			case 18 : setColor('aqua') ; break ;
			case 19 : setColor('violet') ; break ;
			case 20 : setColor('azura') ; break ;
			case 21 : setColor('white') ; break ;
		}
	}
  return (
	<>
	  <div className='w-[100vw] h-[100vh]  flex  justify-center' style={{backgroundColor:color}}>
       <div className='bg-white p-20'>
        <h1 className='text-7xl font-bold'>hello Dhiraj</h1>
		<h1 className='font-serif'>hello Dhiraj</h1>
		<h1 className='font-mono'>hello Dhiraj</h1>
	   </div>

		<div className='bg-white w-[80vw] h-20 p-5 absolute bottom-10  text-center'> 
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2 hover:text-red-700 hover:bg-green-700 rounded-lg" onClick={()=>setColor('white')}>White</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('black')}} >Black</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('green')}}>Green</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('gray')}} >Gray</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('red')}}>Red</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('blue')}}>Blue</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('pink')}}>Pink</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('yellow')}}>Yellow</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('orange')}}>Orange</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('indigo')}}>Indigo</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('purpal')}}>Purpal</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('brown')}}>Brown</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('maroon')}}>Maroon</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('turqusie')}}>Turqusie</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('cyan')}}>Cyan</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('navy')}}>Navy</button>
		  <button className="nt-2 inline-flex cursor-pointer items-center text-sm font-semibold border-black border-2 rounded p-1 px-2 ml-2" onClick={()=>{setColor('gold')}}>Gold</button>
		  
		</div>
	  </div>
	</>
  )
}



export default ProjectCard1