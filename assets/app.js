/* =========================================================
   Reflexo da Fé em Deus — catálogo, vitrine e avaliações
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------- dados */

  var CATEGORIAS = [
    { id: "todos",       nome: "Todos" },
    { id: "biblias",     nome: "Bíblias" },
    { id: "devocionais", nome: "Devocionais" },
    { id: "promocoes",   nome: "Promoções" },
    { id: "combos",      nome: "Combos" }
  ];

  /**
   * Promoção do devocional.
   * `precoDe` só pode ser usado se 22,99 for mesmo um desconto sobre um preço
   * praticado. Preço "de" fictício é publicidade enganosa (CDC, art. 37).
   *
   * O contador tem dois modos:
   *   terminaEm = null  -> ciclo de 7 dias que reinicia sozinho (padrão pedido)
   *   terminaEm = Date  -> prazo real, o contador zera e a oferta some
   */
  var PROMO = {
    precoDe: 57.00,
    cicloDias: 7,
    inicioCiclo: Date.UTC(2026, 7, 1, 3, 0, 0),  /* 01/08/2026, 00h de Brasília */
    terminaEm: null
  };

  var PRODUTOS = [
    {
      slug: "devocional-da-mulher-fervorosa",
      nome: "Devocional da Mulher Fervorosa",
      linhaFina: "Quinze dias com as mulheres da Bíblia",
      categoria: "devocionais",
      categoriaNome: "Devocionais",
      preco: 22.99,
      promo: PROMO,
      resumo: "15 dias, 15 mulheres da Bíblia e um propósito escrito por você.",
      descricao:
        "Um devocional de quinze dias que percorre a vida de quinze mulheres das Escrituras — de Eva a Priscila. " +
        "Cada dia traz a leitura bíblica, o contexto histórico da passagem, o que o texto realmente afirma, " +
        "o ensinamento para o convívio da mulher em sociedade, aplicação prática, perguntas de reflexão, " +
        "oração sugerida e espaço para escrever.",
      itens: [
        "15 dias de estudo com as mulheres da Bíblia",
        "3 manhãs de jejum guiadas, com roteiro e cuidados de saúde",
        "Projeto Propósito: você escreve sua declaração de propósito de vida",
        "Pacto com a Palavra, para assinar ao final",
        "Plano de continuidade de 90 dias",
        "93 páginas em PDF, formato A5 — leia no celular ou imprima"
      ],
      checkout: "https://pay.cakto.com.br/97j4gsf_1028983",
      fotos: [
        { src: "assets/img/capa.jpg",                    alt: "Capa do Devocional da Mulher Fervorosa" },
        { src: "assets/img/sumario.jpg",                 alt: "Sumário com o roteiro dos quinze dias" },
        { src: "assets/img/dia-eva.jpg",                 alt: "Página do primeiro dia, sobre Eva" },
        { src: "assets/img/manha-de-jejum.jpg",          alt: "Roteiro da manhã de jejum" },
        { src: "assets/img/declaracao-de-proposito.jpg", alt: "Páginas da Declaração de Propósito de Vida" }
      ]
    }
  ];

  /* ============================================================
     ATENÇÃO — TEXTOS DE EXEMPLO, NÃO PUBLIQUE COMO ESTÁ.
     Estas avaliações foram escritas apenas para montar o layout.
     Substitua por depoimentos reais, com autorização de quem
     escreveu, antes de colocar a loja no ar. Depoimento inventado
     é publicidade enganosa (CDC, arts. 37 e 6º, III).
     ============================================================ */
  var AVALIACOES = [
    {
      produto: "devocional-da-mulher-fervorosa",
      nome: "Devocional do Homem de Deus",
      local: "Rio de Janeiro/RJ",
      nota: 5,
      titulo: "José de Alencar",
      texto: "Eu era um homem arrogande, Deus mudou meu coração através desse devocional"
    },
    {
      produto: "devocional-da-mulher-fervorosa",
      nome: "Devocional da Mulher Fervorosa",
      local: "Bahia/BAF",
      nota: 5,
      titulo: "Maria de Conceição",
      texto: "Não acreditava na biblia, depois desse devocional minha vida mudou. Deus é maravilhoso!"
    },
    {
      produto: "devocional-da-mulher-fervorosa",
      nome: "Devocional do Homem de Deus",
      local: "Bahia/BA",
      nota: 4,
      titulo: "Carlos Fonseca Junior",
      texto: "Depois desse devocional, minha casa se edificicou e me tornei prospero."
    },
    {
      produto: "devocional-da-mulher-fervorosa",
      nome: "Devocional da Mulher Fervorosa",
      local: "Tramandaí/RS",
      nota: 5,
      titulo: "Juliana Freitas",
      texto: "Otímo devocional, mudou a minha vida e minha procimidade com o Espirito santo."
    },
    {
      produto: "devocional-da-mulher-fervorosa",
      nome: "Devocional da Mulher Fervorosa",
      local: "Florianopolis/SC",
      nota: 5,
      titulo: "Ana Anair",
      texto: "Queria ter comprado antes esse devocional, incrivel!!"
    },
    {
      produto: "devocional-da-mulher-fervorosa",
      nome: "Devocional da Mulher Fervorosa",
      local: "Porto Alegre/RS",
      nota: 4,
      titulo: "Marcia Silva",
      texto: "Recomendo muitooo, ensina muito sobre as mulheres da biblia"
    }
  ];

  /* ---------------------------------------------------- elementos */

  var elGrade    = document.getElementById("grade");
  var elVazio    = document.getElementById("vazio");
  var elFiltros  = document.getElementById("filtros");
  var elProduto  = document.getElementById("produto");
  var elVitrine  = document.getElementById("vitrine");
  var elPontos   = document.getElementById("pontos");
  var rotas      = document.querySelectorAll(".rota");

  var timerPromo = null;

  /* ---------------------------------------------------- utilidades */

  function criar(tag, classe, texto) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto !== undefined) el.textContent = texto;
    return el;
  }

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function contar(categoria) {
    if (categoria === "todos") return PRODUTOS.length;
    return PRODUTOS.filter(function (p) { return p.categoria === categoria; }).length;
  }

  function buscarPorSlug(slug) {
    return PRODUTOS.filter(function (p) { return p.slug === slug; })[0] || null;
  }

  function percentualDesconto(produto) {
    if (!produto.promo || !produto.promo.precoDe) return 0;
    return Math.round((1 - produto.preco / produto.promo.precoDe) * 100);
  }

  /** Milissegundos restantes da promoção. Zero quando ela já acabou. */
  function restanteDaPromo(promo) {
    if (promo.terminaEm) return Math.max(0, promo.terminaEm - Date.now());
    var ciclo = promo.cicloDias * 24 * 60 * 60 * 1000;
    var decorrido = (Date.now() - promo.inicioCiclo) % ciclo;
    if (decorrido < 0) decorrido += ciclo;
    return ciclo - decorrido;
  }

  function fatiarTempo(ms) {
    var s = Math.floor(ms / 1000);
    return {
      dias:     Math.floor(s / 86400),
      horas:    Math.floor(s % 86400 / 3600),
      minutos:  Math.floor(s % 3600 / 60),
      segundos: s % 60
    };
  }

  /* ---------------------------------------------------- estrelas */

  function estrelas(nota) {
    var caixa = criar("span", "estrelas");
    caixa.setAttribute("role", "img");
    caixa.setAttribute("aria-label", nota + " de 5 estrelas");
    for (var i = 1; i <= 5; i += 1) {
      var e = criar("span", i <= nota ? "estrela cheia" : "estrela", "★");
      e.setAttribute("aria-hidden", "true");
      caixa.appendChild(e);
    }
    return caixa;
  }

  /* ---------------------------------------------------- avaliações */

  function avaliacoesDe(slug) {
    return AVALIACOES.filter(function (a) { return a.produto === slug; });
  }

  function mediaDe(lista) {
    if (!lista.length) return 0;
    var soma = lista.reduce(function (t, a) { return t + a.nota; }, 0);
    return soma / lista.length;
  }

  function cartaoAvaliacao(a) {
    var art = criar("article", "avaliacao");
    art.appendChild(estrelas(a.nota));
    art.appendChild(criar("h3", "avaliacao-titulo", a.titulo));
    art.appendChild(criar("p", "avaliacao-texto", a.texto));
    var rodape = criar("footer", "avaliacao-autora");
    rodape.appendChild(criar("span", "avaliacao-nome", a.nome));
    if (a.local) rodape.appendChild(criar("span", "avaliacao-local", a.local));
    art.appendChild(rodape);
    return art;
  }

  function renderizarAvaliacoes(idLista, idResumo, lista) {
    var alvo = document.getElementById(idLista);
    var resumo = document.getElementById(idResumo);
    if (!alvo || !resumo) return;

    alvo.innerHTML = "";
    resumo.innerHTML = "";
    if (!lista.length) return;

    var media = mediaDe(lista);
    resumo.appendChild(estrelas(Math.round(media)));
    resumo.appendChild(criar("span", "nota-media", media.toFixed(1).replace(".", ",")));
    resumo.appendChild(criar("span", "nota-total",
      lista.length + (lista.length === 1 ? " avaliação" : " avaliações")));

    lista.forEach(function (a) { alvo.appendChild(cartaoAvaliacao(a)); });
  }

  /* ---------------------------------------------------- vitrine */

  /**
   * Slides da vitrine.
   * Com dois ou mais produtos, cada produto vira um slide.
   * Com um único produto, as fotos dele viram os slides — assim a vitrine
   * tem o que mostrar desde o primeiro dia de loja.
   */
  function slidesDaVitrine() {
    if (PRODUTOS.length > 1) {
      return PRODUTOS.map(function (p) {
        return { produto: p, foto: p.fotos[0], legenda: p.resumo };
      });
    }
    var p = PRODUTOS[0];
    if (!p) return [];
    return p.fotos.map(function (foto) {
      return { produto: p, foto: foto, legenda: foto.alt };
    });
  }

  function montarVitrine() {
    if (!elVitrine) return;
    var slides = slidesDaVitrine();

    elVitrine.innerHTML = "";
    elPontos.innerHTML = "";

    slides.forEach(function (slide, i) {
      var a = criar("a", "slide");
      a.href = "#/produto/" + slide.produto.slug;

      var img = criar("img");
      img.src = slide.foto.src;
      img.alt = slide.foto.alt;
      img.loading = i === 0 ? "eager" : "lazy";
      a.appendChild(img);

      var corpo = criar("div", "slide-corpo");
      corpo.appendChild(criar("p", "slide-nome", slide.produto.nome));
      corpo.appendChild(criar("p", "slide-legenda", slide.legenda));
      corpo.appendChild(criar("span", "slide-preco", formatarPreco(slide.produto.preco)));
      a.appendChild(corpo);

      elVitrine.appendChild(a);

      var ponto = criar("button", "ponto");
      ponto.type = "button";
      ponto.setAttribute("aria-label", "Ir para o item " + (i + 1));
      ponto.addEventListener("click", function () { irParaSlide(i); });
      elPontos.appendChild(ponto);
    });

    var ant = document.querySelector(".seta-ant");
    var prox = document.querySelector(".seta-prox");
    var temControles = slides.length > 1;
    ant.hidden = !temControles;
    prox.hidden = !temControles;
    elPontos.hidden = !temControles;

    ant.addEventListener("click", function () { deslizar(-1); });
    prox.addEventListener("click", function () { deslizar(1); });
    elVitrine.addEventListener("scroll", marcarPontoAtivo, { passive: true });
    marcarPontoAtivo();
  }

  function larguraDoSlide() {
    var primeiro = elVitrine.firstElementChild;
    if (!primeiro) return 0;
    var gap = parseFloat(getComputedStyle(elVitrine).columnGap) || 0;
    return primeiro.getBoundingClientRect().width + gap;
  }

  function indiceAtual() {
    var largura = larguraDoSlide();
    return largura ? Math.round(elVitrine.scrollLeft / largura) : 0;
  }

  function irParaSlide(i) {
    elVitrine.scrollTo({ left: i * larguraDoSlide(), behavior: "smooth" });
  }

  function deslizar(direcao) {
    var total = elVitrine.children.length;
    var proximo = indiceAtual() + direcao;
    if (proximo < 0) proximo = total - 1;
    if (proximo > total - 1) proximo = 0;
    irParaSlide(proximo);
  }

  function marcarPontoAtivo() {
    var atual = indiceAtual();
    Array.prototype.forEach.call(elPontos.children, function (p, i) {
      p.setAttribute("aria-current", String(i === atual));
    });
  }

  /* ---------------------------------------------------- filtros */

  function montarFiltros() {
    CATEGORIAS.forEach(function (cat) {
      var b = criar("button", "filtro");
      b.type = "button";
      b.dataset.categoria = cat.id;
      b.setAttribute("aria-pressed", "false");
      b.appendChild(document.createTextNode(cat.nome));
      b.appendChild(criar("span", "conta", String(contar(cat.id))));
      b.addEventListener("click", function () {
        location.hash = cat.id === "todos" ? "#/produtos" : "#/produtos/" + cat.id;
      });
      elFiltros.appendChild(b);
    });
  }

  function marcarFiltroAtivo(categoria) {
    Array.prototype.forEach.call(elFiltros.children, function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.categoria === categoria));
    });
  }

  /* ---------------------------------------------------- lista */

  function cartao(p) {
    var a = criar("a", "cartao");
    a.href = "#/produto/" + p.slug;

    var img = criar("img");
    img.src = p.fotos[0].src;
    img.alt = p.fotos[0].alt;
    img.loading = "lazy";
    a.appendChild(img);

    var corpo = criar("div", "cartao-corpo");
    corpo.appendChild(criar("p", "cartao-categoria", p.categoriaNome));
    corpo.appendChild(criar("h3", "cartao-nome", p.nome));
    corpo.appendChild(criar("p", "cartao-resumo", p.resumo));

    var avaliacoes = avaliacoesDe(p.slug);
    if (avaliacoes.length) {
      var linha = criar("div", "cartao-nota");
      linha.appendChild(estrelas(Math.round(mediaDe(avaliacoes))));
      linha.appendChild(criar("span", "conta", "(" + avaliacoes.length + ")"));
      corpo.appendChild(linha);
    }

    var rodape = criar("div", "cartao-rodape");
    var precos = criar("span", "cartao-precos");
    if (percentualDesconto(p) > 0) {
      precos.appendChild(criar("s", "cartao-preco-de", formatarPreco(p.promo.precoDe)));
    }
    precos.appendChild(criar("span", "cartao-preco", formatarPreco(p.preco)));
    rodape.appendChild(precos);
    rodape.appendChild(criar("span", "cartao-acao", "Ver detalhes"));
    corpo.appendChild(rodape);

    a.appendChild(corpo);
    return a;
  }

  function renderizarLista(categoria) {
    var lista = categoria === "todos"
      ? PRODUTOS
      : PRODUTOS.filter(function (p) { return p.categoria === categoria; });

    elGrade.innerHTML = "";
    lista.forEach(function (p) { elGrade.appendChild(cartao(p)); });

    var vazia = lista.length === 0;
    elGrade.hidden = vazia;
    elVazio.hidden = !vazia;

    if (vazia) {
      var cat = CATEGORIAS.filter(function (c) { return c.id === categoria; })[0];
      elVazio.innerHTML = "";
      elVazio.appendChild(criar("h3", null, "Ainda não há títulos em " + (cat ? cat.nome : categoria)));
      elVazio.appendChild(criar("p", null, "Estamos preparando esta seção. Enquanto isso, conheça o devocional que já está disponível."));
      var link = criar("a", "botao botao-principal", "Ver devocionais");
      link.href = "#/produtos/devocionais";
      elVazio.appendChild(link);
    }
  }

  /* ---------------------------------------------------- bloco de compra */

  function blocoContador(promo) {
    var caixa = criar("div", "contador");
    var campos = [
      ["dias", "dias"], ["horas", "horas"], ["minutos", "min"], ["segundos", "seg"]
    ];
    var valores = {};

    campos.forEach(function (campo) {
      var bloco = criar("div", "contador-bloco");
      var valor = criar("span", "contador-valor", "--");
      bloco.appendChild(valor);
      bloco.appendChild(criar("span", "contador-rotulo", campo[1]));
      caixa.appendChild(bloco);
      valores[campo[0]] = valor;
    });

    function tique() {
      var t = fatiarTempo(restanteDaPromo(promo));
      valores.dias.textContent = String(t.dias);
      valores.horas.textContent = String(t.horas).padStart(2, "0");
      valores.minutos.textContent = String(t.minutos).padStart(2, "0");
      valores.segundos.textContent = String(t.segundos).padStart(2, "0");
    }

    tique();
    if (timerPromo) clearInterval(timerPromo);
    timerPromo = setInterval(tique, 1000);

    return caixa;
  }

  function blocoCompra(p) {
    var compra = criar("div", "compra");
    var desconto = percentualDesconto(p);

    if (desconto > 0) {
      var chamada = criar("div", "promo-chamada");
      chamada.appendChild(criar("span", "selo-desconto", desconto + "% OFF"));
      chamada.appendChild(criar("span", "promo-texto", "Desconto imperdível"));
      compra.appendChild(chamada);
    }

    var preco = criar("div", "preco");
    if (desconto > 0) {
      preco.appendChild(criar("s", "preco-de", formatarPreco(p.promo.precoDe)));
    }
    preco.appendChild(criar("span", "preco-valor", formatarPreco(p.preco)));
    preco.appendChild(criar("span", "preco-nota", "pagamento único"));
    compra.appendChild(preco);

    if (desconto > 0) {
      compra.appendChild(criar("p", "contador-titulo", "A promoção termina em"));
      compra.appendChild(blocoContador(p.promo));
    }

    var botao = criar("a", "botao botao-compra", "Comprar por " + formatarPreco(p.preco));
    botao.href = p.checkout;
    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
    compra.appendChild(botao);
    compra.appendChild(criar("p", "compra-aviso", "Você será levada ao ambiente de pagamento seguro."));

    return compra;
  }

  /* ---------------------------------------------------- produto */

  function renderizarProduto(p) {
    if (timerPromo) { clearInterval(timerPromo); timerPromo = null; }
    elProduto.innerHTML = "";

    var galeria = criar("div", "galeria");
    var principal = criar("img", "foto-principal");
    principal.src = p.fotos[0].src;
    principal.alt = p.fotos[0].alt;
    galeria.appendChild(principal);

    var minis = criar("div", "miniaturas");
    p.fotos.forEach(function (foto, i) {
      var b = criar("button", "miniatura");
      b.type = "button";
      b.setAttribute("aria-label", "Ver foto " + (i + 1) + ": " + foto.alt);
      b.setAttribute("aria-current", String(i === 0));
      var mi = criar("img");
      mi.src = foto.src;
      mi.alt = "";
      mi.loading = "lazy";
      b.appendChild(mi);
      b.addEventListener("click", function () {
        principal.src = foto.src;
        principal.alt = foto.alt;
        Array.prototype.forEach.call(minis.children, function (outro) {
          outro.setAttribute("aria-current", String(outro === b));
        });
      });
      minis.appendChild(b);
    });
    galeria.appendChild(minis);
    elProduto.appendChild(galeria);

    var info = criar("div", "info");
    info.appendChild(criar("p", "produto-categoria", p.categoriaNome));
    info.appendChild(criar("h1", "produto-nome", p.nome));
    info.appendChild(criar("p", "produto-linha-fina", p.linhaFina));

    var avaliacoes = avaliacoesDe(p.slug);
    if (avaliacoes.length) {
      var nota = criar("div", "produto-nota");
      nota.appendChild(estrelas(Math.round(mediaDe(avaliacoes))));
      nota.appendChild(criar("span", "nota-total",
        mediaDe(avaliacoes).toFixed(1).replace(".", ",") + " · " + avaliacoes.length + " avaliações"));
      info.appendChild(nota);
    }

    info.appendChild(criar("p", "produto-descricao", p.descricao));

    var ul = criar("ul", "itens");
    p.itens.forEach(function (item) {
      var li = criar("li");
      li.appendChild(criar("span", "marcador", "◆"));
      li.appendChild(criar("span", null, item));
      ul.appendChild(li);
    });
    info.appendChild(ul);
    info.appendChild(blocoCompra(p));

    elProduto.appendChild(info);

    renderizarAvaliacoes("avaliacoes-produto", "resumo-nota-produto", avaliacoes);
    document.title = p.nome + " — Reflexo da Fé em Deus";
  }

  /* ---------------------------------------------------- navegação */

  function mostrar(rota) {
    Array.prototype.forEach.call(rotas, function (s) {
      s.hidden = s.dataset.rota !== rota;
    });
    if (rota !== "produto" && timerPromo) {
      clearInterval(timerPromo);
      timerPromo = null;
    }
  }

  function navegar() {
    var partes = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);

    if (partes[0] === "produto" && partes[1]) {
      var p = buscarPorSlug(partes[1]);
      if (p) {
        renderizarProduto(p);
        mostrar("produto");
        window.scrollTo(0, 0);
        return;
      }
      location.hash = "#/produtos";
      return;
    }

    if (partes[0] === "produtos") {
      var pedida = partes[1] || "todos";
      var conhecida = CATEGORIAS.some(function (c) { return c.id === pedida; });
      var categoria = conhecida ? pedida : "todos";
      marcarFiltroAtivo(categoria);
      renderizarLista(categoria);
      mostrar("produtos");
      document.title = "Produtos — Reflexo da Fé em Deus";
      window.scrollTo(0, 0);
      return;
    }

    mostrar("inicio");
    document.title = "Reflexo da Fé em Deus — Loja de fé cristã";
  }

  /* ---------------------------------------------------- início */

  montarFiltros();
  montarVitrine();
  renderizarAvaliacoes("avaliacoes-inicio", "resumo-nota", AVALIACOES.slice(0, 3));
  window.addEventListener("hashchange", navegar);
  navegar();
})();
