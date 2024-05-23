import React from 'react'
// import Dataset from './Dataset';

const Lesson2 = ({ data }) => {
  return (
	<>
		<div>
			Contentvfvv
		</div>
		<div>
			
		<table>
			<thead>
				<tr>
					<th>S/N</th>
					<th>Name</th>
					<th>Surname</th>
					<th>Age</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th>S/N</th>
					<th>Name</th>
					<th>Surname</th>
					<th>Age</th>
				</tr>
			</tfoot>
			<tbody>
				{data && data.map((all, index) =>(
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{all.name}</td>
						<td>{all.surname}</td>
						<td>{all.age}</td>
					</tr>
		))}
			</tbody>
			
		</table>
		</div>
	</>
  )
}

export default Lesson2;
