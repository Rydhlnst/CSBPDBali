import './style.css'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { RiWhatsappFill } from '@react-icons/all-files/ri/RiWhatsappFill'
import { RiMailFill } from '@react-icons/all-files/ri/RiMailFill'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { SiTiktok } from '@react-icons/all-files/si/SiTiktok'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'

const waIcon = renderToStaticMarkup(
  createElement(RiWhatsappFill, {
    className: 'inline align-[-2px] text-[#10B981]',
    'aria-hidden': 'true',
  }),
)

const waIconLg = renderToStaticMarkup(
  createElement(RiWhatsappFill, {
    className: 'inline text-[1.5em] text-[#10B981]',
    'aria-hidden': 'true',
  }),
)

const mailIconLg = renderToStaticMarkup(
  createElement(RiMailFill, {
    className: 'inline text-[1.5em] text-[#065F46]',
    'aria-hidden': 'true',
  }),
)
const facebookIcon = renderToStaticMarkup(
  createElement(FaFacebookSquare, {
    className: 'inline text-[30px] text-[#1877F2]',
    'aria-hidden': 'true',
  }),
)

const instagramIcon = renderToStaticMarkup(
  createElement(FaInstagramSquare, {
    className: 'inline text-[30px] text-[#E4405F]',
    'aria-hidden': 'true',
  }),
)

const linkedinIcon = renderToStaticMarkup(
  createElement(FaLinkedin, {
    className: 'inline text-[28px] text-[#0A66C2]',
    'aria-hidden': 'true',
  }),
)

const tiktokIcon = renderToStaticMarkup(
  createElement(SiTiktok, {
    className: 'inline text-[28px] text-black',
    'aria-hidden': 'true',
  }),
)

const youtubeIcon = renderToStaticMarkup(
  createElement(FaYoutube, {
    className: 'inline text-[32px] text-[#FF0000]',
    'aria-hidden': 'true',
  }),
)

const waNumber = '6282373341774'
const waTemplateText = encodeURIComponent('Halo CS Bank BPD Bali, saya ingin mendapatkan bantuan.')
const waLink = `https://wa.me/${waNumber}?text=${waTemplateText}`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="sticky top-0 z-30 border-b border-[#2a2a2a] bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#101214] text-white">
    <div class="mx-auto flex min-h-[56px] w-[min(1320px,calc(100%-24px))] items-center justify-between gap-4 py-2 md:min-h-[64px]">
      <button id="menu-open-btn" class="inline-flex h-9 w-9 items-center justify-center rounded-none text-sm md:text-[17px] lg:hidden" aria-label="Menu">&#9776;</button>

      <div class="flex min-w-0 items-center gap-3">
        <img class="h-8 w-auto max-w-[220px] object-contain md:h-10 md:max-w-[320px]" src="/navbar-logo.png" alt="Logo Bank BPD Bali" />
        <p class="max-w-[320px] truncate text-sm font-semibold text-white md:max-w-[520px] md:text-[17px]">Kontak Center Bank BPD Bali: Hub...</p>
      </div>

      <div class="hidden items-center gap-6 lg:flex">
        <a href="${waLink}" target="_blank" rel="noreferrer" class="max-w-[220px] truncate text-sm font-semibold text-white no-underline">Call Center Bank BPD Bali - Cust...</a>
        <a href="${waLink}" target="_blank" rel="noreferrer" class="max-w-[250px] truncate text-sm font-semibold text-white no-underline">Cara Menghubungi Call Center Ban...</a>
        <a href="${waLink}" target="_blank" rel="noreferrer" class="max-w-[210px] truncate text-sm font-semibold text-white no-underline">Cara Buka Blokir Bank BPD Bali</a>
        <button class="inline-flex h-8 w-8 items-center justify-center rounded-none text-lg" aria-label="Cari"></button>
      </div>

      <button class="inline-flex h-9 w-9 items-center justify-center rounded-none text-sm md:text-[17px] lg:hidden" aria-label="Cari"></button>
    </div>
  </header>
  <div id="mobile-menu-overlay" class="fixed inset-0 z-40 hidden bg-black/55 lg:hidden" aria-hidden="true">
    <aside id="mobile-menu-panel" class="h-full w-[82%] max-w-[320px] bg-gradient-to-b from-[#0f1012] to-[#17181c] p-4 text-white shadow-2xl">
      <button id="menu-close-btn" class="mb-6 inline-flex h-8 w-8 items-center justify-center text-3xl leading-none text-white" aria-label="Tutup Menu">&times;</button>
      <nav class="grid gap-3">
        <a href="${waLink}" target="_blank" rel="noreferrer" class="text-[14px] leading-[1.25] font-bold text-white no-underline">Call Center Bank BPD Bali - Customer Service Bank BPD Bali Layanan</a>
        <a href="${waLink}" target="_blank" rel="noreferrer" class="text-[14px] leading-[1.25] font-bold text-white no-underline">Cara Menghubungi Call Center Bank BPD Bali</a>
        <a href="${waLink}" target="_blank" rel="noreferrer" class="text-[14px] leading-[1.25] font-bold text-white no-underline">Cara Buka Blokir Bank BPD Bali</a>
      </nav>
    </aside>
  </div>

  <main class="pb-10 pt-6 bg-white">
    <section class="mx-auto w-[min(1320px,calc(100%-24px))] border-b border-[#E5E7EB] pb-6 text-center">
      <h1 class="mx-auto max-w-5xl text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">Kontak Layanan Bank BPD Bali: Call Center Bank BPD Bali - Customer Service Bank BPD Bali - Cara Buka Blokir Bank BPD Bali</h1>
      <img class="mx-auto mt-4 h-auto w-[260px] sm:w-[320px] lg:w-[360px]" src="/hero-bpd-bg.png" alt="Logo Bank BPD Bali" />
    </section>

    <section class="mb-6 mt-5 w-screen [margin-left:calc(50%-50vw)] [margin-right:calc(50%-50vw)]">
      <a href="${waLink}" target="_blank" rel="noreferrer" class="flex w-full items-center overflow-hidden rounded-none border border-[#10B981] bg-[#ECFDF5] py-2 text-[#065F46] no-underline">
        <span class="animate-marquee inline-block whitespace-nowrap text-sm font-bold sm:text-lg">Selamat Datang Dilayanan Bank BPD Bali 082373341774</span>
        <span class="animate-marquee inline-block whitespace-nowrap text-sm font-bold sm:text-lg" aria-hidden="true">Selamat Datang Dilayanan Bank BPD Bali 082373341774</span>
      </a>
    </section>

    <section class="mx-auto grid w-[min(1320px,calc(100%-24px))] items-start gap-8 lg:grid-cols-[7fr_3fr]">
      <article class="min-w-0">
        <section class="border-b border-[#E5E7EB] pb-6">
          <h2 class="mb-2 text-2xl font-bold leading-snug text-[#065F46] sm:text-3xl">Panduan Cara Menghubungi Customer Service (CS) Bank BPD Bali</h2>
          <p class="text-[15px] leading-[1.7] text-[#111827] sm:text-base">
            Hubungi Customer Service (CS) Bank BPD Bali: Call Center 082373341774 (WhatsApp) ${waIcon} 082373341774 (Live Chat) Email:
            <a class="font-semibold text-[#047857]" href="${waLink}" target="_blank" rel="noreferrer">csbpdbali@gmail.com</a> (dari luar negeri) untuk keluhan, pertanyaan, dan permintaan,
            selama hari kerja (08.00-17.00 WIB) Senin - Minggu atau Relationship Manager Anda.
          </p>
        </section>

        <section class="border-b border-[#E5E7EB] py-6">
          <h2 class="mb-2 text-2xl font-bold leading-snug text-[#065F46] sm:text-3xl">Cara Menghubungi Call Center Bank BPD Bali</h2>
          <ol class="list-decimal space-y-1 pl-5 text-[15px] leading-[1.7] text-[#111827] sm:text-base">
            <li>Hubungi nomor 082373341774.</li>
            <li>Kirim Email ke <a class="font-semibold text-[#047857]" href="${waLink}" target="_blank" rel="noreferrer">csbpdbali@gmail.com</a>.</li>
            <li>Sertakan detail lengkap mengenai masalah yang Anda alami di aplikasi Bank BPD Bali.</li>
            <li>Pastikan Anda hanya menggunakan alamat email & nomor telepon yang tercantum di situs web resmi Bank BPD Bali.</li>
          </ol>
        </section>

        <section class="border-b border-[#E5E7EB] py-6">
          <h2 class="mb-2 text-2xl font-bold leading-snug text-[#065F46] sm:text-3xl">Tips Menghubungi CS Bank BPD Bali Dengan Cepat</h2>
          <ul class="list-disc space-y-1 pl-5 text-[15px] leading-[1.7] text-[#111827] sm:text-base">
            <li>Siapkan KTP, Nomor Telepon dan alamat Email yang terdaftar.</li>
            <li>Jelaskan kendala atau pertanyaan secara singkat, padat, dan jelas.</li>
            <li>Gunakan satu saluran resmi (WhatsApp, Call, atau Live Chat) agar tidak terjadi duplikasi laporan.</li>
            <li>Hubungi di luar jam sibuk (pagi atau malam hari) untuk mendapat respon.</li>
          </ul>
        </section>

        <section class="border-b border-[#E5E7EB] py-6">
          <h2 class="mb-2 text-2xl font-bold leading-snug text-[#065F46] sm:text-3xl">Tips Cara Buka Blokir Bank BPD Bali</h2>
          <ol class="list-decimal space-y-1 pl-5 text-[15px] leading-[1.7] text-[#111827] sm:text-base">
            <li>Hubungi Call Center Bank BPD Bali di 082373341774 / 082373341774.</li>
            <li>(Live Chat): Email <a class="font-semibold text-[#047857]" href="${waLink}" target="_blank" rel="noreferrer">csbpdbali@gmail.com</a>.</li>
            <li>Siapkan KTP, Nomor Rekening, Kartu ATM, dan Buku Tabungan.</li>
            <li>Customer Service akan membantu proses verifikasi.</li>
            <li>Verifikasi pembukaan blokir.</li>
          </ol>
        </section>

      </article>

      <aside class="lg:pt-1">
        <div class="top-24 lg:sticky">
          <div class="mb-3 inline-flex rounded-none bg-[#ECFDF5] px-4 py-2 text-sm font-bold text-[#065F46]">CS Bank BPD Bali</div>
          <div class="mb-4 grid gap-2">
            <a class="inline-flex min-h-10 items-center justify-center gap-2 rounded-none border border-[#D1FAE5] bg-[#ECFDF5] px-3 text-sm font-semibold text-[#065F46] no-underline" href="${waLink}" target="_blank" rel="noreferrer">${waIconLg}<span>082373341774</span></a>
            <a class="inline-flex min-h-10 items-center justify-center gap-2 rounded-none border border-[#D1FAE5] bg-[#ECFDF5] px-3 text-sm font-semibold text-[#065F46] no-underline" href="${waLink}" target="_blank" rel="noreferrer">${mailIconLg}<span>csbpdbali@gmail.com</span></a>
          </div>
          <h3 class="mb-2 text-xl font-bold leading-snug text-[#065F46]">Menyediakan layanan informasi kepada Nasabah / (Calon) Nasabah</h3>
          <ol class="list-decimal space-y-1 pl-5 text-[15px] leading-[1.7] text-[#111827]">
            <li>Nasabah dapat menghubungi Kantor Non Operasional Bank di nomor 082373341774.</li>
            <li>Hubungi Call Center (WhatsApp) berikut ${waIcon} <a class="font-semibold text-[#047857]" href="${waLink}" target="_blank" rel="noreferrer">082373341774</a>.</li>
            <li>Help Center Melalui E-mail di <a class="font-semibold text-[#047857]" href="${waLink}" target="_blank" rel="noreferrer">csbpdbali@gmail.com</a>.</li>
          </ol>
        </div>
      </aside>
    </section>

    <section class="mx-auto grid w-[min(1320px,calc(100%-24px))] items-start gap-8 py-6 lg:grid-cols-[7fr_3fr]">
      <div>
        <h2 class="mb-2 text-2xl font-bold leading-snug text-[#065F46] sm:text-3xl">Alamat & Kontak Resmi Bank BPD Bali</h2>
        <ul class="list-disc space-y-1 pl-5 text-[15px] leading-[1.7] text-[#111827] sm:text-base">
          <li>Alamat Kantor: Jl. Raya Puputan Niti Mandala Denpasar 80235 Bali</li>
          <li>Telepon: 082373341774.</li>
          <li>Email: <a class="font-semibold text-[#047857]" href="${waLink}" target="_blank" rel="noreferrer">csbpdbali@gmail.com</a>.</li>
          <li>Website Resmi: <a class="font-semibold text-[#047857]" href="${waLink}" target="_blank" rel="noreferrer">www.bpdbali.co.id</a>.</li>
          <li>Ikuti Bank BPD Bali di Media Sosial:</li>
        </ul>
        <div class="mt-3 flex items-center gap-3 pl-5">
          <a href="${waLink}" target="_blank" rel="noreferrer" aria-label="Facebook" class="inline-flex h-8 w-8 items-center justify-center no-underline">${facebookIcon}</a>
          <a href="${waLink}" target="_blank" rel="noreferrer" aria-label="Instagram" class="inline-flex h-8 w-8 items-center justify-center no-underline">${instagramIcon}</a>
          <a href="${waLink}" target="_blank" rel="noreferrer" aria-label="LinkedIn" class="inline-flex h-8 w-8 items-center justify-center no-underline">${linkedinIcon}</a>
          <a href="${waLink}" target="_blank" rel="noreferrer" aria-label="TikTok" class="inline-flex h-8 w-8 items-center justify-center no-underline">${tiktokIcon}</a>
          <a href="${waLink}" target="_blank" rel="noreferrer" aria-label="YouTube" class="inline-flex h-8 w-8 items-center justify-center no-underline">${youtubeIcon}</a>
        </div>

        <div class="mt-5 grid w-full grid-cols-2 items-center gap-3 lg:grid-cols-4">
          <img class="w-full" src="/badge-lps.png" alt="LPS" />
          <img class="w-full" src="/badge-swift.png" alt="SWIFT CODE ABALIDBS" />
          <img class="w-full" src="/badge-ojk.png" alt="Berizin OJK" />
          <img class="w-full" src="/badge-bi.png" alt="Berizin Bank Indonesia" />
        </div>
      </div>

      <a
        class="block w-full overflow-hidden rounded-none border border-[#E5E7EB]"
        href="${waLink}"
        target="_blank"
        rel="noreferrer"
        aria-label="Buka lokasi di Google Maps"
      >
        <iframe
          class="min-h-[210px] w-full"
          title="Lokasi kantor Bank BPD Bali"
          src="https://www.google.com/maps?q=Jl.+Raya+Puputan+Niti+Mandala+Denpasar+80235+Bali&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </a>
    </section>
  </main>

  <footer class="mt-2 flex min-h-[52px] items-center justify-center border-t border-[#2a2a2a] bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#101214] px-3 py-2 text-center text-xs text-slate-200">
    Copyright © 2026 PT. Bank Pembangunan Daerah Bali. All Rights Reserved.
  </footer>
`


const menuOpenBtn = document.querySelector<HTMLButtonElement>('#menu-open-btn')
const menuCloseBtn = document.querySelector<HTMLButtonElement>('#menu-close-btn')
const mobileMenuOverlay = document.querySelector<HTMLDivElement>('#mobile-menu-overlay')
const mobileMenuPanel = document.querySelector<HTMLElement>('#mobile-menu-panel')

const openMenu = () => {
  if (!mobileMenuOverlay) return
  mobileMenuOverlay.classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  if (!mobileMenuOverlay) return
  mobileMenuOverlay.classList.add('hidden')
  document.body.style.overflow = ''
}

menuOpenBtn?.addEventListener('click', openMenu)
menuCloseBtn?.addEventListener('click', closeMenu)
mobileMenuOverlay?.addEventListener('click', (event) => {
  if (!mobileMenuPanel?.contains(event.target as Node)) closeMenu()
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu()
})








