import ChartBar from './ChartBar';
import './Chart.css'

const Chart =(props)=>{

    const datapointValues = props.datapoints.map(datapoint =>
        datapoint.value
    );
    const maximumValue = Math.max(...datapointValues);
    return(
        <div className="chart">
            {
                props.datapoints.map(datapoint =>
                    <ChartBar value={datapoint.value} key={datapoint.label} maxValue={maximumValue} label={datapoint.label}  />
                )
            }
        </div>
    )

}

export default Chart