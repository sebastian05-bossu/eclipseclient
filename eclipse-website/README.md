# Eclipse Client Website

Modern, ultra-smooth website pentru Eclipse Client cu design mov și alb, animații premium și toate feature-urile necesare.

## 🚀 Features

- ✨ Design modern cu gradient mov și alb
- 🎥 Video background FIXED (nu se mișcă la scroll) cu blur
- 📱 Responsive design (mobile-friendly)
- 🎯 Super smooth scroll animations cu cubic-bezier easing
- 💜 FAQ accordion cu animații ultra-smooth
- 💰 Donate modal cu iconițe PayPal & Litecoin
- 🔗 Link-uri clickable către Discord și website
- 👤 About section (ultima secțiune)
- ⬇️ Download direct (fără secțiune separată)
- 🎨 Custom scrollbar cu gradient mov
- ✨ Ripple effect pe butoane
- 🌊 Navbar transparent care devine solid la scroll

## 📦 Instalare

1. Instalează Node.js dacă nu îl ai deja: https://nodejs.org/

2. Deschide terminal în folderul `eclipse-website` și rulează:
```bash
npm install
```

3. **IMPORTANT**: Adaugă fișierele necesare în folderul `public`:
   - `videoclip.mp4` - videoclipul cu Minecraft pentru background
   - `pfp.png` - poza ta pentru About section
   - `logo.png` - logo-ul Eclipse (mare, deasupra textului)
   - `text.png` - textul "ECLIPSE CLIENT" (înlocuiește "Welcome to Eclipse Client!")
   - `features.png` - iconița pentru 100+ Features
   - `optimized.png` - iconița pentru Optimized
   - `undetected.png` - iconița pentru Undetected
   - `free.png` - iconița pentru Free Forever
   - `paypal.png` - iconița PayPal pentru donate modal
   - `litecoin.png` - iconița Litecoin pentru donate modal
   - `Eclipse.exe` - fișierul de download (link direct)

4. Pornește serverul:
```bash
npm start
```

5. Deschide browser-ul la: http://localhost:3000

## 🎨 Modificări Majore

### Video Background
- ✅ Video-ul este FIXED - nu se mișcă când dai scroll
- ✅ Blur automat aplicat
- ✅ Overlay mov pentru contrast

### Navbar
- ✅ Transparent la început
- ✅ Devine solid cu blur când scrollezi
- ✅ Tranziție smooth cu cubic-bezier

### Hero Section
- ✅ Logo mare (logo.png) deasupra textului
- ✅ Text principal ca imagine (text.png) în loc de "Welcome to Eclipse Client!"
- ✅ Subtitle: "Provide the best experience for Minecraft"
- ✅ Download button cu link direct către Eclipse.exe
- ✅ Toate animațiile sunt ultra-smooth

### Features
- ✅ Iconițe PNG în loc de emoji
- ✅ Hover effect cu scale și lift
- ✅ Tranziții smooth

### FAQ
- ✅ Accordion ultra-smooth cu cubic-bezier
- ✅ Opacity fade in/out
- ✅ Hover effect cu slide
- ✅ Săgeți animate smooth

### Donate Modal
- ✅ Iconițe PayPal și Litecoin (PNG)
- ✅ Layout orizontal cu iconițe mari
- ✅ Copy to clipboard cu notificare

### Scroll
- ✅ Custom scrollbar cu gradient mov
- ✅ Smooth scroll cu easing cubic-bezier
- ✅ Secțiunile apar smooth cu fade + slide

### Ordinea Secțiunilor
1. Hero (cu video)
2. FAQ
3. Download (integrat în hero button)
4. About (ultima secțiune)

## 🛠️ Development Mode

Pentru development cu auto-reload:
```bash
npm run dev
```

## 📁 Fișiere Necesare în `public/`

```
public/
├── videoclip.mp4       ✅ Video background
├── logo.png            ✅ Logo mare
├── text.png            ✅ Text "ECLIPSE CLIENT"
├── pfp.png             ✅ Poza ta
├── features.png        ✅ Iconița Features
├── optimized.png       ✅ Iconița Optimized
├── undetected.png      ✅ Iconița Undetected
├── free.png            ✅ Iconița Free
├── paypal.png          ✅ Iconița PayPal
├── litecoin.png        ✅ Iconița Litecoin
└── Eclipse.exe         ✅ Fișier download
```

## 🎨 Animații & Effects

- **Cubic-bezier easing**: `cubic-bezier(0.4, 0, 0.2, 1)` pentru toate animațiile
- **Fade in duration**: 0.8s pentru secțiuni
- **Hover transitions**: 0.4s pentru butoane și carduri
- **FAQ accordion**: 0.5s smooth open/close
- **Ripple effect**: 0.6s pe click butoane
- **Scroll smooth**: Custom easing cu requestAnimationFrame

## 💡 Funcționalități Premium

### Smooth Scroll
- Custom implementation cu easing cubic
- Duration: 1200ms
- Smooth ca untul

### Video Fixed
- Position: fixed
- Nu se mișcă la scroll
- Blur constant

### Navbar Transparent
- Transparent la început
- Solid + blur la scroll > 100px
- Tranziție smooth 0.5s

### Ripple Effect
- Click pe orice buton
- Animație wave
- Fade out smooth

## 🌐 Deploy

Pentru a pune website-ul live:
- Vercel (recomandat)
- Netlify
- Heroku

## 📞 Support

Discord: discord.gg/eclipseclient
Website: eclipseclient.cc
