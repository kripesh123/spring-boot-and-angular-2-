package com.kripesh.ng2boot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ims")
public class DefaultController {
	
	@RequestMapping(method= RequestMethod.GET)
	public String getContent(){
		return "hello from backend";
	}

}
