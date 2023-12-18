import React, { useState } from "react";
import './input.css'; 

function Input() {
  const [inputData, setInputData] = useState([]);
  const [gender, setGender] = useState("male"); // Default to 'male', you can set it based on user input

  // Define the attributes array with attribute names and ranges
  const attributes = [
    {
      name: "HDL",
      unit: "mg/dL",
      malerange: "40 and above",
      femalerange: "50 and above",
      childrange: "45 and above",
    },
    {
      name: "LDL",
      unit: "mg/dL",
      malerange: "100 and below",
      femalerange: "100 and below",
      childrange: "110 and below",
    },
    {
      name: "HS-CRP",
      unit: "mg/L",
      malerange: "3 and below",
      femalerange: "3 and below",
      childrange: "3 and below",
    },
    {
      name: "Sodium (Na)",
      unit: "mmol/L",
      malerange: "135 to 145",
      femalerange: "135 to 145",
      childrange: "136 to 145",
    },
    {
      name: "Potassium (K)",
      unit: "mmol/L",
      malerange: "3.5 to 5",
      femalerange: "3.5 to 5",
      childrange: "3.4 to 4.7",
    },
    {
      name: "Calcium (Ca)",
      unit: "mmol/L",
      malerange: "2.3 to 2.6",
      femalerange: "2.3 to 2.6",
      childrange: "2.2 to 2.7",
    },
    {
      name: "Magnesium (Mg)",
      unit: "mmol/L",
      malerange: "0.65 to 1.05",
      femalerange: "0.65 to 10.5",
      childrange: "0.7 to 0.85",
    },
    {
      name: "Albumin",
      unit: "g/dL",
      malerange: "3.5 to 5",
      femalerange: "3.5 to 5",
      childrange: "4 to 5.9",
    },
    {
      name: "Bilirubin",
      unit: "g/dL",
      malerange: "0.3 to 1",
      femalerange: "0.3 to 1",
      childrange: "1 to 12",
    },
    {
      name: "ALT",
      unit: "IU/L",
      malerange: "10 to 55",
      femalerange: "7 to 30",
      childrange: "5 to 30",
    },
    {
      name: "AST",
      unit: "IU/L",
      malerange: "10 to 40",
      femalerange: "9 to 25",
      childrange: "15 to 30",
    },
    {
      name: "Creatinine",
      unit: "mg/dL",
      malerange: "0.6 to 1.2",
      femalerange: "0.5 to 1.1",
      childrange: "0.3 to 0.7",
    },
    {
      name: "BUN",
      unit: "mg/dL",
      malerange: "8 to 24",
      femalerange: "6 to 21",
      childrange: "5 to 18",
    },
    {
      name: "Amylase",
      unit: "Units/L",
      malerange: "25 to 130",
      femalerange: "25 to 130",
      childrange: "5 to 65",
    },
    {
      name: "Lipase",
      unit: "Units/L",
      malerange: "0 to 160",
      femalerange: "0 to 160",
      childrange: "0 to 160",
    },
    {
      name: "HbA1c",
      unit: "mg/dL",
      malerange: "117 and below",
      femalerange: "117 and below",
      childrange: "117 and below",
    },
    {
      name: "TSH",
      unit: "mIU/L",
      malerange: "0.4 to 4",
      femalerange: "0.4 to 4",
      childrange: "0.5 to 5",
    },
    {
      name: "T4",
      unit: "μg/dL",
      malerange: "4.5 to 12",
      femalerange: "4.5 to 12",
      childrange: "6.5 to 11.5",
    },
    {
      name: "T3",
      unit: "ng/dL",
      malerange: "80 to 200",
      femalerange: "80 to 200",
      childrange: "100 to 180",
    },
    {
      name: "RBC",
      unit: "Million cells/μL",
      malerange: "4.5 to 6",
      femalerange: "4.5 to 6",
      childrange: "3.5 to 5",
    },
    {
      name: "WBC",
      unit: "cells/μL",
      malerange: "4,000 to 11,000",
      femalerange: "4,000 to 11,000",
      childrange: "4,500 to 13,500",
    },
    {
      name: "Platelet Count",
      unit: "cells/μL",
      malerange: "1,50,000 to 4,50,000",
      femalerange: "1,50,000 to 4,50,000",
      childrange: "1,50,000 to 4,50,000",
    },
    // Add more attributes as needed
  ];

  // Function to handle input changes
  const handleInputChange = (index, value) => {
    const updatedData = [...inputData];
    updatedData[index] = value;
    setInputData(updatedData);
  };

  // Function to handle form submission
  /*const handleSubmit = async () => {
    try {
      // Here, you would send the inputData to your server with the ML model
      // and get the outputData (diet recommendations) in response
      // For demonstration purposes, we'll assume you receive the output immediately
      const response = await fetch('/api/ml', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputData }),
      });

      // You can access the response data here if needed
      // const result = await response.json();
      // Do something with the response data if necessary
    } catch (error) {
      console.error('Error:', error);
    }
  };
*/
  return (
    <div className="input-container">
      <div className="input">
      <h2>Input Page</h2>
      <div className="buttongrp">
      <button onClick={() => setGender("male")} class="btn btn-border-pop">Male</button>
      <button  onClick={() => setGender("female")} class="btn btn-border-pop">Female</button>
      <button onClick={() => setGender("child")} class="btn btn-border-pop">Child</button>

      
      </div>
      
      <table className="input-table">
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Input</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through your attributes and create rows */}
          {attributes.map((attribute, index) => (
            <tr key={index}>
              <td>{attribute.name}</td>
              <td>
                <input
                  type="number"
                  value={inputData[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </td>
              <td>
                {gender === "male"
                  ? `${attribute.malerange} (${attribute.unit})`
                  : gender === "female"
                  ? `${attribute.femalerange} (${attribute.unit})`
                  : `${attribute.childrange} (${attribute.unit})`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={""}>Submit</button>
    </div>

    </div>
    
  );
}

export default Input;
