(function()
{
	// Constructor
	var qqw = function(container, options)
	{
		var qqw_instance = this;

		// Default options
		 var defaultOptions = {
		 	trigger: 'a',
		 	slideTime: '.5s',
		 	prevButton: '.qqw__previous',
		 	nextButton: '.qqw__next',
		 	closeButton: '.qqw__close',
		 	wrap: '.qqw__wrap'
		 };

		this.options = options;
		// Compare options with default
		for(i in defaultOptions){
			if(typeof this.options[i] == 'undefined')
				this.options[i]=defaultOptions[i];
		}
		this.container  = this.getElement(container);
		this.imageList = [];
		this.currentSlide=0;
		this.container.find(this.options.trigger).each(function(i, e)
		{
			if(e.hasAttribute('href'))
			{
				qqw_instance.imageList.push($(e).attr('href'));
			}
			else
			{
				qqw_instance.imageList.push($(e).data('image'));
			}
		});

		this.container.find(this.options.trigger).click(function(event)
		{
			var clicked_element = this;

			event.preventDefault();
			qqw_instance.bootstrap();

			setTimeout(function()
			{
				qqw_instance.goToIndex($(clicked_element).index());
				qqw_instance.wrap = qqw_instance.getElement(qqw_instance.options.wrap);
				qqw_instance.prevButton = qqw_instance.getElement(qqw_instance.options.prevButton);
				qqw_instance.nextButton = qqw_instance.getElement(qqw_instance.options.nextButton);
				qqw_instance.closeButton = qqw_instance.getElement(qqw_instance.options.closeButton);
				//test//
				qqw_instance.prevButton.on('click',function(){
					console.log('prevButton clicked');
					qqw_instance.goPrev();
				});
				qqw_instance.nextButton.on('click',function(){
					console.log('nextButton clicked');
					qqw_instance.goNext();
				});
				qqw_instance.closeButton.on('click',function(){
					console.log('wrap removed');
					$(this).parent().remove();
				});
			}, 100);
		});
	}

	qqw.prototype.bootstrap = function()
	{
		var html = 	'<div class="qqw__wrap">';
		html +=			'<span class="qqw__next"></span>';
		html +=			'<span class="qqw__previous"></span>';
		html +=			'<span class="qqw__close"></span>';
		html +=			'</div>';

		$(html).appendTo('body');				
	}
	qqw.prototype.getElement=function(input){
		if(typeof input == 'object')
		{
			return input;
		}
		else if(typeof input == 'string')
 		{
			return $(input);
		}		
	}

	qqw.prototype.goToIndex = function(index)
	{	
		this.currentSlide = index;
		if(this.currentSlide < 0)
		{
			this.currentSlide = this.imageList.length-1;
		}
		else if(this.currentSlide == this.imageList.length)
		{
			this.currentSlide = 0;	
		}

		$('.qqw__wrap').css('background-image', 'url(' + this.imageList[this.currentSlide] + ')');
	}
	qqw.prototype.goNext = function()
	{	
		++this.currentSlide
		this.goToIndex(this.currentSlide);
	}
	qqw.prototype.goPrev = function()
	{	
		--this.currentSlide
		this.goToIndex(this.currentSlide);
	}
	// Export
	window.qqw = qqw;
})();