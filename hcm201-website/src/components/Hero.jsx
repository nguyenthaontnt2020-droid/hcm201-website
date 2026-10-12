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
      padding: '3rem 1rem',
      backgroundColor: '#e8f5e9',
      borderRadius: '12px',
      margin: '1.5rem 0'
    }}>
      <h1 style={{ fontSize: '2.2rem', color: '#2d6a4f', marginBottom: '0.5rem' }}>
        KINH TẾ CHÍNH TRỊ MÁC - LÊNIN
      </h1>
      <h2 style={{ fontSize: '1.4rem', color: '#40916c', fontWeight: 'normal', marginBottom: '1rem' }}>
        Giá Trị Kinh Tế Trong Nền Kinh Tế Thị Trường
      </h2>
      <p style={{ maxWidth: '750px', margin: '0 auto 1.5rem auto', color: '#555', lineHeight: '1.6' }}>
        Nghiên cứu về điều kiện tiền chuyển hóa thành tư bản, quá trình sản xuất giá trị thặng dư (m), tuần hoàn - chu chuyển tư bản và bản chất của lợi nhuận (p) trong kinh tế thị trường hiện đại.
      </p>

      <div style={{
        maxWidth: '700px',
        margin: '0 auto 1.5rem auto',
        padding: '1rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        border: '1px solid #b7e4c7'
      }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#1b4332' }}> Thành Viên Nhóm 3:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem', textAlign: 'left', fontSize: '0.88rem', color: '#2d6a4f' }}>
          {members.map((m, idx) => (
            <div key={idx}>• {m}</div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="#podcasts" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2d6a4f',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Nghe Bài Giảng
        </a>
        <a href="#quiz" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#fff',
          color: '#2d6a4f',
          border: '2px solid #2d6a4f',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Ôn Bài Trắc Nghiệm
        </a>
      </div>
    </section>
  );
}

export default Hero;