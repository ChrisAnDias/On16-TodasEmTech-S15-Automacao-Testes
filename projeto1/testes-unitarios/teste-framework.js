const somaCompras = (livroSelecionado, taxaEntrega) => {
  return livroSelecionado + taxaEntrega;
};

const estoque = (livroEstoque, livroSelecionado) => {
  return livroEstoque - livroSelecionado;
};


const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(` ${titulo} deu certo :)`);
  } else {
    console.log(` ${titulo} deu ruim :(`);
  }
};

teste("somaCompras", 10, somaCompras(5, 5));
teste("estoque", 30, estoque(50, 20));

// let esperado = 55;
// let retorno = somaCompras(50, 5);

// if (esperado === retorno) {
//   console.log(`O teste deu certo :)`);
// } else {
//   console.error(`O teste deu ruim :(`);
// }

// esperado = 5;
// retorno = estoque(10, 5);
// if (esperado === retorno) {
//   console.log(`O teste deu certo :)`);
// } else {
//   console.error(`O teste deu ruim :(`);
// }