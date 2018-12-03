package jaxrs;


import java.util.HashMap;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

@Path("/exemplos")
public class EndPoint {


HashMap<Integer,Carro> stand= new HashMap<Integer,Carro>();
	
//	@Context
//	private UriInfo context;
//	@GET
//	@Path("healthCheck")
//	@Produces(MediaType.TEXT_PLAIN)
//	public String healthCheck() {
//	    return "URI " + context.getRequestUri().toString() + " is OK!";	
//	}	
//	
	
	@POST   
	@Produces(MediaType.APPLICATION_JSON)
	public String addMessage(){		
		
		return "POST WORKED!";
	}
	
	@GET
    @Path("/{car}")
	@Produces(MediaType.APPLICATION_JSON)
	public Carro addCarro(Carro carro){		
		stand.put(0,carro);
		return carro;
	}
	
}
