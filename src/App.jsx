import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import { Graph } from './components/Graph';


const metricOptions = [
  { value: 'lcp', label: 'Largest Contentful Paint (LCP)' },
  { value: 'cls', label: 'Cumulative Layout Shift (CLS)' },
];

const deviceOptions = [
  { value: 'mobile', label: 'Mobile' },
  { value: 'desktop', label: 'Desktop' },
];

const chartTypeOptions = [
  { value: 'line', label: 'Line Chart' },
  { value: 'bar', label: 'Bar Chart' },
  { value: 'area', label: 'Area Chart' },
];

function App() {
  const [metric, setMetric] = useState('lcp');
  const [device, setDevice] = useState('mobile');
  const [chartType, setChartType] = useState('line');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        // Ensure data is an array
      

        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setData([]); // Reset data to empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [metric, device]);
  console.log(data,"app");

  return (
    <div className="max-w-screen-2xl h-screen
     bg-gray-100 mx-auto p-5">
      <Navbar />
      <h1 className="text-center text-3xl font-bold mt-10 mb-5">Performance Report</h1>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-8 w-full">
          <div className="p-2 text-lg text-slate-400 w-63 bg-gray-100">
            <div className="text-black">Metric</div>
            <Dropdown
              options={metricOptions}
              value={metric}
              onChange={setMetric}
            />
          </div>
          <div className="p-2 text-lg text-slate-400 w-[270px] bg-gray-100">
            <div className="text-black">Device</div>
            <Dropdown
              options={deviceOptions}
              value={device}
              onChange={setDevice}
            />
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-[400px] bg-white rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

{!loading && !error && (<Graph data={data} metric={metric} device={device}></Graph>)}

       
      </main>
    </div>
  );
}

export default App;