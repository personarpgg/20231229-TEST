// components/StudentList.js
import React from 'react';

const StudentList = ({ students, onSelectStudent }) => (
    <ul className="student-list" onClick={onSelectStudent}>
        {students.map((student, index) => (
            <li key={index} className="student-list-item">
                {student}
            </li>
        ))}
    </ul>
);

export default StudentList;
