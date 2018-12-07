package io.altar.exemplo.endPoint;



import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import io.altar.exemplo.messages.MessageInterface;

@Path("/messages")
public class messageService {

	
	@Inject
	MessageInterface messageInterface;
	
	@Context
	private UriInfo context;
	
	@GET
	@Path("healthCheck")
	@Produces(MediaType.TEXT_PLAIN)
	public String healthCheck() {
		return "URI" + context.getRequestUri().toString();
	}
	

	@GET
	@Path("message")
	@Produces(MediaType.TEXT_PLAIN)
	public String getMessage() {
		return messageInterface.send();
	}
}
