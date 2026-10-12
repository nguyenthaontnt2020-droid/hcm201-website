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
    <section id="overview" style={{ padding: '3rem 1rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center', color: 'var(--primary)' }}>
        Khung Cấu Trúc Trọng Tâm
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
        {cards.map((c, idx) => (
          <div key={idx} className="card-hover" style={{
            padding: '2rem',
            border: '1px solid rgba(82, 183, 136, 0.2)',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--card-bg)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent)', display: 'block', marginBottom: '0.8rem' }}>
              {c.step}
            </span>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.8rem' }}>
              {c.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Overview;