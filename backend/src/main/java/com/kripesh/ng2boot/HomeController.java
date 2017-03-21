package com.kripesh.ng2boot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/homes")
public class HomeController {

	@RequestMapping(method= RequestMethod.GET)
	public String getContent2(){
		return "This is Home";
	}

}
