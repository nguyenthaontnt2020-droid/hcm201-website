import React from 'react';

function Chapters() {
  const chapterList = [
    {
      num: 'Chuyên đề 1',
      title: 'Điều kiện Tiền chuyển hóa thành Tư bản',
      detail: 'Công thức T-H-T\' (T\' = T + ΔT). Điều kiện quyết định: Sự xuất hiện của hàng hóa đặc biệt Sức Lao Động (Người lao động tự do về thân thể & không có TLSX).'
    },
    {
      num: 'Chuyên đề 2',
      title: 'Sản xuất Giá trị thặng dư & Tiền công',
      detail: 'Ngày làm việc 8h = 4h Lao động tất yếu (trả lương) + 4h Lao động thặng dư (tạo m cho nhà tư bản). Tiền công là giá cả của hàng hóa sức lao động.'
    },
    {
      num: 'Chuyên đề 3',
      title: 'Tư bản Bất biến (c) & Tư bản Khả biến (v)',
      detail: 'Cấu trúc giá trị hàng hóa W = c + v + m. Trong đó c (máy móc, nguyên liệu) chuyển nguyên giá trị; v (sức lao động) là nguồn gốc duy nhất tạo ra m.'
    },
    {
      num: 'Chuyên đề 4',
      title: 'Tỷ suất (m\') & Khối lượng (M) Giá trị thặng dư',
      detail: 'Tỷ suất m\' = (m/v) × 100% phản ánh trình độ bóc lột. Khối lượng M = m\' × V thể hiện quy mô giá trị thặng dư thu được.'
    },
    {
      num: 'Chuyên đề 5',
      title: '3 Phương pháp Sản xuất Giá trị thặng dư',
      detail: 'm Tuyệt đối (kéo dài ngày làm việc), m Tương đối (rút ngắn thời gian tất yếu nhờ tăng năng suất xã hội), m Siêu ngạch (giá trị cá biệt < giá trị xã hội).'
    },
    {
      num: 'Chuyên đề 6',
      title: 'Tuần hoàn & Chu chuyển Tư bản',
      detail: '3 giai đoạn vạch ra 3 hình thái (Tiền tệ -> Sản xuất -> Hàng hóa). Tốc độ chu chuyển n = CH/ch (thời gian chu chuyển càng ngắn, thu hồi vốn càng nhanh).'
    },
    {
      num: 'Chuyên đề 7',
      title: 'Tư bản Cố định & Tư bản Lưu động',
      detail: 'TBCĐ (máy móc, nhà xưởng - chuyển giá trị dần dần, chịu hao mòn hữu hình & vô hình). TBLĐ (nguyên liệu, sức lao động - chuyển toàn bộ trong 1 chu kỳ).'
    },
    {
      num: 'Chuyên đề 8',
      title: 'So sánh Lợi nhuận (p) & Giá trị thặng dư (m)',
      detail: 'Về bản chất, p là hình thái biến tướng của m. Trong KTTT hiện đại: Cung < Cầu làm p > m; Cung > Cầu làm p < m. Toàn xã hội ∑p = ∑m.'
    }
  ];

  return (
    <section id="chapters" style={{ padding: '2.5rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', color: '#1b4332' }}>
        Tóm Tắt Nội Dung Trọng Tâm Bài Học
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem'
      }}>
        {chapterList.map((chap, idx) => (
          <div key={idx} style={{
            padding: '1.25rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #d8f3dc',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '0.2rem 0.6rem',
              backgroundColor: '#e8f5e9',
              color: '#2d6a4f',
              borderRadius: '4px',
              fontSize: '0.82rem',
              fontWeight: 'bold',
              marginBottom: '0.6rem'
            }}>
              {chap.num}
            </span>
            <h3 style={{ fontSize: '1.05rem', margin: '0 0 0.5rem 0', color: '#1b4332', lineHeight: '1.4' }}>
              {chap.title}
            </h3>
            <p style={{ margin: 0, color: '#555', fontSize: '0.88rem', lineHeight: '1.5' }}>
              {chap.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chapters;