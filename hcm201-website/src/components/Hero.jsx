import React from 'react';

function Hero() {
  return (
    <section style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      margin: '2rem auto',
      maxWidth: '1000px'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#222' }}>
        Tư Tưởng Hồ Chí Minh (HCM201)
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 2rem' }}>
        Nơi tổng hợp kiến thức, bài giảng podcast, nội dung tóm tắt theo chương và các câu hỏi trắc nghiệm ôn tập môn học.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="#podcasts" style={{
          padding: '0.8rem 1.5rem',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Nghe Podcast
        </a>
        <a href="#quiz" style={{
          padding: '0.8rem 1.5rem',
          border: '1px solid #007bff',
          color: '#007bff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Làm Trắc Nghiệm
        </a>
      </div>
    </section>
  );
}

export default Hero;