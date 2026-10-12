import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#1b4332',
      color: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '0.5px' }}>
        KTCT - GROUP 3
      </div>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '1.5rem',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#overview" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}>Tổng quan</a></li>
        <li><a href="#youtube-lectures" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}>Video Bài giảng</a></li>
        <li><a href="#chapters" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}>Nội dung Slide</a></li>
        <li><a href="#kahoot-quiz" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem' }}>Trắc nghiệm Kahoot</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;