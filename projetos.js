// =====================================================================
//  CATÁLOGO DE PROJETOS 3D
//  Para adicionar um projeto, copie um bloco { ... } e preencha.
//  - imagem: arquivo dentro da pasta /imagens
//  - drive:  link de compartilhamento do .zip no Google Drive
//            (o arquivo precisa estar como "Qualquer pessoa com o link")
// =====================================================================

const CONFIG = {
  titulo: "Catálogo 3D",
  subtitulo: "Projetos prontos para imprimir — baixe o .zip com os arquivos STL",
  pastaDrive: "https://drive.google.com/drive/folders/1AAW9gjfc9RS7Fg698vvQrz2wvpLvyuAh",
};

const PROJETOS = [
  {
    nome: "Escadinha curva para doces (220 mm, 6 peças)",
    descricao: "Expositor em arco com 6 degraus para fotografar doces, 558 x 260 x 220 mm. Impresso em 6 peças unidas por cavilhas (STL das cavilhas incluso).",
    categoria: "Confeitaria",
    imagem: "imagens/escadinha-curva-220mm.jpg",
    drive: "https://drive.google.com/file/d/1vK4xfreMlfS8BEgM1lZY-CjEo1flbMDt/view?usp=sharing",
    data: "2026-11-15",
  },
  {
    nome: "Escadinha curva para doces (80 mm)",
    descricao: "Versão compacta da escadinha em arco com 6 degraus, 203 x 95 x 80 mm, impressa numa peça só.",
    categoria: "Confeitaria",
    imagem: "imagens/escadinha-curva-80mm.jpg",
    drive: "https://drive.google.com/file/d/1JXIgSrK91c0LdVvWKvqUusPkHWbBgOy5/view?usp=sharing",
    data: "2026-11-15",
  },
  {
    nome: "Chaveiro \"Revelando o Deus do Altar\"",
    descricao: "Chaveiro em formato de gota (42 x 59 mm) com chama e letras encaixadas em 3 cores, tudo nivelado.",
    categoria: "Chaveiros",
    imagem: "imagens/chaveiro-revelando-deus-altar.jpg",
    drive: "https://drive.google.com/file/d/1OYBy1iEn7R-PsW096D7IPAt5oCxRmVIY/view?usp=sharing",
    data: "2026-11-15",
  },
  {
    nome: "Chaveiro UMADEB com tag NFC",
    descricao: "Chaveiro redondo de 36 mm com o logo UMO encaixado em cores e espaço para tag NFC adesiva de 25 mm embutida.",
    categoria: "Chaveiros",
    imagem: "imagens/chaveiro-umo-nfc.jpg",
    drive: "https://drive.google.com/file/d/1r1l7rHLbX4M-Ecw4WuGScbEKEHY_Jom0/view?usp=sharing",
    data: "2026-11-16",
  },
  {
    nome: "Árvore de Natal de rede com balas",
    descricao: "Kit com bandas de rede, molde e forma para modelar com ar quente, estrela de rosca e travinha. A árvore pronta guarda balas dentro.",
    categoria: "Natal",
    imagem: "imagens/arvore-natal-rede.jpg",
    drive: "https://drive.google.com/file/d/1gSr_oCMs4LVNxy86Mvt_X74BOay16KYt/view?usp=sharing",
    data: "2026-11-16",
  },
  {
    nome: "Porta papel-toalha fechado com botão",
    descricao: "Porta-rolo canelado (148 x 247 mm) com fenda lateral para a folha e tampa que trava com ferrolho e mola, aberta pelo botão.",
    categoria: "Casa e Cozinha",
    imagem: "imagens/porta-papel-toalha.jpg",
    drive: "https://drive.google.com/file/d/1T4VQxHeCOlJAX4Wzzj0ZPt0cQSH5DDHi/view?usp=sharing",
    data: "2026-11-16",
  },
  {
    nome: "Clipe porta-caneta com cruz",
    descricao: "Clipe para capa de Bíblia ou caderno com cruz vazada e curva aberta para canetas de 7 a 11 mm. Peça única.",
    categoria: "Papelaria",
    imagem: "imagens/clipe-porta-caneta-cruz.jpg",
    drive: "https://drive.google.com/file/d/1LQB_xlXi9ZyxV9BHFT6e1zJjOJnY9GDg/view?usp=sharing",
    data: "2026-11-16",
  },
  {
    nome: "Porta-lápis pilha de pneus",
    descricao: "Porta-lápis de 76 x 100 mm em forma de 4 pneus empilhados, com blocos nos ombros e sulcos em V. Peça única.",
    categoria: "Escritório",
    imagem: "imagens/porta-lapis-pneus.jpg",
    drive: "https://drive.google.com/file/d/1yedyNhalmTwC_Wp4hl3jC87jXnClT7_9/view?usp=sharing",
    data: "2026-11-16",
  },
];
