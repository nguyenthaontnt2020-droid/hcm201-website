import React, { useState } from 'react';

function Quiz() {
  const questions = [
    {
      id: 1,
      question: 'Tư tưởng Hồ Chí Minh về con đường phát triển của cách mạng Việt Nam là gì?',
      options: [
        'A. Độc lập dân tộc gắn liền với chủ nghĩa xã hội',
        'B. Tư bản chủ nghĩa',
        'C. Dân chủ tư sản',
        'D. Quân chủ chuyên chế'
      ],
      correct: 0
    },
    {
      id: 2,
      question: 'Yếu tố nào sau đây là lực lượng cốt lõi của khối đại đoàn kết toàn dân tộc?',
      options: [
        'A. Tư sản và tiểu tư sản',
        'B. Liên minh công nhân - nông dân - trí thức',
        'C. Địa chủ và địa phương',
        'D. Thương gia'
      ],
      correct: 1
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelect = (qId, optionIdx) => {
    setSelectedAnswers({ ...selectedAnswers, [qId]: optionIdx });
  };

  return (
    <section id="quiz" style={{ 
      padding: '3rem 2rem', 
      maxWidth: '1000px', 
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', color: '#222' }}>
        Câu Hỏi Trắc Nghiệm Ôn Tập
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {questions.map((q) => (
          <div key={q.id} style={{ 
            padding: '1.5rem', 
            backgroundColor: '#fff', 
            borderRadius: '8px', 
            border: '1px solid #e0e0e0' 
          }}>
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', color: '#333' }}>
              Câu {q.id}: {q.question}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {q.options.map((opt, idx) => {
                const isSelected = selectedAnswers[q.id] === idx;
                const isCorrect = idx === q.correct;
                let bg = '#f0f0f0';
                let color = '#333';

                if (selectedAnswers[q.id] !== undefined) {
                  if (isSelected && isCorrect) {
                    bg = '#d4edda';
                    color = '#155724';
                  } else if (isSelected && !isCorrect) {
                    bg = '#f8d7da';
                    color = '#721c24';
                  } else if (isCorrect) {
                    bg = '#d4edda';
                    color = '#155724';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(q.id, idx)}
                    style={{
                      textAlign: 'left',
                      padding: '0.8rem 1rem',
                      border: '1px solid #ccc',
                      borderRadius: '6px',
                      backgroundColor: bg,
                      color: color,
                      cursor: 'pointer',
                      fontSize: '0.95rem',
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
    </section>
  );
}

export default Quiz;