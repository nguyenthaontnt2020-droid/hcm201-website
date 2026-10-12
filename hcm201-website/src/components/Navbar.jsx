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
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        KTCT - GROUP 3
      </div>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '1.5rem',
        margin: 0,
        padding: 0
      }}>
        <li><a href="#overview" style={{ color: '#fff', textDecoration: 'none' }}>Tổng quan</a></li>
        <li><a href="#podcasts" style={{ color: '#fff', textDecoration: 'none' }}>Podcasts</a></li>
        <li><a href="#chapters" style={{ color: '#fff', textDecoration: 'none' }}>Nội dung</a></li>
        <li><a href="#quiz" style={{ color: '#fff', textDecoration: 'none' }}>Trắc nghiệm & Q&A</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;