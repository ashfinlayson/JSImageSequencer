JSImageSequencer
================

Copyright (C) 2012 Ashley Finlayson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


@author       Ashley Finlayson

@date         11/01/2013

@description  Javascript class to create animations from either image sequences or CSS maps

@version      1.0


Docs
------------

Image Sequence Variables
================

firstFrame: (int) - First frame in the sequence ie. 00000, 00001 or can be written as 0 or 1:  undefined

totalFrames: (int) – Total number of frames in the sequence:	undefined

frameRate: (int) – Frames per second:	undefined

loop: (boolean) - Does the animation loop:		FALSE

		
Sequence Container Vars		
================

containerId:	(string) - ID of the container element (#div): undefined

containerWidth:	(int) – Width of the container element: undefined

containerHeight	(int) – Height of the container element: undefined


CSS Map Vars		
================

cssMap:	(boolean) – Does the sequencer user a css map background image instead of a sequence of images:	FALSE

bgImage:	(string) – URL of the background image:	undefined

horizontal:	(boolean) – Does the css map frames laid out horizontally or vertically:	FALSE
		

Image Source Vars	
================

dir:	(string) – The directory path (from where this script is called) eg img/sequences/my-sequence/:	undefined

fileNamePrefix:	(string) – The part of the file name leading up to the number sequence. Ie my-sequence-00001.jpg the value would be 'my-sequence-':	undefined

fileNameExtension:	(string) - File type, don't include period before the extension: undefined

totalDigits:	(int) Total number of digits in the image file name numberie. my-sequence-00001.jpg is 5 digits:	undefined
		
		
Notes
================
Undefined values must be set... For now - I'm working on this

For any questions, comments or criticisms please contact ash@ashfinlayson.info 

