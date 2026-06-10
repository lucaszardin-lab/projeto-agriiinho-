import React, { useState } from 'react';

// ============================================================
// FILE CONTENTS
// ============================================================

const INDEX_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Terra Magna — A História do Agro no Paraná</title>
  <meta name="description" content="A saga do agronegócio paranaense: da terra roxa virgem ao celeiro do mundo." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<!-- NAVBAR -->
<nav id="navbar">
  <div class="nav-inner">
    <a href="#inicio" class="nav-logo">TERRA<span>MAGNA</span></a>
    <ul class="nav-links">
      <li><a href="#inicio">Início</a></li>
      <li><a href="#origens">Origens</a></li>
      <li><a href="#timeline">Linha do Tempo</a></li>
      <li><a href="#eras">As Eras</a></li>
      <li><a href="#impacto">Impacto</a></li>
      <li><a href="#arquivo">Arquivo</a></li>
    </ul>
    <button class="nav-toggle" id="navToggle" aria-label="Menu">
      <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <a href="#inicio">Início</a>
    <a href="#origens">Origens</a>
    <a href="#timeline">Linha do Tempo</a>
    <a href="#eras">As Eras</a>
    <a href="#impacto">Impacto</a>
    <a href="#arquivo">Arquivo</a>
  </div>
</nav>

<!-- HERO -->
<section id="inicio">
  <div class="hero-bg" id="heroBg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-overlay-side"></div>
  <div class="hero-content">
    <p class="hero-eyebrow reveal visible">Epistemismo Rural — Uma Odisseia Documental</p>
    <h1 class="hero-title reveal visible">
      A História<br>
      <strong>do Agro</strong><br>
      <span class="gold">no Paraná</span>
    </h1>
    <p class="hero-sub reveal visible" style="transition-delay:0.2s">
      Da terra roxa virgem ao celeiro do mundo — a saga de um território
      que transformou florestas em produtividade, pioneirismo em tecnologia.
    </p>
  </div>
  <button class="hero-scroll" onclick="document.getElementById('origens').scrollIntoView({behavior:'smooth'})">
    <span>Descer ao Solo</span>
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  </button>
  <div class="hero-bottom-fade"></div>
</section>

<!-- ORIGENS -->
<section id="origens" class="topo-bg">
  <div class="section-inner">
    <div class="reveal">
      <p class="eyebrow">Capítulo I — As Raízes</p>
      <h2 class="section-title">Onde tudo<br><em>começou</em></h2>
      <div class="divider"></div>
    </div>
    <div class="origins-grid">
      <div class="origins-text reveal reveal-delay-1">
        <p class="body-text">
          O Paraná, antes coberto por densas florestas de araucárias e mata atlântica,
          começou sua transformação agrícola no final do século XIX. Os primeiros imigrantes
          europeus — italianos, alemães, poloneses e ucranianos — encontraram na
          <strong>terra roxa</strong> um solo de fertilidade extraordinária.
        </p>
        <p class="body-text mt">
          O café foi o primeiro grande motor econômico. Vindo de São Paulo na década de 1920,
          transformou o norte do Paraná em uma das regiões cafeeiras mais produtivas do mundo.
          Cidades inteiras nasceram à sombra dos cafezais — Londrina, Maringá, Umuarama.
        </p>
        <p class="body-text mt">
          A Companhia de Terras Norte do Paraná loteou milhões de hectares, atraindo famílias
          de todo o Brasil e do exterior. Em poucas décadas, a floresta virgem cedeu lugar a
          uma das agriculturas mais dinâmicas do planeta.
        </p>
      </div>
      <div class="origins-images reveal reveal-delay-2">
        <img class="origins-main-img"
          src="https://media.base44.com/images/public/6a1f0eb24608dafca637fcc7/da1a2be4a_generated_2bf8f922.png"
          alt="Pioneiros desbravando as florestas do Paraná" />
        <img class="origins-thumb"
          src="https://media.base44.com/images/public/6a1f0eb24608dafca637fcc7/09ac229b4_generated_b5bd5633.png"
          alt="Semente germinando na terra roxa paranaense" />
      </div>
    </div>
    <div class="origins-quote reveal">
      <blockquote>
        "A terra roxa do Paraná é tão fértil que, se você plantar um prego, nasce uma cerca."
      </blockquote>
      <cite>— Ditado popular dos colonizadores</cite>
    </div>
  </div>
</section>

<!-- TIMELINE -->
<section id="timeline">
  <div class="section-inner">
    <div class="reveal">
      <p class="eyebrow gold-text">Capítulo II — A Cronologia</p>
      <h2 class="section-title light-text">Linha do Tempo<br><em class="gold-text">Estratigráfica</em></h2>
      <p class="body-text muted-light mt">
        Cada estrato conta a história de uma transformação. Da floresta virgem
        à agricultura de precisão — camadas de evolução sobrepostas no solo paranaense.
      </p>
    </div>
    <div class="timeline-list">

      <div class="timeline-item reveal">
        <div class="tl-content">
          <div class="tl-dot"><div class="tl-dot-inner" style="background:#4B1D1D"></div></div>
          <span class="tl-year">1890–1930</span>
          <h3 class="tl-title">A Era dos Pioneiros</h3>
          <p class="tl-desc">Imigrantes europeus desbravaram as matas do Paraná, introduzindo técnicas agrícolas da Europa. O tropeirismo e a erva-mate dominavam a economia da região.</p>
          <span class="tl-badge">Erva-mate &amp; Tropeirismo</span>
        </div>
        <div class="tl-space"></div>
      </div>

      <div class="timeline-item reveal">
        <div class="tl-space"></div>
        <div class="tl-content">
          <div class="tl-dot"><div class="tl-dot-inner" style="background:#B45309"></div></div>
          <span class="tl-year">1930–1960</span>
          <h3 class="tl-title">O Império do Café</h3>
          <p class="tl-desc">O "ouro verde" transformou o norte do Paraná. Londrina e Maringá surgiram como capitais cafeeiras. O estado tornou-se o maior produtor mundial de café.</p>
          <span class="tl-badge">1,2 bilhão de pés de café</span>
        </div>
      </div>

      <div class="timeline-item reveal">
        <div class="tl-content">
          <div class="tl-dot"><div class="tl-dot-inner" style="background:#2563EB"></div></div>
          <span class="tl-year">1960–1975</span>
          <h3 class="tl-title">A Grande Geada &amp; a Diversificação</h3>
          <p class="tl-desc">A geada negra de 1975 devastou os cafezais. O Paraná se reinventou, abrindo caminho para a soja, o milho e o trigo. A mecanização avançou rapidamente.</p>
          <span class="tl-badge">Geada Negra de 1975</span>
        </div>
        <div class="tl-space"></div>
      </div>

      <div class="timeline-item reveal">
        <div class="tl-space"></div>
        <div class="tl-content">
          <div class="tl-dot"><div class="tl-dot-inner" style="background:#059669"></div></div>
          <span class="tl-year">1975–2000</span>
          <h3 class="tl-title">A Revolução Verde</h3>
          <p class="tl-desc">O plantio direto nasceu no Paraná. Herbert Bartz, em Rolândia, revolucionou a agricultura mundial com a técnica que elimina o preparo do solo e conserva a umidade.</p>
          <span class="tl-badge">Plantio Direto na Palha</span>
        </div>
      </div>

      <div class="timeline-item reveal">
        <div class="tl-content">
          <div class="tl-dot"><div class="tl-dot-inner" style="background:#7C3AED"></div></div>
          <span class="tl-year">2000–Hoje</span>
          <h3 class="tl-title">Agricultura 4.0</h3>
          <p class="tl-desc">Drones, GPS, inteligência artificial e biotecnologia. O Paraná lidera a agricultura de precisão no Brasil, com produtividade entre as maiores do planeta.</p>
          <span class="tl-badge">IA &amp; Agricultura de Precisão</span>
        </div>
        <div class="tl-space"></div>
      </div>

    </div>
  </div>
</section>

<!-- ERA SHOWCASE -->
<section id="eras" class="topo-bg">
  <div class="section-inner">
    <div class="reveal">
      <p class="eyebrow">Capítulo III — As Eras</p>
      <h2 class="section-title">Três revoluções<br><em>que mudaram tudo</em></h2>
    </div>
    <div style="margin-top:4rem">

      <div class="era-block reveal">
        <div class="era-img-wrap">
          <img src="https://media.base44.com/images/public/6a1f0eb24608dafca637fcc7/fd2347c04_generated_5ebf782f.png" alt="Cafezais do norte paranaense" />
          <div class="era-img-overlay"></div>
          <span class="era-img-year">1930–1960</span>
        </div>
        <div class="era-text-col">
          <p class="era-eyebrow">1930–1960</p>
          <h3 class="era-title">O Café</h3>
          <p class="era-text">O norte paranaense tornou-se sinônimo de café de qualidade. Milhares de famílias construíram suas vidas ao redor dos cafezais, criando uma cultura única que mesclava tradições europeias com a força da terra tropical.</p>
          <div class="era-stats">
            <div><div class="stat-val">1,2B</div><div class="stat-lbl">Pés de café</div></div>
            <div><div class="stat-val">60%</div><div class="stat-lbl">Produção nacional</div></div>
            <div><div class="stat-val">200+</div><div class="stat-lbl">Cidades fundadas</div></div>
          </div>
        </div>
      </div>

      <div class="era-block reverse reveal" style="margin-top:4rem">
        <div class="era-img-wrap">
          <img src="https://media.base44.com/images/public/6a1f0eb24608dafca637fcc7/89f72eb79_generated_1e173782.png" alt="Plantações de soja no Paraná" />
          <div class="era-img-overlay"></div>
          <span class="era-img-year">1970–Presente</span>
        </div>
        <div class="era-text-col">
          <p class="era-eyebrow">1970–Presente</p>
          <h3 class="era-title">A Revolução da Soja</h3>
          <p class="era-text">Após a geada devastadora de 1975, a soja emergiu como a nova protagonista. O Paraná abraçou a mecanização e novas cultivares, tornando-se um dos maiores produtores mundiais do grão dourado.</p>
          <div class="era-stats">
            <div><div class="stat-val">21,5M</div><div class="stat-lbl">Toneladas/ano</div></div>
            <div><div class="stat-val">5,7M</div><div class="stat-lbl">Hectares plantados</div></div>
            <div><div class="stat-val">2º</div><div class="stat-lbl">Maior produtor BR</div></div>
          </div>
        </div>
      </div>

      <div class="era-block reveal" style="margin-top:4rem">
        <div class="era-img-wrap">
          <img src="https://media.base44.com/images/public/6a1f0eb24608dafca637fcc7/21bf306ec_generated_08a63227.png" alt="Tecnologia de precisão na agricultura" />
          <div class="era-img-overlay"></div>
          <span class="era-img-year">2000–Futuro</span>
        </div>
        <div class="era-text-col">
          <p class="era-eyebrow">2000–Futuro</p>
          <h3 class="era-title">Agricultura de Precisão</h3>
          <p class="era-text">Drones mapeiam cada hectare, sensores monitoram a umidade do solo em tempo real, e algoritmos de IA preveem a produtividade antes do plantio. O Paraná lidera a revolução tecnológica no campo brasileiro.</p>
          <div class="era-stats">
            <div><div class="stat-val">85%</div><div class="stat-lbl">Mecanização</div></div>
            <div><div class="stat-val">3.800</div><div class="stat-lbl">kg/ha produtiv.</div></div>
            <div><div class="stat-val">1º</div><div class="stat-lbl">Em plantio direto</div></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- IMPACTO -->
<section id="impacto">
  <div class="section-inner">
    <div class="reveal">
      <p class="eyebrow">Capítulo IV — O Impacto</p>
      <h2 class="section-title">O peso da<br><em>produtividade</em></h2>
      <p class="body-text mt">
        O Paraná produz alimentos que abastecem mais de 600 milhões de pessoas no mundo.
        Números que refletem décadas de evolução.
      </p>
    </div>
    <div class="impact-grid">
      <div class="reveal reveal-delay-1">
        <p class="impact-title-sm">Produção Anual — Principais Culturas</p>
        <div class="bar-row">
          <div class="bar-top"><div><span class="bar-val">21,5 </span><span class="bar-unit">M ton</span></div><span class="bar-name">Soja</span></div>
          <div class="bar-track"><div class="bar-fill" data-width="100" style="background:#C8962A"></div></div>
        </div>
        <div class="bar-row">
          <div class="bar-top"><div><span class="bar-val">16,2 </span><span class="bar-unit">M ton</span></div><span class="bar-name">Milho</span></div>
          <div class="bar-track"><div class="bar-fill" data-width="75" style="background:#059669"></div></div>
        </div>
        <div class="bar-row">
          <div class="bar-top"><div><span class="bar-val">3,8 </span><span class="bar-unit">M ton</span></div><span class="bar-name">Trigo</span></div>
          <div class="bar-track"><div class="bar-fill" data-width="18" style="background:#D97706"></div></div>
        </div>
        <div class="bar-row">
          <div class="bar-top"><div><span class="bar-val">31,5 </span><span class="bar-unit">M ton</span></div><span class="bar-name">Cana</span></div>
          <div class="bar-track"><div class="bar-fill" data-width="85" style="background:#EA580C"></div></div>
        </div>
        <div class="bar-row">
          <div class="bar-top"><div><span class="bar-val">4,5 </span><span class="bar-unit">M ton</span></div><span class="bar-name">Frango</span></div>
          <div class="bar-track"><div class="bar-fill" data-width="21" style="background:#E11D48"></div></div>
        </div>
      </div>
      <div class="reveal reveal-delay-2">
        <div class="fact-grid">
          <div class="fact-card"><div class="fact-val">2º</div><div class="fact-lbl">Maior produtor agrícola do Brasil</div></div>
          <div class="fact-card"><div class="fact-val">R$ 160B</div><div class="fact-lbl">VBP Agropecuário</div></div>
          <div class="fact-card"><div class="fact-val">30%</div><div class="fact-lbl">Do PIB estadual vem do agro</div></div>
          <div class="fact-card"><div class="fact-val">305 mil</div><div class="fact-lbl">Estabelecimentos rurais</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer id="arquivo">
  <div class="footer-inner">
    <div class="reveal">
      <p class="eyebrow gold-text">Arquivo Vivo</p>
      <h2 class="footer-title">Índice de<br><em>Referências</em></h2>
    </div>
    <div class="footer-grid">
      <div class="reveal reveal-delay-1">
        <p class="footer-col-title">Por Região</p>
        <div class="region-item"><div class="region-name">Norte Pioneiro</div><div class="region-desc">Berço do café paranaense. Londrina, Maringá e Umuarama surgiram com a expansão cafeeira.</div></div>
        <div class="region-item"><div class="region-name">Oeste Paranaense</div><div class="region-desc">Capital da soja e da suinocultura. Cascavel e Toledo lideram a agroindústria do estado.</div></div>
        <div class="region-item"><div class="region-name">Campos Gerais</div><div class="region-desc">Tradição tropeira e pecuária. Ponta Grossa e Castro são referências em laticínios.</div></div>
        <div class="region-item"><div class="region-name">Sudoeste</div><div class="region-desc">Agricultura familiar forte. Francisco Beltrão combina grãos e tecnologia.</div></div>
      </div>
      <div class="reveal reveal-delay-2">
        <p class="footer-col-title">Por Década</p>
        <div class="decade-row"><span class="decade-year">1890s</span><span class="decade-event">Primeiros imigrantes e erva-mate</span></div>
        <div class="decade-row"><span class="decade-year">1920s</span><span class="decade-event">Café chega ao norte do Paraná</span></div>
        <div class="decade-row"><span class="decade-year">1940s</span><span class="decade-event">Companhia de Terras loteia milhões de ha</span></div>
        <div class="decade-row"><span class="decade-year">1960s</span><span class="decade-event">PR é o maior produtor de café do mundo</span></div>
        <div class="decade-row"><span class="decade-year">1970s</span><span class="decade-event">Geada negra e chegada da soja</span></div>
        <div class="decade-row"><span class="decade-year">1980s</span><span class="decade-event">Revolução do plantio direto</span></div>
        <div class="decade-row"><span class="decade-year">1990s</span><span class="decade-event">Expansão da avicultura</span></div>
        <div class="decade-row"><span class="decade-year">2000s</span><span class="decade-event">Biotecnologia e OGMs</span></div>
        <div class="decade-row"><span class="decade-year">2010s</span><span class="decade-event">Agricultura de precisão</span></div>
        <div class="decade-row"><span class="decade-year">2020s</span><span class="decade-event">IA, drones e sustentabilidade</span></div>
      </div>
      <div class="reveal reveal-delay-3">
        <p class="footer-col-title">Fontes &amp; Referências</p>
        <div class="sources-list">
          <p>IBGE — Instituto Brasileiro de Geografia e Estatística</p>
          <p>SEAB/DERAL — Secretaria da Agricultura e Abastecimento do Paraná</p>
          <p>EMBRAPA — Empresa Brasileira de Pesquisa Agropecuária</p>
          <p>IPARDES — Instituto Paranaense de Desenvolvimento Econômico e Social</p>
          <p>CONAB — Companhia Nacional de Abastecimento</p>
          <p>Museu Histórico de Londrina</p>
          <p>Arquivo Público do Paraná</p>
        </div>
        <div class="crop-tags">
          <span class="crop-tag">Soja</span><span class="crop-tag">Milho</span><span class="crop-tag">Trigo</span>
          <span class="crop-tag">Café</span><span class="crop-tag">Feijão</span><span class="crop-tag">Cana</span>
          <span class="crop-tag">Mandioca</span><span class="crop-tag">Aveia</span><span class="crop-tag">Cevada</span>
        </div>
      </div>
    </div>
    <div class="footer-bar">
      <div class="footer-logo">TERRA<span>MAGNA</span></div>
      <p class="footer-copy">A Odisseia do Solo Paranaense — 2026</p>
    </div>
  </div>
</footer>

<script src="script.js"></script>
</body>
</html>`;

// ============================================================

const STYLE_CSS = `/* ===================================================
   TERRA MAGNA — style.css
   Agro no Paraná | GitHub Pages
=================================================== */

/* --- TOKENS --- */
:root {
  --terra-roxa: #4B1D1D;
  --soja-ouro:  #D4AF37;
  --geada:      #F9F7F2;
  --clorofila:  #1B3022;
  --muted:      #8B7B6B;
  --border:     #DDD5C8;
  --card:       #F2EDE6;
  --accent:     #C8962A;
  --r:          4px;
  --f-head: 'Cormorant Garamond', Georgia, serif;
  --f-body: 'Inter', system-ui, sans-serif;
  --f-mono: 'JetBrains Mono', monospace;
}

/* --- RESET --- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--f-body);
  background: var(--geada);
  color: var(--terra-roxa);
  font-size: 18px;
  line-height: 1.6;
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

/* --- SCROLLBAR --- */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--geada); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }
::-webkit-scrollbar-thumb:hover { background: var(--muted); }

/* --- TOPO PATTERN --- */
.topo-bg {
  background-color: var(--geada);
  background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 80 Q50 60 100 80 T200 80' fill='none' stroke='%234B1D1D' stroke-opacity='0.04' stroke-width='1'/%3E%3Cpath d='M0 100 Q50 80 100 100 T200 100' fill='none' stroke='%234B1D1D' stroke-opacity='0.03' stroke-width='1'/%3E%3Cpath d='M0 120 Q50 100 100 120 T200 120' fill='none' stroke='%234B1D1D' stroke-opacity='0.04' stroke-width='1'/%3E%3Cpath d='M0 140 Q50 120 100 140 T200 140' fill='none' stroke='%234B1D1D' stroke-opacity='0.03' stroke-width='1'/%3E%3Cpath d='M0 40 Q50 20 100 40 T200 40' fill='none' stroke='%234B1D1D' stroke-opacity='0.03' stroke-width='1'/%3E%3Cpath d='M0 60 Q50 40 100 60 T200 60' fill='none' stroke='%234B1D1D' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E");
}

/* ========================================
   NAVBAR
======================================== */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 2rem;
  transition: background 0.4s, box-shadow 0.4s;
}
nav.scrolled {
  background: rgba(249,247,242,0.93);
  backdrop-filter: blur(20px);
  box-shadow: 0 1px 0 var(--border);
}
.nav-inner {
  max-width: 1280px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 72px;
}
.nav-logo {
  font-family: var(--f-head);
  font-size: 1.4rem; font-weight: 600;
  color: white; letter-spacing: 0.05em;
  transition: color 0.4s;
}
nav.scrolled .nav-logo { color: var(--terra-roxa); }
.nav-logo span { color: var(--soja-ouro); margin-left: 4px; }
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  font-family: var(--f-mono);
  font-size: 0.65rem; letter-spacing: 0.25em;
  text-transform: uppercase; color: rgba(255,255,255,0.65);
  transition: color 0.3s;
}
.nav-links a:hover { color: white; }
nav.scrolled .nav-links a { color: var(--muted); }
nav.scrolled .nav-links a:hover { color: var(--terra-roxa); }
.nav-toggle {
  display: none; background: none; border: none;
  cursor: pointer; color: white; padding: 4px;
}
nav.scrolled .nav-toggle { color: var(--terra-roxa); }
.mobile-menu {
  display: none;
  background: rgba(249,247,242,0.97);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--border);
  padding: 1.5rem 2rem;
}
.mobile-menu.open { display: block; }
.mobile-menu a {
  display: block; padding: 0.75rem 0;
  font-family: var(--f-mono); font-size: 0.75rem;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--muted); border-bottom: 1px solid var(--border);
}
.mobile-menu a:last-child { border-bottom: none; }
.mobile-menu a:hover { color: var(--terra-roxa); }

/* ========================================
   HERO
======================================== */
#inicio {
  position: relative; height: 100vh; overflow: hidden;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding-bottom: 5rem;
}
.hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://media.base44.com/images/public/6a1f0eb24608dafca637fcc7/cbfebf3d0_generated_8c1e5693.png');
  background-size: cover; background-position: center;
  transform: scale(1.08);
  will-change: transform;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.72) 100%);
}
.hero-overlay-side {
  position: absolute; inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.45), transparent 60%);
}
.hero-content {
  position: relative; z-index: 2;
  max-width: 1280px; width: 100%;
  margin: 0 auto; padding: 0 2rem 0 4rem;
}
.hero-eyebrow {
  font-family: var(--f-mono);
  font-size: 0.65rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--soja-ouro);
  margin-bottom: 1.5rem;
}
.hero-title {
  font-family: var(--f-head);
  font-size: clamp(3rem, 9vw, 8rem);
  font-weight: 300; color: white;
  line-height: 0.92; letter-spacing: -0.01em;
}
.hero-title strong { font-weight: 600; font-style: italic; }
.hero-title .gold { color: var(--soja-ouro); }
.hero-sub {
  margin-top: 1.5rem; color: rgba(255,255,255,0.58);
  font-size: 1.05rem; max-width: 480px; line-height: 1.75;
}
.hero-scroll {
  position: absolute; bottom: 2rem; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  cursor: pointer; z-index: 3; background: none; border: none;
  color: rgba(255,255,255,0.4); transition: color 0.3s;
}
.hero-scroll:hover { color: rgba(255,255,255,0.7); }
.hero-scroll span {
  font-family: var(--f-mono); font-size: 0.6rem;
  letter-spacing: 0.4em; text-transform: uppercase;
}
.hero-scroll svg { animation: bounce 2s ease-in-out infinite; }
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(8px); }
}
.hero-bottom-fade {
  position: absolute; bottom: 0; left: 0; right: 0; height: 120px;
  background: linear-gradient(to top, var(--geada), transparent);
}

/* ========================================
   SECTION COMMONS
======================================== */
section { padding: 6rem 2rem; }
.section-inner { max-width: 1280px; margin: 0 auto; }
.eyebrow {
  font-family: var(--f-mono); font-size: 0.65rem;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 1rem;
}
.section-title {
  font-family: var(--f-head);
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  font-weight: 300; color: var(--terra-roxa); line-height: 1.05;
}
.section-title em { font-style: italic; font-weight: 600; }
.light-text { color: var(--geada) !important; }
.gold-text { color: var(--soja-ouro) !important; }
.divider { width: 64px; height: 1px; background: var(--accent); margin: 2rem 0; }
.body-text { color: var(--muted); font-size: 1rem; line-height: 1.8; max-width: 600px; }
.body-text strong { color: var(--terra-roxa); font-weight: 600; }
.muted-light { color: rgba(249,247,242,0.55) !important; }
.mt { margin-top: 1.2rem; }

/* ========================================
   REVEAL ANIMATIONS
======================================== */
.reveal {
  opacity: 0; transform: translateY(40px);
  transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1),
              transform 0.9s cubic-bezier(0.22,1,0.36,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.15s; }
.reveal-delay-2 { transition-delay: 0.3s; }
.reveal-delay-3 { transition-delay: 0.45s; }

/* ========================================
   ORIGINS
======================================== */
#origens { background: var(--geada); }
.origins-grid {
  display: grid; grid-template-columns: 5fr 7fr;
  gap: 4rem; align-items: start; margin-top: 4rem;
}
.origins-main-img {
  width: 100%; height: 420px; object-fit: cover;
  border-radius: var(--r); box-shadow: 0 20px 60px rgba(75,29,29,0.18);
}
.origins-images { position: relative; }
.origins-thumb {
  position: absolute; bottom: -3rem; left: -3rem;
  width: 200px; height: 200px; object-fit: cover;
  border-radius: var(--r); border: 4px solid var(--geada);
  box-shadow: 0 12px 40px rgba(75,29,29,0.2);
}
.origins-quote { margin-top: 5rem; text-align: center; max-width: 700px; margin-left: auto; margin-right: auto; }
.origins-quote blockquote {
  font-family: var(--f-head); font-size: clamp(1.3rem, 3vw, 2.2rem);
  font-style: italic; color: rgba(75,29,29,0.75); line-height: 1.5;
}
.origins-quote cite {
  display: block; margin-top: 1.5rem;
  font-family: var(--f-mono); font-size: 0.6rem;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--muted); font-style: normal;
}

/* ========================================
   TIMELINE
======================================== */
#timeline { background: var(--clorofila); padding: 6rem 2rem; }
.timeline-list { margin-top: 4rem; position: relative; }
.timeline-list::before {
  content: ''; position: absolute;
  left: 50%; top: 0; bottom: 0; width: 1px;
  background: rgba(249,247,242,0.12);
  transform: translateX(-50%);
}
.timeline-item {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; margin-bottom: 3.5rem; position: relative;
}
.timeline-item:nth-child(odd)  .tl-content { grid-column: 1; text-align: right; }
.timeline-item:nth-child(odd)  .tl-space   { grid-column: 2; }
.timeline-item:nth-child(even) .tl-content { grid-column: 2; text-align: left; }
.timeline-item:nth-child(even) .tl-space   { grid-column: 1; grid-row: 1; }
.tl-dot {
  position: absolute; left: 50%; top: 0.4rem;
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid rgba(249,247,242,0.2);
  transform: translateX(-50%); z-index: 2;
}
.tl-dot-inner { width: 8px; height: 8px; border-radius: 50%; margin: 1px; }
.tl-year { font-family: var(--f-mono); font-size: 0.7rem; letter-spacing: 0.25em; color: var(--soja-ouro); }
.tl-title { font-family: var(--f-head); font-size: 1.7rem; font-weight: 600; color: var(--geada); margin: 0.4rem 0; line-height: 1.2; }
.tl-desc  { font-size: 0.95rem; color: rgba(249,247,242,0.55); line-height: 1.7; }
.tl-badge {
  display: inline-block; margin-top: 1rem;
  padding: 4px 12px; border-radius: 2px;
  font-family: var(--f-mono); font-size: 0.65rem; letter-spacing: 0.15em;
  border: 1px solid rgba(249,247,242,0.1); color: rgba(249,247,242,0.45);
  background: rgba(249,247,242,0.04);
}

/* ========================================
   ERA SHOWCASE
======================================== */
#eras { background: var(--geada); }
.era-block {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: center;
}
.era-block.reverse { direction: rtl; }
.era-block.reverse > * { direction: ltr; }
.era-img-wrap { position: relative; overflow: hidden; border-radius: var(--r); }
.era-img-wrap img {
  width: 100%; height: 400px; object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
}
.era-img-wrap:hover img { transform: scale(1.04); }
.era-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.35), transparent);
  pointer-events: none;
}
.era-img-year {
  position: absolute; bottom: 1rem; left: 1.2rem;
  font-family: var(--f-mono); font-size: 0.65rem;
  letter-spacing: 0.25em; color: rgba(255,255,255,0.65);
}
.era-eyebrow {
  font-family: var(--f-mono); font-size: 0.65rem;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 0.75rem;
}
.era-title {
  font-family: var(--f-head);
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 600; color: var(--terra-roxa); margin-bottom: 1.25rem;
}
.era-text { color: var(--muted); line-height: 1.8; font-size: 1rem; }
.era-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 2rem; }
.stat-val { font-family: var(--f-head); font-size: 2.2rem; font-weight: 700; color: var(--terra-roxa); }
.stat-lbl { font-family: var(--f-mono); font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-top: 2px; }

/* ========================================
   IMPACT
======================================== */
#impacto { background: var(--card); }
.impact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 3.5rem; align-items: start; }
.impact-title-sm { font-family: var(--f-mono); font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted); margin-bottom: 2rem; }
.bar-row { margin-bottom: 2rem; }
.bar-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; }
.bar-val  { font-family: var(--f-head); font-size: 1.8rem; font-weight: 700; color: var(--terra-roxa); }
.bar-unit { font-family: var(--f-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: var(--muted); text-transform: uppercase; }
.bar-name { font-family: var(--f-mono); font-size: 0.7rem; letter-spacing: 0.15em; color: var(--muted); }
.bar-track { height: 8px; background: rgba(75,29,29,0.08); border-radius: 99px; overflow: hidden; }
.bar-fill  { height: 100%; border-radius: 99px; width: 0; transition: width 1.4s cubic-bezier(0.22,1,0.36,1); }
.fact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
.fact-card {
  padding: 1.75rem; background: var(--geada);
  border: 1px solid var(--border); border-radius: var(--r);
  transition: box-shadow 0.3s;
}
.fact-card:hover { box-shadow: 0 8px 30px rgba(75,29,29,0.08); }
.fact-val { font-family: var(--f-head); font-size: 2.5rem; font-weight: 700; color: var(--terra-roxa); }
.fact-lbl { font-size: 0.9rem; color: var(--muted); margin-top: 0.5rem; line-height: 1.4; }

/* ========================================
   FOOTER
======================================== */
footer { background: var(--clorofila); color: var(--geada); padding: 5rem 2rem 0; }
.footer-inner { max-width: 1280px; margin: 0 auto; }
.footer-title { font-family: var(--f-head); font-size: clamp(2rem,4vw,3.5rem); font-weight: 300; margin-bottom: 0.5rem; }
.footer-title em { font-style: italic; font-weight: 600; color: var(--soja-ouro); }
.footer-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 3rem; margin-top: 3.5rem; }
.footer-col-title {
  font-family: var(--f-mono); font-size: 0.6rem;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: rgba(249,247,242,0.3); margin-bottom: 1.5rem;
  padding-bottom: 0.75rem; border-bottom: 1px solid rgba(249,247,242,0.08);
}
.region-item  { margin-bottom: 1.25rem; }
.region-name  { font-family: var(--f-head); font-size: 1.1rem; font-weight: 600; color: var(--geada); }
.region-desc  { font-size: 0.85rem; color: rgba(249,247,242,0.45); line-height: 1.6; margin-top: 0.2rem; }
.decade-row   { display: flex; gap: 1rem; margin-bottom: 0.75rem; }
.decade-year  { font-family: var(--f-mono); font-size: 0.65rem; color: var(--soja-ouro); flex-shrink: 0; width: 42px; padding-top: 2px; }
.decade-event { font-size: 0.875rem; color: rgba(249,247,242,0.5); line-height: 1.5; }
.sources-list p { font-size: 0.85rem; color: rgba(249,247,242,0.4); margin-bottom: 0.75rem; line-height: 1.5; }
.crop-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
.crop-tag {
  padding: 4px 10px; border-radius: 2px;
  border: 1px solid rgba(249,247,242,0.1);
  font-family: var(--f-mono); font-size: 0.6rem;
  letter-spacing: 0.15em; color: rgba(249,247,242,0.35);
}
.footer-bar {
  border-top: 1px solid rgba(249,247,242,0.08);
  margin-top: 3rem; padding: 1.5rem 0;
  display: flex; align-items: center; justify-content: space-between;
}
.footer-logo { font-family: var(--f-head); font-size: 1.2rem; font-weight: 600; }
.footer-logo span { color: var(--soja-ouro); }
.footer-copy { font-family: var(--f-mono); font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(249,247,242,0.2); }

/* ========================================
   RESPONSIVE
======================================== */
@media (max-width: 900px) {
  .origins-grid   { grid-template-columns: 1fr; }
  .origins-thumb  { display: none; }
  .era-block      { grid-template-columns: 1fr; direction: ltr; }
  .era-block.reverse { direction: ltr; }
  .impact-grid    { grid-template-columns: 1fr; }
  .footer-grid    { grid-template-columns: 1fr; gap: 2rem; }
  .footer-bar     { flex-direction: column; gap: 1rem; text-align: center; }
}
@media (max-width: 768px) {
  .nav-links  { display: none; }
  .nav-toggle { display: block; }
  .hero-content { padding: 0 1.5rem; }
  .timeline-list::before { left: 20px; }
  .timeline-item { grid-template-columns: 1fr; padding-left: 3rem; }
  .timeline-item:nth-child(odd)  .tl-content,
  .timeline-item:nth-child(even) .tl-content { grid-column: 1; text-align: left; }
  .timeline-item:nth-child(odd)  .tl-space,
  .timeline-item:nth-child(even) .tl-space   { display: none; }
  .tl-dot { left: -2.5rem; top: 0.3rem; }
  .fact-grid { grid-template-columns: 1fr 1fr; }
}`;

// ============================================================

const SCRIPT_JS = `/* ===================================================
   TERRA MAGNA — script.js
   Agro no Paraná | GitHub Pages
=================================================== */

/* ========================================
   NAVBAR SCROLL
======================================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

/* ========================================
   MOBILE MENU TOGGLE
======================================== */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

const iconMenu  = \`<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>\`;
const iconClose = \`<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\`;

navToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  navToggle.innerHTML = menuOpen ? iconClose : iconMenu;
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    navToggle.innerHTML = iconMenu;
  });
});

/* ========================================
   HERO PARALLAX
======================================== */
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    heroBg.style.transform = \`scale(1.08) translateY(\${window.scrollY * 0.1}px)\`;
  }
}, { passive: true });

/* ========================================
   SMOOTH SCROLL (anchor links)
======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ========================================
   REVEAL ON SCROLL (IntersectionObserver)
======================================== */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '-60px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

/* ========================================
   ANIMATED BARS (produção)
======================================== */
const barFills = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const targetWidth = entry.target.dataset.width;
      setTimeout(() => {
        entry.target.style.width = targetWidth + '%';
      }, 200);
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

barFills.forEach(el => barObserver.observe(el));`;

// ============================================================
// DOWNLOAD PAGE UI
// ============================================================

function FileCard({ filename, content, lang, color }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const download = () => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">{filename}</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${color}`}>{lang}</span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          {(new Blob([content]).size / 1024).toFixed(1)} KB
        </span>
      </div>
      {/* Preview */}
      <pre className="p-4 text-[11px] font-mono text-muted-foreground overflow-auto max-h-36 leading-relaxed bg-background/60">
        <code>{content.slice(0, 400).trim()}...</code>
      </pre>
      {/* Actions */}
      <div className="flex gap-2 px-4 py-3 border-t border-border bg-muted/20">
        <button
          onClick={download}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-primary text-primary-foreground rounded text-xs font-mono tracking-wide hover:bg-primary/90 transition-colors"
        >
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Baixar
        </button>
        <button
          onClick={copy}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-border rounded text-xs font-mono tracking-wide hover:bg-muted/50 transition-colors"
        >
          {copied ? (
            <>
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Copiado!
            </>
          ) : (
            <>
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
              Copiar
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function GitHubExport() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-3">
            GitHub Pages — Estrutura de Arquivos
          </p>
          <h1 className="font-display text-4xl font-light text-primary">
            Terra <span className="font-semibold italic">Magna</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-sm max-w-md mx-auto">
            Baixe os 3 arquivos e coloque na mesma pasta. Suba para o GitHub e ative o GitHub Pages.
          </p>
        </div>

        {/* Structure diagram */}
        <div className="mb-8 p-4 bg-secondary text-secondary-foreground rounded-lg font-mono text-sm">
          <p className="text-xs text-secondary-foreground/40 uppercase tracking-widest mb-3">Estrutura da pasta</p>
          <div className="space-y-1 text-secondary-foreground/70">
            <p>📁 <span className="text-accent">terra-magna/</span></p>
            <p className="ml-6">├── 📄 <span className="text-secondary-foreground">index.html</span></p>
            <p className="ml-6">├── 🎨 <span className="text-secondary-foreground">style.css</span></p>
            <p className="ml-6">└── ⚡ <span className="text-secondary-foreground">script.js</span></p>
          </div>
        </div>

        {/* File cards */}
        <div className="grid gap-5">
          <FileCard
            filename="index.html"
            content={INDEX_HTML}
            lang="HTML"
            color="bg-orange-100 text-orange-700"
          />
          <FileCard
            filename="style.css"
            content={STYLE_CSS}
            lang="CSS"
            color="bg-blue-100 text-blue-700"
          />
          <FileCard
            filename="script.js"
            content={SCRIPT_JS}
            lang="JS"
            color="bg-yellow-100 text-yellow-700"
          />
        </div>

        {/* Instructions */}
        <div className="mt-8 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            Como publicar no GitHub Pages
          </h3>
          <ol className="space-y-3 text-sm text-muted-foreground">
            {[
              'Crie um repositório novo no GitHub (ex: terra-magna)',
              'Faça upload dos 3 arquivos na raiz do repositório',
              'Vá em Settings → Pages → Source → selecione "main" branch → / (root)',
              'Clique em Save e aguarde ~1 minuto',
              'Seu site estará em: https://seu-usuario.github.io/terra-magna',
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-xs bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground font-mono">
          Funciona 100% no GitHub Pages · Sem backend · Sem dependências npm
        </p>
      </div>
    </div>
  );
}
