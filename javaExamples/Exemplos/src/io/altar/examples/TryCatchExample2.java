package io.altar.examples;

public class TryCatchExample2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {

			switch (args[0]) {
			case "DEV":
				runDEV();
				break;

			case "TEST":
				runTEST();
				break;

			case "PROD":
				runPROD();
				break;

			default:
				System.out.println("Erro : 'DEV' 'PROD' 'TEST'");
				break;
			}

		} catch (Exception e) {
			// TODO: handle exception
			runTEST();
		}

	}

	public static void runDEV() {
		System.out.println("Config DEV");
	}

	public static void runTEST() {
		System.out.println("Config TEST");
	}

	public static void runPROD() {
		System.out.println("Config PROD");
	}

}
