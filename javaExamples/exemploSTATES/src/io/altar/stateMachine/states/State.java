package io.altar.stateMachine.states;

import io.altar.stateMachine.utils.ScannerUtils;

public interface State {
	
	public static final ScannerUtils scannerUtils = new ScannerUtils();
	public int execute();

}
