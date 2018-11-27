package io.altar.examples2;

public class Mota extends Veiculo {

	private int mudanças;
	private int cc;

	public Mota(int rodas, int portas, String marca, int mudanças, int cc) {
		super(rodas, portas, marca);
		this.mudanças = mudanças;
		this.cc = cc;
	}

	public int getMudanças() {
		return mudanças;
	}

	public void setMudanças(int mudanças) {
		this.mudanças = mudanças;
	}

	public int getCc() {
		return cc;
	}

	public void setCc(int cc) {
		this.cc = cc;
	}

}
