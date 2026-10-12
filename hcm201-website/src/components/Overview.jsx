import React from 'react';

function Overview() {
  const cards = [
    {
      step: "01",
      title: "Tiền & Giá Trị Thặng Dư",
      desc: "Điều kiện tiên quyết để tiền biến thành tư bản (T - H - T'). Hàng hóa đặc biệt Sức Lao Động và nguồn gốc sinh ra giá trị thặng dư (m)."
    },
    {
      step: "02",
      title: "Tư Bản & Chu Chuyển",
      desc: "Phân loại Tư bản bất biến (c) - Khả biến (v), Tư bản cố định - Lưu động. Tuần hoàn 3 giai đoạn và tốc độ chu chuyển tư bản."
    },
    {
      step: "03",
      title: "Lợi Nhuận trong KTTT",
      desc: "So sánh chi tiết Lợi nhuận (p) và Giá trị thặng dư (m), ứng dụng quản trị doanh nghiệp và các hiện tượng kinh tế thực tế."
    }
  ];

  return (
    <section id="overview" style={{ padding: '3rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center', color: 'var(--primary, #1b4332)' }}>
        Khung Cấu Trúc Trọng Tâm
      </h2>

      {/* Bố cục 3 cột nằm trên cùng 1 đường ngang */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        width: '100%'
      }}>
        {cards.map((c, idx) => (
          <div key={idx} className="card-hover" style={{
            padding: '1.8rem 1.5rem',
            border: '1px solid rgba(82, 183, 136, 0.25)',
            borderRadius: '16px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}>
            <span style={{ fontSize: '2rem', fontWeight: '800', color: '#52b788', display: 'block', marginBottom: '0.6rem' }}>
              {c.step}
            </span>
            <h3 style={{ color: '#1b4332', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.8rem', lineHeight: '1.4' }}>
              {c.title}
            </h3>
            <p style={{ color: '#526358', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Overview;