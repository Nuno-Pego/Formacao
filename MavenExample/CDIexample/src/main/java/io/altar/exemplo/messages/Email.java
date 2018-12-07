package io.altar.exemplo.messages;

import javax.enterprise.inject.Default;

@Default
public class Email implements MessageInterface {

	@Override
	public String send() {
		// TODO Auto-generated method stub

		return "Email was sent";

	}

}
