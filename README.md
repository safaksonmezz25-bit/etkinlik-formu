# Etkinlik Bilgi Formu

Birimlerin ve mekânların etkinlik programlarını tek bir web formuyla toplamak için ücretsiz, açık kaynak bir uygulama.

- Her **etkinlik** altında bir ya da daha fazla **oturum** girilir; tek oturumlu etkinliklerde yalnızca Oturum 1 doldurulur.
- **+ Etkinlik ekle**, **+ Oturum ekle**, **Sil** (geri alınabilir) ve **Kopyala** düğmeleri vardır. Yeni eklenenler boş gelir.
- Tarih takvimden, saat 15 dakika aralıklı listeden seçilir. Eksik ya da hatalı alanlar gönderimden önce kırmızıyla gösterilir.
- Yarım kalan form, aynı tarayıcıda otomatik olarak taslak saklanır.
- Gönderilen her form doğrudan sizin **Google E-Tablonuza** yazılır: `Gönderimler`, `Etkinlikler` ve `Oturumlar` (her satır bir oturum) sayfaları.

```
Form sayfası (GitHub Pages)  ──gönder──▶  Google Apps Script  ──yazar──▶  Google E-Tablo
```

Sunucu kiralamanız ya da bilgi işlem desteği almanız gerekmez. GitHub ve Google hesabıyla, yaklaşık 20 dakikada kurulur.

---

## Kurulum

### 1. Google E-Tabloyu hazırlayın (veri burada toplanacak)

1. [sheets.new](https://sheets.new) adresinden yeni bir E-Tablo açın ve adını **Etkinlik Programı** yapın.
2. Menüden **Uzantılar → Apps Script**'i açın.
3. Editördeki hazır kodu silin. Bu depodaki **`apps-script/Kod.gs`** dosyasının içeriğini kopyalayıp yapıştırın. **Kaydet** (disket simgesi).
4. Üstteki fonksiyon listesinden **`kurulum`**'u seçip **Çalıştır**'a basın.
   - Google izin isteyecek: hesabınızı seçin. "Google bu uygulamayı doğrulamadı" uyarısı çıkarsa **Gelişmiş → (proje adı) projesine git → İzin ver** deyin. Kendi yazdığınız scriptlerde bu uyarı normaldir.
5. E-Tabloya dönün: **Gönderimler**, **Etkinlikler** ve **Oturumlar** sayfaları oluşmuş olmalı.
6. Apps Script'te sağ üstten **Dağıt → Yeni dağıtım**'a (Deploy → New deployment) basın.
   - Çark simgesinden tür olarak **Web uygulaması**'nı (Web app) seçin.
   - **Şu kullanıcı olarak yürüt:** Ben (Me)
   - **Erişimi olan kullanıcılar:** Herkes (Anyone)
   - **Dağıt**'a basın ve verilen **Web uygulaması URL'sini** kopyalayın. Adres `.../exec` ile biter.
7. Kopyaladığınız adresi tarayıcıda açın. `"durum":"çalışıyor"` yazısını görüyorsanız bu adım tamam.

> Kurumsal bir Google Workspace hesabında "Herkes" seçeneği yönetici tarafından kapatılmış olabilir. O durumda bilgi işleme danışın ya da formu başka bir Google hesabında kurun.

### 2. GitHub'da depoyu oluşturun (form burada yayınlanacak)

1. [github.com](https://github.com) adresinde ücretsiz bir hesap açın ya da giriş yapın.
2. Sağ üstteki **+** → **New repository**.
   - **Repository name:** `etkinlik-formu`
   - **Public** seçili kalsın. Ücretsiz hesapta GitHub Pages yalnızca herkese açık depolarda çalışır. Depoda yalnızca form kodu durur; gönderilen veriler E-Tablonuzda kalır.
   - **Create repository**'ye basın.
3. Açılan sayfada **uploading an existing file** bağlantısına tıklayın.
4. Zip'ten çıkardığınız **bütün dosyaları ve `apps-script` klasörünü** sayfaya sürükleyip bırakın: `index.html`, `ayarlar.js`, `README.md`, `LICENSE`, `apps-script/`.
5. Aşağıdaki **Commit changes** düğmesine basın.

### 3. Formu E-Tabloya bağlayın

1. Depoda **`ayarlar.js`** dosyasına tıklayın, sağ üstteki **kalem** simgesine (Edit) basın.
2. `gonderimAdresi: ""` satırında tırnakların içine 1. adımda kopyaladığınız `/exec` adresini yapıştırın:
   ```js
   gonderimAdresi: "https://script.google.com/macros/s/AKfy.../exec",
   ```
3. **`birimler`** listesini kendi birimlerinizle değiştirin. Her birim tırnak içinde, aralarında virgül olacak şekilde.
4. **Commit changes** ile kaydedin.

### 4. Formu yayına alın (GitHub Pages)

1. Depoda **Settings → Pages**'e gidin.
2. **Build and deployment → Source:** *Deploy from a branch*; **Branch:** `main` ve `/ (root)` seçip **Save**'e basın.
3. 1–2 dakika sonra aynı sayfanın üstünde form adresiniz görünür:
   `https://KULLANICIADINIZ.github.io/etkinlik-formu/`
4. Adresi açın. Sayfanın üstünde turuncu **"Deneme modu"** bandı görünmüyorsa bağlantı doğru kurulmuştur.
5. Kendinize bir deneme formu gönderin, E-Tabloda satırların geldiğini görün ve deneme satırlarını silin.

### 5. Formu gönderin

Form adresini birim sorumlularına e-postayla ya da mesajla iletin. Telefonda da açılır, hesap açmaları gerekmez.

---

## Değişiklik yapmak

| Ne değişecek | Nerede |
|---|---|
| Birim listesi, oturum türleri, saat aralığı, başlık, açıklama | GitHub'da `ayarlar.js` → kalem → düzenle → Commit. Birkaç dakika içinde yayına geçer. |
| E-Tabloya yazılan sütunlar ya da kurallar | Apps Script'te `Kod.gs`'yi düzenleyin, sonra **Dağıt → Dağıtımları yönet → kalem → Sürüm: Yeni sürüm → Dağıt**. Adres değişmez. |

## Veriyi kullanmak

- **Oturumlar** sayfasında her satır bir oturumdur. Yanında etkinlik adı, durumu, birim, formu dolduran ve iletişim bilgisi vardır. Filtre, pivot tablo ya da **Dosya → İndir → Microsoft Excel** ile kullanabilirsiniz.
- **Etkinlikler** sayfasında her etkinliğin oturum sayısı ile ilk ve son tarihi yer alır.
- Her gönderime `G-20261110-140500-ABC` biçiminde bir **gönderim no** verilir ve gönderene gösterilir. Düzeltme isteklerinde bu numarayı kullanın.
- Ham sayfalarda elle düzenleme yapmak yerine kendi çalışmanızı ayrı bir sayfada yapmanızı öneririz.

## Güvenlik ve kişisel veriler

- E-Tabloyu yalnızca ilgili kişilerle paylaşın. Formu dolduranlar başkalarının gönderimlerini göremez.
- Form adresini bilen herkes gönderim yapabilir. İstenmeyen gönderimler gelirse `Kod.gs` içindeki `FORM_ANAHTARI` ile `ayarlar.js` içindeki `formAnahtari`'na aynı değeri yazın. Anahtar `ayarlar.js`'te göründüğü için bu tam bir koruma değildir, ancak rastgele otomatik gönderimleri engeller.
- Veriler Google sunucularında, yani Türkiye dışında tutulur. Kişisel veri işlediğiniz için KVKK kapsamında aydınlatma metni hazırlayın. Konuşmacıların telefon gibi iletişim bilgilerini yalnızca onaylarıyla forma girdirin.

## Sorun giderme

- **"Gönderilemedi" uyarısı:** `gonderimAdresi` `/exec` ile bitmeli. Dağıtımda erişim **Herkes** olmalı. `Kod.gs`'yi değiştirdiyseniz yeni sürüm dağıtmanız gerekir.
- **Deneme modu bandı kaybolmuyor:** `ayarlar.js` kaydedilmemiş olabilir ya da tarayıcı eski sürümü gösteriyordur. Sayfayı **Ctrl + F5** ile yenileyin.
- **Tarih "11/20/2026" gibi görünüyor:** Tarih kutusu tarayıcının diline göre gösterilir. E-Tabloya her zaman `gg.aa.yyyy` biçiminde yazılır.
- **Taslak geri gelmedi:** Taslak yalnızca aynı cihaz ve aynı tarayıcıda saklanır. Gizli pencerede saklanmaz.

## Dosyalar

| Dosya | Görevi |
|---|---|
| `index.html` | Form sayfası. Bütün arayüz ve kontroller burada. |
| `ayarlar.js` | Kuruma özel ayarlar: gönderim adresi, birimler, türler, saatler. |
| `apps-script/Kod.gs` | Google E-Tabloya eklenen script; gelen formu sayfalara yazar. |

## Lisans

MIT. Ayrıntılar `LICENSE` dosyasında.
