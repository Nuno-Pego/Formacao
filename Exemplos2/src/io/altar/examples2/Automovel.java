package io.altar.examples2;

public class Automovel extends Veiculo {

	private String antena = "";
	private int litrosBagageira = 0;

	public Automovel(int rodas, int portas, String marca, String antena, int litrosBagageira) {
		super(rodas, portas, marca);
		this.antena = antena;
		this.litrosBagageira = litrosBagageira;
	}

	public String getAntena() {
		return antena;
	}

	public void setAntena(String antena) {
		this.antena = antena;
	}

	public int getLitrosBagageira() {
		return litrosBagageira;
	}

	public void setLitrosBagageira(int litrosBagageira) {
		this.litrosBagageira = litrosBagageira;
	}

}
