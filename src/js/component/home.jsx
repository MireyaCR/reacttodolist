
import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create the array


// {tarea.map((element, index) => {
// 	return (         			 
// 		<li className={element}>texto de la tarea</li>		
// 	)});


const Home = () => {
	const [tareas, setTareas] = useState([]);
	return (
		<div className="container">
			<input type="text" placeholder='What needs to be done?' onKeyDown={(event)=>{
				if (event.key === 'Enter') {
					setTareas([...tareas, event.target.value])
					event.target.value=""
				}
			}} />
			<ul className="list-group flush">
				{tareas.map((element, index) => <li key={index+'li'} className="list-group-item"
				onMouseEnter={(event)=>{
					event.target.childNodes[1].style.visibility="visible"
				}}
				onMouseLeave={(event)=>{
					event.target.childNodes[1].style.visibility="hidden"
				}}>{element}
				<button key={index} onClick={(event)=>{
					tareas.splice(index,1)
					setTareas([...tareas])
				}}>x</button>
				</li>)}	
			</ul>
		</div>
)};


export default Home;
