import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const labels = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    
    for (let i = 5; i >= 0; i--) {
        const monthIndex = (today.getMonth() - i + 12) % 12;
        labels.push(months[monthIndex]);
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Dummy Data',
                data: labels.map(() => Math.floor(Math.random() * 100) + 10),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Last 6 Months Data',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
