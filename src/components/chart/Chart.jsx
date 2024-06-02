import React, { memo } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)', // Darker red
                    'rgba(54, 162, 235, 0.6)', // Darker blue
                    'rgba(255, 206, 86, 0.6)', // Darker yellow
                    'rgba(75, 192, 192, 0.6)', // Darker green
                    'rgba(153, 102, 255, 0.6)', // Darker purple
                    'rgba(255, 159, 64, 0.6)', // Darker orange
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', // Red
                    'rgba(54, 162, 235, 1)', // Blue
                    'rgba(255, 206, 86, 1)', // Yellow
                    'rgba(75, 192, 192, 1)', // Green
                    'rgba(153, 102, 255, 1)', // Purple
                    'rgba(255, 159, 64, 1)', // Orange
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <div className="chart">
                <Pie data={data} />
            </div>
        </>
    );
}

export default memo(Chart);
