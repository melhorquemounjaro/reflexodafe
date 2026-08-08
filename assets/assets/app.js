/* =========================================================
   Reflexo da Fé em Deus — navegação, vitrine e avaliações
   Os dados ficam em assets/dados.js (window.LOJA).
   ========================================================= */
(function () {
  "use strict";

  var CATEGORIAS = window.LOJA.CATEGORIAS;
  var PRODUTOS   = window.LOJA.PRODUTOS;
  var AVALIACOES = window.LOJA.AVALIACOES;
  var PILARES    = window.LOJA.PILARES;
  var FAQ        = window.LOJA.FAQ;
  var ASSUNTOS   = window.LOJA.ASSUNTOS;

  var rotas = document.querySelectorAll(".rota");
  var timers = [];

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

  function formatarNota(n) {
    return n.toFixed(1).replace(".", ",");
  }

  function temCategoria(produto, categoria) {
    return categoria === "todos" || produto.categorias.indexOf(categoria) !== -1;
  }

  function listarPor(categoria) {
    return PRODUTOS.filter(function (p) { return temCategoria(p, categoria); });
  }

  function buscarPorSlug(slug) {
    return PRODUTOS.filter(function (p) { return p.slug === slug; })[0] || null;
  }

  function percentualDesconto(p) {
    if (!p.promo || !p.promo.precoDe) return 0;
    return Math.round((1 - p.preco / p.promo.precoDe) * 100);
  }

  function emPromocao(p) {
    return percentualDesconto(p) > 0 && restanteDaPromo(p.promo) > 0;
  }

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
      dias: Math.floor(s / 86400),
      horas: Math.floor(s % 86400 / 3600),
      minutos: Math.floor(s % 3600 / 60),
      segundos: s % 60
    };
  }

  function doisDigitos(n) {
    return String(n).padStart(2, "0");
  }

  function limparTimers() {
    timers.forEach(clearInterval);
    timers = [];
  }

  function aCada(segundos, fn) {
    fn();
    timers.push(setInterval(fn, segundos * 1000));
  }

  /* ---------------------------------------------------- ícones */

  var ICONES = {
    lampada: '<path d="M16 3a10 10 0 0 0-6 18v4h12v-4a10 10 0 0 0-6-18Z"/><path d="M12 29h8"/>',
    trigo:   '<path d="M16 29V9"/><path d="M16 12c-4-1-6-4-6-7 3 0 6 2 6 5Zm0 0c4-1 6-4 6-7-3 0-6 2-6 5Z"/>' +
             '<path d="M16 20c-4-1-6-4-6-7 3 0 6 2 6 5Zm0 0c4-1 6-4 6-7-3 0-6 2-6 5Z"/>',
    escudo:  '<path d="M16 3 4 7v9c0 7 5 11 12 13 7-2 12-6 12-13V7L16 3Z"/><path d="M16 10v11M11 15h10"/>'
  };

  function icone(nome) {
    var span = criar("span", "icone");
    span.innerHTML = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" ' +
                     'stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">' +
                     (ICONES[nome] || "") + "</svg>";
    span.setAttribute("aria-hidden", "true");
    return span;
  }

  /* ---------------------------------------------------- estrelas e notas */

  function estrelas(nota) {
    var caixa = criar("span", "estrelas");
    caixa.setAttribute("role", "img");
    caixa.setAttribute("aria-label", formatarNota(nota) + " de 5 estrelas");
    for (var i = 1; i <= 5; i += 1) {
      var e = criar("span", i <= Math.round(nota) ? "estrela cheia" : "estrela", "★");
      e.setAttribute("aria-hidden", "true");
      caixa.appendChild(e);
    }
    return caixa;
  }

  function linhaNota(p, classe) {
    var linha = criar("div", classe || "nota-linha");
    linha.appendChild(estrelas(p.nota));
    linha.appendChild(criar("span", "nota-valor", formatarNota(p.nota)));
    linha.appendChild(criar("span", "nota-vendas", p.vendas + " vendas"));
    return linha;
  }

  function seloPromo(p) {
    var selo = criar("span", "selo-promo");
    selo.appendChild(criar("span", "selo-fogo", "🔥"));
    selo.appendChild(criar("span", null, percentualDesconto(p) + "% OFF"));
    return selo;
  }

  function blocoPrecos(p, classe) {
    var precos = criar("span", classe || "precos");
    if (percentualDesconto(p) > 0) {
      precos.appendChild(criar("s", "preco-antigo", formatarPreco(p.promo.precoDe)));
    }
    precos.appendChild(criar("span", "preco-atual", formatarPreco(p.preco)));
    return precos;
  }

  /* ---------------------------------------------------- carrossel */

  /**
   * Liga setas e pontos a um trilho com scroll-snap.
   * Chamado depois que os slides já estão no DOM.
   */
  function ligarCarrossel(idTrilho) {
    var trilho = document.getElementById(idTrilho);
    var pontos = document.getElementById(idTrilho + "-pontos");
    var setas = document.querySelectorAll('[data-alvo="' + idTrilho + '"]');
    if (!trilho || !pontos) return;

    var total = trilho.children.length;
    pontos.innerHTML = "";

    for (var i = 0; i < total; i += 1) {
      (function (indice) {
        var b = criar("button", "ponto");
        b.type = "button";
        b.setAttribute("aria-label", "Ir para o item " + (indice + 1));
        b.addEventListener("click", function () { irPara(indice); });
        pontos.appendChild(b);
      })(i);
    }

    function largura() {
      var primeiro = trilho.firstElementChild;
      if (!primeiro) return 0;
      var gap = parseFloat(getComputedStyle(trilho).columnGap) || 0;
      return primeiro.getBoundingClientRect().width + gap;
    }

    function atual() {
      var l = largura();
      return l ? Math.round(trilho.scrollLeft / l) : 0;
    }

    function irPara(i) {
      trilho.scrollTo({ left: i * largura(), behavior: "smooth" });
    }

    function deslizar(direcao) {
      var proximo = atual() + direcao;
      if (proximo < 0) proximo = total - 1;
      if (proximo > total - 1) proximo = 0;
      irPara(proximo);
    }

    function marcar() {
      var a = atual();
      Array.prototype.forEach.call(pontos.children, function (p, i) {
        p.setAttribute("aria-current", String(i === a));
      });
    }

    Array.prototype.forEach.call(setas, function (s) {
      s.hidden = total < 2;
      s.onclick = function () { deslizar(s.classList.contains("seta-ant") ? -1 : 1); };
    });
    pontos.hidden = total < 2;

    trilho.onscroll = marcar;
    marcar();
  }

  /* ---------------------------------------------------- cartões */

  function cartaoProduto(p, classe) {
    var a = criar("a", classe || "cartao");
    a.href = "#/produto/" + p.slug;
    if (p.destaque) a.classList.add("cartao-destaque");

    var capa = criar("div", "cartao-capa");
    var img = criar("img");
    img.src = p.fotos[0].src;
    img.alt = p.fotos[0].alt;
    img.loading = "lazy";
    capa.appendChild(img);
    if (emPromocao(p)) capa.appendChild(seloPromo(p));
    if (p.destaque) capa.appendChild(criar("span", "selo-destaque", "Mais vendido"));
    a.appendChild(capa);

    var corpo = criar("div", "cartao-corpo");
    corpo.appendChild(criar("p", "cartao-categoria", p.categoriaNome));
    corpo.appendChild(criar("h3", "cartao-nome", p.nome));
    corpo.appendChild(criar("p", "cartao-resumo", p.resumo));
    corpo.appendChild(linhaNota(p, "cartao-nota"));

    var rodape = criar("div", "cartao-rodape");
    rodape.appendChild(blocoPrecos(p, "cartao-precos"));
    rodape.appendChild(criar("span", "cartao-acao", "Ver detalhes"));
    corpo.appendChild(rodape);

    a.appendChild(corpo);
    return a;
  }

  function cartaoAvaliacao(a, mostrarProduto) {
    var art = criar("article", "avaliacao");
    art.appendChild(estrelas(a.nota));
    art.appendChild(criar("h3", "avaliacao-titulo", a.titulo));
    art.appendChild(criar("p", "avaliacao-texto", a.texto));

    var rodape = criar("footer", "avaliacao-autora");
    rodape.appendChild(criar("span", "avaliacao-nome", a.nome));
    rodape.appendChild(criar("span", "avaliacao-local", a.local));
    art.appendChild(rodape);

    if (mostrarProduto) {
      var p = buscarPorSlug(a.produto);
      if (p) art.appendChild(criar("p", "avaliacao-produto", p.nome));
    }
    return art;
  }

  /* ---------------------------------------------------- página inicial */

  function ordenarVitrine() {
    /* promoções primeiro, e o combo em destaque na frente */
    return PRODUTOS.slice().sort(function (a, b) {
      if (!!b.destaque - !!a.destaque) return !!b.destaque - !!a.destaque;
      return percentualDesconto(b) - percentualDesconto(a);
    });
  }

  function montarInicio() {
    /* vitrine */
    var trilho = document.getElementById("vitrine");
    trilho.innerHTML = "";
    ordenarVitrine().forEach(function (p) {
      trilho.appendChild(cartaoProduto(p, "cartao slide"));
    });
    ligarCarrossel("vitrine");

    /* pilares */
    var alvo = document.getElementById("pilares");
    alvo.innerHTML = "";
    PILARES.forEach(function (pil) {
      var card = criar("article", "pilar");
      card.appendChild(icone(pil.icone));
      card.appendChild(criar("h3", "pilar-titulo", pil.titulo));
      card.appendChild(criar("p", "pilar-texto", pil.texto));
      alvo.appendChild(card);
    });

    /* depoimentos */
    var dep = document.getElementById("depoimentos");
    dep.innerHTML = "";
    AVALIACOES.forEach(function (a) {
      dep.appendChild(cartaoAvaliacao(a, true));
    });
    ligarCarrossel("depoimentos");
    resumoNota("resumo-nota", AVALIACOES);

    /* selos do topo */
    var vendas = PRODUTOS.reduce(function (t, p) { return t + p.vendas; }, 0);
    document.getElementById("selo-avaliacoes").textContent = AVALIACOES.length;
    document.getElementById("selo-vendas").textContent = vendas.toLocaleString("pt-BR");

    /* perguntas frequentes */
    var faq = document.getElementById("faq");
    faq.innerHTML = "";
    FAQ.forEach(function (par) {
      var item = criar("details", "faq-item");
      var titulo = criar("summary", "faq-pergunta", par[0]);
      item.appendChild(titulo);
      item.appendChild(criar("p", "faq-resposta", par[1]));
      faq.appendChild(item);
    });
  }

  function resumoNota(id, lista) {
    var alvo = document.getElementById(id);
    if (!alvo || !lista.length) return;
    var media = lista.reduce(function (t, a) { return t + a.nota; }, 0) / lista.length;
    alvo.innerHTML = "";
    alvo.appendChild(estrelas(media));
    alvo.appendChild(criar("span", "nota-media", formatarNota(media)));
    alvo.appendChild(criar("span", "nota-total",
      lista.length + (lista.length === 1 ? " avaliação" : " avaliações")));
  }

  /* ---------------------------------------------------- barra de anúncio */

  function montarAnuncio() {
    var alvo = document.getElementById("anuncio-contador");
    var promo = PRODUTOS.filter(emPromocao)[0];
    if (!alvo || !promo) {
      document.getElementById("anuncio").hidden = true;
      return;
    }
    aCada(1, function () {
      var t = fatiarTempo(restanteDaPromo(promo.promo));
      alvo.textContent = "termina em " + t.dias + "d " + doisDigitos(t.horas) + "h " +
                         doisDigitos(t.minutos) + "m " + doisDigitos(t.segundos) + "s";
    });
  }

  /* ---------------------------------------------------- filtros e lista */

  function montarFiltros() {
    var alvo = document.getElementById("filtros");
    alvo.innerHTML = "";
    CATEGORIAS.forEach(function (cat) {
      var b = criar("button", "filtro");
      b.type = "button";
      b.dataset.categoria = cat.id;
      b.setAttribute("aria-pressed", "false");
      if (cat.id === "promocoes") b.appendChild(criar("span", "filtro-fogo", "🔥"));
      b.appendChild(document.createTextNode(cat.nome));
      b.appendChild(criar("span", "conta", String(listarPor(cat.id).length)));
      b.addEventListener("click", function () {
        location.hash = cat.id === "todos" ? "#/produtos" : "#/produtos/" + cat.id;
      });
      alvo.appendChild(b);
    });
  }

  function marcarFiltroAtivo(categoria) {
    var alvo = document.getElementById("filtros");
    Array.prototype.forEach.call(alvo.children, function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.categoria === categoria));
    });
  }

  function renderizarLista(categoria) {
    var grade = document.getElementById("grade");
    var vazio = document.getElementById("vazio");
    var lista = listarPor(categoria).slice().sort(function (a, b) {
      return (emPromocao(b) ? 1 : 0) - (emPromocao(a) ? 1 : 0);
    });

    grade.innerHTML = "";
    lista.forEach(function (p) { grade.appendChild(cartaoProduto(p)); });

    var vazia = lista.length === 0;
    grade.hidden = vazia;
    vazio.hidden = !vazia;

    if (vazia) {
      var cat = CATEGORIAS.filter(function (c) { return c.id === categoria; })[0];
      vazio.innerHTML = "";
      vazio.appendChild(criar("h3", null, "Ainda não há títulos em " + (cat ? cat.nome : categoria)));
      vazio.appendChild(criar("p", null,
        "Estamos preparando esta seção. Enquanto isso, veja o que já está disponível."));
      var link = criar("a", "botao botao-principal", "Ver todos os produtos");
      link.href = "#/produtos";
      vazio.appendChild(link);
    }
  }

  /* ---------------------------------------------------- bloco de compra */

  function blocoContador(promo) {
    var caixa = criar("div", "contador");
    var campos = [["dias", "dias"], ["horas", "horas"], ["minutos", "min"], ["segundos", "seg"]];
    var valores = {};

    campos.forEach(function (campo) {
      var bloco = criar("div", "contador-bloco");
      var valor = criar("span", "contador-valor", "--");
      bloco.appendChild(valor);
      bloco.appendChild(criar("span", "contador-rotulo", campo[1]));
      caixa.appendChild(bloco);
      valores[campo[0]] = valor;
    });

    aCada(1, function () {
      var t = fatiarTempo(restanteDaPromo(promo));
      valores.dias.textContent = String(t.dias);
      valores.horas.textContent = doisDigitos(t.horas);
      valores.minutos.textContent = doisDigitos(t.minutos);
      valores.segundos.textContent = doisDigitos(t.segundos);
    });

    return caixa;
  }

  function blocoCompra(p) {
    var compra = criar("div", "compra");
    var desconto = percentualDesconto(p);

    if (desconto > 0) {
      var chamada = criar("div", "promo-chamada");
      chamada.appendChild(seloPromo(p));
      chamada.appendChild(criar("span", "promo-texto", "Desconto imperdível"));
      compra.appendChild(chamada);
    }

    var preco = criar("div", "preco");
    if (desconto > 0) preco.appendChild(criar("s", "preco-de", formatarPreco(p.promo.precoDe)));
    preco.appendChild(criar("span", "preco-valor", formatarPreco(p.preco)));
    preco.appendChild(criar("span", "preco-nota", "pagamento único"));
    compra.appendChild(preco);

    if (desconto > 0) {
      var economia = p.promo.precoDe - p.preco;
      compra.appendChild(criar("p", "preco-economia",
        "Você economiza " + formatarPreco(economia)));
      compra.appendChild(criar("p", "contador-titulo", "A promoção termina em"));
      compra.appendChild(blocoContador(p.promo));
    }

    var botao = criar("a", "botao botao-compra", "Comprar por " + formatarPreco(p.preco));
    botao.href = p.checkout;
    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
    compra.appendChild(botao);
    compra.appendChild(criar("p", "compra-aviso",
      "Você será levado ao ambiente de pagamento seguro."));

    return compra;
  }

  /* ---------------------------------------------------- página do produto */

  function renderizarProduto(p) {
    var alvo = document.getElementById("produto");
    alvo.innerHTML = "";

    var galeria = criar("div", "galeria");
    var moldura = criar("div", "galeria-moldura");
    var principal = criar("img", "foto-principal");
    principal.src = p.fotos[0].src;
    principal.alt = p.fotos[0].alt;
    moldura.appendChild(principal);
    if (emPromocao(p)) moldura.appendChild(seloPromo(p));
    galeria.appendChild(moldura);

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
        Array.prototype.forEach.call(minis.children, function (o) {
          o.setAttribute("aria-current", String(o === b));
        });
      });
      minis.appendChild(b);
    });
    galeria.appendChild(minis);
    alvo.appendChild(galeria);

    var info = criar("div", "info");
    info.appendChild(criar("p", "produto-categoria", p.categoriaNome));
    info.appendChild(criar("h1", "produto-nome", p.nome));
    info.appendChild(criar("p", "produto-linha-fina", p.linhaFina));
    info.appendChild(linhaNota(p, "produto-nota"));
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
    alvo.appendChild(info);

    /* depoimentos do produto */
    var lista = AVALIACOES.filter(function (a) { return a.produto === p.slug; });
    var dep = document.getElementById("depoimentos-produto");
    dep.innerHTML = "";
    lista.forEach(function (a) { dep.appendChild(cartaoAvaliacao(a, false)); });
    ligarCarrossel("depoimentos-produto");
    resumoNota("resumo-nota-produto", lista);

    document.title = p.nome + " — Reflexo da Fé em Deus";
  }

  /* ---------------------------------------------------- contato */

  function montarContato() {
    var alvo = document.getElementById("contato-assuntos");
    alvo.innerHTML = "";
    ASSUNTOS.forEach(function (a) {
      alvo.appendChild(criar("li", null, a));
    });
  }

  /* ---------------------------------------------------- navegação */

  function mostrar(rota) {
    Array.prototype.forEach.call(rotas, function (s) {
      s.hidden = s.dataset.rota !== rota;
    });
    var chave = rota === "produto" ? "produtos" : rota;
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.setAttribute("aria-current", a.dataset.nav === chave ? "page" : "false");
    });
  }

  function navegar() {
    limparTimers();
    montarAnuncio();

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

    if (partes[0] === "contato") {
      mostrar("contato");
      document.title = "Contato — Reflexo da Fé em Deus";
      window.scrollTo(0, 0);
      return;
    }

    mostrar("inicio");
    ligarCarrossel("vitrine");
    ligarCarrossel("depoimentos");
    document.title = "Reflexo da Fé em Deus — Loja de fé cristã";
  }

  /* ---------------------------------------------------- início */

  montarFiltros();
  montarInicio();
  montarContato();
  window.addEventListener("hashchange", navegar);
  navegar();
})();
