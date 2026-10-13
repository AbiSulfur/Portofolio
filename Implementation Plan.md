# Implementation Plan: Portfolio Redesign Berdasarkan DESIGN.md

Dokumen rencana kerja dan keputusan desain untuk perombakan website portfolio `abigaildev.my.id` mengikuti spesifikasi tunggal `DESIGN.md`, memadukan struktur layout bergaya Framer dan kehalusan animasi bergaya Cuberto.

---

## 1. Ringkasan Audit dan Konteks (Phase 0)

### 1.1 Kondisi Stack dan Dependensi Saat Ini
- **Framework**: Astro `v7.3.7` dengan integrasi `@astrojs/react` `v7.0.1`.
- **UI Runtime**: React `19.2.0` dan `react-dom` `19.2.0`.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` `v4.3.3`, `tailwindcss` `v4.1.9`).
- **Animasi & Interaksi**: `framer-motion` `v14.1.0` (kompatibel dengan `motion/react`), `tw-animate-css` `1.3.3`, `tailwindcss-animate` `1.0.7`, `canvas-confetti` `1.9.4`, `lenis` `v1.3.26`.
- **Git State**: Berada pada branch `redesign/design-md`.

---

### 1.2 Pemetaan Struktur Bagian & Fitur (DESIGN.md §3 vs Kode Saat Ini)

Seluruh bagian dan fitur eksisting (F1 sampai F11) dipertahankan 100% tanpa ada yang dihapus atau dihilangkan tanpa persetujuan.

| # | Bagian / Fitur | Lokasi Komponen Eksisting | Status & Tindakan Redesign Berdasarkan DESIGN.md |
|---|---|---|---|
| 0 | **Navbar** | `components/header.tsx` | **Redesign**: Fixed bar transparan di atas hero, blur ke `--bg` setelah scroll 80px. Tautan dengan underline-sweep hover (scaleX 500ms). Toggle bahasa segmented control (ID / EN). Mobile full-screen menu dengan staggered link reveal. |
| 1 | **Hero (`#top`)** | `components/hero.tsx` | **Redesign**: Headline H1 tiga baris dengan line-masked reveal (stagger 120ms). Subteks, CTA (Free Consultation + View My Works), dan badges (Mobile Friendly, Fast Loading, Modern Design). Hapus animasi blur blobs dan typewriter generik. Tambah marquee strip tech stack (Next.js, React, TypeScript, Laravel, Tailwind CSS, MySQL) di bawah hero. |
| 2 | **Intro Quote (`#intro`)** | `components/manifesto.tsx` | **Redesign**: Statement filosofi kerja *"I don't just write code..."* dengan animasi word-by-word reveal terikat scroll progress (opacity 0.2 ke 1), diikuti tautan "View My Works". |
| 3 | **My Services (`#services`)** | `components/services.tsx` | **Redesign**: Mengubah list horizontal menjadi **sticky stacking cards** dengan offset top (90, 112, 134px). Setiap kartu memiliki warna permukaan berbeda (`--accent`, `--ink`, `#5B6BFF`) dan kartu sebelumnya mengecil ke 0.92 serta meredup saat kartu berikutnya menumpuk. |
| 4 | **My Works (`#projects`)** | `components/projects.tsx` | **Redesign**: Blok gelap (`--ink`, radius 56px). Grid dua kolom dengan offset 80px ke bawah untuk item genap di desktop. Rasio media 4:3.4 dengan efek hover zoom media 1.1 dan bubble lingkaran "View" yang membesar di tengah kursor. |
| 5 | **My Work Process (`#process`)** | `components/trust.tsx` | **Redesign**: Ganti ID anchor menjadi `#process`. Tiga tahapan kerja (Riset, Desain & Dev, Pengujian) dihubungkan garis progres 2px yang terisi dinamis saat di-scroll, dengan nomor langkah berganti warna aksen saat tercapai. |
| 6 | **About Me (`#about`)** | `components/about.tsx` | **Redesign**: Layout editorial dua kolom. Sisi kiri: bio 3 paragraf dan quote penutup. Sisi kanan: stat counters dan Core Expertise chips. Foto personal tetap tidak ditampilkan. |
| 7 | **Contact (`#contact`)** | `components/contact.tsx` | **Redesign**: Full-bleed accent block (`--accent`, radius 48px), headline H2, tombol pill WhatsApp dan Email, serta daftar Direct Contact (Email, GitHub, LinkedIn, Instagram). |
| 8 | **Footer** | `components/footer.tsx` | **Redesign**: Footer bersih bernuansa editorial (`--bg`, mono labels, underline sweep links, copyright, tautan Privacy dan Terms). |
| F1 | **Bilingual ID / EN Switch** | `lib/dictionaries.ts` | **Refactor**: Memisahkan kamus bahasa ke data terstruktur `src/i18n/id.json` dan `src/i18n/en.json`, menyimpan preferensi di `localStorage`, dan mengupdate atribut `<html lang>`. |
| F2 | **Status "Available for work"** | `components/hero.tsx` | **Sentralisasi**: Indikator dot berdenyut hijau dikendalikan melalui satu konfigurasi flag di `src/data/site.ts`. |
| F3 | **WhatsApp CTA** | Berbagai komponen | **Pertahankan**: Membuka `wa.me/6287725223486` di tab baru dengan `rel="noopener noreferrer"`. |
| F4 | **Email CTA** | Berbagai komponen | **Pertahankan**: Tautan langsung ke `mautidur34@gmail.com`. |
| F5 | **Project Metadata** | `components/projects.tsx` | **Refactor Data**: Memindahkan metadata 4 proyek ke `src/data/projects.ts`. |
| F6 | **Animated Stat Counters** | `components/about.tsx` | **Sesuai**: Count-up animation saat masuk viewport, data diambil dari `src/data/site.ts`. |
| F7 | **Anchor Navigation** | `components/header.tsx` | **Penyempurnaan**: Smooth scroll terintegrasi dengan offset navigasi navbar tetap (-80px). |
| F8 | **Social Links** | `components/footer.tsx` | **Pertahankan**: GitHub, LinkedIn, Instagram. |
| F9 | **Halaman Legal** | `pages/privacy.astro`, `terms.astro` | **Pertahankan**: Halaman kebijakan privasi dan ketentuan layanan. |
| F10 | **SEO Metadata** | `layouts/Layout.astro` | **Pertahankan**: Meta tag, Open Graph, Twitter card, dan locale `id_ID`. |
| F11 | **Responsif & Aksesibel** | Seluruh UI | **Target Mutlak**: Sesuai target breakpoint, touch target minimal 44x44px, dan aksesibilitas WCAG 2.2 AA. |

---

### 1.3 Keputusan yang Dipilih oleh User
1. **Framework**: Astro + React islands + Tailwind CSS v4.
2. **Stat Counter**: Opsi A (4+ Projects Showcase, 2+ Years Web Development Experience, metrik 100% Client Satisfaction dihapus).
3. **Screenshot Proyek**: Opsi A (menggunakan aset `Porto*.webp` yang sudah tersedia di folder public dengan rasio 4:3.4).
4. **Bahasa Utama**: Opsi A (Default English `en` dengan toggle ke Bahasa Indonesia `id`).
5. **Fitur Tambahan Opsional**: Opsi B (Lenis Smooth Scroll + Magnetic Buttons + Custom Cursor desktop).
6. **Pengelolaan Font**: Opsi A (Self-hosted WOFF2 di `public/fonts/`).
7. **Bagian Kontak**: Opsi A (Pill buttons direct WhatsApp & Email + Direct Contact list).

---

## 2. Rencana Eksekusi Bertahap (Roadmap Phases)

Setiap fase dikerjakan berurutan dengan laporan progres dan persetujuan user sebelum lanjut ke fase berikutnya.

### Phase 1: Foundation (Fondasi Token, Font, Data, dan i18n) - [COMPLETED]
- **Tugas**:
  1. Buat branch git `redesign/design-md`. [Selesai]
  2. Setup token warna, tipografi, radius, dan spacing skala DESIGN.md §4 di `src/styles/globals.css` menggunakan `@theme` Tailwind v4. [Selesai]
  3. Siapkan font Bricolage Grotesque dan DM Mono self-hosted WOFF2 di `public/fonts/`. [Selesai]
  4. Buat struktur data konten di `src/data/site.ts`, `src/data/projects.ts`, `src/data/services.ts`, `src/data/process.ts`. [Selesai]
  5. Buat kamus bahasa terstruktur di `src/i18n/id.json` dan `src/i18n/en.json` serta hook/provider i18n di `src/i18n/index.tsx`. [Selesai]
  6. Buat layout dasar `src/layouts/Layout.astro` yang memuat token, font preloads, SEO meta tags, skip-link, dan i18n provider shell. [Selesai]
  7. Siapkan token gerak di `src/motion/tokens.ts` dan fungsi utilitas di `src/lib/utils.ts`. [Selesai]
- **Hasil Verifikasi**:
  - `npm run build` berhasil (exit code 0) dalam 6.35s tanpa error.
  - Browser subagent memvalidasi rendering tipografi Bricolage Grotesque, DM Mono, palet warna, 0 console errors, dan fungsi toggle bahasa EN <-> ID yang tersimpan ke `localStorage`.

### Phase 2: Static Sections (Implementasi Seluruh 8 Section Tanpa Animasi) - [COMPLETED]
- **Tugas**:
  1. Buat komponen UI dasar: `Button` (pill 56px), `Chip` (mono 13px), `Badge` (availability dot), `SegmentedControl` (language toggle). [Selesai]
  2. Susun komponen section statis:
     - Navbar (`#top`): Logo, links, language toggle, status badge, mobile menu. [Selesai]
     - Hero: Headline 3 baris terstruktur, subteks, CTA WhatsApp + Works, badges, stack marquee strip. [Selesai]
     - Intro Quote (`#intro`): Teks quote filosofi + link View My Works. [Selesai]
     - Services (`#services`): 3 kartu layanan terpisah dengan warna masing-masing (`--accent`, `--ink`, `#5B6BFF`). [Selesai]
     - Projects (`#projects`): Dark section (`--ink`), 4 kartu proyek (AgriNusa, Aethel, Stockwise, Leafly) dengan layout asimetris desktop, tag stack, dan link. [Selesai]
     - Work Process (`#process`): 3 langkah kerja dengan penomoran mono. [Selesai]
     - About Me (`#about`): Bio 2 kolom, stat counters, chip core expertise. [Selesai]
     - Contact (`#contact`): Blok aksen, tombol kontak, daftar direct links. [Selesai]
     - Footer: Brand, links navigasi, copyright, link legal. [Selesai]
  3. Halaman legal: `src/pages/privacy.astro` dan `src/pages/terms.astro`. [Selesai]
- **Hasil Verifikasi**:
  - `npm run build` sukses membangun 3 rute (`/index.html`, `/privacy/index.html`, `/terms/index.html`) dengan exit code 0.
  - Browser subagent memverifikasi tampilan visual seluruh 8 section, kontras WCAG 2.2 AA, fungsionalitas toggle bahasa EN <-> ID pada seluruh teks, routing halaman legal, dan 0 console errors.

### Phase 3: Motion (Penerapan Animasi Sesuai DESIGN.md §7) - [COMPLETED]
- **Tugas**:
  1. Siapkan komponen motion: `LineReveal`, `FadeUp`, `WordReveal`, `StickyCard`, `ProjectCardMedia`, `ProcessTimeline`, `Counter`. [Selesai]
  2. Terapkan animasi line-masked reveal pada hero headline (stagger 120ms). [Selesai]
  3. Terapkan word-by-word reveal pada intro quote berbasis scroll progress. [Selesai]
  4. Terapkan sticky stacking cards pada section services dengan efek scaling ke 0.92 dan dimming. [Selesai]
  5. Terapkan hover zoom pada media proyek dan bubble lingkaran "View" interaktif. [Selesai]
  6. Terapkan progres garis penghubung pada work process berbasis scroll dengan aktivasi nomor langkah. [Selesai]
  7. Terapkan animasi counter pada stat numbers (4+ dan 2+) saat in-view. [Selesai]
  8. Integrasikan Lenis smooth scroll pada container dokumen dengan offset navigasi anchor -80px. [Selesai]
- **Hasil Verifikasi**:
  - `npm run build` sukses membangun seluruh rute tanpa error.
  - Browser subagent memverifikasi kehalusan animasi line reveal, scroll reveal kata, stacking kartu, hover bubble, draw timeline, animated counter, dan mencatat 0 console errors/warnings.

### Phase 4: Polish (Aksesibilitas Reduced-Motion, View Transitions, Magnetic Buttons, Custom Cursor) - [COMPLETED]
- **Tugas**:
  1. Implementasi fallback lengkap `@media (prefers-reduced-motion: reduce)` menggunakan `useReducedMotion()`. Nonaktifkan Lenis, sticky scaling, custom cursor, dan magnetic motion jika mode reduced-motion aktif. [Selesai]
  2. Penerapan komponen `Magnetic.tsx` (desktop pointer fine, max shift 12px, spring damping 15) pada tombol navigasi, hero, proyek, dan kontak. [Selesai]
  3. Penerapan komponen `CustomCursor.tsx` (spring follower dengan cursor hover dan project state) pada desktop pointer. [Selesai]
  4. Integrasi Astro View Transitions (`ClientRouter`) pada `Layout.astro` untuk navigasi halus antar-halaman (`/`, `/privacy`, `/terms`). [Selesai]
  5. Pengujian detail micro-interactions (hover states, focus rings, touch targets). [Selesai]
- **Hasil Verifikasi**:
  - `npm run build` sukses membangun 3 halaman static (`/`, `/privacy`, `/terms`) dalam 47s dengan exit code 0.
  - Browser subagent memverifikasi interaksi magnetic button, custom cursor hover/project states, perpindahan halaman via View Transitions ke `/privacy` dan kembali ke `/`, serta mencatat 0 console errors dan 0 warnings.

### Phase 5: QA & Final Report - [COMPLETED]
- **Tugas**:
  1. Validasi build produksi static Astro v7 + Tailwind CSS v4 (`npm run build` sukses 100%, 3 halaman ter-generate). [Selesai]
  2. Perbaikan detail interaksi folder stack pada section Services dengan interval gap strictly identik (76px) dan sticky hold sempurna, terverifikasi lewat tangkapan layar browser. [Selesai]
  3. Pengujian keyboard navigation dan screen-reader landmark check (skip-to-content landmark, heading hierarchy, outline focus-visible). [Selesai]
  4. Pengujian responsif lintas viewport (Desktop 1440px, Tablet 768px, Mobile 375px) tanpa horizontal scroll overflow dan layout adaptif. [Selesai]
  5. Pengujian konsol browser bersih (0 console errors, 0 warnings). [Selesai]
- **Quality Gate**: Seluruh Quality Gate terpenuhi 100%, 0 console errors, build produksi bersih.

---

### Status Saat Ini: Seluruh Fase (Phase 0 hingga Phase 5) Telah Selesai Sepenuhnya. Proyek siap di-commit dan digunakan.

