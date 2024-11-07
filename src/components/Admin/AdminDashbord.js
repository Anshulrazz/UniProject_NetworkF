import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement } from 'chart.js';
import './monitor.css';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement);

const MonitorDashboard = () => {
    const [totalUsers, setTotalUsers] = useState(250);
    const [totalDocuments, setTotalDocuments] = useState(120);
    const [totalProjects, setTotalProjects] = useState(45);
    const [totalIdeas, setTotalIdeas] = useState(35);

    const usersChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Users Growth',
                data: [30, 45, 50, 60, 90, 120],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    };

    const projectsChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Projects Created',
                data: [5, 10, 8, 12, 7, 3],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
            },
        ],
    };

    const ideasChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Total Ideas',
                data: [10, 12, 15, 18, 20, 25],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
            },
        ],
    };

    const documentsPieData = {
        labels: ['PDF', 'Word', 'Excel', 'Others'],
        datasets: [
            {
                label: 'Document Types',
                data: [60, 30, 20, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
            },
        ],
    };

    return (
        <div className="dashboard-container ice">
            <h2 className="dashboard-header">Monitor Dashboard</h2>

            <div className="summary">
                <div className="summary-item">
                    <p>Total Users: {totalUsers}</p>
                </div>
                <div className="summary-item">
                    <p>Total Documents: {totalDocuments}</p>
                </div>
                <div className="summary-item">
                    <p>Total Projects: {totalProjects}</p>
                </div>
                <div className="summary-item">
                    <p>Total Ideas: {totalIdeas}</p>
                </div>
            </div>

            {/* Render the charts in a row */}
            <div className="chart-row">
                <div className="chart-container">
                    <h3 className="chart-title">Users Growth</h3>
                    <Line data={usersChartData} />
                </div>

                <div className="chart-container">
                    <h3 className="chart-title">Projects Created Per Month</h3>
                    <Bar data={projectsChartData} />
                </div>

            </div>
            <div className="chart-row" >
                <br/>
                <br/>
                <br/>
                <div className="chart-container">
                    <h3 className="chart-title">Total Ideas</h3>
                    <Bar data={ideasChartData} style={{ height: '100px', width: '100px' }}/>
                </div>
                <div className="chart-container" style={{ height: '400px', width: '400px' }}>
                    <h3 className="chart-title">Document Types Distribution</h3>
                    <Pie data={documentsPieData} style={{ height: '400px', width: '400px' , marginLeft: '100px' }} />
                </div>
            </div>
        </div>
    );
};

export default MonitorDashboard;

