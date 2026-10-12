import React from 'react';

function Chapters() {
  const slides = [
    { num: '1', title: 'Điều kiện để Tiền chuyển hóa thành Tư bản', badge: 'T - H - T\'', content: (
      <div>
        <p style={{ margin: '0 0 0.5rem 0' }}><strong>Công thức vận động:</strong> T - H - T' (T' = T + ΔT)</p>
        <p style={{ margin: '0 0 0.5rem 0', color: '#2d6a4f', fontWeight: 'bold' }}>2 Điều kiện tiên quyết của Hàng hóa Sức lao động:</p>
        <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.88rem' }}>
          <li>Người lao động tự do về thân thể.</li>
          <li>Người lao động không có tư liệu sản xuất.</li>
        </ul>
      </div>
    )},
    { num: '2', title: 'Quá trình sản xuất Giá trị thặng dư (m)', badge: 'Lao động thặng dư', content: (
      <div>
        <p style={{ margin: '0 0 0.5rem 0' }}>Ví dụ ngày làm việc 8 giờ:</p>
        <div style={{ backgroundColor: '#f8f9fa', padding: '0.6rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          • <strong>4h đầu:</strong> Lao động tất yếu (trả lương 40 USD)<br/>
          • <strong>4h sau:</strong> Lao động thặng dư (tạo 40 USD cho nhà tư bản)
        </div>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#d90429', fontWeight: 'bold' }}>
          → Nguồn gốc m: Lao động không được trả công của công nhân.
        </p>
      </div>
    )},
    { num: '3', title: 'Tư bản Bất biến (c) & Tư bản Khả biến (v)', badge: 'W = c + v + m', content: (
      <div>
        <ul style={{ paddingLeft: '1.2rem', margin: '0 0 0.6rem 0', fontSize: '0.88rem' }}>
          <li><strong>Tư bản bất biến (c):</strong> Tư liệu sản xuất (máy móc, nguyên liệu) - giữ nguyên giá trị.</li>
          <li><strong>Tư bản khả biến (v):</strong> Mua sức lao động - nguồn gốc duy nhất tạo ra m.</li>
        </ul>
        <div style={{ textAlign: 'center', backgroundColor: '#e8f5e9', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold', color: '#1b4332' }}>
          Công thức giá trị hàng hóa: W = c + v + m
        </div>
      </div>
    )},
    { num: '4', title: 'Tỷ suất & Khối lượng Giá trị thặng dư', badge: 'm\' & M', content: (
      <div>
        <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.9rem' }}>• <strong>Tỷ suất m\':</strong> m\' = (m/v) × 100% (Trình độ bóc lột)</p>
        <p style={{ margin: '0 0 0.6rem 0', fontSize: '0.9rem' }}>• <strong>Khối lượng M:</strong> M = m\' × V (Quy mô bóc lột)</p>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
          <i>Ví dụ: Ngày làm 8h = 4h tất yếu + 4h thặng dư ⇒ m\' = 100%</i>
        </p>
      </div>
    )},
    { num: '5', title: 'Các phương pháp sản xuất Giá trị thặng dư', badge: '3 Phương pháp', content: (
      <div style={{ fontSize: '0.88rem' }}>
        <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>m Tuyệt đối:</strong> Kéo dài ngày lao động (8h → 10h).</p>
        <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>m Tương đối:</strong> Rút ngắn thời gian tất yếu nhờ tăng năng suất xã hội.</p>
        <p style={{ margin: 0 }}>• <strong>m Siêu ngạch:</strong> Giá trị cá biệt &lt; Giá trị xã hội nhờ cải tiến kỹ thuật.</p>
      </div>
    )},
    { num: '6', title: 'Tuần hoàn & Chu chuyển Tư bản', badge: '3 Giai đoạn', content: (
      <div style={{ fontSize: '0.88rem' }}>
        <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>3 Giai đoạn:</strong> T - H → P... → H' - T'</p>
        <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>Thời gian chu chuyển:</strong> T_chu chuyển = T_sản xuất + T_lưu thông</p>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#1b4332' }}>• Tốc độ chu chuyển: n = CH / ch (vòng/năm)</p>
      </div>
    )},
    { num: '7', title: 'Tư bản Cố định & Tư bản Lưu động', badge: 'TBCĐ & TBLĐ', content: (
      <div style={{ fontSize: '0.88rem' }}>
        <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>Tư bản Cố định:</strong> Máy móc, nhà xưởng - chuyển giá trị từng phần (Hao mòn hữu hình/vô hình).</p>
        <p style={{ margin: 0 }}>• <strong>Tư bản Lưu động:</strong> Nguyên liệu, sức lao động - chuyển toàn bộ giá trị trong 1 chu kỳ.</p>
      </div>
    )},
    { num: '8', title: 'So sánh Lợi nhuận (p) & Giá trị thặng dư (m)', badge: 'p vs m', content: (
      <div style={{ fontSize: '0.88rem' }}>
        <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>Bản chất:</strong> p là hình thái biến tướng của m trong lưu thông.</p>
        <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>KTTT:</strong> Cung &lt; Cầu ⇒ p &gt; m | Cung &gt; Cầu ⇒ p &lt; m</p>
        <p style={{ margin: 0, fontWeight: 'bold', color: '#2d6a4f' }}>• Toàn xã hội: ∑p = ∑m</p>
      </div>
    )}
  ];

  return (
    <section id="chapters" style={{ padding: '3.5rem 1rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.4rem', textAlign: 'center', color: 'var(--primary)' }}>
        📖 Nội Dung Bài Học Theo Slide
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
        Tóm tắt nguyên bản các slide bài giảng của Group 3
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
        {slides.map((s) => (
          <div key={s.num} className="card-hover" style={{
            padding: '1.8rem',
            backgroundColor: '#fff',
            borderRadius: '16px',
            border: '1px solid rgba(82, 183, 136, 0.2)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  color: '#fff',
                  backgroundColor: 'var(--primary)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {s.num}
                </span>
                <span style={{
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  backgroundColor: '#e8f5e9',
                  color: 'var(--primary)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px'
                }}>
                  {s.badge}
                </span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem 0', color: 'var(--primary)', lineHeight: '1.4' }}>
                {s.title}
              </h3>
              <div style={{ color: 'var(--text-primary)' }}>
                {s.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chapters;