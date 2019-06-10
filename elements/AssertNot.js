describe('enter the value using model',function(){
	
	
	it('Test case performed using model',function(){
		
	    browser.get('http://juliemr.github.io/protractor-demo/');
	    
	    browser.sleep(2000);
	    browser.findElement(by.model('first')).sendKeys('3');
	    browser.sleep(2000);
	    
	    browser.findElement(by.model('second')).sendKeys('3');
	    browser.findElement(by.id('gobutton')).click();
	    
	    //Jasmine assert
	    expect(browser.findElement(by.css("h2[class='ng-binding']")).getText()).not.toBe('6');
	    
	    browser.findElement(by.css("h2[class='ng-binding']")).getText().then(function(text) {
		    console.log(text);	    	
	    })

	})
})