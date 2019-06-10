describe('enter the value using model',function(){
	
	
	it('Test case performed using model',function(){
		
	    browser.get('http://juliemr.github.io/protractor-demo/');
	    
	    browser.sleep(2000);
	    browser.findElement(by.model('first')).sendKeys('3');
	    browser.sleep(2000);
	    
	    browser.findElement(by.model('second')).sendKeys('3');
	    browser.findElement(by.id('gobutton')).click();

	    //Jasmine assert
	    expect(browser.findElement(by.css("h2[class='ng-binding']")).getText()).toBe('6');
	    
	    
	    browser.findElement(by.model('first')).sendKeys('3');
	    browser.sleep(2000);
	    
	    browser.findElement(by.model('second')).sendKeys('4');
	    browser.findElement(by.id('gobutton')).click();
	    
	    //Jasmine assert
	    expect(browser.findElement(by.css("h2[class='ng-binding']")).getText()).toBe('7');
	    
	    browser.findElement(by.css("h2[class='ng-binding']")).getText().then(function(text) {
		    console.log(text);	    	
	    })
	    
	    browser.findElement(by.repeater('result in memory')).findElement(by.css('td:nth-child(3)')).getText().then(function(name) {
	 
	    console.log(name)
	    })
	    
	   
	    /*element.all(by.repeater('result in memory')).get(1).findElement(by.css('td:nth-child(3)')).getText().then(function(name) {
	    	 
	 	    console.log(name)
	 	    })
	 	    */
	    element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text) {
	 
	    	console.log(text);
	    })
	    
	    element.all(by.repeater('result in memory')).get(1).element(by.css('td:nth-child(3)')).getText().then(function(text) {
	 
	    	console.log(text);
	    })
	 

	})
})