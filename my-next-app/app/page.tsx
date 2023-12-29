// pages/index.js
'use client'
import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentInfo from './components/StudentInfo';
import SearchBar from './components/SearchBar';

const students = [
  '김우진',
  '김현',
  '방승희',
  '변호녕',
  '소사무엘',
  '송영준',
  '신동현',
  '오승민',
  '유승민',
  '윤준현',
  '이민구',
  '이유안',
  '이채이',
  '정영식',
  '최성민',
  '최은철',
  '홍문기',
];

const Home = () => {
  const [selectedStudent, setSelectedStudent] = useState('신동현');

  const onSelectStudent = (event) => {
    const selectedItem = event.target;
    if (selectedItem.classList.contains('student-list-item')) {
      setSelectedStudent(selectedItem.textContent);
    }
  };

  const onSearch = () => {
    const searchInput = document.getElementById('search-input').value;
    const foundStudent = students.find((student) => student.includes(searchInput));

    if (foundStudent) {
      setSelectedStudent(foundStudent);
    } else {
      alert('학생을 발견하지 못하였습니다.');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div id="menu">
        <StudentList students={students} onSelectStudent={onSelectStudent} />
      </div>

      <div id="content" style={{ flexGrow: 1, padding: '10px', marginLeft: '164px' }}>
        <StudentInfo name={selectedStudent} />
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Home;