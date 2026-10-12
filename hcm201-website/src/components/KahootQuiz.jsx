import React from 'react';

function KahootQuiz() {
  // Bạn có thể thay đường link Kahoot thực tế của nhóm vào đây
  const kahootUrl = "https://kahoot.it/";

  const qaList = [
    {
      q: "Q1: Doanh nghiệp áp dụng AI, tự động hóa hoàn toàn thì có tạo ra giá trị thặng dư (m) không?",
      a: "Máy móc/AI là tư bản bất biến (c) nên không tự tạo ra m. Lợi nhuận của họ là m siêu ngạch thu được nhờ năng suất cao hơn trung bình xã hội, chiếm một phần m do công nhân ở các doanh nghiệp khác tạo ra."
    },
    {
      q: "Q2: Tại sao lại nói 'Lợi nhuận (p) làm che giấu bản chất bị bóc lột của giá trị thặng dư'?",
      a: "Vì m được tính trên tư bản khả biến v (tiền lương), phản ánh đúng công sức bị chiếm đoạt. Còn p lại tính trên tổng chi phí k = c + v, tạo cảm giác toàn bộ máy móc và tiền vốn đều sinh ra tiền."
    }
  ];

  return (
    <section id="kahoot-quiz" style={{
      padding: '2.5rem 1.5rem',
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: '#f4fbf7',
      borderRadius: '16px',
      border: '1px solid #d8f3dc'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', color: '#1b4332' }}>
        Ôn Tập & Câu Hỏi Thảo Luận
      </h2>

      {/* Khối Kahoot thay thế cho trắc nghiệm chọn đáp án */}
      <div style={{
        backgroundColor: '#f3e5f5',
        padding: '2rem 1.5rem',
        borderRadius: '12px',
        border: '2px dashed #ab47bc',
        textAlign: 'center',
        marginBottom: '2.5rem'
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.3rem' }}>🎮</div>
        <h3 style={{ fontSize: '1.4rem', color: '#4a148c', margin: '0 0 0.5rem 0' }}>
          Trắc Nghiệm Tương Tác Qua Kahoot!
        </h3>
        <p style={{ color: '#6a1b9a', maxWidth: '600px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
          Tham gia trò chơi trắc nghiệm Kahoot để củng cố các kiến thức về Giá trị thặng dư, Tư bản cố định/lưu động và Lợi nhuận cùng Group 3!
        </p>
        <a
          href={kahootUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.8rem 2rem',
            backgroundColor: '#864cbf',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 4px 8px rgba(134,76,191,0.25)'
          }}
        >
          🚀 VÀO CHƠI KAHOOT NGAY
        </a>
      </div>

      {/* Giữ nguyên phần Câu hỏi thảo luận mở (Q&A) */}
      <h3 style={{ fontSize: '1.3rem', color: '#1b4332', marginBottom: '1rem', textAlign: 'center' }}>
        💡 Câu Hỏi Thảo Luận Mở (Q&A)
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {qaList.map((item, idx) => (
          <div key={idx} style={{ 
            padding: '1.2rem', 
            backgroundColor: '#fff', 
            borderRadius: '8px', 
            borderLeft: '4px solid #2d6a4f',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d6a4f', fontSize: '0.98rem' }}>{item.q}</h4>
            <p style={{ margin: 0, color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KahootQuiz;