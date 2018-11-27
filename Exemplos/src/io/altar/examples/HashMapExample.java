package io.altar.examples;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class HashMapExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Map<String, String> stringMap = new HashMap<String, String>();
		stringMap.put("1", "Ze Carlos");
		stringMap.put("2", "Ze Manel");
		
		Iterator<String> stringIterator = stringMap.values().iterator();
		while(stringIterator.hasNext()) {
			System.out.println("String value :" + stringIterator.next());
		}
		
		Iterator<String> stringKeyIterator = stringMap.keySet().iterator();
		while(stringKeyIterator.hasNext()) {
			System.out.println("String value :" + stringKeyIterator.next());
		}
	}

}
