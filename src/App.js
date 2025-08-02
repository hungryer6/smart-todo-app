import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>📝 Smart Todo App</h1>
        <p>당신의 할 일 목록을 간단하고 똑똑하게 관리하세요.</p>
        <ul>
          <li>✅ 할 일 추가</li>
          <li>🗂️ 상태별로 정렬</li>
          <li>🧠 중요도 기반 추천 (예정)</li>
        </ul>
        <p>이 앱은 React로 만들었고, Vercel에 배포되었습니다.</p>
      </header>
    </div>
  );
}

export default App;
