//sub-container 1 - click events - show sliders
	$('#subContainer1 #sub-item1').click(function(){
		$('.back').show();
		$('.exit').show();
		$('#container').hide();
		$('#subContainer1').hide();
		$('#wrapper').css({"display": "block"});
		$('#subContainer1-subItem1-slider').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer1-subItem1-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});		
	$('#subContainer1 #sub-item2').click(function(){
		$('.back').show();
		$('.exit').show();
		$('#container').hide();
		$('#subContainer1').hide();
		$('#wrapper2').css({"display": "block"});
		$('#subContainer1-subItem2-slider').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer1-subItem2-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer1 #sub-item3').click(function(){
		$('.back').show();
		$('.exit').show();
		$('#container').hide();
		$('#subContainer1').hide();
		$('#wrapper3').css({"display": "block"});
		$('#subContainer1-subItem3-slider').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer1-subItem3-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer1 #sub-item4').click(function(){
		$('.back').show();
		$('.exit').show();
		$('#container').hide();
		$('#subContainer1').hide();
		$('#wrapper4').css({"display": "block"});
		$('#subContainer1-subItem4-slider').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer1-subItem4-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
		
	});	
	$('#subContainer1 #sub-item5').click(function(){
		$('.back').show();
		$('.exit').show();
		$('#container').hide();
		$('#subContainer1').hide();
		$('#wrapper5').css({"display": "block"});
		$('#subContainer1-subItem5-slider').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer1-subItem5-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	$('#subContainer1 #sub-item6').click(function(){
		$('.back').show();
		$('.exit').show();
		$('#container').hide();
		$('#subContainer1').hide();
		$('#wrapper6').css({"display": "block"});
		$('#subContainer1-subItem6-slider').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer1-subItem6-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	
	//sub-container 2 - click events - show sliders
	$('#subContainer2 #sub-item1').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer2').hide();
		$('#subContainer2-wrapper1').css({"display": "block"});		
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer2-subItem1-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});		
	$('#subContainer2 #sub-item2').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer2').hide();
		$('#subContainer2-wrapper2').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer2-subItem2-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer2 #sub-item3').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer2').hide();
		$('#subContainer2-wrapper3').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer2-subItem3-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer2 #sub-item4').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer2').hide();
		$('#subContainer2-wrapper4').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer2-subItem4-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
		
	});	
	$('#subContainer2 #sub-item5').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer2').hide();
		$('#subContainer2-wrapper5').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer2-subItem5-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	$('#subContainer2 #sub-item6').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer2').hide();
		$('#subContainer2-wrapper6').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer2-subItem6-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	
	//sub-container 3 - click events - show sliders
	$('#subContainer3 #sub-item1').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer3').hide();
		$('#subContainer3-wrapper1').css({"display": "block"});		
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer3-subItem1-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});		
	$('#subContainer3 #sub-item2').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer3').hide();
		$('#subContainer3-wrapper2').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer3-subItem2-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer3 #sub-item3').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer3').hide();
		$('#subContainer3-wrapper3').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer3-subItem3-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer3 #sub-item4').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer3').hide();
		$('#subContainer3-wrapper4').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer3-subItem4-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
		
	});	
	$('#subContainer3 #sub-item5').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer3').hide();
		$('#subContainer3-wrapper5').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer3-subItem5-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	$('#subContainer3 #sub-item6').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer3').hide();
		$('#subContainer3-wrapper6').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer3-subItem6-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	
	//sub-container 4 - click events - show sliders
	$('#subContainer4 #sub-item1').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer4').hide();
		$('#subContainer4-wrapper1').css({"display": "block"});		
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer4-subItem1-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});		
	$('#subContainer4 #sub-item2').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer4').hide();
		$('#subContainer4-wrapper2').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer4-subItem2-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer4 #sub-item3').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer4').hide();
		$('#subContainer4-wrapper3').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer4-subItem3-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer4 #sub-item4').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer4').hide();
		$('#subContainer4-wrapper4').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer4-subItem4-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
		
	});	
	$('#subContainer4 #sub-item5').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer4').hide();
		$('#subContainer4-wrapper5').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer4-subItem5-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	$('#subContainer4 #sub-item6').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer4').hide();
		$('#subContainer4-wrapper6').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer4-subItem6-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	
	//sub-container 5 - click events - show sliders
	$('#subContainer5 #sub-item1').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer5').hide();
		$('#subContainer5-wrapper1').css({"display": "block"});		
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer5-subItem1-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});		
	$('#subContainer5 #sub-item2').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer5').hide();
		$('#subContainer5-wrapper2').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer5-subItem2-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer5 #sub-item3').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer5').hide();
		$('#subContainer5-wrapper3').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer5-subItem3-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer5 #sub-item4').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer5').hide();
		$('#subContainer5-wrapper4').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer5-subItem4-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
		
	});	
	$('#subContainer5 #sub-item5').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer5').hide();
		$('#subContainer5-wrapper5').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer5-subItem5-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	$('#subContainer5 #sub-item6').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer5').hide();
		$('#subContainer5-wrapper6').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer5-subItem6-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	//sub-container 5 - click events - show sliders
	$('#subContainer6 #sub-item1').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer6').hide();
		$('#subContainer6-wrapper1').css({"display": "block"});		
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer6-subItem1-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});		
	$('#subContainer6 #sub-item2').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer6').hide();
		$('#subContainer6-wrapper2').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer6-subItem2-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer6 #sub-item3').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer6').hide();
		$('#subContainer6-wrapper3').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer6-subItem3-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});	
	$('#subContainer6 #sub-item4').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer6').hide();
		$('#subContainer6-wrapper4').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer6-subItem4-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
		
	});	
	$('#subContainer6 #sub-item5').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer6').hide();
		$('#subContainer6-wrapper5').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer6-subItem5-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});
	$('#subContainer6 #sub-item6').click(function(){
		$('.back2').show();
		$('.exit2').show();
		$('#container').hide();
		$('#subContainer6').hide();
		$('#subContainer6-wrapper6').css({"display": "block"});
		$('.prevContainer').show();
		$('.nextContainer').show();
		
		$('#subContainer6-subItem6-slider').iosSlider({
					snapToChildren: true,
					desktopClickDrag: true,
					keyboardControls: true,
					navNextSelector: $('.next'),
					navPrevSelector: $('.prev'),
					navSlideSelector: $('.selectors .itemThumbs'),
					onSlideChange: slideChange
				});
				function slideChange(args) {		
				$('.selectors .itemThumbs').removeClass('selected');
				$('.selectors .itemThumbs:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');		
			}
	});