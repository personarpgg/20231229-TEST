[완료]
1. students 왼쪽 메뉴 활성화
    a. students 구성 
    useEffect를 사용하여 public의 data.json 파일로 아래 데이터 핸들링 완료
    
    {
    "students": [
        "김우진",
        "김현",
        "방승희",
        "변호녕",
        "소사무엘",
        "송영준",
        "신동현",
        "오승민",
        "유승민",
        "윤준현",
        "이민구",
        "이유안",
        "이채이",
        "정영식",
        "최성민",
        "최은철",
        "홍문기"
    ]
}

    b. students[] 클릭 시 글자 색과 특수 문자를 이용해 선택된 항목이 어떤 행목인지 구분

2. 메뉴 클릭 시 이름에 해당하는 내용 출력
    <div className="student-info">
        <div id="introduction">
            {name} 소개
            소개 내용
        </div>
        <div id="advantages">
            {name} 장점
            장점 내용
            </p>
        </div>
    </div>
3. 이름 검색 시 students[] 메뉴에서 검색어와 해당하는 값이 같을 경우 출력
const SearchBar = ({ onSearch }) => (
    <div id="search-bar">
        <input type="text" id="search-input" placeholder="Write your name." />
        <button id="show-button" onClick={onSearch}>
            Show
        </button>
    </div>
);


[예정]
1. students[] 에서 항목을 클릭 했을 경우 표시되는 특수문자가 따로 분리되어 표시되는 것
2. students[] 내용 등 좀 더 유동적으로 관리하고 처리 할 수 있을지 테스트
3. 디테일한 라이아웃 구성 ex) 세로 구분선 등
4. css로 구현되어있는 스타일 부분 테일 윈드로 변경 하여 적용

