
import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const [tareas, setTareas] = useState([]);
	return (
		<div className="container bg-success bg-opacity-10 h-25 mt-4 p-5 w-50 rounded">
			<h3 className="text-center text-muted">Tasks</h3>
			<div className="border border-light border-bottom-0 mt-0 rounded">
			<input className="form-control-md w-100 border-0 bg-dark bg-opacity-10 text-muted rounded" type="text" placeholder='What needs to be done?' onKeyDown={(event)=>{
				if (event.key === 'Enter') {
					setTareas([...tareas, event.target.value])
					event.target.value=""
				}
			}} />
			<ul className="list-group list-group-flush">
				{tareas.map((element, index) => <li key={index+'li'} className="list-group-item bg-light bg-opacity-10"
				onMouseEnter={(event)=>{
					event.target.childNodes[1].style.visibility="visible"
				}}
				onMouseLeave={(event)=>{
					event.target.childNodes[1].style.visibility="hidden"
				}}>{element}
				<button type="button" className="btn-close float-end" key={index} onClick={(event)=>{
					tareas.splice(index,1)
					setTareas([...tareas])
				}}> </button>
				</li>)}	
			</ul>
			</div>
				<div className="bg-light bg-opacity-10 border-light border-top shadow-sm mt-0 p-1 rounded"><small className="mx-1">{tareas.length} Task</small></div>
				<div className="bg-light bg-opacity-10 border-light shadow-sm mt-0 p-1 mx-2 rounded"></div>
				<div className="bg-light bg-opacity-10 border-light shadow-sm mt-0 p-1 mx-3 rounded"></div>			
		</div>
)};


export default Home;
