import ReactECharts from 'echarts-for-react';

export const Graph = ({ data, metric, device }) => {
  const options = {
      title: {
      text: `${metric == "cls" ? "Cumulative Layout Shift" : "Largest Contentful Paint"} `,
      left: 'left',
      padding: [6, 0, 0, 0]
    }, grid: {
        left: "6%",
        right: "5%"
      },
    xAxis: {
      type: 'category',
      data: data.timeseries,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.values,
        type: 'line',
      },
    ],
  };
  console.log(data,"in graph");
console.log(data.timeseries,data.values);
  return (
    <div className='flex  justify-center'>
<div className="w-2/3 pt-3 pl-2 h-[400px] bg-white rounded-lg shadow-lg ">
      <ReactECharts 
        option={options} 
        style={{ height: '100%' }}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
    </div>
    
  );
};
