'use client'
import React from 'react'
import { useStore } from './UseStore';

const Recurrence = () => {
    const { recurrence, setRecurrence, customInterval, setCustomInterval } = useStore();
    return (
      <div className="flex justify-center items-center">
        <label>Recurrence:</label>
        <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)} className='bg-gray-200 text-gray-800 rounded-lg p-2 m-2'>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
  
        {recurrence !== 'daily' && (
          <div className="ml-4">
            <label >Custom Interval:</label>
            <input
              type="number"
              min="1"
              value={customInterval}
              onChange={(e) => setCustomInterval(Number(e.target.value))}
              className='bg-gray-200 text-gray-800 rounded-lg p-2 m-2'
            />
          </div>
        )}
      </div>
    );  
}

export default Recurrence