const infoRoblox = `
  <h2>O que é o Roblox?</h2>
  <p>O Roblox é uma plataforma de jogos online e um sistema de criação de jogos que permite aos usuários programar e jogar jogos criados por outros usuários. Fundada por David Baszucki e Erik Cassel em 2004 e lançada em 2006, a plataforma hospeda jogos gerados por usuários e mundos virtuais construídos em uma variedade de gêneros, como corridas, RPGs, simulações e percursos de obstáculos.</p>
  <p>Roblox é gratuito para jogar, com compras no jogo disponíveis através de uma moeda virtual chamada "Robux". A plataforma tem uma base de usuários massiva e uma comunidade ativa de desenvolvedores que criam e compartilham suas experiências.</p>
`;

const infoStudio = `
  <h2>Roblox Studio e Luau</h2>
  <p>O Roblox Studio é a ferramenta de criação de jogos proprietária do Roblox, que permite aos usuários criar seus próprios jogos e experiências na plataforma. O Studio fornece uma interface de arrastar e soltar e um conjunto de ferramentas para construir mundos 3D, programar comportamentos de jogo e criar interfaces de usuário.</p>
  <p>Para programar no Roblox Studio, os desenvolvedores usam uma linguagem de script chamada Luau, que é uma versão modificada e otimizada da linguagem Lua 5.1. Luau é projetado para ser leve, rápido e fácil de aprender, permitindo que os criadores deem vida às suas ideias com códigos eficientes e seguros.</p>
`;

const infoLua = `
  <h2>A Linguagem de Programação Lua</h2>
  <p>Lua é uma linguagem de script poderosa, eficiente e leve, projetada para estender aplicações. Ela foi desenvolvida no Brasil em 1993 por uma equipe da PUC-Rio (Pontifícia Universidade Católica do Rio de Janeiro), liderada por Roberto Ierusalimschy, Waldemar Celes e Luiz Henrique de Figueiredo.</p>
  <p>Lua se destaca por sua simplicidade, portabilidade e facilidade de integração com outras linguagens, especialmente C e C++. Devido a essas características, ela se tornou extremamente popular na indústria de videogames, sendo usada em grandes títulos como World of Warcraft, Angry Birds e, claro, Roblox (através de sua variante Luau).</p>
`;

const container = document.getElementById('info-container');
const btnRoblox = document.getElementById('btn-roblox');
const btnStudio = document.getElementById('btn-studio');
const btnLua = document.getElementById('btn-lua');

// Função para exibir as informações
function exibirInfo(conteudo) {
  container.innerHTML = conteudo;
}

// Carregar informações iniciais (Sobre o Roblox)
exibirInfo(infoRoblox);

// Adicionar eventos de clique aos botões
btnRoblox.addEventListener('click', () => exibirInfo(infoRoblox));
btnStudio.addEventListener('click', () => exibirInfo(infoStudio));
btnLua.addEventListener('click', () => exibirInfo(infoLua));
