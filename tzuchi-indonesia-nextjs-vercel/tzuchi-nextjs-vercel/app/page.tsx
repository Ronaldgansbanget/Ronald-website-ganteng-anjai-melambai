import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <main id="beranda">
      <div className="announcement">
        <span className="announcement-dot" />
        <span>Kebaikan tidak mengenal batas. Begitu juga cinta kasih.</span>
        <a href="#terlibat">Jadi bagian dari gerakan ini <span aria-hidden="true">↗</span></a>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#beranda" aria-label="Tzu Chi Indonesia, kembali ke beranda">
            <span className="brand-flower" aria-hidden="true">✽</span>
            <span className="brand-copy"><strong>tzuchi<span className="brand-dot">.</span></strong><small>YAYASAN BUDDHA TZU CHI<br />INDONESIA</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Navigasi utama">
            <a href="#tentang">Tentang kami</a>
            <a href="#misi">Misi kami</a>
            <a href="#dampak">Dampak</a>
            <a href="#cerita">Cerita</a>
            <a href="#terlibat">Terlibat</a>
          </nav>
          <a className="nav-donate" href="https://www.tzuchi.or.id/donasi" target="_blank" rel="noopener noreferrer">Beri dukungan <span aria-hidden="true">↗</span></a>
          <details className="mobile-nav">
            <summary aria-label="Buka menu navigasi">Menu <span aria-hidden="true">☰</span></summary>
            <nav aria-label="Navigasi seluler">
              <a href="#tentang">Tentang kami</a>
              <a href="#misi">Misi kami</a>
              <a href="#dampak">Dampak</a>
              <a href="#cerita">Cerita</a>
              <a href="#terlibat">Terlibat</a>
              <a href="https://www.tzuchi.or.id/donasi" target="_blank" rel="noopener noreferrer">Donasi sekarang ↗</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-dash" />YAYASAN BUDDHA TZU CHI INDONESIA</div>
            <h1 id="hero-heading"><span className="hero-line">Cinta kasih.</span><span className="hero-line outlined-text">Tanpa batas.</span><span className="hero-line">Untuk sesama<span className="hero-period">.</span></span></h1>
            <p className="hero-description">Dari bantuan bencana hingga pendidikan, kami percaya satu tindakan kecil dapat menumbuhkan harapan. Bersama relawan dan donatur, Tzu Chi hadir untuk siapa pun yang membutuhkan.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#misi">Jelajahi misi kami <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#terlibat">Mulai berbuat baik <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-bottom"><div className="avatar-stack" aria-hidden="true"><span>♥</span><span>✳</span><span>✦</span></div><span>Dibangun dari kepedulian,<br />digerakkan oleh kita semua.</span></div>
          </div>
          <div className="hero-art">
            <div className="hero-photo-wrap">
              <img src="/images/hero-community.jpg" alt="Ilustrasi suasana hangat relawan bersama warga di pekarangan rumah" fetchPriority="high" />
              <div className="image-tag">BERSAMA DALAM KEBAIKAN <span>↗</span></div>
            </div>
            <div className="hero-orb" aria-hidden="true"><span className="orb-center">✳</span></div>
            <div className="hero-note"><span className="note-spark" aria-hidden="true">✺</span><span>Hadir untuk<br /><strong>semua manusia.</strong></span></div>
            <div className="hero-vertical">HUMANITY · COMPASSION · ACTION</div>
          </div>
        </div>
        <div className="hero-footer container"><span>01 / SATU HATI, BANYAK HARAPAN</span><a href="#tentang">SCROLL UNTUK MENGENAL KAMI <span>↓</span></a></div>
      </section>

      <section className="mission-ticker" aria-label="Nilai dan misi Tzu Chi">
        <div className="ticker-track" aria-hidden="true"><span>Amal</span><b>✳</b><span>Kesehatan</span><b>✳</b><span>Pendidikan</span><b>✳</b><span>Budaya humanis</span><b>✳</b><span>Pelestarian lingkungan</span><b>✳</b><span>Amal</span><b>✳</b><span>Kesehatan</span><b>✳</b><span>Pendidikan</span><b>✳</b></div>
      </section>

      <section className="about section-pad" id="tentang" aria-labelledby="about-heading">
        <div className="container about-grid">
          <div className="about-index"><span className="section-label">01 / TENTANG KAMI</span><div className="about-art"><span className="giant-spark">✳</span><span className="since-pill">TUMBUH DI INDONESIA<br /><strong>SEJAK 1993</strong></span><div className="about-circle" aria-hidden="true" /></div></div>
          <div className="about-main"><p className="small-intro">Bermula dari sebuah niat baik.</p><h2 id="about-heading">Saat hati bergerak, <em>dunia ikut berubah.</em></h2><div className="about-copy"><p>Tzu Chi adalah gerakan kemanusiaan yang berlandaskan cinta kasih universal. Kami percaya setiap orang layak diperlakukan dengan hormat, tanpa memandang suku, ras, agama, ataupun latar belakang.</p><p>Melalui aksi nyata, kami menghadirkan bantuan sekaligus menumbuhkan kepedulian yang terus berlanjut, dari satu hati ke hati lainnya.</p></div><a href="https://www.tzuchi.or.id/tentang-kami/tentang-tzu-chi/1" className="underlined-link" target="_blank" rel="noopener noreferrer">Kenali perjalanan Tzu Chi <span>↗</span></a></div>
        </div>
      </section>

      <section className="missions section-pad" id="misi" aria-labelledby="missions-heading">
        <div className="container">
          <div className="section-topline"><span className="section-label">02 / APA YANG KAMI LAKUKAN</span><span className="caption-right">EMPAT MISI UTAMA, SATU SEMANGAT</span></div>
          <div className="section-heading-row"><h2 id="missions-heading">Kepedulian yang<br /><em>menjadi tindakan.</em></h2><p>Setiap langkah kecil berarti. Inilah empat jalan yang kami tempuh untuk menemani sesama dan merawat kehidupan.</p></div>
          <div className="mission-grid">
            <a className="mission-card mission-card-large mission-charity" href="https://www.tzuchi.or.id/misi/misi-amal/1" target="_blank" rel="noopener noreferrer"><img src="/images/mission-charity.jpg" alt="Ilustrasi relawan mengantar bantuan untuk warga" loading="lazy" /><span className="mission-number">01 / MISI AMAL</span><span className="mission-card-bottom"><span><small>MERINGANKAN BEBAN, MEMULIHKAN HARAPAN</small><strong>Amal & bantuan kemanusiaan</strong></span><span className="circle-arrow" aria-hidden="true">↗</span></span></a>
            <a className="mission-card mission-card-small mission-health" href="https://www.tzuchi.or.id/misi/0/2" target="_blank" rel="noopener noreferrer"><img src="/images/mission-health.jpg" alt="Ilustrasi tenaga medis memberi perhatian pada pasien" loading="lazy" /><span className="mission-number">02 / MISI KESEHATAN</span><span className="mission-card-bottom"><span><small>MERAWAT SETIAP KEHIDUPAN</small><strong>Kesehatan</strong></span><span className="circle-arrow" aria-hidden="true">↗</span></span></a>
            <a className="mission-card mission-card-small mission-education" href="https://www.tzuchi.or.id/misi/misi-pendidikan/3" target="_blank" rel="noopener noreferrer"><img src="/images/mission-education.jpg" alt="Ilustrasi anak-anak belajar dan membaca bersama" loading="lazy" /><span className="mission-number">03 / MISI PENDIDIKAN</span><span className="mission-card-bottom"><span><small>MENUMBUHKAN KARAKTER BAIK</small><strong>Pendidikan</strong></span><span className="circle-arrow" aria-hidden="true">↗</span></span></a>
            <a className="mission-card mission-card-large mission-earth" href="https://www.tzuchi.or.id/misi/misi-budaya-humanis/4" target="_blank" rel="noopener noreferrer"><img src="/images/mission-earth.jpg" alt="Ilustrasi warga dan relawan menanam pohon bersama" loading="lazy" /><span className="mission-number">04 / MISI BUDAYA HUMANIS</span><span className="mission-card-bottom"><span><small>MENYEBARKAN NILAI, MERAWAT BUMI</small><strong>Budaya humanis & lingkungan</strong></span><span className="circle-arrow" aria-hidden="true">↗</span></span></a>
          </div>
          <p className="mission-footnote">Juga bergerak dalam bantuan internasional, relawan komunitas, donor sumsum tulang, dan pelestarian lingkungan. <a href="https://www.tzuchi.or.id/tentang-kami/visi-dan-misi-tzu-chi/5" target="_blank" rel="noopener noreferrer">Lihat delapan jejak Dharma ↗</a></p>
        </div>
      </section>

      <section className="impact section-pad" id="dampak" aria-labelledby="impact-heading">
        <div className="container impact-grid">
          <div className="impact-copy"><span className="section-label section-label-light">03 / JEJAK KEBAIKAN</span><h2 id="impact-heading">Yang kecil,<br />jika dilakukan<br /><em>bersama, jadi besar.</em></h2><p>Bukan semata angka. Di balik setiap program ada manusia, keluarga, dan kesempatan untuk kembali berharap.</p><a className="button button-lime" href="https://www.tzuchi.or.id/resensi/872Annual-Report-Tzu-Chi-2025.pdf" target="_blank" rel="noopener noreferrer">Baca laporan tahunan <span aria-hidden="true">↗</span></a></div>
          <div className="impact-stats"><div className="stat"><span>01 / AWAL PERJALANAN</span><strong>1993</strong><p>Benih cinta kasih Tzu Chi mulai tumbuh di Indonesia.</p></div><div className="stat"><span>02 / JARINGAN GLOBAL</span><strong>68<small> negara</small></strong><p>Jaringan relawan Tzu Chi di seluruh dunia.</p></div><div className="stat"><span>03 / DAMPAK LINTAS BATAS</span><strong>139<small> negara</small></strong><p>Telah menerima bantuan melalui gerakan Tzu Chi global.</p></div><div className="impact-stats-note">Angka global merujuk pada informasi resmi Tzu Chi Indonesia tahun 2026. <a href="https://www.tzuchi.or.id/index.php" target="_blank" rel="noopener noreferrer">Lihat sumber ↗</a></div></div>
        </div>
        <div className="impact-bubble" aria-hidden="true">♥</div>
      </section>

      <section className="spotlight section-pad" id="program-unggulan" aria-labelledby="spotlight-heading">
        <div className="container spotlight-grid"><div className="spotlight-media"><img src="/images/community-portrait.jpg" alt="Ilustrasi keakraban relawan dengan warga di lingkungan rumah" loading="lazy"/><span className="photo-caption">KEHANGATAN DIMULAI DARI RUMAH</span><div className="photo-accent" aria-hidden="true">✳</div></div><div className="spotlight-content"><span className="section-label">04 / PROGRAM PILIHAN</span><div className="spotlight-rule" /><p className="spotlight-kicker">PROGRAM BEBENAH KAMPUNG</p><h2 id="spotlight-heading">Rumah yang layak.<br /><em>Harapan yang tumbuh.</em></h2><p>Rumah bukan hanya tempat berteduh. Ia adalah rasa aman untuk bertumbuh, belajar, dan menjalani hari esok. Melalui Bebenah Kampung, Tzu Chi turut menghadirkan lingkungan tinggal yang lebih sehat dan layak.</p><div className="program-pill"><span className="pill-orb" aria-hidden="true">✦</span><span><strong>5.000 rumah</strong><small>Target program renovasi RTLH yang dilaporkan pada 2026.</small></span></div><a className="underlined-link" href="https://www.tzuchi.or.id/bedah-rumah" target="_blank" rel="noopener noreferrer">Kenali program Bebenah Kampung <span>↗</span></a></div></div>
      </section>

      <section className="audiences section-pad" id="terlibat" aria-labelledby="audience-heading"><div className="container"><div className="section-topline"><span className="section-label">05 / ADA TEMPAT UNTUK SEMUA</span><span className="caption-right">KARENA SETIAP ORANG BISA BERARTI</span></div><div className="audience-heading"><h2 id="audience-heading">Kamu juga punya<br /><em>peran di sini.</em></h2><p>Ada banyak cara untuk bertumbuh bersama. Temukan jalan yang paling dekat dengan hatimu.</p></div><div className="audience-list">
            <a className="audience-row audience-one" href="https://www.tzuchi.or.id/tentang-kami/faq/4" target="_blank" rel="noopener noreferrer"><span className="audience-count">01</span><span className="audience-glyph" aria-hidden="true">♡</span><span className="audience-info"><strong>Penerima manfaat</strong><small>Temukan informasi dan jalur bantuan yang relevan.</small></span><span className="audience-action">Cari informasi <span>↗</span></span></a>
            <a className="audience-row audience-two" href="https://www.tzuchi.or.id/form-relawan" target="_blank" rel="noopener noreferrer"><span className="audience-count">02</span><span className="audience-glyph" aria-hidden="true">✳</span><span className="audience-info"><strong>Relawan</strong><small>Sumbangkan waktu, tenaga, dan perhatian untuk sesama.</small></span><span className="audience-action">Gabung relawan <span>↗</span></span></a>
            <a className="audience-row audience-three" href="https://www.tzuchi.or.id/donasi" target="_blank" rel="noopener noreferrer"><span className="audience-count">03</span><span className="audience-glyph" aria-hidden="true">✦</span><span className="audience-info"><strong>Donatur & mitra</strong><small>Perluas dampak kebaikan melalui dukungan dan kolaborasi.</small></span><span className="audience-action">Dukung misi <span>↗</span></span></a>
            <a className="audience-row audience-four" href="https://www.tzuchi.or.id/misi/misi-pendidikan/3" target="_blank" rel="noopener noreferrer"><span className="audience-count">04</span><span className="audience-glyph" aria-hidden="true">✎</span><span className="audience-info"><strong>Pelajar & peserta didik</strong><small>Belajar membangun karakter dan kepedulian sejak dini.</small></span><span className="audience-action">Jelajahi edukasi <span>↗</span></span></a>
          </div></div></section>

      <section className="stories section-pad" id="cerita" aria-labelledby="stories-heading"><div className="container"><div className="section-topline"><span className="section-label">06 / CERITA YANG BERGERAK</span><a className="top-link" href="https://www.tzuchi.or.id/berita" target="_blank" rel="noopener noreferrer">Semua kabar Tzu Chi ↗</a></div><div className="stories-head"><h2 id="stories-heading">Di balik setiap aksi,<br /><em>ada cerita manusia.</em></h2><p>Setiap perjumpaan meninggalkan jejak. Inilah kisah dan kegiatan yang membuat semangat cinta kasih terus hidup.</p></div><div className="stories-grid"><a className="story-card" href="https://www.tzuchi.or.id/bedah-rumah" target="_blank" rel="noopener noreferrer"><div className="story-image"><img src="/images/hero-community.jpg" alt="Ilustrasi percakapan hangat antara relawan dan warga" loading="lazy"/><span className="story-badge">RUMAH & KEHIDUPAN</span></div><div className="story-meta">PROGRAM BEBENAH KAMPUNG <span>↗</span></div><h3>Ruang yang lebih aman, awal dari harapan baru.</h3><p>Kisah tentang rumah, keluarga, dan kesempatan untuk memulai lagi.</p></a><a className="story-card" href="https://www.tzuchi.or.id/misi/0/2" target="_blank" rel="noopener noreferrer"><div className="story-image"><img src="/images/mission-health.jpg" alt="Ilustrasi tenaga medis menyapa pasien" loading="lazy"/><span className="story-badge">KESEHATAN</span></div><div className="story-meta">MISI KESEHATAN <span>↗</span></div><h3>Merawat dengan ilmu, melayani dengan hati.</h3><p>Sebuah perhatian tulus dapat memberi kekuatan di masa sulit.</p></a><a className="story-card" href="https://www.tzuchi.or.id/misi/misi-pendidikan/3" target="_blank" rel="noopener noreferrer"><div className="story-image"><img src="/images/mission-education.jpg" alt="Ilustrasi anak-anak membaca bersama" loading="lazy"/><span className="story-badge">PENDIDIKAN</span></div><div className="story-meta">MISI PENDIDIKAN <span>↗</span></div><h3>Menanam nilai baik untuk masa depan.</h3><p>Dari ruang belajar, lahir kebiasaan peduli yang menginspirasi.</p></a></div></div></section>

      <section className="education" id="edukasi" aria-labelledby="education-heading"><div className="container education-grid"><div className="education-photo"><img src="/images/mission-earth.jpg" alt="Ilustrasi kegiatan menanam pohon sebagai wujud kepedulian lingkungan" loading="lazy" /></div><div className="education-copy"><span className="section-label section-label-light">07 / NILAI YANG KITA JAGA</span><h2 id="education-heading">Kebaikan itu<br /><em>menular.</em></h2><p>Dimulai dari hal sederhana: mendengarkan dengan tulus, membantu tanpa pamrih, dan menjaga lingkungan tempat kita hidup.</p><div className="education-chips"><span>Peduli sesama</span><span>Hidup sederhana</span><span>Merawat bumi</span></div><a className="education-link" href="https://www.tzuchi.or.id/tentang-kami/visi-dan-misi-tzu-chi/5" target="_blank" rel="noopener noreferrer">Pelajari nilai-nilai Tzu Chi <span>↗</span></a></div><span className="education-star" aria-hidden="true">✷</span></div></section>

      <section className="faq section-pad" id="faq" aria-labelledby="faq-heading"><div className="container faq-grid"><div className="faq-intro"><span className="section-label">08 / SERING DITANYAKAN</span><h2 id="faq-heading">Ada yang ingin<br /><em>kamu tanyakan?</em></h2><p>Mulai dari menjadi relawan hingga mendukung program, kami ingin langkah pertamamu terasa mudah.</p><a className="underlined-link" href="https://www.tzuchi.or.id/tentang-kami/faq/4" target="_blank" rel="noopener noreferrer">Lihat FAQ selengkapnya <span>↗</span></a></div><div className="faq-items"><details><summary>Apakah kegiatan Tzu Chi terbuka untuk semua? <span>+</span></summary><p>Ya. Tzu Chi berlandaskan cinta kasih universal dan melayani tanpa membedakan suku, ras, agama, ataupun latar belakang.</p></details><details><summary>Bagaimana cara menjadi relawan? <span>+</span></summary><p>Kamu dapat mengisi <a href="https://www.tzuchi.or.id/form-relawan" target="_blank" rel="noopener noreferrer">formulir relawan resmi</a> untuk dihubungkan dengan koordinator relawan sesuai wilayah.</p></details><details><summary>Bagaimana cara berdonasi? <span>+</span></summary><p>Kunjungi <a href="https://www.tzuchi.or.id/donasi" target="_blank" rel="noopener noreferrer">halaman donasi resmi</a> untuk memilih program dan nominal bantuan yang sesuai.</p></details><details><summary>Di mana saya dapat mengetahui program bantuan? <span>+</span></summary><p>Lihat informasi pada <a href="https://www.tzuchi.or.id/tentang-kami/faq/4" target="_blank" rel="noopener noreferrer">FAQ resmi</a> dan hubungi kanal kontak Tzu Chi untuk prosedur serta persyaratan yang berlaku.</p></details></div></div></section>

      <section className="closing" id="donasi" aria-labelledby="closing-heading"><div className="container"><div className="closing-card"><span className="closing-overline">SATU TINDAKAN, BANYAK HARAPAN</span><div className="closing-text"><h2 id="closing-heading">Dunia yang lebih baik<br />dimulai dari <em>kita.</em></h2><p>Waktu, perhatian, dan sumbangsihmu dapat menjadi awal perubahan dalam hidup seseorang.</p><div className="closing-actions"><a href="https://www.tzuchi.or.id/donasi" className="button button-white" target="_blank" rel="noopener noreferrer">Donasi sekarang <span>↗</span></a><a href="https://www.tzuchi.or.id/form-relawan" className="closing-secondary" target="_blank" rel="noopener noreferrer">Jadi relawan <span>↗</span></a></div></div><div className="closing-graphic" aria-hidden="true"><div className="green-planet"><span>✳</span></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="closing-tiny-star">✦</span></div></div></div></section>

      <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#beranda"><span className="brand-flower" aria-hidden="true">✽</span><span className="brand-copy"><strong>tzuchi<span className="brand-dot">.</span></strong><small>YAYASAN BUDDHA TZU CHI<br />INDONESIA</small></span></a><p>Cinta kasih universal dalam tindakan nyata. Untuk manusia, kehidupan, dan bumi yang kita cintai.</p></div><div className="footer-links"><div><strong>Jelajahi</strong><a href="#tentang">Tentang kami</a><a href="#misi">Misi kami</a><a href="#dampak">Jejak kebaikan</a><a href="#cerita">Cerita</a></div><div><strong>Ambil bagian</strong><a href="https://www.tzuchi.or.id/form-relawan" target="_blank" rel="noopener noreferrer">Jadi relawan</a><a href="https://www.tzuchi.or.id/donasi" target="_blank" rel="noopener noreferrer">Berdonasi</a><a href="https://www.tzuchi.or.id/bedah-rumah" target="_blank" rel="noopener noreferrer">Bebenah Kampung</a><a href="#faq">Pertanyaan umum</a></div><div><strong>Terhubung</strong><a href="https://www.tzuchi.or.id/" target="_blank" rel="noopener noreferrer">Website resmi ↗</a><a href="https://www.tzuchi.or.id/hubungi-kami/menjadi-relawan/6" target="_blank" rel="noopener noreferrer">Hubungi kami ↗</a><a href="https://www.tzuchi.or.id/berita" target="_blank" rel="noopener noreferrer">Berita terbaru ↗</a></div></div></div><div className="footer-bottom"><span>© 2026 Yayasan Buddha Tzu Chi Indonesia. Konsep desain website.</span><span>Foto di halaman ini merupakan ilustrasi konseptual, bukan dokumentasi kegiatan asli.</span><a href="#beranda">Kembali ke atas ↑</a></div></div></footer>
    </main>
  );
}
