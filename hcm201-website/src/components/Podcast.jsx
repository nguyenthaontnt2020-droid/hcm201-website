import React from 'react';

function Podcast() {
  const podcastList = [
    {
      id: 1,
      title: 'Tập 1: Công thức chung T-H-T\' và Hàng hóa Sức lao động',
      duration: '12 phút',
      desc: 'Giải thích điều kiện để tiền chuyển hóa thành tư bản và hai điều kiện người lao động phải đáp ứng.'
    },
    {
      id: 2,
      title: 'Tập 2: Quá trình sản xuất Giá trị thặng dư & Cấu trúc W = c + v + m',
      duration: '18 phút',
      desc: 'Phân tích ví dụ 8 giờ làm việc, phân định tư bản bất biến (c) và tư bản khả biến (v).'
    },
    {
      id: 3,
      title: 'Tập 3: Ba phương pháp sản xuất m (Tuyệt đối, Tương đối, Siêu ngạch)',
      duration: '15 phút',
      desc: 'So sánh cách thức kéo dài ngày làm việc, tăng năng suất xã hội và động lực từ m siêu ngạch.'
    },
    {
      id: 4,
      title: 'Tập 4: Tuần hoàn, Chu chuyển tư bản & So sánh Lợi nhuận (p) với (m)',
      duration: '20 phút',
      desc: 'Ba giai đoạn vận động của tư bản, quản trị TBCĐ - TBLĐ và tranh luận thực tế về Lợi nhuận.'
    }
  ];

  return (
    <section id="podcasts" style={{
      padding: '2.5rem 1.5rem',
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: '#f4fbf7',
      borderRadius: '12px'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', color: '#1b4332' }}>
        Danh Sách Bài Giảng Audio / Podcast
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {podcastList.map((item) => (
          <div key={item.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.2rem 1.5rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #d8f3dc'
          }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: '#2d6a4f' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '0.88rem' }}>{item.desc}</p>
            </div>
            <div style={{ textAlign: 'right', minWidth: '100px' }}>
              <span style={{ display: 'block', fontSize: '0.82rem', color: '#888', marginBottom: '0.5rem' }}>
                ⏱ {item.duration}
              </span>
              <button style={{
                padding: '0.4rem 1rem',
                backgroundColor: '#2d6a4f',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Nghe ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Podcast;