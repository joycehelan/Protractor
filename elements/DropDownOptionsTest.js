describe('enter the value using model',function(){
	
	function calculate(a, b,option){
	
		browser.sleep(1000);
	    browser.findElement(by.model('first')).sendKeys(a);
	    browser.sleep(1000);
	    
	    clickDropdown(option)

	    browser.findElement(by.model('second')).sendKeys(b);
	    browser.findElement(by.id('gobutton')).click();
	    
	}
	
	function clickDropdown(option){
element.all(by.tagName('option')).each(function(item) {
	    	
	    	item.getAttribute('value').then(function(name) {
	    		if(name==option){
	    			item.click();
	    		}
	    		
	    	})
	    	
	    })
	}
	
	function getResulst(){
		 element.all(by.repeater('result in memory')).each(function(item) {
		    	
		    	item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
		    	
		    		console.log(text);
		    	})
		    	
		    })
	}
	
	it('Test case performed using model',function(){
		
	    browser.get('http://juliemr.github.io/protractor-demo/');
	    
	    
	    calculate(1, 3,"DIVISION");
	    calculate(6, 2,"MULTIPLICATION");
	    calculate(1, 7,"SUBTRACTION");
	    calculate(4, 1,"MODULO");
	    calculate(2, 8,"SUBTRACTION");
	    calculate(1, 1,"ADDITION");
	    calculate(4, 10,"SUBTRACTION");
	    getResulst();
	   //each
	    
	    
	   

	})
})