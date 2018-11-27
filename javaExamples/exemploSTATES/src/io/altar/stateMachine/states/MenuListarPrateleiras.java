package io.altar.stateMachine.states;

public class MenuListarPrateleiras implements State {

	@Override
	public int execute() {
		// TODO Auto-generated method stub

		System.out.println("1)\t Criar nova prateleira");
		System.out.println("2)\t Editar uma prateleira existente");
		System.out.println("3)\t Consultar os detalhes da prateleira");
		System.out.println("4)\t Remover prateleira");
		System.out.println("5)\t Voltar ao ecra anterior");

		int[] opcoesValidas = { 1, 2, 3, 4, 5 };

		return scannerUtils.getValidIntFromScanner("Por favor seleccione uma das anteriores opcoes", opcoesValidas);

	}

}
