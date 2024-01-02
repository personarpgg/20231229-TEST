// page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import StudentInfo from './components/StudentInfo';
import SearchBar from './components/SearchBar';

const Home = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('신동현');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
      {/* 왼쪽 메뉴 */}
      <div id="menu" style={{ borderRight: '1px solid #ccc', padding: '10px' }}>
        <StudentList students={students} onSelectStudent={onSelectStudent} />
      </div>

      {/* 오른쪽 내용 영역 */}
      <div id="content" style={{ flexGrow: 1, padding: '10px', marginLeft: '164px' }}>
        <StudentInfo name={selectedStudent} />
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Home;