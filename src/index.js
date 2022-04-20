// npm install chart.js --save - chart.js library installation

import Chart from 'chart.js'

const container = document.getElementById('myChart');
const btn = document.getElementById('btn');

const prepareChart = () => {
    const DataSet = (size, value, label) => {
        const generateValues = () =>
        [...Array(size)]
            .fill(value)
            .map(v => v *Math.random());

        const generateNumber = (min, max) =>
            Math.random() * (max - min) + min;
        const generateRGB = () =>
            [...Array(size)]
                .map(v => [generateNumber(1, 255), generateNumber(1, 255), generateNumber(1, 255)]);

        const generateLabels = () =>
            [...Array(size).keys()]
                .map(v => `${label} NO. ${v + 1}`);

        const generateColorsAndBorders = () => {
            const arr = generateRGB();
            return [
                arr.map(v => `rgba(${v[0]}, ${v[1]}, ${v[2]}, 0.2)`),
                arr.map(v => `rgba(${v[0]}, ${v[1]}, ${v[2]}, 1)`)
            ]
        };
        const colorAndBorders = generateColorsAndBorders();

        return {
            labels: generateLabels(),
            values: generateValues(),
            colors: colorAndBorders[0],
            borders: colorAndBorders[1]
        };
    };
    const SIZE = 6;
    const VALUE = 10;
    const LABEL = 'SALARY';
    
}

