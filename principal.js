const Blockchain = require('./blockchain');

function imprimirCadeia(cadeia) {
    for (const bloco of cadeia) {
        console.log(
            `Índice: ${bloco.indice} | ` +
            `Dados: ${bloco.dados} | ` +
            `Hash: ${bloco.hash.slice(0, 10)}...`
        );
    }
}

const registro = new Blockchain();

registro.adicionar('Entrega E-001 para Ji-Paraná: em rota');
registro.adicionar('Entrega E-002 para Ouro Preto: recebida');
registro.adicionar('Entrega E-003 para Jaru: saiu para entrega');

console.log('Cadeia original:');
imprimirCadeia(registro.cadeia);

console.log('\nA cadeia é válida?', registro.ehValida());

try {
    registro.adicionar('X');
} catch (erro) {
    console.log('\nErro ao cadastrar entrega:', erro.message);
}

registro.cadeia[1].dados = 'Dados da entrega foram alterados';

console.log('\nA cadeia continua válida após a adulteração?', registro.ehValida());