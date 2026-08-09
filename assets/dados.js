/* =========================================================
   Reflexo da Fé em Deus — catálogo e conteúdo
   ---------------------------------------------------------
   AMBIENTE DE ESTUDO INTERNO.
   Avaliações, notas e números de vendas são FICTÍCIOS, criados
   para testar o layout. Substitua por dados reais antes de
   qualquer uso público (ver DADOS_FICTICIOS).

   Produtos com `checkout: null` ainda não têm link de pagamento
   configurado — o botão leva para a página de contato até que o
   link real seja preenchido.
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
        "de leitura bíblica que se sustenta.",
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
      slug: "devocional-do-jovem-cristao",
      nome: "Devocional do Jovem Cristão",
      linhaFina: "Dez dias sobre renúncia, maturidade, perseverança e compromisso",
      categorias: ["devocionais", "promocoes"],
      categoriaNome: "Devocional",
      preco: 12.99,
      promo: promo(32.00),
      nota: 4.9,
      vendas: 264,
      resumo: "10 dias diretos, com jovens da Bíblia que a maioria nunca estudou.",
      descricao:
        "Dez dias organizados em quatro palavras: renúncia, maturidade, perseverança e " +
        "compromisso. O caminho passa pelo jovem rico, por Daniel adolescente na Babilônia, " +
        "por Timóteo, por João Marcos — o que abandonou uma missão e voltou anos depois — e " +
        "por Josias, que aos dezoito começou a reformar um país. Linguagem direta, sem " +
        "enrolação e sem promessas que a Bíblia não faz.",
      itens: [
        "10 dias com jovens da Bíblia, em quatro blocos temáticos",
        "1 manhã de jejum guiada, com orientações específicas para menores de 18 anos",
        "Projeto Propósito: dez passos até a sua declaração escrita",
        "Pacto com a Palavra, para assinar ao final",
        "Plano de continuidade de 30 dias",
        "65 páginas em PDF, formato A5 — leia no celular ou imprima"
      ],
      checkout: null,
      fotos: [
        { src: "assets/img/jovem-capa.jpg",            alt: "Capa do Devocional do Jovem Cristão" },
        { src: "assets/img/jovem-sumario.jpg",         alt: "Sumário com o roteiro dos dez dias" },
        { src: "assets/img/jovem-jejum.jpg",           alt: "Capítulo sobre o jejum" },
        { src: "assets/img/jovem-dia-jovem-rico.jpg",  alt: "Página do primeiro dia, sobre o jovem rico" },
        { src: "assets/img/jovem-declaracao.jpg",      alt: "Páginas da Declaração de Propósito" }
      ]
    },
    {
      slug: "combo-familia-com-proposito",
      nome: "Combo: Família com propósito",
      linhaFina: "Os três devocionais — mãe, pai e filhos",
      categorias: ["combos", "promocoes"],
      categoriaNome: "Combo",
      preco: 67.99,
      promo: promo(168.90),
      nota: 4.9,
      vendas: 74,
      destaque: true,
      resumo: "Os três devocionais juntos: 46 dias de estudo para a casa inteira.",
      descricao:
        "O combo mais completo da loja: Mulher Fervorosa, Homem Próspero e Jovem Cristão no " +
        "mesmo pacote. São 46 dias de estudo, 7 manhãs de jejum e três declarações escritas — " +
        "uma de cada membro da família — que podem ser lidas juntas no fim do percurso. " +
        "Cada um segue no seu ritmo e no seu material; as perguntas de reflexão viram conversa " +
        "na mesa.",
      itens: [
        "Os três e-books completos, em PDF",
        "46 dias de estudo bíblico ao todo",
        "7 manhãs de jejum guiadas",
        "Três declarações escritas: Propósito, Legado e Propósito do jovem",
        "Três planos de continuidade (90, 90 e 30 dias)",
        "280 páginas no total, formato A5 — leia no celular ou imprima"
      ],
      checkout: null,
      fotos: [
        { src: "assets/img/combo-familia-capas.jpg", alt: "Os três devocionais do combo lado a lado" },
        { src: "assets/img/capa.jpg",                alt: "Capa do Devocional da Mulher Fervorosa" },
        { src: "assets/img/homem-capa.jpg",          alt: "Capa do Devocional do Homem Próspero" },
        { src: "assets/img/jovem-capa.jpg",          alt: "Capa do Devocional do Jovem Cristão" },
        { src: "assets/img/combo-salmos.jpg",        alt: "Página interna com os salmos de consulta" }
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
      resumo: "Mulher Fervorosa e Homem Próspero: 36 dias de estudo para o casal.",
      descricao:
        "O Devocional da Mulher Fervorosa e o Devocional do Homem Próspero no mesmo pacote, " +
        "pensados para serem lidos em paralelo. São 36 dias de estudo, 6 manhãs de jejum e duas " +
        "declarações escritas — a de Propósito e a de Legado — que o casal pode ler junto no fim " +
        "do percurso.",
      itens: [
        "Os dois e-books completos, em PDF",
        "36 dias de estudo bíblico ao todo",
        "6 manhãs de jejum guiadas",
        "Projeto Propósito e Projeto Legado, para ler juntos no fim",
        "Dois planos de continuidade de 90 dias",
        "215 páginas no total, formato A5 — leia no celular ou imprima"
      ],
      checkout: null,
      fotos: [
        { src: "assets/img/combo-capas.jpg",   alt: "Os dois devocionais do combo lado a lado" },
        { src: "assets/img/capa.jpg",          alt: "Capa do Devocional da Mulher Fervorosa" },
        { src: "assets/img/homem-capa.jpg",    alt: "Capa do Devocional do Homem Próspero" },
        { src: "assets/img/combo-salmos.jpg",  alt: "Página de salmos do devocional masculino" },
        { src: "assets/img/combo-jejum.jpg",   alt: "Roteiro da manhã de jejum do devocional feminino" }
      ]
    },
    {
      slug: "combo-mae-e-filho-ungidos",
      nome: "Combo: Mãe e Filho(a) ungidos",
      linhaFina: "Mulher Fervorosa + Jovem Cristão",
      categorias: ["combos", "promocoes"],
      categoriaNome: "Combo",
      preco: 25.99,
      promo: promo(89.00),
      nota: 5.0,
      vendas: 118,
      resumo: "25 dias de estudo para mãe e filho fazerem no mesmo período.",
      descricao:
        "O Devocional da Mulher Fervorosa e o Devocional do Jovem Cristão no mesmo pacote. " +
        "São 25 dias de estudo e 4 manhãs de jejum. A proposta é simples: comecem no mesmo dia, " +
        "cada um no seu material, e reservem um momento da semana para conversar sobre as " +
        "perguntas de reflexão. Funciona igualmente para filho ou filha.",
      itens: [
        "Os dois e-books completos, em PDF",
        "25 dias de estudo bíblico ao todo",
        "4 manhãs de jejum guiadas, com cuidados de saúde",
        "Duas declarações escritas, para lerem juntas no fim",
        "Planos de continuidade de 90 e 30 dias",
        "158 páginas no total, formato A5 — leia no celular ou imprima"
      ],
      checkout: null,
      fotos: [
        { src: "assets/img/combo-mae-filho-capas.jpg", alt: "Os dois devocionais do combo lado a lado" },
        { src: "assets/img/capa.jpg",                  alt: "Capa do Devocional da Mulher Fervorosa" },
        { src: "assets/img/jovem-capa.jpg",            alt: "Capa do Devocional do Jovem Cristão" },
        { src: "assets/img/manha-de-jejum.jpg",        alt: "Roteiro da manhã de jejum" },
        { src: "assets/img/jovem-declaracao.jpg",      alt: "Páginas da Declaração de Propósito do jovem" }
      ]
    },
    {
      slug: "combo-pai-e-filho-juntos-na-bencao",
      nome: "Combo: Pai e Filho(a) juntos na bênção",
      linhaFina: "Homem Próspero + Jovem Cristão",
      categorias: ["combos", "promocoes"],
      categoriaNome: "Combo",
      preco: 42.99,
      promo: promo(111.90),
      nota: 4.8,
      vendas: 63,
      resumo: "31 dias de estudo para pai e filho começarem no mesmo dia.",
      descricao:
        "O Devocional do Homem Próspero e o Devocional do Jovem Cristão no mesmo pacote. " +
        "São 31 dias de estudo e 4 manhãs de jejum. Os temas conversam: enquanto um trabalha " +
        "caráter, provisão e legado, o outro trabalha renúncia, maturidade e compromisso. " +
        "Funciona igualmente para filho ou filha.",
      itens: [
        "Os dois e-books completos, em PDF",
        "31 dias de estudo bíblico ao todo",
        "4 manhãs de jejum guiadas, com cuidados de saúde",
        "Projeto Legado e Projeto Propósito, para lerem juntos no fim",
        "Planos de continuidade de 90 e 30 dias",
        "187 páginas no total, formato A5 — leia no celular ou imprima"
      ],
      checkout: null,
      fotos: [
        { src: "assets/img/combo-pai-filho-capas.jpg", alt: "Os dois devocionais do combo lado a lado" },
        { src: "assets/img/homem-capa.jpg",            alt: "Capa do Devocional do Homem Próspero" },
        { src: "assets/img/jovem-capa.jpg",            alt: "Capa do Devocional do Jovem Cristão" },
        { src: "assets/img/homem-prosperidade.jpg",    alt: "Capítulo sobre prosperidade segundo as Escrituras" },
        { src: "assets/img/jovem-jejum.jpg",           alt: "Capítulo sobre o jejum do devocional jovem" }
      ]
    }
  ];

  /* ---------------------------------------------------------
     AVALIAÇÕES FICTÍCIAS — ambiente de estudo.
     --------------------------------------------------------- */
  var AVALIACOES = [
    /* ---- Mulher Fervorosa ---- */
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

    /* ---- Homem Próspero ---- */
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

    /* ---- Jovem Cristão ---- */
    { produto: "devocional-do-jovem-cristao", nome: "Lucas Ferraz", local: "Santos/SP", nota: 5,
      titulo: "Dez dias eu consigo",
      texto: "Já tinha começado três devocionais e largado todos. Esse tem dez dias e eu terminei. Só isso já valeu, mas o conteúdo é bem melhor do que eu esperava." },
    { produto: "devocional-do-jovem-cristao", nome: "Gabriela Pinheiro", local: "Niterói/RJ", nota: 5,
      titulo: "O dia do João Marcos",
      texto: "Eu tinha largado a liderança do grupo de jovens e estava com vergonha de voltar. Li o dia 7 e mandei mensagem para o meu pastor na mesma noite." },
    { produto: "devocional-do-jovem-cristao", nome: "Matheus Andrade", local: "Campinas/SP", nota: 5,
      titulo: "Daniel tinha a minha idade",
      texto: "Sempre imaginei Daniel como um velho de barba. Descobrir que ele era adolescente na Babilônia mudou completamente como eu leio esse livro." },
    { produto: "devocional-do-jovem-cristao", nome: "Beatriz Sampaio", local: "Sobral/CE", nota: 5,
      titulo: "Não trata a gente como criança",
      texto: "Odeio material para jovem que fica forçando gíria. Esse fala direto, explica contexto e ainda diz quando os cristãos discordam. Respeitou minha inteligência." },
    { produto: "devocional-do-jovem-cristao", nome: "Pedro Henrique Braga", local: "Maringá/PR", nota: 4,
      titulo: "Queria que fosse maior",
      texto: "Terminei em dez dias e fiquei querendo mais. A única crítica é essa. Já emendei no plano de 30 dias que vem no final." },
    { produto: "devocional-do-jovem-cristao", nome: "Isabelly Moraes", local: "Petrolina/PE", nota: 5,
      titulo: "Fiz o jejum sem comida",
      texto: "Tenho 16 anos e o material recomenda o jejum de celular para menores de 18. Fiz assim e foi mais difícil do que eu imaginava. Descobri quanto tempo eu perdia." },
    { produto: "devocional-do-jovem-cristao", nome: "Caio Bezerra", local: "Palmas/TO", nota: 5,
      titulo: "Usei no grupo de jovens da igreja",
      texto: "Somos catorze e cada um leu no celular durante a semana. Nos sábados discutíamos as perguntas. Foi o melhor trimestre do nosso grupo." },
    { produto: "devocional-do-jovem-cristao", nome: "Ana Clara Vasconcelos", local: "Volta Redonda/RJ", nota: 5,
      titulo: "O dia da corrida",
      texto: "A parte sobre peso não ser a mesma coisa que pecado me libertou. Cortei duas coisas da minha agenda que não eram erradas, só estavam me atrasando." },
    { produto: "devocional-do-jovem-cristao", nome: "Vitor Hugo Rangel", local: "Chapecó/SC", nota: 4,
      titulo: "O dia 5 exige atenção",
      texto: "A parte sobre leite e alimento sólido é a mais pesada do livro. Precisei ler duas vezes. Mas foi a que mais mudou o jeito como eu vejo conteúdo cristão na internet." },
    { produto: "devocional-do-jovem-cristao", nome: "Larissa Fontenele", local: "Imperatriz/MA", nota: 5,
      titulo: "Josias tinha 18 anos",
      texto: "Eu tenho 19 e sempre achei que precisava esperar amadurecer para servir. O dia 9 acabou com essa desculpa. Comecei a ajudar no ministério infantil no domingo seguinte." },

    /* ---- Combo Família com propósito ---- */
    { produto: "combo-familia-com-proposito", nome: "Família Nunes", local: "Anápolis/GO", nota: 5,
      titulo: "Os três lendo ao mesmo tempo",
      texto: "Eu, minha esposa e nosso filho de 15 começamos no mesmo dia. No domingo à noite cada um conta uma coisa que leu. Virou o melhor momento da semana." },
    { produto: "combo-familia-com-proposito", nome: "Marcos e Adriana Tavares", local: "Bauru/SP", nota: 5,
      titulo: "As três declarações na parede",
      texto: "Colamos as três Declarações no quadro da cozinha. Nossa filha de 17 escreveu coisas que a gente nunca tinha ouvido dela." },
    { produto: "combo-familia-com-proposito", nome: "Elias Guimarães", local: "Montes Claros/MG", nota: 5,
      titulo: "Compensa muito",
      texto: "Comprar os três separados sairia bem mais caro. E o conteúdo conversa entre si sem ser repetido — cada material tem a sua linguagem." },
    { produto: "combo-familia-com-proposito", nome: "Renata e Sérgio Pontes", local: "Cascavel/PR", nota: 4,
      titulo: "Ritmos diferentes",
      texto: "São 15, 21 e 10 dias, então terminamos em semanas distintas. Não atrapalhou, mas quem quiser terminar junto precisa combinar antes." },
    { produto: "combo-familia-com-proposito", nome: "Família Albuquerque", local: "Campina Grande/PB", nota: 5,
      titulo: "Culto doméstico que funcionou",
      texto: "Tentamos culto em família por anos e nunca engatava. Com material separado para cada um, finalmente pegou. Estamos na quinta semana." },
    { produto: "combo-familia-com-proposito", nome: "Daniel Sarmento", local: "Rio Branco/AC", nota: 5,
      titulo: "Imprimimos os três",
      texto: "Gastamos menos que um jantar fora e ficaram ótimos encadernados. Cada um escreve no seu e guardamos na mesma estante." },
    { produto: "combo-familia-com-proposito", nome: "Simone Barros", local: "Feira de Santana/BA", nota: 5,
      titulo: "Meu marido nunca tinha lido nada",
      texto: "Ele não é de ler. Começou pelo dele porque os três estavam lendo, e terminou os 21 dias. Foi o que mais me surpreendeu." },
    { produto: "combo-familia-com-proposito", nome: "Rogério e Karen Lisboa", local: "Piracicaba/SP", nota: 5,
      titulo: "Serve para família grande também",
      texto: "Somos cinco em casa e os dois filhos mais novos dividiram o do jovem. Deu certo. O arquivo é o mesmo, cada um lê no seu celular." },
    { produto: "combo-familia-com-proposito", nome: "Iracema Duarte", local: "Santarém/PA", nota: 4,
      titulo: "Exige combinação prévia",
      texto: "Não é comprar e esperar acontecer. Precisamos marcar horário e proteger esse horário. Depois que estabelecemos, ficou fácil." },
    { produto: "combo-familia-com-proposito", nome: "Família Wagner", local: "Passo Fundo/RS", nota: 5,
      titulo: "Presenteamos duas famílias",
      texto: "Compramos para nós e para dois casais da célula. Todos terminaram. É o presente que mais recomendamos agora." },

    /* ---- Combo Casal ---- */
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
      texto: "Levamos para o encontro de casais da igreja e quatro casais compraram na mesma semana. Está todo mundo fazendo junto agora." },

    /* ---- Combo Mãe e Filho(a) ---- */
    { produto: "combo-mae-e-filho-ungidos", nome: "Márcia e Sofia", local: "Mossoró/RN", nota: 5,
      titulo: "Minha filha de 14 topou",
      texto: "Achei que ela ia enrolar. Começamos juntas numa segunda e ela terminou antes de mim. Agora ela cobra o meu capítulo." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Eliane Prado", local: "Governador Valadares/MG", nota: 5,
      titulo: "Conversas que não aconteciam",
      texto: "Meu filho tem 17 e a gente mal se falava além do básico. As perguntas de reflexão deram assunto de verdade. Hoje é o nosso momento de domingo." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Rosana Figueiredo", local: "Criciúma/SC", nota: 5,
      titulo: "Preço muito justo",
      texto: "Menos de 26 reais pelos dois. Comprei achando que seria material raso e é o contrário — os dois explicam contexto e não prometem milagre." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Cleide Barbosa", local: "Arapiraca/AL", nota: 5,
      titulo: "Sou mãe solo e funcionou",
      texto: "Criei minha filha sozinha e sempre senti falta de algo para fazermos juntas na fé. O dia da Agar, no meu, e o do jovem rico, no dela, caíram na mesma semana." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Silvana e Rafael", local: "São José do Rio Preto/SP", nota: 5,
      titulo: "O jejum de celular pegou ele",
      texto: "Ele tem 15 e fez o jejum sem comida, como o material orienta para menores de 18. Falou depois que foi a manhã mais longa da vida dele." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Neuza Carvalho", local: "Parnaíba/PI", nota: 5,
      titulo: "Meu filho é quem lembra",
      texto: "Eu que ia puxar e acabou sendo o contrário. Ele bate na porta do quarto perguntando se eu já li o meu. Não esperava isso." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Adriana Peixoto", local: "Itabuna/BA", nota: 5,
      titulo: "Levei para o grupo de mães",
      texto: "Somos onze mães no grupo e sete compraram para fazer com os filhos. Estamos trocando as respostas no nosso grupo de mensagens." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Fabiana Rezende", local: "Divinópolis/MG", nota: 4,
      titulo: "Minha filha quis mais desafio",
      texto: "Ela tem 19 e achou o do jovem rápido demais. Terminou e emendou no meu depois. Talvez para mais velhos valha o combo com o masculino." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Lúcia Menezes", local: "Boa Vista/RR", nota: 5,
      titulo: "Imprimi os dois na papelaria",
      texto: "Saiu barato e cada uma tem o seu com anotações à mão. Ela desenha nas margens do dela. Vou guardar para sempre." },
    { produto: "combo-mae-e-filho-ungidos", nome: "Marli e Enzo", local: "Rondonópolis/MT", nota: 5,
      titulo: "Ele nunca tinha lido a Bíblia sozinho",
      texto: "Meu filho tem 13 e sempre dependia da escola bíblica. Com o material na mão, começou a ler por conta. Esse foi o resultado que eu queria." },

    /* ---- Combo Pai e Filho(a) ---- */
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Sérgio e Theo", local: "Ponta Grossa/PR", nota: 5,
      titulo: "Lemos no carro, a caminho da escola",
      texto: "Eu leio o meu de manhã cedo e ele lê o dele no trajeto. Nos vinte minutos de carro a gente conversa. Virou a melhor parte do meu dia." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Cristiano Vale", local: "Porto Velho/RO", nota: 5,
      titulo: "Os temas se encaixam",
      texto: "Enquanto eu estava em provisão e legado, ele estava em renúncia e maturidade. Bateu na mesma semana e deu uma conversa que eu não esperava ter com um garoto de 16." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Aldo Ferreira", local: "Marília/SP", nota: 5,
      titulo: "Minha filha fez comigo",
      texto: "O nome fala em filho ou filha e é verdade — nada no material do jovem é só para menino. Minha filha de 18 fez e adorou o dia da Josias." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Wagner Siqueira", local: "Uberaba/MG", nota: 4,
      titulo: "O meu é mais longo que o dele",
      texto: "São 21 dias contra 10, então ele terminou muito antes. Ele acabou relendo alguns dias enquanto eu fechava o meu. Funcionou, mas avisa antes." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Élio e Gustavo", local: "Garanhuns/PE", nota: 5,
      titulo: "Primeira vez que oramos juntos",
      texto: "Ele tem 15 e a gente nunca tinha orado a dois. No dia do jejum oramos os dois antes do almoço. Não vou esquecer." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Ricardo Antunes", local: "Macapá/AP", nota: 5,
      titulo: "Assinamos os dois pactos",
      texto: "Cada um assinou o seu e trocamos. Ele me cobra o horário de leitura e eu cobro o dele. É a coisa mais séria que já combinamos." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Jorge Medeiros", local: "Santa Maria/RS", nota: 5,
      titulo: "Meu filho falou do dia do João Marcos",
      texto: "Ele tinha largado o time e a escola de música no mesmo mês. Aquele dia mexeu com ele. Voltou para a música na semana seguinte." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Nelson e Iara", local: "Campos dos Goytacazes/RJ", nota: 5,
      titulo: "Serve para pai de filha adolescente",
      texto: "Eu tinha receio de que fosse muito masculino. O material do jovem é neutro e o meu me ajudou a entender como conduzir sem ser duro." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Fernando Quirino", local: "Dourados/MS", nota: 4,
      titulo: "Bom, mas precisa de disciplina",
      texto: "Nas duas primeiras semanas eu falhei mais que ele. Só engatou quando marquei alarme. Sem horário fixo, não funciona." },
    { produto: "combo-pai-e-filho-juntos-na-bencao", nome: "Higor e Léo", local: "Luziânia/GO", nota: 5,
      titulo: "Levamos para o encontro de pais",
      texto: "Apresentamos no ministério de homens da igreja e nove pais compraram. Estamos com um grupo de pais e filhos lendo junto agora." }
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
    ["Os combos vêm com os arquivos separados?",
     "Sim. Cada e-book é um PDF independente, para que cada pessoa da casa leia o seu no próprio ritmo e no próprio dispositivo."],
    ["Preciso imprimir para usar?",
     "Não. O PDF foi montado em A5, formato confortável de ler no celular ou no tablet. Se preferir escrever à mão, ele também imprime bem — várias pessoas mandam encadernar."],
    ["O devocional do jovem serve para menina também?",
     "Serve. O material do jovem é neutro: trata de renúncia, maturidade, perseverança e compromisso, e os combos de mãe e de pai indicam filho ou filha justamente por isso."],
    ["Serve para estudo em grupo?",
     "Serve. As perguntas de reflexão foram escritas pensando em conversa, e vários grupos leem individualmente durante a semana e discutem no encontro."],
    ["O jejum é obrigatório?",
     "Não. É um convite, e é sempre de uma manhã só. Cada material traz um capítulo com o que a Bíblia ensina sobre jejum, orientações de saúde e alternativas para quem não pode jejuar de alimento. No devocional do jovem há orientação específica para menores de 18 anos."],
    ["Tenho um problema com o arquivo. E agora?",
     "Escreva para reflexodafe7@gmail.com contando o que aconteceu. Respondemos em até 1 dia útil."]
  ];

  var ASSUNTOS = [
    "Não recebi o arquivo ou não consigo abrir o PDF",
    "Dúvida sobre o conteúdo de um dos devocionais",
    "Qual combo é o mais indicado para a minha família",
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
