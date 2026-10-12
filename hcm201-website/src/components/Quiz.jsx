import React, { useState } from 'react';

function Quiz() {
  const questions = [
    {
      id: 1,
      question: 'Yếu tố nào sau đây là điều kiện quyết định để tiền chuyển hóa thành tư bản?',
      options: [
        'A. Có thật nhiều vàng và ngoại tệ',
        'B. Mua và sử dụng hàng hóa Sức lao động',
        'C. Nhập khẩu máy móc hiện đại',
        'D. Mở rộng thị trường tiêu thụ'
      ],
      correct: 1
    },
    {
      id: 2,
      question: 'Trong công thức giá trị hàng hóa W = c + v + m, yếu tố nào là nguồn gốc duy nhất tạo ra giá trị thặng dư (m)?',
      options: [
        'A. Tư bản bất biến (c)',
        'B. Máy móc và nhà xưởng',
        'C. Tư bản khả biến (v)',
        'D. Nguyên vật liệu sản xuất'
      ],
      correct: 2
    },
    {
      id: 3,
      question: 'Phương pháp sản xuất giá trị thặng dư siêu ngạch dựa trên cơ sở nào?',
      options: [
        'A. Kéo dài ngày lao động vượt quá 8 giờ',
        'B. Cải tiến kỹ thuật, làm giá trị cá biệt thấp hơn giá trị xã hội',
        'C. Bớt xén tiền lương công nhân',
        'D. Tăng giá bán sản phẩm trên thị trường'
      ],
      correct: 1
    }
  ];

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

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelect = (qId, optionIdx) => {
    setSelectedAnswers({ ...selectedAnswers, [qId]: optionIdx });
  };

  return (
    <section id="quiz" style={{
      padding: '2.5rem 1.5rem',
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: '#f4fbf7',
      borderRadius: '12px'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', color: '#1b4332' }}>
        Câu Hỏi Trắc Nghiệm & Thảo Luận Chuyên Sâu
      </h2>

      {/* Trắc nghiệm */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {questions.map((q) => (
          <div key={q.id} style={{
            padding: '1.25rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #d8f3dc'
          }}>
            <h3 style={{ fontSize: '1.05rem', margin: '0 0 1rem 0', color: '#1b4332' }}>
              Câu {q.id}: {q.question}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {q.options.map((opt, idx) => {
                const isSelected = selectedAnswers[q.id] === idx;
                const isCorrect = idx === q.correct;
                let bg = '#f8f9fa';
                let color = '#333';

                if (selectedAnswers[q.id] !== undefined) {
                  if (isSelected && isCorrect) {
                    bg = '#d4edda'; color = '#155724';
                  } else if (isSelected && !isCorrect) {
                    bg = '#f8d7da'; color = '#721c24';
                  } else if (isCorrect) {
                    bg = '#d4edda'; color = '#155724';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(q.id, idx)}
                    style={{
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      backgroundColor: bg,
                      color: color,
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: isSelected ? 'bold' : 'normal'
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Q&A Thảo luận */}
      <h3 style={{ fontSize: '1.3rem', color: '#1b4332', marginBottom: '1rem', textAlign: 'center' }}>
        💡 Câu Hỏi Thảo Luận Mở (Q&A)
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {qaList.map((item, idx) => (
          <div key={idx} style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', borderLeft: '4px solid #2d6a4f' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#2d6a4f', fontSize: '0.98rem' }}>{item.q}</h4>
            <p style={{ margin: 0, color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Quiz;