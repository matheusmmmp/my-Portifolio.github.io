// Texto em português (servido em "/pt/"). Fonte: Planner, "15 Reestruturação do portfólio",
// 03_conteudo_site_en_pt.md e 04_cases_tecnicos.md; experiência a partir do currículo PT v5.
// Pesquisa em andamento aparece só por método e escala (D-36).
import {
  healthClassification,
  movieRecommendation,
  graphPage,
} from '../assets';
import { links } from './links';
import resumePdf from '../assets/Matheus_de_Medeiros_Pereira_-_Cientista_de_Dados.pdf';

const content = {
  lang: 'pt',
  htmlLang: 'pt-BR',
  path: '/pt/',
  meta: {
    title: 'Matheus Pereira · Cientista de Dados (Machine Learning, NLP, Previsão)',
    description:
      'Cientista de Dados com dois anos de modelos de NLP em produção e pesquisa em previsão de séries temporais e experimentos de simulação. Florianópolis.',
  },
  resumePdf,
  ui: {
    resume: 'Currículo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    language: 'Idioma',
    skip: 'Pular para o conteúdo',
    home: 'Matheus Pereira, voltar ao topo',
    scrollHint: 'Rolar até a apresentação',
    newTab: '(abre em nova aba)',
  },
  nav: [
    { id: 'about', title: 'Sobre' },
    { id: 'projects', title: 'Projetos' },
    { id: 'work', title: 'Experiência' },
    { id: 'education', title: 'Formação' },
    { id: 'contact', title: 'Contato' },
  ],
  hero: {
    greeting: 'Olá, sou',
    role: 'Cientista de Dados',
    focus: 'Machine Learning · NLP · Séries temporais',
    lead: 'Passei dois anos treinando, validando e publicando classificadores de documentos jurídicos para dezenas de clientes, um modelo para cada.',
    meta: 'Florianópolis, Brasil · Aberto a vagas de cientista de dados, remotas ou híbridas',
    resumeButton: 'Meu currículo',
    emailButton: 'Enviar e-mail',
    stepsTitle: 'Modelos em produção',
    stepsAria: 'Como operei modelos em produção',
    context: 'Fácil · legal-tech · 2024–2026',
    readMore: 'Ver a experiência completa ↓',
    steps: [
      { label: 'Treinar', title: 'Um modelo por cliente', detail: 'classificadores de documentos jurídicos' },
      { label: 'Validar', title: 'Candidato contra o modelo em produção', detail: 'Top-1/Top-3 · precision · recall · F1' },
      { label: 'Publicar', title: 'Homologação com o cliente, registrada no ClearML', detail: 'execuções comparadas · artefatos versionados · relatório de entrega' },
    ],
  },
  about: {
    sub: 'Apresentação',
    title: 'Sobre.',
    text: 'Cientista de Dados com dois anos operando modelos de NLP em produção no setor jurídico, da validação à resposta a incidentes, para dezenas de clientes. Em paralelo, estudo como avaliar modelos com rigor: no mestrado na UFSC comparo sete modelos de previsão sob um protocolo temporal reproduzível e, num projeto independente, conduzo experimentos de simulação pré-registrados com agentes adaptativos. Antes da ciência de dados, um ano em análise e engenharia de dados no setor público e três anos em desenvolvimento de software.',
    pillars: [
      {
        icon: 'production',
        title: 'Machine Learning e NLP em produção',
        text: 'Classificadores de texto treinados, validados contra o modelo em produção e publicados para dezenas de clientes, com experimentos registrados no ClearML e rollback no mesmo dia quando uma versão falhou.',
        link: { label: 'Ver experiência', href: '#work' },
      },
      {
        icon: 'forecast',
        title: 'Modelagem estatística e previsão',
        text: 'Sete modelos de previsão sob um único protocolo de validação temporal, testes pareados de Diebold–Mariano com correção de Holm e um modelo de contagem binomial negativa implementado do zero.',
        link: { label: 'Ver o projeto de previsão', href: '#project-forecast' },
      },
      {
        icon: 'experiment',
        title: 'IA experimental',
        text: 'Experimentos de simulação com agentes adaptativos: desenho e regra de leitura escritos antes da execução, vidas pareadas com sementes compartilhadas e cada número oficial recalculado e conferido no CI.',
        link: { label: 'Ver o DigiLab', href: '#project-digilab' },
      },
    ],
  },
  projects: {
    sub: 'Pesquisa e projetos',
    title: 'Pesquisa e projetos em destaque.',
    intro: 'Duas pesquisas em andamento. Os resultados ficam em cada site científico até o trabalho terminar.',
    labels: { cases: 'Estudos de caso', read: 'Ler o estudo', explore: 'Explore o projeto' },
    main: [
      {
        id: 'forecast',
        label: 'Mestrado · UFSC · em andamento',
        badges: ['Machine Learning', 'Séries temporais', 'Pesquisa'],
        title: 'Previsão de internações respiratórias',
        subtitle: 'Previsão de internações respiratórias com Machine Learning e análise de séries temporais',
        visual: {
          kind: 'forecast',
          top: 'Internações diárias · São Paulo',
          right: '4 janelas de teste',
          alt: 'Média semanal das internações respiratórias diárias de residentes de São Paulo, de 2019 a 2024, com as quatro janelas de teste de 180 dias de 2023 e 2024 sombreadas. Só dado e desenho da avaliação, nenhuma saída de modelo.',
        },
        text: 'Estudo comparativo de sete modelos para prever a demanda diária por internações respiratórias em São Paulo, em horizontes de 1 a 30 dias. Combina validação temporal, testes estatísticos e dados ambientais, com uma aplicação interativa e uma API de demonstração.',
        stats: [
          { value: '7', label: 'Modelos' },
          { value: '5', label: 'Horizontes' },
          { value: '2019–24', label: 'Período' },
        ],
        stackLine: ['Python', 'XGBoost', 'LSTM', 'SARIMAX', 'INGARCH', 'FastAPI', 'Streamlit', 'Docker'],
        textLinks: [
          { icon: 'study', label: 'Estudo completo', text: 'Métodos, protocolo e resultados provisórios no site científico.', href: links.forecastSitePt },
          { icon: 'demo', label: 'Demo interativa', text: 'Painel em Streamlit com a série, o protocolo e diagnósticos.', href: links.forecastApp },
          { icon: 'code', label: 'Código-fonte', text: 'Pipeline, testes, CI e Docker no GitHub.', href: links.forecastRepo },
        ],
      },
      {
        id: 'digilab',
        label: 'Pesquisa independente · em andamento',
        title: 'DigiLab',
        subtitle: 'IA experimental · Vida artificial',
        visual: {
          kind: 'digilab',
          top: 'Vidas simuladas pareadas',
          right: '4 braços · 1 semente',
          seed: 'Semente',
          day1: 'Dia 1',
          day14: 'Dia 14',
          alt: 'Desenho do experimento: uma semente aleatória compartilhada por quatro braços, de A a D, cada um uma vida simulada de 14 dias. Nenhum resultado aparece.',
        },
        text: 'Um animal simulado, com um corpo que precisa de cuidado e um sistema de decisão que aprende, usado como laboratório. Cada experimento é planejado antes de rodar e compara vidas pareadas.',
        stats: [
          { value: '10.080', label: 'vidas simuladas' },
          { value: '2', label: 'estudos públicos' },
          { value: '14 dias', label: 'por vida' },
        ],
        tags: ['Python', 'SciPy', 'DuckDB', 'Desenho experimental', 'Simulação com agentes'],
        cta: { label: 'Ver a pesquisa', href: links.digilabSite },
        cases: [
          { icon: 'arms', title: 'Efeito no corpo ou crédito de recompensa?', text: 'Experimento pré-registrado de quatro braços com 9.600 vidas pareadas.', href: links.digilabStudy1Pt },
          { icon: 'screen', title: 'Triagem antes da execução completa', text: 'Triagem planejada de 480 vidas para decidir o próximo experimento.', href: links.digilabStudy2Pt },
        ],
        links: [
          { label: 'Código-fonte', href: links.digilabRepo, github: true },
          { label: 'Dataset', href: links.digilabDataset },
        ],
      },
    ],
    earlierTitle: 'Projetos de estudo anteriores',
    earlier: [
      {
        title: 'Classificação em saúde',
        year: '2023',
        text: 'Classificação de câncer com dados de alta dimensão em Scikit-learn.',
        image: healthClassification,
        href: 'https://github.com/matheusmmmp/SKLearn-HealthDataset',
      },
      {
        title: 'Recomendação de filmes',
        year: '2022',
        text: 'Recomendador ALS com PySpark MLlib.',
        image: movieRecommendation,
        href: 'https://github.com/matheusmmmp/MLlib-movieRecommendation',
      },
      {
        title: 'Análise de PageRank',
        year: '2022',
        text: 'Ranqueamento em grafos com PySpark.',
        image: graphPage,
        href: 'https://github.com/matheusmmmp/MLlib-graphPageRank',
      },
    ],
    githubLabel: 'GitHub',
  },
  tech: {
    sub: 'Competências',
    title: 'Tecnologias.',
  },
  experience: {
    sub: 'O que já fiz',
    title: 'Experiência.',
    resumeButton: 'Meu currículo',
    items: [
      {
        title: 'Cientista de Dados Pleno',
        company: 'Fácil · Espaider, software para o setor jurídico',
        date: '07/2024 – 07/2026',
        points: [
          'Desenvolvi modelos de classificação multiclasse de textos jurídicos (Scikit-learn, TensorFlow/Keras) para dezenas de clientes, cada um com modelo próprio.',
          'Validei cada candidato contra o modelo em produção (Top-1/Top-3, precision, recall, F1, análise de erros) e apoiei a homologação junto a clientes e desenvolvimento.',
          'Estruturei o fluxo de experimentos da equipe com ClearML: registro e comparação de execuções, versionamento de artefatos e relatório de entrega por versão do cliente.',
          'Liderei a resposta a um incidente em produção: rollback no mesmo dia e correção da causa raiz, uma divergência de pré-processamento entre treino e serving.',
          'Avaliei BERT e Legal-BERT (Hugging Face) na base da empresa; não superaram o TF-IDF em produção, que foi mantido.',
        ],
      },
      {
        title: 'Cientista de Dados Júnior',
        company: 'Controladoria-Geral do Estado de SC · CGE-SC',
        date: '11/2023 – 08/2024',
        points: [
          'Automatizei em Python a ingestão de prestações de contas (dumps PostgreSQL, checagens de consistência, carga em Data Warehouse), com monitoramento e alertas por e-mail.',
          'Construí pipelines de integração de dados com Spark e SQL e análises de grafos de relacionamento entre empresas em Neo4j.',
          'Entreguei dashboards em Power BI, Tableau e OBIEE para acompanhamento de indicadores de controle interno.',
        ],
      },
      {
        title: 'Analista de Dados',
        company: 'Capital Trade, Itajaí',
        date: '09/2023 – 11/2023',
        points: ['Análises estatísticas para previsão e segmentação (Python, R, SQL, Power BI, Tableau).'],
      },
      {
        title: 'Desenvolvedor Web',
        company: 'Modallport Sistemas, Itajaí',
        date: '06/2020 – 09/2023',
        points: [
          'Desenvolvi e mantive sistemas de gestão portuária em produção (ASP.NET Core, C#, MySQL, Azure AD), do levantamento de requisitos à prototipação.',
        ],
      },
    ],
  },
  education: {
    sub: 'Minha formação',
    title: 'Formação.',
    intro: 'Bacharelado em Ciência da Computação, pós-graduação em Ciência de Dados e mestrado em Ciência da Computação em andamento na UFSC.',
    degrees: [
      { name: 'Mestrado em Ciência da Computação', description: 'UFSC · em andamento, defesa prevista para mar/2027', date: '2024 – 2027' },
      { name: 'Pós-graduação em Ciência de Dados', description: 'IGTI', date: '2021 – 2022' },
      { name: 'Bacharelado em Ciência da Computação', description: 'UNIVALI', date: '2016 – 2021' },
    ],
    outputsTitle: 'Produção de pesquisa',
    outputs: [
      [{ t: 'Dissertação de mestrado em Ciência da Computação, UFSC — em andamento, defesa prevista para março de 2027' }],
      [
        { t: 'Software: ' },
        { t: 'sp-respiratory-admissions-forecast v0.1.1', href: links.forecastRepo },
        { t: ' — DOI ' },
        { t: '10.5281/zenodo.24567671', href: links.forecastDoi },
      ],
      [
        { t: 'Sites científicos públicos: ' },
        { t: 'estudo de previsão', href: links.forecastSitePt },
        { t: '; ' },
        { t: 'cases do DigiLab', href: links.digilabSite },
      ],
      [{ t: 'Dataset público: ' }, { t: 'cases do DigiLab (Hugging Face)', href: links.digilabDataset }],
    ],
    coursesTitle: 'Cursos',
    courses: [
      { name: 'AWS Cloud Practitioner Essentials', description: 'Amazon Web Services · curso', date: '2021' },
      { name: 'Google Cloud Computing Foundations', description: 'Google Cloud · curso', date: '2022' },
    ],
    other: 'Também: Bootcamps de Cientista de Dados e de Arquiteto de Big Data, IGTI (2022)',
  },
  contact: {
    sub: 'Fale comigo',
    title: 'Contato.',
    text: 'Aberto a vagas de cientista de dados, remotas ou híbridas a partir de Florianópolis. O jeito mais rápido de falar comigo é por e-mail.',
    cards: { email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', resume: 'Currículo' },
  },
  footer: {
    copyright: '© 2026 Matheus de Medeiros Pereira',
    creditBefore: 'Feito sobre o ',
    creditLink: 'Portfolio Template',
    creditAfter: ' de Shaquille Ndunda (código aberto, MIT)',
    otherLanguage: { label: 'English', href: '/', hrefLang: 'en' },
  },
};

export default content;
