/* =========================================================
   Reflexo da Fé em Deus — catálogo e conteúdo
   ---------------------------------------------------------
   AMBIENTE DE ESTUDO INTERNO.
   Avaliações, notas e números de vendas abaixo são FICTÍCIOS,
   criados para testar o layout. Antes de qualquer uso público,
   substitua por dados reais (ver DADOS_FICTICIOS).
   ========================================================= */
window.LOJA = (function () {
  "use strict";

  var DADOS_FICTICIOS = true;

  var CATEGORIAS = [
    { id: "todos",       nome: "Todos" },
    { id: "biblias",     nome: "Bíblias" },
    { id: "devocionais", nome: "Devocionais" },
    { id: "promocoes",   nome: "Promoções" },
    { id: "combos",      nome: "Combos" }
  ];

  /* Ciclo de promoção compartilhado: 7 dias, reinicia sozinho.
     Para um prazo real, troque terminaEm por uma data. */
  function promo(precoDe) {
    return {
      precoDe: precoDe,
      cicloDias: 7,
      inicioCiclo: Date.UTC(2026, 7, 1, 3, 0, 0),
      terminaEm: null
    };
  }

  var PRODUTOS = [
    {
      slug: "devocional-da-mulher-fervorosa",
      nome: "Devocional da Mulher Fervorosa",
      linhaFina: "Quinze dias com as mulheres da Bíblia",
      categorias: ["devocionais", "promocoes"],
      categoriaNome: "Devocional",
      preco: 22.99,
      promo: promo(57.00),
      nota: 4.9,
      vendas: 312,
      resumo: "15 dias, 15 mulheres da Bíblia e um propósito escrito por você.",
      descricao:
        "Um devocional de quinze dias que percorre a vida de quinze mulheres das Escrituras — " +
        "de Eva a Priscila. Cada dia traz a leitura bíblica, o contexto histórico da passagem, " +
        "o que o texto realmente afirma, o ensinamento para o convívio da mulher em sociedade, " +
        "aplicação prática, perguntas de reflexão, oração sugerida e espaço para escrever.",
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
    },
    {
      slug: "devocional-do-homem-prospero",
      nome: "Devocional do Homem Próspero",
      linhaFina: "Vinte e um dias com os homens da Bíblia",
      categorias: ["devocionais", "promocoes"],
      categoriaNome: "Devocional",
      preco: 39.90,
      promo: promo(79.90),
      nota: 4.8,
      vendas: 187,
      resumo: "21 dias sobre caráter, provisão e legado — de Adão a Jesus.",
      descricao:
        "Vinte e um dias com vinte e um homens das Escrituras, divididos em três semanas: " +
        "caráter, provisão e legado. Antes dos dias há seis capítulos de fundamento, incluindo " +
        "o que a Bíblia realmente chama de prosperidade, como orar com estrutura e um método " +
        "de leitura bíblica que se sustenta. Cada dia traz leitura, salmo, contexto, comentário, " +
        "aplicação, perguntas, oração e espaço para escrever.",
      itens: [
        "21 dias de estudo com os homens da Bíblia",
        "Capítulo sobre prosperidade segundo as Escrituras",
        "A oração do homem: estrutura prática de 15 minutos",
        "Método de leitura bíblica e doze salmos de consulta",
        "3 manhãs de jejum guiadas, com cuidados de saúde",
        "Projeto Legado, Pacto com a Palavra e plano de 90 dias",
        "122 páginas em PDF, formato A5 — leia no celular ou imprima"
      ],
      checkout: "https://pay.cakto.com.br/ntn4zo6_1029341",
      fotos: [
        { src: "assets/img/homem-capa.jpg",         alt: "Capa do Devocional do Homem Próspero" },
        { src: "assets/img/homem-sumario.jpg",      alt: "Sumário com o roteiro dos vinte e um dias" },
        { src: "assets/img/homem-prosperidade.jpg", alt: "Capítulo sobre prosperidade segundo as Escrituras" },
        { src: "assets/img/homem-dia-noe.jpg",      alt: "Página do segundo dia, sobre Noé" },
        { src: "assets/img/homem-declaracao.jpg",   alt: "Páginas da Declaração de Legado" }
      ]
    },
    {
      slug: "combo-casal-conforme-a-vontade-de-deus",
      nome: "Combo: Casal conforme a vontade de Deus",
      linhaFina: "Os dois devocionais, para ler lado a lado",
      categorias: ["combos", "promocoes"],
      categoriaNome: "Combo",
      preco: 55.00,
      promo: promo(136.90),
      nota: 5.0,
      vendas: 96,
      destaque: true,
      resumo: "Os dois devocionais juntos: 36 dias de estudo para o casal.",
      descricao:
        "O Devocional da Mulher Fervorosa e o Devocional do Homem Próspero no mesmo pacote, " +
        "pensados para serem lidos em paralelo. São 36 dias de estudo, 6 manhãs de jejum e " +
        "duas declarações escritas — a de Propósito e a de Legado — que o casal pode ler junto " +
        "no fim do percurso. Cada um segue no seu ritmo; as perguntas de reflexão viram conversa.",
      itens: [
        "Os dois e-books completos, em PDF",
        "36 dias de estudo bíblico ao todo",
        "6 manhãs de jejum guiadas",
        "Projeto Propósito e Projeto Legado, para ler juntos no fim",
        "Dois planos de continuidade de 90 dias",
        "215 páginas no total, formato A5 — leia no celular ou imprima"
      ],
      checkout: "https://pay.cakto.com.br/rgafekk_1029383",
      fotos: [
        { src: "assets/img/combo-capas.jpg",              alt: "Os dois devocionais do combo lado a lado" },
        { src: "assets/img/capa.jpg",                     alt: "Capa do Devocional da Mulher Fervorosa" },
        { src: "assets/img/homem-capa.jpg",               alt: "Capa do Devocional do Homem Próspero" },
        { src: "assets/img/combo-salmos.jpg",             alt: "Página de salmos do devocional masculino" },
        { src: "assets/img/combo-jejum.jpg",              alt: "Roteiro da manhã de jejum do devocional feminino" }
      ]
    }
  ];

  /* ---------------------------------------------------------
     AVALIAÇÕES FICTÍCIAS — ambiente de estudo.
     --------------------------------------------------------- */
  var AVALIACOES = [
    /* ---- Devocional da Mulher Fervorosa ---- */
    { produto: "devocional-da-mulher-fervorosa", nome: "Aline Ferreira", local: "Fortaleza/CE", nota: 5,
      titulo: "Voltei a ler a Bíblia todos os dias",
      texto: "Fazia dois anos que eu só abria a Bíblia no culto. O formato de trinta minutos me devolveu o hábito. Estou no dia 12 e já não perco uma manhã." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Juliana Prado", local: "Curitiba/PR", nota: 5,
      titulo: "O dia sobre Agar me quebrou",
      texto: "Nunca tinha lido aquela história com atenção. Chorei lendo que Deus procurou primeiro a escrava, e não a senhora. Mudou o jeito como eu trato a moça que trabalha comigo." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Rosângela Matos", local: "Salvador/BA", nota: 5,
      titulo: "Usamos no grupo de mulheres",
      texto: "Somos nove no grupo da igreja e cada uma leu no seu tempo. Nas quartas discutíamos as perguntas de reflexão. Rendeu muito mais conversa do que eu esperava." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Camila Nogueira", local: "Belo Horizonte/MG", nota: 4,
      titulo: "Muito bom, queria mais espaço",
      texto: "O conteúdo é excelente e honesto. Só senti falta de mais linhas nos dias do Projeto Propósito — acabei usando um caderno à parte. Fora isso, recomendo." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Patrícia Lemos", local: "Porto Alegre/RS", nota: 5,
      titulo: "As manhãs de jejum mudaram minha rotina",
      texto: "Achei que não fosse conseguir. Como é só a manhã, deu para encaixar antes do trabalho. O aviso sobre saúde me deu segurança para tentar." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Vanessa Rocha", local: "Manaus/AM", nota: 5,
      titulo: "Imprimi e virou meu caderno",
      texto: "Mandei imprimir em espiral numa gráfica aqui perto. Ficou com cara de livro mesmo e eu escrevo direto nas páginas. Melhor decisão." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Sueli Andrade", local: "Recife/PE", nota: 5,
      titulo: "Não é autoajuda com verniz cristão",
      texto: "Foi isso que me convenceu. Explica o contexto, diz quando os cristãos discordam e não promete nada que a Bíblia não promete. Já indiquei para três amigas." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Débora Campos", local: "Goiânia/GO", nota: 4,
      titulo: "Denso em alguns dias",
      texto: "Alguns dias exigem mais tempo do que os trinta minutos sugeridos, principalmente o de Ester. Não é defeito, mas vale saber antes de começar." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Larissa Teixeira", local: "Florianópolis/SC", nota: 5,
      titulo: "A Declaração de Propósito vale o livro",
      texto: "Cheguei no dia 15 com quinze anotações e escrevi tudo numa página só. Colei na porta do armário. Leio toda manhã." },
    { produto: "devocional-da-mulher-fervorosa", nome: "Cristiane Souza", local: "Campo Grande/MS", nota: 5,
      titulo: "Presenteei minha mãe",
      texto: "Comprei para mim e mandei o arquivo para ela também. Ela tem 63 anos e está fazendo com as amigas do bairro. A letra grande ajudou." },

    /* ---- Devocional do Homem Próspero ---- */
    { produto: "devocional-do-homem-prospero", nome: "Rodrigo Almeida", local: "São Paulo/SP", nota: 5,
      titulo: "O dia 9 me pegou de frente",
      texto: "O capítulo sobre Davi e o encobrimento descreveu exatamente o caminho que eu estava percorrendo sem admitir. Chamei um amigo para ser meu Natã no mesmo dia." },
    { produto: "devocional-do-homem-prospero", nome: "Marcelo Vieira", local: "Natal/RN", nota: 5,
      titulo: "Provérbios do dinheiro doeu",
      texto: "Sentei com a planilha depois do dia 12, como o material manda. Descobri gasto que eu fingia não existir. Já quitei o primeiro cartão." },
    { produto: "devocional-do-homem-prospero", nome: "Anderson Lima", local: "Belém/PA", nota: 4,
      titulo: "O capítulo de prosperidade é longo",
      texto: "Achei denso na primeira leitura, mas era necessário. Nunca tinha visto explicarem Jeremias 29 no contexto. Mudou o que eu ensinava no meu grupo." },
    { produto: "devocional-do-homem-prospero", nome: "Thiago Barreto", local: "Vitória/ES", nota: 5,
      titulo: "Fizemos em grupo de homens",
      texto: "Somos seis, começamos juntos numa segunda. As perguntas de reflexão renderam as melhores conversas que já tivemos em três anos de grupo." },
    { produto: "devocional-do-homem-prospero", nome: "Paulo Henrique Dias", local: "Uberlândia/MG", nota: 5,
      titulo: "Voltei a orar com horário marcado",
      texto: "O capítulo sobre Daniel me convenceu: disciplina antes da crise. Coloquei 5h40 no despertador e estou há três semanas sem falhar." },
    { produto: "devocional-do-homem-prospero", nome: "Fábio Nascimento", local: "Joinville/SC", nota: 5,
      titulo: "Neemias virou meu manual",
      texto: "Sou encarregado de obra e nunca tinha lido Neemias assim. Orar e planejar sem escolher só um dos dois. Reli o dia 14 umas quatro vezes." },
    { produto: "devocional-do-homem-prospero", nome: "Wellington Costa", local: "São Luís/MA", nota: 5,
      titulo: "Meu filho está fazendo comigo",
      texto: "Ele tem 17 anos e topou ler junto. Conversamos no carro a caminho da escola. Nunca tivemos conversas assim antes." },
    { produto: "devocional-do-homem-prospero", nome: "Cláudio Ramos", local: "Sorocaba/SP", nota: 4,
      titulo: "Queria mais dias sobre finanças",
      texto: "Os dois dias de Provérbios são ótimos, mas eu ficaria com uma semana inteira. De resto, o equilíbrio entre trabalho e casa está muito bem feito." },
    { produto: "devocional-do-homem-prospero", nome: "Everton Machado", local: "Pelotas/RS", nota: 5,
      titulo: "O Pacto com a Palavra é o diferencial",
      texto: "Assinei e dei uma cópia para o meu líder de célula. Ter alguém cobrando mudou tudo. Sozinho eu já teria parado na segunda semana." },
    { produto: "devocional-do-homem-prospero", nome: "Jean Carlos Oliveira", local: "Cuiabá/MT", nota: 5,
      titulo: "Cansaço não é falta de fé",
      texto: "O dia de Elias me tirou um peso enorme. Estava me achando fraco espiritualmente quando na verdade eu estava dormindo cinco horas por noite há meses." },

    /* ---- Combo: Casal conforme a vontade de Deus ---- */
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Diego e Rafaela Monteiro", local: "Ribeirão Preto/SP", nota: 5,
      titulo: "Virou nosso momento da noite",
      texto: "Cada um lê o seu de manhã e às nove da noite conversamos sobre as perguntas. Já é o melhor hábito que criamos em oito anos de casados." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Marcos e Priscila Gomes", local: "Londrina/PR", nota: 5,
      titulo: "As duas declarações lado a lado",
      texto: "Lemos a Declaração de Propósito e a de Legado juntos no fim, como o material sugere. Descobrimos que estávamos pedindo coisas diferentes para a mesma casa." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Bruno e Tatiane Alves", local: "Aracaju/SE", nota: 5,
      titulo: "Compensa muito comprar junto",
      texto: "Sai bem mais barato que os dois separados e o conteúdo conversa entre si. As semanas se encaixam quase no mesmo tema." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Renato e Simone Barbosa", local: "Juiz de Fora/MG", nota: 4,
      titulo: "Ritmos diferentes",
      texto: "O dela tem 15 dias e o dele 21, então terminamos em semanas diferentes. Não é problema, mas a gente esperava terminar junto." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Igor e Letícia Farias", local: "Maceió/AL", nota: 5,
      titulo: "Fizemos as manhãs de jejum no mesmo dia",
      texto: "Combinamos de jejuar nos mesmos dias, mesmo os livros marcando datas diferentes. Almoçar junto depois virou celebração." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Samuel e Elaine Ribeiro", local: "Blumenau/SC", nota: 5,
      titulo: "Presente de casamento",
      texto: "Demos para um casal da igreja que casou em março. Eles agradeceram tanto que compramos outro para nós." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Otávio e Michele Duarte", local: "Teresina/PI", nota: 5,
      titulo: "Conversas que a gente evitava",
      texto: "O dia sobre dinheiro no dele e o dia sobre serviço no dela caíram na mesma semana. Foi a primeira vez que sentamos para falar de orçamento sem briga." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Leandro e Karina Pires", local: "Caxias do Sul/RS", nota: 5,
      titulo: "Imprimimos os dois",
      texto: "Ficaram lindos impressos e cada um escreve no seu. Guardamos na mesma gaveta. Daqui a dez anos vai ser um documento da nossa história." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Vinícius e Amanda Cordeiro", local: "João Pessoa/PB", nota: 4,
      titulo: "Bom, mas exige compromisso",
      texto: "Não é para quem quer algo leve. Nas duas primeiras semanas quase desistimos por causa da rotina. Vale se o casal combinar horário fixo antes de começar." },
    { produto: "combo-casal-conforme-a-vontade-de-deus", nome: "Alex e Fernanda Moura", local: "Brasília/DF", nota: 5,
      titulo: "Recomendamos no nosso grupo de casais",
      texto: "Levamos para o encontro de casais da igreja e quatro casais compraram na mesma semana. Está todo mundo fazendo junto agora." }
  ];

  var PILARES = [
    {
      icone: "lampada",
      titulo: "Texto no contexto",
      texto: "Cada passagem é explicada com autor, destinatário e gênero literário. " +
             "Nada de versículo solto provando qualquer coisa."
    },
    {
      icone: "trigo",
      titulo: "Aplicação verificável",
      texto: "Todo dia termina em decisão concreta, com espaço para escrever. " +
             "Intenção que não vira agenda não muda nada."
    },
    {
      icone: "escudo",
      titulo: "Honestidade sobre divergências",
      texto: "Onde os cristãos discordam, o material diz que discordam e apresenta os dois lados " +
             "em vez de escolher por você."
    }
  ];

  var FAQ = [
    ["Como recebo o material depois de comprar?",
     "A entrega é digital. Após a confirmação do pagamento você recebe o arquivo em PDF pelo e-mail cadastrado na compra."],
    ["Preciso imprimir para usar?",
     "Não. O PDF foi montado em A5, formato confortável de ler no celular ou no tablet. Se preferir escrever à mão, ele também imprime bem — várias pessoas mandam encadernar."],
    ["Serve para estudo em grupo?",
     "Serve. As perguntas de reflexão foram escritas pensando em conversa, e vários grupos leem individualmente durante a semana e discutem no encontro."],
    ["O jejum é obrigatório?",
     "Não. É um convite, e é sempre de uma manhã só. O material traz um capítulo com o que a Bíblia ensina sobre jejum, orientações de saúde e alternativas para quem não pode jejuar de alimento."],
    ["Tenho um problema com o arquivo. E agora?",
     "Escreva para reflexodafe7@gmail.com contando o que aconteceu. Respondemos em até 1 dia útil."]
  ];

  var ASSUNTOS = [
    "Não recebi o arquivo ou não consigo abrir o PDF",
    "Dúvida sobre o conteúdo de um dos devocionais",
    "Uso do material em grupo, célula ou igreja",
    "Compra em quantidade para um grupo",
    "Sugestões, correções e pedidos de oração"
  ];

  return {
    DADOS_FICTICIOS: DADOS_FICTICIOS,
    CATEGORIAS: CATEGORIAS,
    PRODUTOS: PRODUTOS,
    AVALIACOES: AVALIACOES,
    PILARES: PILARES,
    FAQ: FAQ,
    ASSUNTOS: ASSUNTOS
  };
})();
