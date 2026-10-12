import React from 'react';

function Hero() {
  const members = [
    { name: "Nguyễn Tô Ngọc Thảo", id: "ITITIU25035" },
    { name: "Nguyễn Đặng Thanh Ngân", id: "FAECIU24067" },
    { name: "Phạm Vũ Khánh Linh", id: "BTBTIU21219" },
    { name: "Lê Huyền Trinh", id: "BTBCIU24040" },
    { name: "Nguyễn Ngọc Thủy Tiên", id: "BTBCIU24037" },
    { name: "Nguyễn Hoàng Phương Nhi", id: "BTBCIU24050" }
  ];

  return (
    <section style={{
      textAlign: 'center',
      padding: '4rem 2rem 3rem 2rem',
      background: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
      borderRadius: '24px',
      margin: '1.5rem 0 2rem 0',
      color: '#fff',
      boxShadow: 'var(--shadow-md)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <span style={{
        backgroundColor: 'rgba(82, 183, 136, 0.2)',
        color: '#74c69d',
        border: '1px solid rgba(116, 198, 157, 0.3)',
        padding: '0.4rem 1.2rem',
        borderRadius: '30px',
        fontSize: '0.85rem',
        fontWeight: '700',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        display: 'inline-block',
        marginBottom: '1.2rem'
      }}>
        Kinh Tế Chính Trị Mác - Lênin
      </span>

      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.25', marginBottom: '0.8rem', letterSpacing: '-0.5px' }}>
        Giá Trị Kinh Tế Trong Nền Kinh Tế Thị Trường
      </h1>

      <p style={{ maxWidth: '680px', margin: '0 auto 2.5rem auto', color: '#d8f3dc', fontSize: '1.05rem', lineHeight: '1.6' }}>
        Nghiên cứu quy luật vận động của tư bản, bản chất giá trị thặng dư và lợi nhuận trong nền kinh tế hiện đại.
      </p>

      {/* Card Thành viên thiết kế đẹp mắt */}
      <div style={{
        maxWidth: '850px',
        margin: '0 auto 2.5rem auto',
        padding: '1.8rem',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.12)'
      }}>
        <h3 style={{ margin: '0 0 1.2rem 0', fontSize: '0.95rem', color: '#b7e4c7', textTransform: 'uppercase', letterSpacing: '1px' }}>
          👥 Thành Viên Thực Hiện (Group 3)
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0.8rem',
          textAlign: 'left'
        }}>
          {members.map((m, idx) => (
            <div key={idx} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '0.6rem 1rem',
              borderRadius: '10px',
              fontSize: '0.88rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontWeight: '600', color: '#fff' }}>{m.name}</span>
              <span style={{ fontSize: '0.78rem', color: '#95d5b2' }}>{m.id}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
        <a href="#youtube-lectures" style={{
          padding: '0.9rem 2rem',
          backgroundColor: '#52b788',
          color: '#1b4332',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '0.98rem',
          boxShadow: '0 4px 14px rgba(82, 183, 136, 0.4)',
          transition: 'all 0.2s'
        }}>
          ▶ Xem Bài Giảng YouTube
        </a>
        <a href="#kahoot-quiz" style={{
          padding: '0.9rem 2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '0.98rem'
        }}>
          🎮 Ôn Tập Kahoot
        </a>
      </div>
    </section>
  );
}

export default Hero;