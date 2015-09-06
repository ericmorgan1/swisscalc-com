//
// Eric Morgan
// Copyright (c) 2014. Do not copy or redistribute.
//

// Handles the actual SwissCalc GUI (has hard-coded IDs, etc.)

var swisscalc = swisscalc || {};
swisscalc.gui = swisscalc.gui || {};
swisscalc.gui.tipCalculator = function() {
	this._calc = new swisscalc.calc.tipCalculator();
};

// Updates GUI elements based on _calc state
swisscalc.gui.tipCalculator.prototype.update = function() {	
	this.txtSubtotal.value 		= this._calc.getSubtotalDisplay();
	//this.rngTip.value			= this._calc.getTipValuePercentage();
	this.txtTotal.value 		= this._calc.getTotalDisplay();
	this.txtTip.value 			= this._calc.getTipAmountDisplay();
	
	this.txtSubtotalLS.value 	= this._calc.getSubtotalDisplay();	
	//this.rngTipLS.value			= this._calc.getTipValuePercentage();
	this.txtTotalLS.value 		= this._calc.getTotalDisplay();
	this.txtTipLS.value			= this._calc.getTipAmountDisplay();
	
	$("#pageTipPortrait #rngTip").val(this._calc.getTipValuePercentage());
	$("#pageTipLandscape #rngTipLS").val(this._calc.getTipValuePercentage());	
	try {$("#pageTipPortrait #rngTip").slider("refresh");} catch(e) { console.log("portrait: " + e.message); }
	try {$("#pageTipLandscape #rngTipLS").slider("refresh");} catch(e) { console.log("landscape: " + e.message); }	
};

// Initializes the entire GUI. Sets initial values/views. Subscribes to events. Etc.
swisscalc.gui.tipCalculator.prototype.init = function() {
	this.initComponents();
	this.initEvents();	
	this.update();
};

// Initializes GUI components
swisscalc.gui.tipCalculator.prototype.initComponents = function() {	
	this.txtSubtotal 	= document.getElementById("txtSubtotal");
	this.rngTip 		= document.getElementById("rngTip");
	this.txtTotal 		= document.getElementById("txtTotal");
	this.txtTip			= document.getElementById("txtTip");
	
	this.txtSubtotalLS 	= document.getElementById("txtSubtotalLS");
	this.rngTipLS 		= document.getElementById("rngTipLS");
	this.txtTotalLS		= document.getElementById("txtTotalLS");
	this.txtTipLS		= document.getElementById("txtTipLS");
};

// Initializes events 
swisscalc.gui.tipCalculator.prototype.initEvents = function() {
	this.initEventsKeyboard();
	this.initEventsPortrait();
	this.initEventsLandscape();
};

// Initializes events on the keyboard
swisscalc.gui.tipCalculator.prototype.initEventsKeyboard = function() {
	var that = this;	
	$(document).off("keypress").on("keypress", function(e) { that.keyPress(e); });	// Numbers, etc.
	$(document).off("keydown").on("keydown", function(e) { that.keyDown(e); });		// Backspace/enter/delete
};

// Initializes events for portrait style
swisscalc.gui.tipCalculator.prototype.initEventsPortrait = function() {
	var that = this;
	
	// Slider bar...
	$(document).off("slidestop", "#pageTipPortrait #rngTip").on("slidestop", "#pageTipPortrait #rngTip", function(event) {
		event.preventDefault();
		that.rngTip_ValueChanged();
		that.update();
	});	

	// Numeric keys...
	$(document).off("tap", "#pageTipPortrait #btnZero").on("tap", "#pageTipPortrait #btnZero", function(event) {	
		event.preventDefault();
		that.btnZero_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnOne").on("tap", "#pageTipPortrait #btnOne", function(event) {
		event.preventDefault();
		that.btnOne_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnTwo").on("tap", "#pageTipPortrait #btnTwo", function(event) {
		event.preventDefault();
		that.btnTwo_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnThree").on("tap", "#pageTipPortrait #btnThree", function(event) {
		event.preventDefault();
		that.btnThree_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnFour").on("tap", "#pageTipPortrait #btnFour", function(event) {
		event.preventDefault();
		that.btnFour_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnFive").on("tap", "#pageTipPortrait #btnFive", function(event) {
		event.preventDefault();
		that.btnFive_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnSix").on("tap", "#pageTipPortrait #btnSix", function(event) {
		event.preventDefault();
		that.btnSix_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnSeven").on("tap", "#pageTipPortrait #btnSeven", function(event) {
		event.preventDefault();
		that.btnSeven_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnEight").on("tap", "#pageTipPortrait #btnEight", function(event) {
		event.preventDefault();
		that.btnEight_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnNine").on("tap", "#pageTipPortrait #btnNine", function(event) {
		event.preventDefault();
		that.btnNine_Click();
		that.update();
	});
	
	// Operator buttons...
	$(document).off("tap", "#pageTipPortrait #btnClear").on("tap", "#pageTipPortrait #btnClear", function(event) {
		event.preventDefault();
		that.btnClear_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btnBackspace").on("tap", "#pageTipPortrait #btnBackspace", function(event) {
		event.preventDefault();
		that.btnBackspace_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btn10Percent").on("tap", "#pageTipPortrait #btn10Percent", function(event) {
		event.preventDefault();
		that.btn10Percent_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btn15Percent").on("tap", "#pageTipPortrait #btn15Percent", function(event) {
		event.preventDefault();
		that.btn15Percent_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipPortrait #btn20Percent").on("tap", "#pageTipPortrait #btn20Percent", function(event) {
		event.preventDefault();
		that.btn20Percent_Click();
		that.update();
	});
};

// Initializes events for portrait style
swisscalc.gui.tipCalculator.prototype.initEventsLandscape = function() {
	var that = this;
	
	// Slider bar...
	$(document).off("slidestop", "#pageTipLandscape #rngTipLS").on("slidestop", "#pageTipLandscape #rngTipLS", function(event) {
		event.preventDefault();
		that.rngTipLS_ValueChanged();
		that.update();
	});

	// Numeric keys...
	$(document).off("tap", "#pageTipLandscape #btnZeroLS").on("tap", "#pageTipLandscape #btnZeroLS", function(event) {
		event.preventDefault();
		that.btnZero_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnOneLS").on("tap", "#pageTipLandscape #btnOneLS", function(event) {
		event.preventDefault();
		that.btnOne_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnTwoLS").on("tap", "#pageTipLandscape #btnTwoLS", function(event) {
		event.preventDefault();
		that.btnTwo_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnThreeLS").on("tap", "#pageTipLandscape #btnThreeLS", function(event) {
		event.preventDefault();
		that.btnThree_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnFourLS").on("tap", "#pageTipLandscape #btnFourLS", function(event) {
		event.preventDefault();
		that.btnFour_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnFiveLS").on("tap", "#pageTipLandscape #btnFiveLS", function(event) {
		event.preventDefault();
		that.btnFive_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnSixLS").on("tap", "#pageTipLandscape #btnSixLS", function(event) {
		event.preventDefault();
		that.btnSix_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnSevenLS").on("tap", "#pageTipLandscape #btnSevenLS", function(event) {
		event.preventDefault();
		that.btnSeven_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnEightLS").on("tap", "#pageTipLandscape #btnEightLS", function(event) {
		event.preventDefault();
		that.btnEight_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnNineLS").on("tap", "#pageTipLandscape #btnNineLS", function(event) {
		event.preventDefault();
		that.btnNine_Click();
		that.update();
	});
	
	// Operator buttons...
	$(document).off("tap", "#pageTipLandscape #btnClearLS").on("tap", "#pageTipLandscape #btnClearLS", function(event) {
		event.preventDefault();
		that.btnClear_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btnBackspaceLS").on("tap", "#pageTipLandscape #btnBackspaceLS", function(event) {
		event.preventDefault();
		that.btnBackspace_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btn10PercentLS").on("tap", "#pageTipLandscape #btn10PercentLS", function(event) {
		event.preventDefault();
		that.btn10Percent_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btn15PercentLS").on("tap", "#pageTipLandscape #btn15PercentLS", function(event) {
		event.preventDefault();
		that.btn15Percent_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageTipLandscape #btn20PercentLS").on("tap", "#pageTipLandscape #btn20PercentLS", function(event) {
		event.preventDefault();
		that.btn20Percent_Click();
		that.update();
	});
};

// Occurs on keypress. Handles keyboard input.
swisscalc.gui.tipCalculator.prototype.keyPress = function(e) {	
	// Check characters...
	var code = e.keyCode || e.which;
	var ch = String.fromCharCode(code);
	switch(ch)
	{
		case '0': this.btnZero_Click(); 		this.update(); break;
		case '1': this.btnOne_Click(); 			this.update(); break;
		case '2': this.btnTwo_Click(); 			this.update(); break;
		case '3': this.btnThree_Click(); 		this.update(); break;
		case '4': this.btnFour_Click(); 		this.update(); break;
		case '5': this.btnFive_Click(); 		this.update(); break;
		case '6': this.btnSix_Click(); 			this.update(); break;
		case '7': this.btnSeven_Click(); 		this.update(); break;
		case '8': this.btnEight_Click(); 		this.update(); break;
		case '9': this.btnNine_Click(); 		this.update(); break;
	}
};

// Occurs on keydown. Handles "non-character" keyboard input.
swisscalc.gui.tipCalculator.prototype.keyDown = function(e) {
	var code = e.keyCode || e.which;
	switch(code)
	{		
		// Backspace...
		case 8: this.btnBackspace_Click(); this.update(); break;
		
		// Delete...
		case 46: this.btnClear_Click(); this.update(); break;
	}
};

// Digit commands...
swisscalc.gui.tipCalculator.prototype.btnZero_Click = function()  		{ this._calc._subtotal.addDigit("0"); };
swisscalc.gui.tipCalculator.prototype.btnOne_Click = function()   		{ this._calc._subtotal.addDigit("1"); };
swisscalc.gui.tipCalculator.prototype.btnTwo_Click = function()   		{ this._calc._subtotal.addDigit("2"); };
swisscalc.gui.tipCalculator.prototype.btnThree_Click = function() 		{ this._calc._subtotal.addDigit("3"); };
swisscalc.gui.tipCalculator.prototype.btnFour_Click = function()  		{ this._calc._subtotal.addDigit("4"); };
swisscalc.gui.tipCalculator.prototype.btnFive_Click = function()  		{ this._calc._subtotal.addDigit("5"); };
swisscalc.gui.tipCalculator.prototype.btnSix_Click = function()   		{ this._calc._subtotal.addDigit("6"); };
swisscalc.gui.tipCalculator.prototype.btnSeven_Click = function() 		{ this._calc._subtotal.addDigit("7"); };
swisscalc.gui.tipCalculator.prototype.btnEight_Click = function() 		{ this._calc._subtotal.addDigit("8"); };
swisscalc.gui.tipCalculator.prototype.btnNine_Click = function()  		{ this._calc._subtotal.addDigit("9"); };

// Control commands...
swisscalc.gui.tipCalculator.prototype.btnClear_Click = function() 		{ this._calc._subtotal.clear(); };
swisscalc.gui.tipCalculator.prototype.btnBackspace_Click = function() 	{ this._calc._subtotal.backspace(); };
swisscalc.gui.tipCalculator.prototype.btn10Percent_Click = function() 	{ this._calc.setTipValuePercentage(10); };
swisscalc.gui.tipCalculator.prototype.btn15Percent_Click = function() 	{ this._calc.setTipValuePercentage(15); };
swisscalc.gui.tipCalculator.prototype.btn20Percent_Click = function() 	{ this._calc.setTipValuePercentage(20); };

// Slider commands...
//swisscalc.gui.tipCalculator.prototype.rngTip_ValueChanged = function()		{ this._calc.setTipValuePercentage(this.rngTip.value); };
//swisscalc.gui.tipCalculator.prototype.rngTipLS_ValueChanged = function()	{ this._calc.setTipValuePercentage(this.rngTipLS.value); };

swisscalc.gui.tipCalculator.prototype.rngTip_ValueChanged = function()		{ this._calc.setTipValuePercentage($("#rngTip").val()); };
swisscalc.gui.tipCalculator.prototype.rngTipLS_ValueChanged = function()	{ this._calc.setTipValuePercentage($("#rngTipLS").val()); };
