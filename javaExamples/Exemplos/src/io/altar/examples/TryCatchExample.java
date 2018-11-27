package io.altar.examples;

import java.util.Scanner;

public class TryCatchExample {

	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		getNumber();

	}

	public static void getNumber() {

		System.out.println("Number: ");
		
		try {
			int value = sc.nextInt();
			System.out.println("Value: "+ value);
			clearScanner();
		} catch (Exception e) {			
			// TODO: handle exception
			System.out.println("Erro : " + e);
			clearScanner();
			getNumber();
		}
	}
	
	public static void clearScanner() {
		sc.nextLine();
	}

}

