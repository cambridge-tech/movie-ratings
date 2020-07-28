import React from "react";
import Chart from "chart.js";


function makeChartData(data, key) {
    return {t: new Date(data.date),
            y: data[key]} 
}

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);

        this.chartRef = React.createRef();
    }
    
    componentDidMount() {
        this.chart = new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Audience Rating',
                    data: this.props.timeline.map(d => makeChartData(d, 'audienceRating')),
                    borderColor: 'rgba(255, 0, 0, 1)',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    fill: false
                },
                {
                    label: 'Critic Rating',
                    data: this.props.timeline.map(d => makeChartData(d, 'criticRating')),
                    borderColor: 'rgba(0, 0, 255, 1)',
                    backgroundColor: 'rgba(0, 0, 255 ,0.1)',
                    fill: false
                }]
            },
            options: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    xAxes: [{
                        type: 'time',
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            suggestedMin: 0,
                            suggestedMax: 100
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Rating'
                        }
                    }]
                }
            }
        })
    }

    componentDidUpdate() {
        this.chart.data.datasets[0].data = this.props.timeline.map(d => makeChartData(d, 'audienceRating'));
        this.chart.data.datasets[1].data = this.props.timeline.map(d => makeChartData(d, 'criticRating'))
        this.chart.update();
    }

    render() {
        return (
            <div>
                <h3>Title: {this.props.title}</h3>
                <canvas ref={this.chartRef}
                        height="500px"
                        width="800px"/>
            </div>
        )
    }
}
