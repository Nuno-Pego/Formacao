package io.altar.examples;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ListExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		List<String> listStrings = new ArrayList<>();

		listStrings.add("Ze Carlos");
		listStrings.add("Ze Manel");
//		System.out.println(listStrings);

		Iterator<String> it = listStrings.iterator();

		while (it.hasNext()) {
			String element = it.next();
			System.out.println(element);
		}

	}

}
