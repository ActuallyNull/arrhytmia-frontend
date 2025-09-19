import React, { useState, useEffect } from 'react';
import DraggableECGCard from './DraggableECGCard';
import PredictionControl from './PredictionControl';
import axios from 'axios';

const PredictionView = () => {
  const [ecgs, setEcgs] = useState([]);

  // Debug: log env var at component mount
  console.log('VITE_API_URL in PredictionView:', import.meta.env.VITE_API_URL);
  console.log(import.meta.env)
  const [droppedECGFilename, setDroppedECGFilename] = useState(null);

  useEffect(() => {
    const fetchShowcaseECGs = async () => {
      try {
  const API_BASE_URL = "https://pp-arrhytmia-backend.onrender.com";
          console.log('VITE_API_URL:', API_BASE_URL);
  const response = await axios.get(`${API_BASE_URL}/showcase-ecgs?folder_type=prediction`);
    console.log('API response in PredictionView:', response.data);
    setEcgs(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching showcase ECGs:', error);
      }
    };
    fetchShowcaseECGs();
  }, []);

  const handleDrop = (ecg) => {
    setDroppedECGFilename(ecg.filename);
  };

  const showcaseECGs = ecgs.filter(ecg => ecg.filename !== droppedECGFilename);
  const droppedECG = ecgs.find(ecg => ecg.filename === droppedECGFilename);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Showcase ECGs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {showcaseECGs.map((ecg) => (
          <DraggableECGCard key={ecg.filename} ecg={ecg} />
        ))}
        {droppedECG && <div className="border-2 border-dashed rounded-lg" />}
      </div>
      <PredictionControl droppedECG={droppedECG} onDrop={handleDrop} />
    </div>
  );
};

export default PredictionView;