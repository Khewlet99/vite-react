import React from 'react';

const App = () => {
  // Array of objects
  const students = [
    {
      name: 'Kenean',
      year: 3
    },
    {
      name: 'Khewlet',
      year: 3
    },
    {
      name: 'lemmesa',
      year: 2
    },
    {
      name: 'kidus',
      year: 3
    }
  ];

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {/* Use Array.map() to render each object */}
        {students.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name}, <strong>Year:</strong> {student.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

