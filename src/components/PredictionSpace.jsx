import React from 'react';
import { useECG } from '../context/ECGContext';
import ECGCard from './ECGCard';

const PredictionSpace = () => {
  const { selectedEcg } = useECG();

  return (
    <div
      className={`w-full min-h-[288px] border-2 border-dashed rounded-lg flex items-center justify-center transition-colors border-gray-300 dark:border-gray-600`}>
      {selectedEcg ? (
        <ECGCard ecg={selectedEcg} />
      ) : (
        <div className="p-4 w-full h-full flex flex-col items-center justify-center space-y-4">
          <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div> {/* Filename placeholder */}
          <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div> {/* Plot placeholder */}
          <p className="text-sm text-gray-500 dark:text-gray-400">Select an ECG to view it here</p>
        </div>
      )}
    </div>
  );
};

export default PredictionSpace;
