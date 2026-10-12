import React from 'react';

function YoutubeLectures() {
  const videoList = [
    {
      id: 1,
      part: "Phần 1",
      title: "Công thức chung của tư bản",
      url: "https://youtu.be/Fdmy_8E_g3E?si=f_hVrLYynaIx0QQF",
      embedId: "Fdmy_8E_g3E",
      desc: "So sánh công thức lưu thông H-T-H và T-H-T', vạch ra mâu thuẫn trong công thức chung của tư bản."
    },
    {
      id: 2,
      part: "Phần 2",
      title: "Hàng hóa sức lao động",
      url: "https://youtu.be/TdE4_WKhW9s?si=290zCwVLTiLYhQGD",
      embedId: "TdE4_WKhW9s",
      desc: "Hai điều kiện để sức lao động thành hàng hóa, thuộc tính giá trị và giá trị sử dụng đặc biệt."
    },
    {
      id: 3,
      part: "Phần 3",
      title: "Sản xuất giá trị thặng dư - Tư bản bất biến, khả biến",
      url: "https://youtu.be/zgs3hkKJg1s?si=of4Oqjmd3kyqwxx-",
      embedId: "zgs3hkKJg1s",
      desc: "Ví dụ sản xuất sợi 8 giờ làm việc và phân chia tư bản bất biến (c), tư bản khả biến (v) (W = c + v + m)."
    },
    {
      id: 4,
      part: "Phần 4",
      title: "Tiền công trong Chủ nghĩa tư bản",
      url: "https://youtu.be/E3KCCmTsugg?si=h7bXHnhrbbJ2xqvY",
      embedId: "E3KCCmTsugg",
      desc: "Bản chất tiền công là giá cả của hàng hóa sức lao động; tiền công thời gian, sản phẩm, danh nghĩa & thực tế."
    },
    {
      id: 5,
      part: "Phần 5",
      title: "Tuần hoàn, chu chuyển của tư bản",
      url: "https://youtu.be/ywPbK1Y0ZwQ?si=wVZCNS4ZA7oibZuy",
      embedId: "ywPbK1Y0ZwQ",
      desc: "3 giai đoạn tuần hoàn của tư bản, khái niệm chu chuyển tư bản và công thức tính tốc độ chu chuyển n = CH/ch."
    },
    {
      id: 6,
      part: "Phần 6",
      title: "Tư bản cố định, tư bản lưu động là gì?",
      url: "https://youtu.be/wM4dsYrUHY0?si=m1buhioOdeIntbdQ",
      embedId: "wM4dsYrUHY0",
      desc: "Phân loại tư bản cố định (máy móc, nhà xưởng - hao mòn hữu hình/vô hình) và tư bản lưu động (nguyên liệu, sức lao động)."
    }
  ];

  return (
    <section id="youtube-lectures" style={{
      padding: '2.5rem 1.5rem',
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '16px',
      border: '1px solid #e9ecef'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', textAlign: 'center', color: '#1b4332' }}>
        📺 Gợi Ý Video Bài Giảng YouTube
      </h2>
      <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '2rem', fontSize: '0.95rem' }}>
        Chuỗi video bài giảng Chương 3 Kinh tế Chính trị Mác - Lênin (TS. Trần Hoàng Hải)[cite: 17]
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {videoList.map((vid) => (
          <div key={vid.id} style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 6px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
              <iframe
                src={`https://www.youtube.com/embed/${vid.embedId}`}
                title={vid.title}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div style={{ padding: '1.2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#e8f5e9',
                  color: '#2d6a4f',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  fontSize: '0.78rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {vid.part}
                </span>
                <h3 style={{ fontSize: '1rem', color: '#1b4332', margin: '0 0 0.5rem 0', lineHeight: '1.4' }}>
                  {vid.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', margin: '0 0 1rem 0' }}>
                  {vid.desc}
                </p>
              </div>

              <a
                href={vid.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  padding: '0.6rem 1rem',
                  backgroundColor: '#cc0000',
                  color: '#fff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}
              >
                ▶ Xem Trên YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default YoutubeLectures;
