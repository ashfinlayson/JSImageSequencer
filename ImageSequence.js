function ImageSequence()
{
 /**
  * Public Vars
  * Vars set @ object instantiaion
  **/
	
	// Image Sequence Vars
	this.firstFrame; // first frame in the sequence ie. 00000, 00001 or can be written as 0 or 1
	this.totalFrames; // total number of frames in the sequence.
	this.frameRate = 25; // frames per second
	this.loop; // Boolean - play once if false or loop if true.
	
	// Sequence Container Vars
	this.containerId; // #the-div
	this.containerWidth; // width of #the-div
	this.containerHeight; // height of #the-div
	
	// CSS Map Vars
	this.cssMap; // Boolean
	this.bgImage; // URL of the background image.
	this.horizontal; // Boolean - horizontal cssmap (assumes false & therefore vertical if unset). 
	
	// Image Source Vars
	this.dir;
	this.fileNamePrefix;
	this.fileNameExtension;
	this.totalDigits; // Number of digits in the image name ie. 00001.png = 5 digits
	
 /**
  * Private Vars
  * Some vars need to be declared as private to maintain scope.
  */
	
	// Image Sequence Vars
	var firstFrame;
	var currentFrame;
	var totalFrames;
	var loop;
	var frameRate;
	
	// Sequence Container Vars
	var containerElement; // container dom element
	var wrapper; // wrapper dom element
	var containerHeight;
	var containerWidth;
	
	// CSS Map Vars
	var cssMap;
	var bgImage;
	var horizontal;
	
	// setInterval Vars
	var sequenceInterval; // interval timer for the sequence
	var interval; // Timer interval distance.
	
 /**
  * init()
  * Prepare everything for the image sequence.
  */ 
	this.init = function()
	{
		// Give the private vars some values
		interval = 1000 / this.frameRate;
		
		// Image Sequence Vars
		firstFrame = this.firstFrame;
		currentFrame = firstFrame;
		totalFrames = this.totalFrames -1;
		loop = this.loop;
		
		// Sequence Container Vars
		containerElement = document.getElementById(this.containerId);
		containerHeight = this.containerHeight;
		containerWidth = this.containerWidth;
		
		cssMap = this.cssMap;
		bgImage = this.bgImage;
		horizontal = this.horizontal;
		
		// functions
		this.styleContainer();
		this.buildWrapper();
		if(cssMap && bgImage){
			this.implimentCssBackground();
		}else{
			this.insertImages();
		}
		
		this.start();
	}
	
 /** 
  * buildWrapper()
  * Create a div inside the parent container with a class of wrapper
  */
	this.buildWrapper = function()
	{
		wrapper = document.createElement('div'); // create a new div element
		wrapper.setAttribute('class', 'sequence-wrapper'); // give it a class
		
		if(cssMap & horizontal){
			wrapper.style.width = (this.containerWidth * this.totalFrames) + 'px';	 // set the width
			wrapper.style.height = this.containerHeight + 'px';
		}else{
			wrapper.style.width = this.containerWidth + 'px';	 // set the width
			wrapper.style.height = (this.containerHeight * this.totalFrames) + 'px';
		}
		
		containerElement.appendChild(wrapper); // add the wrapper to the container element.
	}
	
	this.implimentCssBackground = function()
	{
		wrapper.style.backgroundImage = "url("+bgImage+")";
		wrapper.style.backgroundPosition = "top left";
		console.log(wrapper.style.backgroundImage);
	}
	
 /**
  * styleContainer()
  * Set some css properties to make sure the container behaves as required.
  * - Hide overflow
  * - Set width and height
  */
	this.styleContainer = function()
	{
		containerElement.style.overflow = 'hidden';
		containerElement.style.width = this.containerWidth+'px';
		containerElement.style.height = this.containerHeight+'px';
	}
	
 /**
  * insertImages()
  * Load all images from the sequence into the wrapper element.
  */
	this.insertImages = function()
	{
		var myCurrentFrame = Number(currentFrame);
		
		for(var i = this.firstFrame; i < this.totalFrames; i++){
			var fileName = this.buildFileName(myCurrentFrame);
			var image = document.createElement('img');
				image.setAttribute('src',fileName);
				
			wrapper.appendChild(image)
			myCurrentFrame++;
		}
	}
	
 /** 
  * leadZeros
  * Stupid hacky function - I need to update this. Only used for multiple images sequence mode
  */ 
	this.leadZeros = function(number)
	{
		number = String(number);
		var newNumber;
		for(var i = number.length; i < this.totalDigits; i++)
		{
			number = '0'+ number;
		}

		return number;
	}
	
 /**
  * buildFileName()
  * Create the url for the image in the sequence
  */ 
	this.buildFileName = function(myCurentFrame)
	{
		var currentFrameString = this.leadZeros(myCurentFrame);
		var fileName = this.dir + this.fileNamePrefix + currentFrameString + '.' + this.fileNameExtension;
		return fileName;
	}

 /**
  * updateSequence()
  * Updates the current frame and the top margin of the wrapper to display the corrent image in the sequence.
  */
	this.updateSequence = function()
	{
		var margin;
		if(cssMap = horizontal){
			margin = -(currentFrame * containerWidth);
			wrapper.style.marginLeft = margin;
		}else{
			margin = -(currentFrame * containerHeight);
			wrapper.style.marginTop = margin;
		}
		
		
		if(currentFrame < (totalFrames -1)){
			currentFrame++;
		}else{
			if(loop == true){
				currentFrame = firstFrame;
			}else{
				clearInterval(sequenceInterval);
			}
		}
	}
	
 /** 
  * start()
  * starts a new interval
  */
	this.start = function()
	{
		sequenceInterval = setInterval(this.updateSequence, interval);
	}
}