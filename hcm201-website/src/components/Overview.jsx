import React from 'react';

function Overview() {
  return (
    <section id="overview" style={{ 
      padding: '3rem 2rem', 
      maxWidth: '1000px', 
      margin: '0 auto' 
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', color: '#222' }}>
        Tổng Quan Môn Học
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem' 
      }}>
        <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fff' }}>
          <h3 style={{ color: '#007bff', marginTop: 0 }}>Mục Tiêu Môn Học</h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Nắm vững hệ thống quan điểm, tư tưởng Hồ Chí Minh về dân tộc, chủ nghĩa xã hội, Đảng Cộng sản và đại đoàn kết.
          </p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fff' }}>
          <h3 style={{ color: '#007bff', marginTop: 0 }}>Phương Pháp Học</h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Kết hợp nghe giảng qua Podcast, tóm tắt lý thuyết trọng tâm từng chương và luyện tập câu hỏi trắc nghiệm.
          </p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fff' }}>
          <h3 style={{ color: '#007bff', marginTop: 0 }}>Kết Quả Đạt Được</h3>
          <p style={{ color: '#555', lineHeight: '1.5' }}>
            Hiểu rõ giá trị thực tiễn của tư tưởng Bác, vận dụng vào tư duy phân tích và hoàn thành tốt bài thi môn HCM201.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview;