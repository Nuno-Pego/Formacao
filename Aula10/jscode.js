

/**
 * @param {object} combustivel
 * @param {string} cor
 * @param {number} numeroRodas
 */




class Veiculo {
    constructor(combustivel, cor, numeroRodas = 2) {
        this.combustivel = combustivel;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        this.contaQuilometros = 0;
    }

    andar(distancia = 1) {
        this.contaQuilometros += distancia;
        return "andou " + distancia +"km";
    }
}

// var v1 = new Veiculo("gasoleo", "red", 4);
// v1.andar(10);
// console.log("v1 contaQuilometros:", v1.contaQuilometros);

/**
 * @param {object} combustivel
 * @param {string} cor
 * @param {number} numeroAssentos
 * @param {number} numeroPortas 
 */

class Automovel extends Veiculo {

    constructor(combustivel, cor, numeroAssentos, numeroPortas) {
        super(combustivel, cor, 4);
        this.numeroAssentos = numeroAssentos;
        this.numeroPortas = numeroPortas;
        this.numeroVolantes = 1;
        this.litrosDeposito = 10;
    }

    porCombustivel(litros) {
        this.litrosDeposito += litros;
    }
    tirarCombustivel(litros) {
        this.litrosDeposito -= litros;
    }
    andar(distancia=1){
        super.andar(distancia);
        this.litrosDeposito-=distancia;
        return "Consumiu "+distancia+"L"
    }

}

var auto1 = new Automovel("gasolina95", "preto", 2, 4);





