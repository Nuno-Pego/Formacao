package io.altar.stateMachine.states;

public class MenuListarProdutos implements State {

	@Override
	public int execute() {
		// TODO Auto-generated method stub

		System.out.println("1)\t Criar novo produto");
		System.out.println("2)\t Editar um produto existente");
		System.out.println("3)\t Consultar os detalhes do produto");
		System.out.println("4)\t Remover produto");
		System.out.println("5)\t Voltar ao ecra anterior");

		int[] opcoesValidas = { 1, 2, 3, 4, 5 };

		return scannerUtils.getValidIntFromScanner("Por favor seleccione uma das anteriores opcoes", opcoesValidas);

	}

}
