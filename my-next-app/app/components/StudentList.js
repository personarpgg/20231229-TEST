// components/StudentList.js

import React from 'react';

const StudentList = ({ students, onSelectStudent, selectedStudent }) => {
  const handleSelectStudent = (student) => {
    console.log('Selected student:', student);
    onSelectStudent(student);
  };

  return (
    <ul className="student-list">
      {students.map((student, index) => (
        <li
          key={index}
          className={`student-list-item${selectedStudent === student ? ' selected' : ''}`}
          onClick={() => handleSelectStudent(student)}
        >
          {selectedStudent === student && '■'} {student}
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
