
function setPositions(container, middleItem, item, numberOfItems){
	//arrange middle item 
	var middleTop = ($(container).height() - $(middleItem).height())/2;
	var middleLeft = ($(container).width() - $(middleItem).width())/2;
	
	$(middleItem).css('top', middleTop + 'px');
	$(middleItem).css('left', middleLeft + 'px');

	//arrange items around middle circle
	var numberOfItems = numberOfItems;
	var startAngle = 0;
	var step = (2*Math.PI)/numberOfItems;

	$(item).each(function(index){
		var radius = ($(container).width() - $(this).width())/2.4;
		var itemTop = (($(container).height()/2) + radius * Math.sin(startAngle)) - ($(this).height()/2); 
		var itemLeft = (($(container).width()/2) + radius * Math.cos(startAngle)) - ($(this).width()/2); 
		startAngle += step;
	
		$(this).css('top', itemTop + 'px');
		$(this).css('left', itemLeft + 'px');		
	});
}	

function setPositionsSmall(container, middleItem, item, numberOfItems){
	//arrange middle item 
	var middleTop = ($(container).height() - $(middleItem).height())/2;
	var middleLeft = ($(container).width() - $(middleItem).width())/2;
	
	$(middleItem).css('top', middleTop + 'px');
	$(middleItem).css('left', middleLeft + 'px');

	//arrange items around middle circle
	var numberOfItems = numberOfItems;
	var startAngle = 0;
	var step = (2*Math.PI)/numberOfItems;

	$(item).each(function(index){
		var radius = ($(container).width() - $(this).width())/4;
		var itemTop = (($(container).height()/2) + radius * Math.sin(startAngle)) - ($(this).height()/2); 
		var itemLeft = (($(container).width()/2) + radius * Math.cos(startAngle)) - ($(this).width()/2); 
		startAngle += step;
	
		$(this).css('top', itemTop + 'px');
		$(this).css('left', itemLeft + 'px');		
	});
}	
function setPositionsBackButton(container, middleItem, item, numberOfItems){
	//arrange middle item 
	var middleTop = ($(container).height() - $(middleItem).height())/2;
	var middleLeft = ($(container).width() - $(middleItem).width())/2;
	
	$(middleItem).css('top', middleTop + 'px');
	$(middleItem).css('left', middleLeft + 'px');

	//arrange items around middle circle
	var numberOfItems = numberOfItems;
	var startAngle = 0;
	var step = (2*Math.PI)/numberOfItems;

	$(item).each(function(index){
		var radius = ($(container).width() - $(this).width())/3;
		var itemTop = (($(container).height()/2) + radius * Math.sin(startAngle)) - ($(this).height()/2); 
		var itemLeft = (($(container).width()/2) + radius * Math.cos(startAngle)) - ($(this).width()/2); 
		startAngle += step;
	
		$(this).css('top', itemTop + 'px');
		$(this).css('left', itemLeft + 'px');		
	});
}	

function setPositionsBack(container, middleItem, item, numberOfItems){
	//arrange middle item 
	var middleTop = ($(container).height() - $(middleItem).height())/2;
	var middleLeft = ($(container).width() - $(middleItem).width())/2;
	
	$(middleItem).css('top', middleTop + 'px');
	$(middleItem).css('left', middleLeft + 'px');

	//arrange items around middle circle
	var numberOfItems = numberOfItems;
	var startAngle = 0;
	var step = (2*Math.PI)/numberOfItems;

	$(item).each(function(index){
		var radius = ($(container).width() - $(this).width())/3.7;
		var itemTop = (($(container).height()/2) + radius * Math.sin(startAngle)) - ($(this).height()/2); 
		var itemLeft = (($(container).width()/2) + radius * Math.cos(startAngle)) - ($(this).width()/2); 
		startAngle += step;
	
		$(this).css('top', itemTop + 'px');
		$(this).css('left', itemLeft + 'px');		
	});
}	
function BackButton( button, arrowPrev, arrowNext, container, subcontainer, item, item1, middleItem, subMiddleItem){
		$(button).parent().hide();
		$(arrowPrev).hide();
		$(arrowNext).hide();
		$(container).show().css({"background": "none","marginLeft": "55%", "marginTop": "-30%", "width": "45%", "height": "370px", 
		"opacity": "0.6"});
		$(item).width(110).height(110);
		$(item).css({"font-size": "1.3em", "line-height": "5em", "disabled": "disabled"});
		$(middleItem).hide(); 
		setPositionsSmall(container, middleItem, item, 6 );
		$(subcontainer).show().css({"marginLeft": "12%", "marginTop": "-30%","width": "50%", "height": "482px"});	
		$(item1).css({"font-size": "1.7em"});
		$(subMiddleItem).css({"font-size": "1.7em"});
		setPositions(subcontainer, subMiddleItem, item1, 6 );
	
}
function BackCircle( subcontainer, container, item, middleItem){
		$(subcontainer).hide();	
		$(container).show().css({"background": "none", "margin": "0 auto", "marginLeft":"12%", "marginTop":"-15%",
	 						 "width": "70%", "height": "auto", "opacity": "1"});
		$(item).width(180).height(180);
		$(item).css({"font-size": "2em", "line-height": "6em"});
		$(middleItem).show().css({"font-size": "2em","marginTop": "4%", "marginLeft":"4%"});
		setPositionsSmall(container, middleItem, item, 6 );
}