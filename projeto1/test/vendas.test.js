//Teste do Framework
//Uso do método expect e o matcher toBe do Jest

const somaCompras = require ('../testes-unitarios/compras.js')
const estoque = require ('../testes-unitarios/estoque.js')
//test() também pode ser encontrada como it()
test('Deve retornar a soma das compras com taxa de entrega.', () => {
    const esperado = 2530;
    const retornado = somaCompras(2500, 30);

    expect(retornado).toBe(esperado)//trabalha fazendo comparações de valores
});
test('Deve retornar a subtração entre o livro de estoque e o livro selecionado', () => {
    const esperado = 280;
    const retornado = estoque(310, 30);

    expect(retornado).toBe(esperado)
})