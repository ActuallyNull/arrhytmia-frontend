import React from 'react';
import Plot from 'react-plotly.js';
import { useECG } from '../context/ECGContext';

const ECGCard = ({ ecg, isSelectable = false }) => {
  const { selectedEcg, setSelectedEcg } = useECG();
  const isSelected = isSelectable && selectedEcg && selectedEcg.filename === ecg.filename;

  if (!ecg) {
    return null;
  }

  const { filename, signal, fs } = ecg;
  const time = Array.from({ length: signal.length }, (_, i) => i / fs);

  return (
    <div
      onClick={isSelectable ? () => setSelectedEcg(ecg) : undefined}
      className={`relative w-full border p-4 rounded-lg shadow-sm bg-white dark:bg-gray-700 dark:border-gray-600 ${isSelected ? 'opacity-50' : ''}`}
      style={{
        cursor: isSelectable ? 'pointer' : 'default',
      }}
    >
      {isSelected && (
        <div className="absolute inset-0 bg-gray-500 opacity-50 rounded-lg"></div>
      )}
      <h3 className="font-semibold text-lg mb-2 dark:text-white">{filename}</h3>
      <div className="w-full h-64">
        <Plot
          data={[
            {
              x: time,
              y: signal,
              type: 'scatter',
              mode: 'lines',
              marker: { color: '#1f77b4' },
            },
          ]}
          layout={{
            autosize: true,
            margin: { l: 40, r: 40, b: 40, t: 40 },
            xaxis: { title: 'Time (s)' },
            yaxis: { title: 'Amplitude' },
          }}
          useResizeHandler={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default ECGCard;