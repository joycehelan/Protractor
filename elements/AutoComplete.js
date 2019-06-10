describe('Actions with demo site',function(){

	
	it('Action tab click', function() {
		
		browser.get("https://material.angularjs.org/latest/")
		element(by.xpath(".//div[contains(text(),'Demos')]")).click();
		browser.sleep(2000);
		var auo=element(by.xpath(".//a[contains(text(),'Autocomplete')]"));
		auo.click();
		browser.sleep(2000);
		//browser.actions().MOUSEMOVE;
		
		
	
		var input=browser.element.all(by.xpath(".//input[contains(@id,'input')]")).get(0);
		browser.sleep(2000);
		//input.sendKeys("abc")
		browser.actions().mouseMove(input).click(input).sendKeys("a").perform();
		browser.sleep(5000);


		element.all(by.css("md-autocomplete-parent-scope.ng-scope>span>span")).count().then(function(list) {
			
			console.log(list);
			
		})
		
		
		for (var i=0;i<4;i++){
			element.all(by.css("md-autocomplete-parent-scope.ng-scope>span>span")).get(i).getText().then(function(list) {
				
				console.log(list);
				
			})
		}
		
		for (var i=0;i<4;i++){
			element.all(by.css("md-autocomplete-parent-scope.ng-scope>span")).get(i).getText().then(function(list) {
				
				console.log(list);
				
			})
		}
		
		/*browser.element.all(by.css("md-autocomplete-parent-scope.ng-scope>span>span")).each(function(ele) {
			console.log("total element is"+ele.count());
			for (var i=0;i<ele.count();i++){
			var t=ele.get(i).getText();
			console.log(t);
			}
		})*/
		
	})
})
