describe('enter the value using model',function(){
	
	function calculate(a, b){
	
		browser.sleep(1000);
	    browser.findElement(by.model('first')).sendKeys(a);
	    browser.sleep(1000);
	    
	    clickDropdown();

	    browser.findElement(by.model('second')).sendKeys(b);
	    browser.findElement(by.id('gobutton')).click();
	    
	}
	
	function clickDropdown(){
element(by.model('operator')).element(by.css('option:nth-child(4)')).click();
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
	    
	    
	    calculate(1, 3);
	    calculate(6, 2);
	    calculate(1, 7);
	    calculate(4, 1);
	    calculate(2, 8);
	    calculate(1, 1);
	    calculate(4, 10);
	    getResulst();
	   //each
	    
	    
	   

	})
})