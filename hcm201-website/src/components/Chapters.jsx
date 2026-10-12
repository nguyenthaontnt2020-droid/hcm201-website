import React from 'react';

function Chapters() {
  const slides = [
    {
      num: '1',
      title: 'Điều kiện để Tiền chuyển hóa thành Tư bản',
      badge: 'T - H - T\'',
      content: (
        <div>
          <p style={{ margin: '0 0 0.5rem 0' }}><strong>Công thức vận động:</strong> T - H - T' (Trong đó T' = T + ΔT)</p>
          <p style={{ margin: '0 0 0.8rem 0', color: '#2d6a4f', fontWeight: 'bold' }}>2 Điều kiện tiên quyết của Hàng hóa Sức lao động:</p>
          <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.88rem', lineHeight: '1.5' }}>
            <li>Người lao động tự do về thân thể, có quyền bán sức lao động.</li>
            <li>Người lao động không có tư liệu sản xuất, buộc phải bán sức lao động để sống.</li>
          </ul>
        </div>
      )
    },
    {
      num: '2',
      title: 'Quá trình sản xuất Giá trị thặng dư (m)',
      badge: 'Lao động thặng dư',
      content: (
        <div>
          <p style={{ margin: '0 0 0.5rem 0' }}>Ví dụ ngày làm việc 8 giờ:</p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '0.6rem', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            • <strong>4h đầu:</strong> Lao động tất yếu (tạo ra 40 USD = tiền lương)<br/>
            • <strong>4h sau:</strong> Lao động thặng dư (tạo ra thêm 40 USD cho nhà tư bản)
          </div>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#c51162', fontWeight: 'bold' }}>
            → Nguồn gốc m: Sinh ra từ phần lao động không được trả công của công nhân.
          </p>
        </div>
      )
    },
    {
      num: '3',
      title: 'Tư bản Bất biến (c) & Tư bản Khả biến (v)',
      badge: 'W = c + v + m',
      content: (
        <div>
          <ul style={{ paddingLeft: '1.2rem', margin: '0 0 0.8rem 0', fontSize: '0.88rem', lineHeight: '1.5' }}>
            <li><strong>Tư bản bất biến (c):</strong> Tư liệu sản xuất (máy móc, nhà xưởng, nguyên liệu) - giá trị chuyển nguyên vẹn vào sản phẩm.</li>
            <li><strong>Tư bản khả biến (v):</strong> Dùng mua sức lao động - giá trị tăng thêm, là <i>nguồn gốc duy nhất</i> của m.</li>
          </ul>
          <div style={{ textAlign: 'center', backgroundColor: '#e8f5e9', padding: '0.4rem', borderRadius: '4px', fontWeight: 'bold', color: '#1b4332' }}>
            Công thức giá trị hàng hóa: W = c + v + m
          </div>
        </div>
      )
    },
    {
      num: '4',
      title: 'Tỷ suất & Khối lượng Giá trị thặng dư',
      badge: 'm\' & M',
      content: (
        <div>
          <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.9rem' }}>• <strong>Tỷ suất m' (Trình độ bóc lột):</strong> m' = (m/v) × 100%</p>
          <p style={{ margin: '0 0 0.6rem 0', fontSize: '0.9rem' }}>• <strong>Khối lượng M (Quy mô bóc lột):</strong> M = m' × V</p>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
            <i>Ví dụ: Ngày làm 8h = 4h tất yếu + 4h thặng dư ⇒ m' = 100%</i>
          </p>
        </div>
      )
    },
    {
      num: '5',
      title: 'Các phương pháp sản xuất Giá trị thặng dư',
      badge: '3 Phương pháp',
      content: (
        <div style={{ fontSize: '0.85rem' }}>
          <p style={{ margin: '0 0 0.3rem 0' }}>• <strong>m Tuyệt đối:</strong> Kéo dài ngày lao động (VD: 8h → 10h).</p>
          <p style={{ margin: '0 0 0.3rem 0' }}>• <strong>m Tương đối:</strong> Rút ngắn thời gian tất yếu nhờ tăng năng suất xã hội (VD: 4h → 3h).</p>
          <p style={{ margin: 0 }}>• <strong>m Siêu ngạch:</strong> Giá trị cá biệt &lt; Giá trị xã hội nhờ cải tiến kỹ thuật (Động lực mạnh nhất).</p>
        </div>
      )
    },
    {
      num: '6',
      title: 'Tuần hoàn & Chu chuyển Tư bản',
      badge: '3 Giai đoạn & Tốc độ',
      content: (
        <div>
          <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.85rem' }}>
            <strong>3 Giai đoạn tuần hoàn:</strong> T - H (Lưu thông) → P... (Sản xuất) → H' - T' (Lưu thông)
          </p>
          <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.85rem' }}>
            <strong>Thời gian chu chuyển:</strong> T_chu chuyển = T_sản xuất + T_lưu thông
          </p>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#1b4332', fontWeight: 'bold' }}>
            Tốc độ chu chuyển: n = CH / ch (vòng/năm)
          </p>
        </div>
      )
    },
    {
      num: '7',
      title: 'Tư bản Cố định & Tư bản Lưu động',
      badge: 'TBCĐ & TBLĐ',
      content: (
        <div style={{ fontSize: '0.85rem' }}>
          <p style={{ margin: '0 0 0.4rem 0' }}>
            • <strong>Tư bản Cố định:</strong> Máy móc, thiết bị - chuyển giá trị từng phần qua nhiều chu kỳ (Hao mòn hữu hình & vô hình).
          </p>
          <p style={{ margin: 0 }}>
            • <strong>Tư bản Lưu động:</strong> Nguyên liệu, nhiên liệu, sức lao động - chuyển toàn bộ giá trị trong 1 chu kỳ sản xuất.
          </p>
        </div>
      )
    },
    {
      num: '8',
      title: 'So sánh Lợi nhuận (p) & Giá trị thặng dư (m)',
      badge: 'p vs m',
      content: (
        <div style={{ fontSize: '0.85rem' }}>
          <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>Bản chất:</strong> p là hình thái biến tướng của m trong lưu thông.</p>
          <p style={{ margin: '0 0 0.4rem 0' }}>• <strong>Quan hệ lượng trong KTTT:</strong> Cung &lt; Cầu ⇒ p &gt; m | Cung &gt; Cầu ⇒ p &lt; m</p>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#2d6a4f' }}>• Quyền mô toàn xã hội: ∑p = ∑m</p>
        </div>
      )
    }
  ];

  return (
    <section id="chapters" style={{ padding: '2.5rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', textAlign: 'center', color: '#1b4332' }}>
        📖 Nội Dung Bài Học Theo Slide
      </h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', fontSize: '0.95rem' }}>
        Tóm tắt nguyên bản các slide bài giảng của Group 3
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {slides.map((s) => (
          <div key={s.num} style={{
            padding: '1.4rem',
            backgroundColor: '#fff',
            borderRadius: '12px',
            border: '1px solid #d8f3dc',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <span style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#2d6a4f',
                  backgroundColor: '#e8f5e9',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {s.num}
                </span>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  backgroundColor: '#1b4332',
                  color: '#fff',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '12px'
                }}>
                  {s.badge}
                </span>
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.8rem 0', color: '#1b4332', lineHeight: '1.4' }}>
                {s.title}
              </h3>
              <div style={{ color: '#444' }}>
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