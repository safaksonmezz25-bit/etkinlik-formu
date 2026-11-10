/*
 * ETKİNLİK BİLGİ FORMU — AYARLAR
 * Formu kendi kurumunuza göre ayarlamak için yalnızca bu dosyayı düzenleyin.
 * Metinleri tırnak işaretlerinin içinde değiştirin; virgülleri silmeyin.
 */
window.FORM_AYARLARI = {
  // Sayfanın başlığı ve altındaki kısa açıklama
  baslik: "Etkinlik Bilgi Formu",
  aciklama: "Birim ya da mekânınızın etkinliklerini bu formla iletin. Tek oturumlu etkinliklerde yalnızca Oturum 1'i doldurmanız yeterli.",

  // Google E-Tablo scriptini yayınladığınızda aldığınız adres (sonu /exec ile biter).
  // Boş bırakılırsa form "deneme modunda" çalışır: veri hiçbir yere gönderilmez.
  gonderimAdresi: "",

  // İsteğe bağlı: Kod.gs içindeki FORM_ANAHTARI ile aynı olmalı. Boş bırakılabilir.
  formAnahtari: "",

  // Birim listesi. Listede olmayan birimler "Listede yok" seçip adını yazabilir.
  // Liste boş bırakılırsa ([]) birim adı serbestçe yazılır.
  birimler: [
    "Beyoğlu Sineması",
    "Dini Kurum ve Topluluklarla İlişkiler",
    "İFSAK Bulgur Palas",
    "İstanbul Boğaz Müzesi",
    "Kuyumcuhan",
    "Botter"
  ],

  // Oturum türleri. Listenin sonuna otomatik olarak "Diğer" eklenir.
  turler: [
    "Söyleşi",
    "Panel",
    "Seminer",
    "Film gösterimi ve söyleşi",
    "Konser / Dinleti",
    "Sergi gezisi",
    "Kent yürüyüşü / Tur",
    "Atölye",
    "Stand-up",
    "Anma"
  ],

  // Saat listesi: ilk saat, son saat ve aralık (dakika)
  saatIlk: "07:00",
  saatSon: "23:45",
  saatAdimDk: 15
};
