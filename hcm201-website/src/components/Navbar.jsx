import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 3rem',
      backgroundColor: 'rgba(27, 67, 50, 0.95)',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        fontWeight: '800',
        fontSize: '1.35rem',
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{
          backgroundColor: '#52b788',
          color: '#1b4332',
          padding: '0.25rem 0.6rem',
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>KTCT</span>
        <span>GROUP 3</span>
      </div>

      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#overview" style={{ color: '#e8f5e9', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Tổng quan</a></li>
        <li><a href="#youtube-lectures" style={{ color: '#e8f5e9', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Video Bài giảng</a></li>
        <li><a href="#chapters" style={{ color: '#e8f5e9', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Nội dung Slide</a></li>
        <li><a href="#kahoot-quiz" style={{ color: '#e8f5e9', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Trắc nghiệm Kahoot</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;