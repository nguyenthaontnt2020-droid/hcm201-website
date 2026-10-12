import React from 'react';

function Podcast() {
  const podcastList = [
    {
      id: 1,
      title: 'Tập 1: Khái niệm & Nguồn gốc Tư tưởng Hồ Chí Minh',
      duration: '15 phút',
      desc: 'Tìm hiểu về cơ sở hình thành và các giai đoạn phát triển tư tưởng của Bác.'
    },
    {
      id: 2,
      title: 'Tập 2: Vấn đề Dân tộc và Chủ nghĩa Xã hội',
      duration: '20 phút',
      desc: 'Phân tích quan điểm về độc lập dân tộc gắn liền với chủ nghĩa xã hội.'
    },
    {
      id: 3,
      title: 'Tập 3: Đảng Cộng sản Việt Nam & Đại đoàn kết',
      duration: '18 phút',
      desc: 'Xây dựng Đảng trong sạch, vững mạnh và sức mạnh từ đại đoàn kết dân tộc.'
    }
  ];

  return (
    <section id="podcasts" style={{ 
      padding: '3rem 2rem', 
      maxWidth: '1000px', 
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', color: '#222' }}>
        Danh Sách Podcasts
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
            border: '1px solid #e0e0e0'
          }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#333' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
            <div style={{ textAlign: 'right', minWidth: '100px' }}>
              <span style={{ display: 'block', fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem' }}>
                ⏱ {item.duration}
              </span>
              <button style={{ 
                padding: '0.4rem 1rem', 
                backgroundColor: '#28a745', 
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