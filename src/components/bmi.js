import React, { useState } from 'react';
import './bmi.css'; 


function BMI() {
  // Define state variables to store user input
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  // Function to calculate BMI
  const calculateBMI = () => {
    // Ensure age, height, and weight are numeric
    if (!isNaN(age) && !isNaN(height) && !isNaN(weight)) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeters * heightInMeters);

      // Round BMI to two decimal places
      const roundedBMI = parseFloat(bmi.toFixed(2));

      // Update state with the calculated BMI
      setBmiResult(roundedBMI);
    } else {
      // Handle invalid input
      setBmiResult(null);
      alert('Please enter valid numeric values for age, height, and weight.');
    }
  };

  return (
    <div className="background-container">
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <form>
        <div className="input-group">
          <label>Age (years):</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button type="button" onClick={calculateBMI}>
          Calculate BMI
        </button>
      </form>

      {bmiResult !== null && (
        <div className="result">
          <p>Your BMI: {bmiResult}</p>
        </div>
      )}

      <button onClick={() => window.location.href = '/inputs'}>
        Next
      </button>
    </div>
    </div>
  );
}

export default BMI;
