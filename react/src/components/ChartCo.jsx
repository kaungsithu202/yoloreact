import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart}  from 'chart.js/auto';

const ChartCo = (props) => {
  return (
		<div>
			<Line
				data={props.chartData}
				options={{
					responsive: true,
					maintainAspectRatio: true,
					tension: 0.2,
					backgroundColor: "rgba(29,117,179,0.2)",
					borderColor: "rgba(29,117,179,0.81)",
					fill: true,
				}}
			/>
		</div>
	);
}

export default ChartCo;