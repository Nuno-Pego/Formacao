package io.altar.stateMachine;

import io.altar.stateMachine.states.*;

public class FSM {

	private State[] states = { new MenuInicial(), new MenuListarProdutos(), new MenuListarPrateleiras() };

	private int transitionMatrix[][] = { { 1, 2 }, { 0, 1, 1, 1, 0 }, { 0, 2, 2, 2, 0 } };

	private int currentState = 0;

	public static void main(String[] args) {
		FSM fsm = new FSM();
		int opcao = 0;

		while (true) {
			opcao = fsm.states[fsm.currentState].execute();
			if (fsm.currentState == 0 && opcao == 3) {
				break;
			}
			fsm.currentState = fsm.transitionMatrix[fsm.currentState][opcao - 1];
		}

	}

}
