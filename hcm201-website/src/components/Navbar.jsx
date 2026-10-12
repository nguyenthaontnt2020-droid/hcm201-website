import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#1a1a1a', color: '#fff' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>HCM201</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0 }}>
        <li><a href="#overview" style={{ color: '#fff', textDecoration: 'none' }}>Tổng quan</a></li>
        <li><a href="#podcasts" style={{ color: '#fff', textDecoration: 'none' }}>Podcasts</a></li>
        <li><a href="#chapters" style={{ color: '#fff', textDecoration: 'none' }}>Nội dung</a></li>
        <li><a href="#quiz" style={{ color: '#fff', textDecoration: 'none' }}>Trắc nghiệm</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;