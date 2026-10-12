import React from 'react';

function KahootQuiz() {
  const kahootUrl = "https://create.kahoot.it/details/705bbeed-c0db-4fa0-8e99-f0a0edc6ddcc";

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
      padding: '3rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
      backgroundColor: '#f8f4ff',
      borderRadius: '24px',
      border: '1px solid #e1bee7'
    }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '2rem', textAlign: 'center', color: '#4a148c' }}>
        Ôn Tập & Câu Hỏi Thảo Luận
      </h2>

      <div style={{
        backgroundColor: '#fff',
        padding: '2.5rem 2rem',
        borderRadius: '20px',
        border: '2px dashed #ab47bc',
        textAlign: 'center',
        marginBottom: '2.5rem',
        boxShadow: 'var(--shadow-md)'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎮</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#4a148c', margin: '0 0 0.6rem 0' }}>
          Trắc Nghiệm Tương Tác Qua Kahoot!
        </h3>
        <p style={{ color: '#6a1b9a', maxWidth: '620px', margin: '0 auto 1.8rem auto', fontSize: '0.98rem', lineHeight: '1.6' }}>
          Tham gia trò chơi trắc nghiệm Kahoot để củng cố các kiến thức về Giá trị thặng dư, Tư bản cố định/lưu động và Lợi nhuận cùng Group 3!
        </p>
        <a
          href={kahootUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            backgroundColor: '#864cbf',
            color: '#fff',
            fontSize: '1.05rem',
            fontWeight: '800',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 6px 16px rgba(134,76,191,0.3)',
            transition: 'transform 0.2s'
          }}
        >
          🚀 VÀO CHƠI KAHOOT NGAY
        </a>
      </div>

      <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1.2rem', textAlign: 'center' }}>
        💡 Câu Hỏi Thảo Luận Mở (Q&A)
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {qaList.map((item, idx) => (
          <div key={idx} style={{
            padding: '1.5rem',
            backgroundColor: '#fff',
            borderRadius: '14px',
            borderLeft: '5px solid var(--primary)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h4 style={{ margin: '0 0 0.6rem 0', color: 'var(--primary)', fontSize: '1.02rem', fontWeight: '700' }}>{item.q}</h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KahootQuiz;