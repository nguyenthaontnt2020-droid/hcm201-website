import React from 'react';

function Chapters() {
  const chapterList = [
    {
      num: 'Chương 1',
      title: 'Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư tưởng Hồ Chí Minh',
      detail: 'Tìm hiểu định nghĩa, đối tượng nghiên cứu, phương pháp luận và giá trị của môn học.'
    },
    {
      num: 'Chương 2',
      title: 'Cơ sở, quá trình hình thành và phát triển Tư tưởng Hồ Chí Minh',
      detail: 'Phân tích cơ sở thực tiễn, lý luận, nhân tố chủ quan và các mốc thời gian phát triển tư tưởng.'
    },
    {
      num: 'Chương 3',
      title: 'Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội',
      detail: 'Mối quan hệ giữa độc lập dân tộc và CNXH, con đường đi lên CNXH ở Việt Nam.'
    },
    {
      num: 'Chương 4',
      title: 'Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân',
      detail: 'Quan điểm về xây dựng Đảng cầm quyền và bản chất nhà nước pháp quyền XHCN.'
    },
    {
      num: 'Chương 5',
      title: 'Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế',
      detail: 'Sức mạnh đại đoàn kết, chiến lược kết hợp sức mạnh dân tộc với sức mạnh thời đại.'
    },
    {
      num: 'Chương 6',
      title: 'Tư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người',
      detail: 'Xây dựng nền văn hóa mới, chuẩn mực đạo đức cách mạng và phát triển con người toàn diện.'
    }
  ];

  return (
    <section id="chapters" style={{ 
      padding: '3rem 2rem', 
      maxWidth: '1000px', 
      margin: '0 auto'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', color: '#222' }}>
        Nội Dung Bài Học Theo Chương
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {chapterList.map((chap, idx) => (
          <div key={idx} style={{ 
            padding: '1.5rem', 
            backgroundColor: '#fff', 
            borderRadius: '8px', 
            border: '1px solid #e0e0e0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '0.2rem 0.6rem', 
              backgroundColor: '#e7f1ff', 
              color: '#007bff', 
              borderRadius: '4px', 
              fontSize: '0.85rem', 
              fontWeight: 'bold',
              marginBottom: '0.8rem'
            }}>
              {chap.num}
            </span>
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem 0', color: '#222', lineHeight: '1.4' }}>
              {chap.title}
            </h3>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {chap.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chapters;