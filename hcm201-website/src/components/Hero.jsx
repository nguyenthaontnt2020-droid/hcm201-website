import React from 'react';

function Hero() {
  const members = [
    "Nguyễn Tô Ngọc Thảo (ITITIU25035)",
    "Nguyễn Đặng Thanh Ngân (FAECIU24067)",
    "Phạm Vũ Khánh Linh (BTBTIU21219)",
    "Lê Huyền Trinh (BTBCIU24040)",
    "Nguyễn Ngọc Thủy Tiên (BTBCIU24037)",
    "Nguyễn Hoàng Phương Nhi (BTBCIU24050)"
  ];

  return (
    <section style={{
      textAlign: 'center',
      padding: '3rem 1.5rem',
      backgroundColor: '#e8f5e9',
      borderRadius: '16px',
      margin: '1.5rem 0',
      border: '1px solid #b7e4c7'
    }}>
      <span style={{
        backgroundColor: '#2d6a4f',
        color: '#fff',
        padding: '0.3rem 0.8rem',
        borderRadius: '20px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Báo cáo Thuyết trình
      </span>
      <h1 style={{ fontSize: '2.2rem', color: '#1b4332', margin: '0.8rem 0 0.3rem 0' }}>
        KINH TẾ CHÍNH TRỊ MÁC - LÊNIN
      </h1>
      <h2 style={{ fontSize: '1.3rem', color: '#40916c', fontWeight: '500', marginBottom: '1.5rem' }}>
        Giá Trị Kinh Tế Trong Nền Kinh Tế Thị Trường
      </h2>

      <div style={{
        maxWidth: '750px',
        margin: '0 auto 1.5rem auto',
        padding: '1.2rem',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        textAlign: 'left'
      }}>
        <h3 style={{ margin: '0 0 0.8rem 0', fontSize: '1rem', color: '#1b4332', textAlign: 'center', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
          👥 Thành Viên Thực Hiện (Group 3)
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem', fontSize: '0.88rem', color: '#2d6a4f' }}>
          {members.map((m, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: '#52b788' }}>•</span> {m}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#youtube-lectures" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2d6a4f',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.95rem'
        }}>
          ▶ Xem Video Bài Giảng
        </a>
        <a href="#kahoot-quiz" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#864cbf',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.95rem'
        }}>
          🎮 Chơi Kahoot Trắc Nghiệm
        </a>
      </div>
    </section>
  );
}

export default Hero;