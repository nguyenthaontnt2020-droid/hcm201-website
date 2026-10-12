import React from 'react';

function YoutubeLectures() {
  const videoList = [
    { id: 1, part: "Phần 1", title: "Công thức chung của tư bản", embedId: "Fdmy_8E_g3E", url: "https://youtu.be/Fdmy_8E_g3E?si=f_hVrLYynaIx0QQF", desc: "So sánh H-T-H và T-H-T', vạch ra mâu thuẫn trong công thức chung của tư bản." },
    { id: 2, part: "Phần 2", title: "Hàng hóa sức lao động", embedId: "TdE4_WKhW9s", url: "https://youtu.be/TdE4_WKhW9s?si=290zCwVLTiLYhQGD", desc: "2 điều kiện để sức lao động thành hàng hóa, thuộc tính giá trị & giá trị sử dụng đặc biệt." },
    { id: 3, part: "Phần 3", title: "Sản xuất giá trị thặng dư - Tư bản bất biến, khả biến", embedId: "zgs3hkKJg1s", url: "https://youtu.be/zgs3hkKJg1s?si=of4Oqjmd3kyqwxx-", desc: "Ví dụ sản xuất sợi 8h làm việc và phân chia tư bản bất biến (c), tư bản khả biến (v)." },
    { id: 4, part: "Phần 4", title: "Tiền công trong Chủ nghĩa tư bản", embedId: "E3KCCmTsugg", url: "https://youtu.be/E3KCCmTsugg?si=h7bXHnhrbbJ2xqvY", desc: "Bản chất tiền công là giá cả sức lao động; tiền công thời gian, sản phẩm, danh nghĩa & thực tế." },
    { id: 5, part: "Phần 5", title: "Tuần hoàn, chu chuyển của tư bản", embedId: "ywPbK1Y0ZwQ", url: "https://youtu.be/ywPbK1Y0ZwQ?si=wVZCNS4ZA7oibZuy", desc: "3 giai đoạn tuần hoàn của tư bản, khái niệm chu chuyển và công thức tốc độ chu chuyển n = CH/ch." },
    { id: 6, part: "Phần 6", title: "Tư bản cố định, tư bản lưu động là gì?", embedId: "wM4dsYrUHY0", url: "https://youtu.be/wM4dsYrUHY0?si=m1buhioOdeIntbdQ", desc: "Phân loại tư bản cố định (máy móc, hao mòn) và tư bản lưu động (nguyên liệu, sức lao động)." }
  ];

  return (
    <section id="youtube-lectures" style={{
      padding: '3.5rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
      backgroundColor: '#f0f7f4',
      borderRadius: '24px',
      border: '1px solid #d8f3dc'
    }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.4rem', textAlign: 'center', color: 'var(--primary)' }}>
        📺 Gợi Ý Video Bài Giảng YouTube
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
        Chuỗi video bài giảng Kinh tế Chính trị Mác - Lênin (TS. Trần Hoàng Hải)
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {videoList.map((vid) => (
          <div key={vid.id} className="card-hover" style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
              <iframe
                src={`https://www.youtube.com/embed/${vid.embedId}`}
                title={vid.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#e8f5e9',
                  color: '#2d6a4f',
                  padding: '0.25rem 0.7rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  marginBottom: '0.6rem'
                }}>
                  {vid.part}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--primary)', margin: '0 0 0.6rem 0', lineHeight: '1.4' }}>
                  {vid.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0 0 1.2rem 0' }}>
                  {vid.desc}
                </p>
              </div>

              <a href={vid.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                textAlign: 'center',
                padding: '0.7rem 1rem',
                backgroundColor: '#d90429',
                color: '#fff',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '0.88rem'
              }}>
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