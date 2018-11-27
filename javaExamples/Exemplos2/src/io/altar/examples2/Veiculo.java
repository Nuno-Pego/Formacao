package io.altar.examples2;

public class Veiculo {

	private long id;
	private int rodas = 0;
	private int portas = 0;
	private String marca = "";

	public Veiculo(int rodas, int portas, String marca) {
		this.rodas = rodas;
		this.portas = portas;
		this.marca = marca;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getRodas() {
		return rodas;
	}

	public void setRodas(int rodas) {
		this.rodas = rodas;
	}

	public int getPortas() {
		return portas;
	}

	public void setPortas(int portas) {
		this.portas = portas;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

}
