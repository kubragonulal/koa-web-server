const Koa = require('koa');  // Koa modülünü dahil et
const app = new Koa();  // Koa uygulaması oluştur

// Middleware: Her isteğe yanıt verilecek fonksiyonlar
app.use(async (ctx) => {
  if (ctx.url === '/') {
    // index sayfası
    ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
  } else if (ctx.url === '/hakkimda') {
    // hakkimda sayfası
    ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
  } else if (ctx.url === '/iletisim') {
    // iletisim sayfası
    ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
  } else {
    // Sayfa bulunamadı
    ctx.status = 404;
    ctx.body = '<h1>404 - Sayfa Bulunamadı</h1>';
  }
});

// Sunucuyu başlat
app.listen(3000, () => {
  console.log('Sunucu http://localhost:3000 adresinde çalışıyor.');
});
