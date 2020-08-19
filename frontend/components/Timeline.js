import React from "react";
import Chart from "chart.js";


let chart;

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.renderChart();
    }

    componentWillUnmount() {
        this.chart.destroy();
    }

   /**
    * Select color from given palette for line styles.
    * For more info on context properties:
    * https://www.chartjs.org/docs/latest/general/options.html#option-context
    */
    pickColor = (context) => {
        let colors = this.props.colorScheme;
        let index = context.datasetIndex % colors.length;

        return colors[index];
    }

    renderChart = () => {
        this.chart = new Chart(this.chartRef.current, {
            type: 'line',
            data: {
                datasets: this.props.datasets
            },
            options: {
                responsive: true,
                elements: {
                    line: {
                        fill: false,
                        borderColor: this.pickColor.bind(this),
                        tension: 0
                    },
                    point: {
                        backgroundColor: this.pickColor.bind(this)
                    }
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                    xAxes: [{
                        type: 'time'
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

    render() {
        return (
            <canvas ref={this.chartRef} />
        )
    }

    static defaultProps = {
        colorScheme: ["#0c4767","#ff8c42","#96616b","#1b998b","#274156"]
    }
}

export default Timeline;
