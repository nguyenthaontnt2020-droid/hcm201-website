import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1b4332',
      color: '#b7e4c7',
      textAlign: 'center',
      padding: '2rem 1rem',
      marginTop: '3rem',
      fontSize: '0.88rem'
    }}>
      <p style={{ margin: '0 0 0.5rem 0', color: '#fff', fontWeight: 'bold' }}>
        Dự Án Thuyết Trình Môn Kinh Tế Chính Trị Mác - Lênin | GROUP 3
      </p>
      <p style={{ margin: '0 0 0.8rem 0' }}>
        Chủ đề: Giá trị kinh tế trong nền kinh tế thị trường
      </p>
      <div style={{ color: '#74c69d', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Group 3 - International University (VNU-HCM). All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;