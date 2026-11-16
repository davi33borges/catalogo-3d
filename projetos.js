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
  pastaDrive: "", // opcional: link da pasta inteira no Drive
};

const PROJETOS = [
  {
    nome: "Projeto de exemplo 1",
    descricao: "Substitua pelo seu primeiro projeto.",
    categoria: "Decoração",
    imagem: "imagens/exemplo-1.jpg",
    drive: "https://drive.google.com/file/d/COLE_O_ID_AQUI/view?usp=sharing",
    data: "2026-11-16",
  },
  {
    nome: "Projeto de exemplo 2",
    descricao: "Substitua pelo seu segundo projeto.",
    categoria: "Utilidades",
    imagem: "imagens/exemplo-2.jpg",
    drive: "https://drive.google.com/file/d/COLE_O_ID_AQUI/view?usp=sharing",
    data: "2026-11-16",
  },
];
