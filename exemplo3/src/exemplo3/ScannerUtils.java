package exemplo3;

import java.util.Scanner;

public class ScannerUtils {

	private Scanner sc = new Scanner(System.in);

	public int getIntFromScanner(String msg, boolean canBeNull) {
		String input;
		do {
			System.out.println(msg);
			input = sc.nextLine();
			if(canBeNull && input.equals("")){
				return -1;
			}
		} while (!isType(input, "Integer"));
		return Integer.parseInt(input);
	}
	
	public int getIntFromScanner(String msg) {
		return getIntFromScanner(msg,false);
	}

	public int getIntValidFromScanner(String msg, int[] ints) {
		boolean validInt = false;
		int result;
		do {
			result = getIntFromScanner(msg);
			for (int i : ints) {
				if (i == result) {
					validInt = true;
				}
			}
			if(!validInt) {
				String validString="";
				for (int i : ints) {
				validString += " " + i;				
				}
				System.out.println("Numero errado tem de ser " + validString);
			}
		} while (!validInt);
		
		return result;
	}
	
	
	
	public int getIntValidFromScanner(String msg, int max) {
		
		int result;
		do {
			result = getIntFromScanner(msg);
			if(result>max) {
				System.out.println("O numero tem de ser menor que " + max);
			}
		}while(result > max);
		return result;
	
	}



	private boolean isType(String input, String type) {
		switch (type) {
		case "Integer":
			try {
				Integer.parseInt(input);
				return true;
			} catch (NumberFormatException e) {
				System.out.println("Valor erra pff colocar um numero");
				return false;

			}
		case "Float":
			try {
				Float.parseFloat(input);
				return true;
			} catch (NumberFormatException e) {
				System.out.println("Valor erra pff colocar um numero");
				return false;
			}
		default:
			return false;

		}
	}
}
