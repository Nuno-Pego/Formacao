package exemplo3;

public class Tests {
	ScannerUtils scannerUtils = new ScannerUtils();
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Tests testes = new Tests();
		testes.teste();
	}
	
	private void teste() {
		Product product = createProduct();
		System.out.println(product.toString());
		editProduct(product);
		System.out.println(product.toString());
	}
	
	private Product createProduct() {
		System.out.println("Criar product");
		int[] ivas = new int[] {6,13,23};
		int iva = scannerUtils.getIntValidFromScanner("mete o iva", ivas);		
		int pvp = scannerUtils.getIntFromScanner("mete o pvp");
		int discount = scannerUtils.getIntValidFromScanner("mete o discount",100);
		
		Product product = new Product(iva, pvp, discount);
		return product;
	}
	
	private void editProduct(Product product) {
		System.out.println("Editar product");
		int[] ivas = new int[] {6,13,23};
		int iva = scannerUtils.getIntValidFromScanner("iva antigo " + product.getIva(), ivas);		
		product.setIva(iva);
		int pvp = scannerUtils.getIntFromScanner("pvp antigo "+ product.getPvp(),true);
		if(iva != -1) {
		product.setPvp(pvp);
		}
		int discount = scannerUtils.getIntValidFromScanner("discount antigo " + product.getDiscount(),100);
		product.setDiscount(discount);		
	}
	
}
