package io.altar.stateMachine.states;

public class MenuInicial implements State{

	@Override
	public int execute() {
		// TODO Auto-generated method stub
		System.out.println("1)\t Listar Produtos");
		System.out.println("2)\t Listar Prateleira");
		System.out.println("3)\t Sair");
		
		int[] opcoesValidas = {1,2,3};
		
		return scannerUtils.getValidIntFromScanner("Por favor seleccione uma das anteriores opcoes", opcoesValidas);
	}

}
