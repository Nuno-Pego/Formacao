import io.altar.examples2.Automovel;
import io.altar.examples2.Mota;
import repositorio.AutomovelRepository;
import repositorio.MotaRepository;

public class Test {

	private static MotaRepository repositorioMotas = new MotaRepository();
	private static AutomovelRepository repositorioAutomvel = new AutomovelRepository();
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		run();
	}

	public static void run() {
		Mota mota1 = new Mota(2, 0, "Piaggio", 5, 250);
		repositorioMotas.save(mota1);		
		System.out.println(repositorioMotas.findById((long) 0).getMarca());
		
		Automovel auto=new Automovel(4,2,"Ferrari","RadioTech",10);
		repositorioAutomvel.save(auto);		
		String marca=repositorioAutomvel.findById((long)0).getMarca();
		System.out.println(marca);
		
		Object[] list =repositorioAutomvel.getAll().toArray();
		
		for(int i=0;i<list.length;i++)
			System.out.println(((Automovel)list[i]).getMarca());
		
	}

}
