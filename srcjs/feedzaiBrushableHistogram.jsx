import { reactShinyInput } from 'reactR';
import React, { PureComponent, Fragment } from "react";
import Histogram from "@feedzai/brushable-histogram";
import "@feedzai/brushable-histogram/lib/css/brushable-histogram.css";

const xAccessor = (datapoint) => datapoint.timestamp;
const yAccessor = (datapoint) => datapoint.total;

function histogramTooltipBar(bar) {
    return (
        <Fragment>
            <div className="fdz-css-graph-histogram-bars--tooltip-value">
                {Math.floor(bar.yValue)} Events
            </div>
        </Fragment>
    );
}

//const TextInput = ({ configuration, value, setValue }) => {
//  return <input type='text' value={value} onChange={e => setValue(e.target.value)}/>;
//};


export default class HistogramExample extends PureComponent {
    render() {
        return (
            <Histogram
                data={[
                    {
                      "timestamp": 1170070000000,
                      "total": 100
                    },
                    {
                      "timestamp": 1180070000000,
                      "total": 43
                    },
                    {
                      "timestamp": 1190070000000,
                      "total": 11
                    },
                    {
                      "timestamp": 1200070000000,
                      "total": 128
                    },
                    {
                      "timestamp": 1210070000000,
                      "total": 4
                    },
                    {
                      "timestamp": 1210070000001,
                      "total": 1
                    },
                    {
                      "timestamp": 1210070000003,
                      "total": 5
                    },
                    {
                      "timestamp": 1270070000000,
                      "total": 23
                    }
                  ]}
                xAccessor={xAccessor}
                yAccessor={yAccessor}
                tooltipBarCustomization={histogramTooltipBar}
            />
        );
    }
}

const HistogramInput = ({ configuration, value, setValue }) => {
  console.log("HistogramInput", configuration, value, setValue)
  return (
    new HistogramExample()
  );
};

reactShinyInput('.feedzaiBrushableHistogram', 'feedzaiBrushableHistogram', HistogramInput);
