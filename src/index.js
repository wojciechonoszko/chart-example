// npm install chart.js --save - chart.js library installation

import Chart from 'chart.js/auto';

import { getRelativePosition } from 'chart.js/helpers';

const ctx = document.getElementById('myChart');

// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 2
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

let data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
        {
            label: "My First dataset",
            //linia
            borderColor : 'rgba(236,115,87, 0.7)',
            pointBorderColor : 'rgba(236,115,87,0.7)',
            borderWidth : 2,
            //kolor tla i legendy
            fill: true, //czy wypelnic zbior
            backgroundColor : 'rgba(236,115,87,0.1)', //wplywa tez na kolor w legendzie
            //ustawienia punktu
            pointRadius : 4,
            pointBorderWidth: 1,
            pointBackgroundColor : 'rgba(255,255,255,1)',
            //ustawienia punkut hover
            pointHoverRadius: 4,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'rgba(255,255,255,1)',
            pointHoverBorderColor: 'rgba(236,115,87,1)',
            data: [50,30,40,30,32,25,30],
        },
        {
            label: "My Second dataset",
            borderColor : 'rgba(75,192,192, 0.7)',
            pointBorderColor : 'rgba(236,115,87,0.7)',
            borderWidth : 2,
            //kolor tla i legendy
            fill: true, //czy wypelnic zbior
            backgroundColor : 'rgba(236,115,87,0.1)', //wplywa tez na kolor w legendzie
            //ustawienia punktu
            pointRadius : 4,
            pointBorderWidth: 1,
            pointBackgroundColor : 'rgba(255,255,255,1)',
            //ustawienia punkut hover
            pointHoverRadius: 4,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'rgba(255,255,255,1)',
            pointHoverBorderColor: 'rgba(236,115,87,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
            label: "My Third dataset",
            borderColor : 'rgba(132,177,237, 0.7)',
            pointBorderColor : 'rgba(236,115,87,0.7)',
            borderWidth : 2,
            //kolor tla i legendy
            fill: true, //czy wypelnic zbior
            backgroundColor : 'rgba(236,115,87,0.1)', //wplywa tez na kolor w legendzie
            //ustawienia punktu
            pointRadius : 4,
            pointBorderWidth: 1,
            pointBackgroundColor : 'rgba(255,255,255,1)',
            //ustawienia punkut hover
            pointHoverRadius: 4,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'rgba(255,255,255,1)',
            pointHoverBorderColor: 'rgba(236,115,87,1)',
            data: [30, 20, 60, 50, 42, 15, 40],
        }
    ]
}

let options = {
    animation: {
        easing: "easeOutCubic",
        duration: 700
    },
    responsive: true, //responsywnosc
    legend: {
        position: 'bottom', //polozenie legendy
        display: true // pokazuj legende
    },
    hover: {
        mode: 'dataset' //jak pokazywac tooltipy po najechaniu na punkty wykresu
        //mode: 'label',
    },
    scales: {
        x: {//linie x
            gridLines: {
                zeroLineWidth: 1, //linia x=0
                zeroLineColor: 'rgba(0,0,0,0.3)', //kolor linii x=0
                color: 'rgba(0,0,0,0.05)', //kolor linii
                lineWidth: 1 //szerokosc linii

            },
            display: true, //czy pokazywac dolne opisy jednostek
            scaleLabel: {// tytul osi x
                display:true,
                labelString: 'Month',
                fontSize: 12,
                fontStyle: 'bold'
            },
            ticks: { //rozmiar jednostek
                fontSize:10    
            },
            labelFormatter: function(e) {
                return "x: " + e.value;

            }

        },
        yAxes: { //linie y
            gridLines: {
                zeroLineWidth: 1,
                zeroLineColor: 'rgba(0,0,0,0.3)',
                color: "rgba(0, 0, 0, 0.05)",
                lineWidth: 1
            },
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Wartość',
                fontSize: 13,
                fontStyle: 'bold'
            },
            ticks: {
                fontSize: 12,
                min: 0,
                max: 100
            }
        }

    },
    title: { //tytuł wykresu
        display: true,
        text: 'Przykładowy wykres'
    }
};

let myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
})


















// ====================================================================================================================

// const container = document.getElementById('myChart');
// const btn = document.getElementById('btn');

// const prepareChart = () => {
//     const DataSet = (size, value, label) => {

//         const generateValues = () =>
//             [...Array(size)]
//                 .fill(value)
//                 .map(v => v * Math.random());

//         const generateNumber = (min, max) =>
//             Math.random() * (max - min) + min;

//         const generateRGB = () =>
//             [...Array(size)]
//                 .map(v => [generateNumber(1, 255), generateNumber(1, 255), generateNumber(1, 255)]);

//         const generateLabels = () =>
//             [...Array(size).keys()]
//                 .map(v => `${label} NO. ${v + 1}`);

//         const generateColorsAndBorders = () => {
//             const arr = generateRGB();
//             return [
//                 arr.map(v => `rgba(${v[0]},${v[1]},${v[2]},0.2)`),
//                 arr.map(v => `rgba(${v[0]},${v[1]},${v[2]},1)`)
//             ]
//         };
//         const colorAndBorders = generateColorsAndBorders();

//         return {
//             labels: generateLabels(),
//             values: generateValues(),
//             colors: colorAndBorders[0],
//             borders: colorAndBorders[1]
//         };
//     };

//     const SIZE = 6;
//     const VALUE = 10;
//     const LABEL = 'SALARY';
//     const TITLE = 'SALARIES';
//     const data = DataSet(SIZE, VALUE, LABEL);

//     let chart = new Chart(container, {
//         type: 'bar',
//         data: {
//             labels: data.labels,
//             datasets: [{
//                 label: LABEL,
//                 data: data.values,
//                 backgroundColor: data.colors,
//                 borderColor: data.borders,
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             response: true,
//             maintainAspectRatio: false,
//             animation: {
//                 duration: 1000,
//                 onComplete: () => {
//                     btn.textContent = 'CHANGE DATA';
//                 }
//             },
//             legend: {
//                 display: false
//             },
//             title: {
//                 display: true,
//                 text: TITLE
//             }
//         }
//     });
    
//     function destroy() {
        
//         chart.destroy();
//     };
//     btn.addEventListener('click', (e) => {
//         btn.textContent = 'LOADING ...';
//         console.log(chart.id);

//         // if ((chart.id === 0) || (chart.id === 1)){
//         //     chart.destroy();
//         // }
//         destroy();
//         prepareChart();

//     });
    
    
// };



// function renderChart() {
//     let myChart = document.getElementById('myChart').getContext('2d');
//     console.log(myChart);
//     myChart.destroy();
//     myChart = new Chart(
//         document.getElementById('myChart')
//     )
// }


// window.addEventListener('load', prepareChart());





