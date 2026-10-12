import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#1a1a1a', 
      color: '#aaa', 
      textAlign: 'center', 
      padding: '2rem 1rem',
      marginTop: '4rem',
      fontSize: '0.9rem'
    }}>
      <p style={{ margin: '0 0 0.5rem 0', color: '#fff', fontWeight: 'bold' }}>
        Dự án Website Học Tập Môn Tư Tưởng Hồ Chí Minh (HCM201)
      </p>
      <p style={{ margin: '0 0 1rem 0' }}>
        Được xây dựng bằng React + Vite | Tham khảo giao diện Framer
      </p>
      <div style={{ color: '#666', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} HCM201 Project. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;