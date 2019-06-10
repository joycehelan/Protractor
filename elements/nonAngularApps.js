describe('non angular apps',function(){

	it('non angular test',function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("https://www.google.com/");
		browser.findElement(by.name('q')).sendKeys("abc");
		browser.sleep(3000);
		
	})
	
})