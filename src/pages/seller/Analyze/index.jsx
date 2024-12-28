import Information from "../../../Components/item/itemInfomation"
import { Bar, Line } from "react-chartjs-2"
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement,BarElement } from "chart.js"

import revenueData from "./data/revenueData.json"
import percentData from "./data/percentData.json"
ChartJS.register(
    Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement,BarElement
)
const Analyze = () => {

    const options = {
        plugins: {
            title: {
                display: true, // Hiển thị tiêu đề
                text: "Doanh thu tháng", // Nội dung tiêu đề
                font: {
                    size: 20, // Kích thước font chữ
                    weight: "bold", // Độ đậm chữ
                },
                color: "#333", // Màu chữ
                padding: {
                    top: 10,
                    bottom: 10, // Khoảng cách giữa tiêu đề và biểu đồ
                },
                align: "center", // Vị trí căn chỉnh: 'start', 'center', 'end'
            },
            legend: {
                display: true, // Hiển thị hoặc ẩn chú thích
                position: "top", // Vị trí của chú thích: 'top', 'left', 'bottom', 'right'
            },
        },
        responsive: true, // Biểu đồ sẽ phản hồi với kích thước cha
        maintainAspectRatio: false, // Không giữ tỉ lệ để chiếm toàn bộ div
        scales: {
            x: {
                beginAtZero: true,
            },
        },
    };

    const optionsBar = {
        responsive: true,
        plugins: {
            title: {
                display: true, // Hiển thị tiêu đề
                text: "Phần trăm yêu thích", // Nội dung tiêu đề
                font: {
                    size: 20, // Kích thước font chữ
                    weight: "bold", // Độ đậm chữ
                },
                color: "#333", // Màu chữ
                padding: {
                    top: 10,
                    bottom: 10, // Khoảng cách giữa tiêu đề và biểu đồ
                },
                align: "center", // Vị trí căn chỉnh: 'start', 'center', 'end'
            },
            legend: {
                display: true, // Hiển thị hoặc ẩn chú thích
                position: "top", // Vị trí của chú thích: 'top', 'left', 'bottom', 'right'
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Phần trăm (%)"
                }
            },
        }
    };

    return (
        <div className="flex gap-3 justify-center flex-col">
            {/* <div className=" flex justify-center gap-5">
                <Information style="w-[350px] h-[200px]" />
                <Information style="w-[350px] h-[200px]" />
                <Information style="w-[350px] h-[200px]" />
                <Information style="w-[350px] h-[200px]" />
            </div> */}
            <div className="flex flex-col items-center " >
                <div className="bg-textColorLight  rounded-md shadow-md h-[500px] w-[1460px] my-3">
                    <div className="w-[100%] h-[100%] p-2">

                        <Line
                            options={options}
                            data={{
                                labels: revenueData.map((data) => data.label),
                                datasets: [{
                                    label: "revenue",
                                    data: revenueData.map((data) => data.revenue),
                                    backgroundColor: "#a9bbd3",
                                    borderColor: "#e74c3c"

                                },
                                {
                                    label: "cost",
                                    data: revenueData.map((data) => data.cost),
                                    backgroundColor: "#a9bbd3",
                                    borderColor: "#f39c12"

                                },
                                ]
                            }}
                        />
                    </div>
                </div>
                <div className="flex gap-3 justify-between items-centerrounded-md shadow-md h-[500px] w-[1460px]">
                    <div className="bg-textColorLight rounded-md shadow-md h-[450px] w-[50%] flex justify-center items-center">
                        <Bar data={{
                            labels: percentData.map((item) => item.product),
                            datasets: [{
                                label: "Add to Cart (%)",
                                data: percentData.map((item) => item.addToCartPercentage),
                                backgroundColor: "#f39c12",
                                borderColor: "#f39c12",
                                borderWidth: 1
                            },
                            {
                                label: "Favorite (%)",
                                data: percentData.map((item) => item.favoritePercentage),
                                backgroundColor: "#e74c3c", // Màu đỏ
                                borderColor: "#e74c3c",
                                borderWidth: 1
                              }]
                        }} options={optionsBar} />

                    </div>
                    <div className="bg-textColorLight rounded-md shadow-md h-[450px] w-[50%] ">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Analyze