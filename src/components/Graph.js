import React, { useState, useEffect } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Bar } from 'react-chartjs-2';



const state = {
    labels: ['January', 'February', 'March',
            'April', 'May','June', 'July','August','September','October','November','December'],
        datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56, 41, 33, 11 ,10, 14, 69, 71]
            }
        ]
}


const Graph = () => {

    const [graphdata, setgraphdata] = useState({
        labels: ['January', 'February', 'March',
            'April', 'May','June', 'July','August','September','October','November','December'],
        datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56, 41, 33, 11 ,10, 14, 69, 71]
            }
        ]
    })
    useEffect(() => {
        setgraphdata(state)
    }, [])

    return (
        <div>

            <Line
                data={graphdata}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}

export default Graph


