describe('enter the value using model',function(){
	
	function add(a, b){
	
		browser.sleep(1000);
	    browser.findElement(by.model('first')).sendKeys(a);
	    browser.sleep(1000);
	    
	    browser.findElement(by.model('second')).sendKeys(b);
	    browser.findElement(by.id('gobutton')).click();
	}
	
	it('Test case performed using model',function(){
		
	    browser.get('http://juliemr.github.io/protractor-demo/');
	    
	    add(1, 1);
	    add(1, 3);
	    add(4, 1);
	    add(6, 2);
	    add(1, 7);
	    add(2, 8);
	    add(4, 10);
	    
	   //each
	    element.all(by.repeater('result in memory')).each(function(item) {
	    	
	    	item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
	    	
	    		console.log(text);
	    	})
	    	
	    })

	})
})