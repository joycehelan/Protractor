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
	    

	    browser.findElement(by.model('first')).sendKeys('10');
	    browser.sleep(2000);
	    
	    browser.findElement(by.model('second')).sendKeys('40');
	    browser.findElement(by.id('gobutton')).click();
	    

	    browser.findElement(by.model('first')).sendKeys('30');
	    browser.sleep(2000);
	    
	    browser.findElement(by.model('second')).sendKeys('40');
	    browser.findElement(by.id('gobutton')).click();
	    
	    
	    browser.findElement(by.css("h2[class='ng-binding']")).getText().then(function(text) {
		    console.log(text);	    	
	    })
	    
	   //each
	    element.all(by.repeater('result in memory')).each(function(item) {
	    	
	    	item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
	    	
	    		console.log(text);
	    	})
	    	
	    })

	})
})