//
// Eric Morgan
// Copyright (c) 2014. Do not copy or redistribute.
//

// Handles the actual SwissCalc GUI (has hard-coded IDs, etc.)

var swisscalc = swisscalc || {};
swisscalc.gui = swisscalc.gui || {};
swisscalc.gui.loanCalculator = function() {
	this._calc 			= new swisscalc.calc.loanCalculator();
	this._inputIndex 	= 1;
	this._orientation 	= 1;
};

// Constants
swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT 		= 1;
swisscalc.gui.loanCalculator.INPUT_INDEX_RATE 			= 2;
swisscalc.gui.loanCalculator.INPUT_INDEX_TERM 			= 3;
swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT 	= 4;
swisscalc.gui.loanCalculator.ORIENTATION_PORTRAIT 		= 1;
swisscalc.gui.loanCalculator.ORIENTATION_LANDSCAPE 		= 2;

// Updates GUI elements based on _calc state
swisscalc.gui.loanCalculator.prototype.update = function() {
	this.txtAmount.value 		= this._calc.getLoanAmountDisplay();
	this.txtRate.value 			= this._calc.getInterestRateDisplay();
	this.txtTerm.value 			= this._calc.getTermDisplay();
	//this.rngDownPayment.value 	= this._calc.getDownPaymentPercent();	// TODO:
	$("#rngDownPayment").val(this._calc.getDownPaymentPercent());
	try {$("#pageLoanPortrait #rngDownPayment").slider("refresh");} catch(e) { console.log(e.message); }
	
	this.txtAmountLS.value 		= this._calc.getLoanAmountDisplay();
	this.txtRateLS.value 		= this._calc.getInterestRateDisplay();
	this.txtTermLS.value 		= this._calc.getTermDisplay();
	this.txtDownPaymentLS.value = this._calc.getDownPaymentDisplay();	
	
	// Set background color of selected elements...
	if (this.txtAmount) {
		this.txtAmount.style.backgroundColor 		= (this._inputIndex == swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT) 		? "yellow" : "white";
		this.txtRate.style.backgroundColor 			= (this._inputIndex == swisscalc.gui.loanCalculator.INPUT_INDEX_RATE) 			? "yellow" : "white";
		this.txtTerm.style.backgroundColor 			= (this._inputIndex == swisscalc.gui.loanCalculator.INPUT_INDEX_TERM) 			? "yellow" : "white";
	}
	
	if (this.txtAmountLS) {
		this.txtAmountLS.style.backgroundColor 		= (this._inputIndex == swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT) 		? "yellow" : "white";
		this.txtRateLS.style.backgroundColor 		= (this._inputIndex == swisscalc.gui.loanCalculator.INPUT_INDEX_RATE) 			? "yellow" : "white";
		this.txtTermLS.style.backgroundColor 		= (this._inputIndex == swisscalc.gui.loanCalculator.INPUT_INDEX_TERM) 			? "yellow" : "white";
		this.txtDownPaymentLS.style.backgroundColor = (this._inputIndex == swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT) 	? "yellow" : "white";
	}
	
	// Set outputs...
	if (this.divOutput) this._calc.addDisplay(this.divOutput);
	if (this.divOutputLS) this._calc.addDisplay(this.divOutputLS);
};

// Initializes the entire GUI. Sets initial values/views. Subscribes to events. Etc.
swisscalc.gui.loanCalculator.prototype.init = function() {
	this.initComponents();
	this.initEvents();	
	this.update();
};

// Initializes GUI components
swisscalc.gui.loanCalculator.prototype.initComponents = function() {
	// Portrait components...
	this.txtAmount 			= document.getElementById("txtAmount");
	this.txtRate 			= document.getElementById("txtRate");
	this.txtTerm 			= document.getElementById("txtTerm");
	this.divOutput			= document.getElementById("divOutput");
	this.rngDownPayment		= document.getElementById("rngDownPayment");
	
	// Landscape components...
	this.txtAmountLS 		= document.getElementById("txtAmountLS");
	this.txtRateLS 			= document.getElementById("txtRateLS");
	this.txtTermLS 			= document.getElementById("txtTermLS");
	this.txtDownPaymentLS 	= document.getElementById("txtDownPaymentLS");
	this.divOutputLS		= document.getElementById("divOutputLS");
};

// Initializes events 
swisscalc.gui.loanCalculator.prototype.initEvents = function() {
	this.initEventsKeyboard();
	this.initEventsPortrait();
	this.initEventsLandscape();
};

// Initializes events on the keyboard
swisscalc.gui.loanCalculator.prototype.initEventsKeyboard = function() {
	var that = this;	
	$(document).off("keypress").on("keypress", function(e) { that.keyPress(e); });	// Numbers, etc.
	$(document).off("keydown").on("keydown", function(e) { that.keyDown(e); });		// Backspace/enter/delete
};

// Initializes events for portrait style
swisscalc.gui.loanCalculator.prototype.initEventsPortrait = function() {
	var that = this;
	
	// Slider bar...
	$(document).off("slidestop", "#pageLoanPortrait #rngDownPayment").on("slidestop", "#pageLoanPortrait #rngDownPayment", function(event) {
		event.preventDefault();
		that.rngDownPayment_ValueChanged();
		that.update();
	});	

	// Numeric keys...
	$(document).off("tap", "#pageLoanPortrait #btnZero").on("tap", "#pageLoanPortrait #btnZero", function(event) {	
		event.preventDefault();
		that.btnZero_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnOne").on("tap", "#pageLoanPortrait #btnOne", function(event) {
		event.preventDefault();
		that.btnOne_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnTwo").on("tap", "#pageLoanPortrait #btnTwo", function(event) {
		event.preventDefault();
		that.btnTwo_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnThree").on("tap", "#pageLoanPortrait #btnThree", function(event) {
		event.preventDefault();
		that.btnThree_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnFour").on("tap", "#pageLoanPortrait #btnFour", function(event) {
		event.preventDefault();
		that.btnFour_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnFive").on("tap", "#pageLoanPortrait #btnFive", function(event) {
		event.preventDefault();
		that.btnFive_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnSix").on("tap", "#pageLoanPortrait #btnSix", function(event) {
		event.preventDefault();
		that.btnSix_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnSeven").on("tap", "#pageLoanPortrait #btnSeven", function(event) {
		event.preventDefault();
		that.btnSeven_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnEight").on("tap", "#pageLoanPortrait #btnEight", function(event) {
		event.preventDefault();
		that.btnEight_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnNine").on("tap", "#pageLoanPortrait #btnNine", function(event) {
		event.preventDefault();
		that.btnNine_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnDecimal").on("tap", "#pageLoanPortrait #btnDecimal", function(event) {
		event.preventDefault();
		that.btnDecimal_Click();
		that.update();
	});
	
	// Operator buttons...
	$(document).off("tap", "#pageLoanPortrait #btnClear").on("tap", "#pageLoanPortrait #btnClear", function(event) {
		event.preventDefault();
		that.btnClear_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnBackspace").on("tap", "#pageLoanPortrait #btnBackspace", function(event) {
		event.preventDefault();
		that.btnBackspace_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnPrev").on("tap", "#pageLoanPortrait #btnPrev", function(event) {
		event.preventDefault();
		that.btnPrev_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanPortrait #btnNext").on("tap", "#pageLoanPortrait #btnNext", function(event) {
		event.preventDefault();
		that.btnNext_Click();
		that.update();
	});
};

// Initializes events for landscape style
swisscalc.gui.loanCalculator.prototype.initEventsLandscape = function() {
	var that = this;
	
	// Slider...
	$(document).off("slidestop", "#pageLoanLandscape #flipTermLS").on("slidestop", "#pageLoanLandscape #flipTermLS", function(event) {
		event.preventDefault();
		that.flipTerm_ValueChanged();
		that.update();
	});	

	// Numeric keys...
	$(document).off("tap", "#pageLoanLandscape #btnZeroLS").on("tap", "#pageLoanLandscape #btnZeroLS", function(event) {
		event.preventDefault();
		that.btnZero_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnOneLS").on("tap", "#pageLoanLandscape #btnOneLS", function(event) {
		event.preventDefault();
		that.btnOne_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnTwoLS").on("tap", "#pageLoanLandscape #btnTwoLS", function(event) {
		event.preventDefault();
		that.btnTwo_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnThreeLS").on("tap", "#pageLoanLandscape #btnThreeLS", function(event) {
		event.preventDefault();
		that.btnThree_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnFourLS").on("tap", "#pageLoanLandscape #btnFourLS", function(event) {
		event.preventDefault();
		that.btnFour_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnFiveLS").on("tap", "#pageLoanLandscape #btnFiveLS", function(event) {
		event.preventDefault();
		that.btnFive_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnSixLS").on("tap", "#pageLoanLandscape #btnSixLS", function(event) {
		event.preventDefault();
		that.btnSix_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnSevenLS").on("tap", "#pageLoanLandscape #btnSevenLS", function(event) {
		event.preventDefault();
		that.btnSeven_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnEightLS").on("tap", "#pageLoanLandscape #btnEightLS", function(event) {
		event.preventDefault();
		that.btnEight_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnNineLS").on("tap", "#pageLoanLandscape #btnNineLS", function(event) {
		event.preventDefault();
		that.btnNine_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnDecimalLS").on("tap", "#pageLoanLandscape #btnDecimalLS", function(event) {
		event.preventDefault();
		that.btnDecimal_Click();
		that.update();
	});
	
	// Operator buttons...
	$(document).off("tap", "#pageLoanLandscape #btnClearLS").on("tap", "#pageLoanLandscape #btnClearLS", function(event) {
		event.preventDefault();
		that.btnClear_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnBackspaceLS").on("tap", "#pageLoanLandscape #btnBackspaceLS", function(event) {
		event.preventDefault();
		that.btnBackspace_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnPrevLS").on("tap", "#pageLoanLandscape #btnPrevLS", function(event) {
		event.preventDefault();
		that.btnPrev_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageLoanLandscape #btnNextLS").on("tap", "#pageLoanLandscape #btnNextLS", function(event) {
		event.preventDefault();
		that.btnNext_Click();
		that.update();
	});
};

// Occurs on keypress. Handles keyboard input.
swisscalc.gui.loanCalculator.prototype.keyPress = function(e) {	
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
		case '.': this.btnDecimal_Click(); 		this.update(); break;
	}
};

// Occurs on keydown. Handles "non-character" keyboard input.
swisscalc.gui.loanCalculator.prototype.keyDown = function(e) {
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
swisscalc.gui.loanCalculator.prototype.btnZero_Click = function()  		{ this.addDigit("0"); };
swisscalc.gui.loanCalculator.prototype.btnOne_Click = function()   		{ this.addDigit("1"); };
swisscalc.gui.loanCalculator.prototype.btnTwo_Click = function()   		{ this.addDigit("2"); };
swisscalc.gui.loanCalculator.prototype.btnThree_Click = function() 		{ this.addDigit("3"); };
swisscalc.gui.loanCalculator.prototype.btnFour_Click = function()  		{ this.addDigit("4"); };
swisscalc.gui.loanCalculator.prototype.btnFive_Click = function()  		{ this.addDigit("5"); };
swisscalc.gui.loanCalculator.prototype.btnSix_Click = function()   		{ this.addDigit("6"); };
swisscalc.gui.loanCalculator.prototype.btnSeven_Click = function() 		{ this.addDigit("7"); };
swisscalc.gui.loanCalculator.prototype.btnEight_Click = function() 		{ this.addDigit("8"); };
swisscalc.gui.loanCalculator.prototype.btnNine_Click = function()  		{ this.addDigit("9"); };
swisscalc.gui.loanCalculator.prototype.btnDecimal_Click = function()  	{ this.addDigit("."); };
swisscalc.gui.loanCalculator.prototype.addDigit = function(digit) {
	switch(this._inputIndex)
	{
		case swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT: 			this._calc._loanAmount.addDigit(digit); 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_RATE: 			this._calc._interestRate.addDigit(digit); 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_TERM: 			this._calc._loanTerm.addDigit(digit);	 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT: 	this._calc._downPayment.addDigit(digit); 	break;
	}
};

// Down payment slider...
swisscalc.gui.loanCalculator.prototype.rngDownPayment_ValueChanged = function() { 
	//this._calc.setDownPaymentPercent(this.rngDownPayment.value); 	// TODO: 
	this._calc.setDownPaymentPercent($("#rngDownPayment").val()); 
};

// Term flipswitch...
swisscalc.gui.loanCalculator.prototype.flipTerm_ValueChanged = function() {	
	var value = $("#pageLoanLandscape #flipTermLS").val();	
	if (value == "Months") this._calc._termUnit = swisscalc.calc.loanCalculator.TERM_UNIT_MONTHS;
	else if (value == "Years") this._calc._termUnit = swisscalc.calc.loanCalculator.TERM_UNIT_YEARS;
};

// Clear button...
swisscalc.gui.loanCalculator.prototype.btnClear_Click = function() { 
	switch(this._inputIndex)
	{
		case swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT: 			this._calc._loanAmount.clear(); 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_RATE: 			this._calc._interestRate.clear(); 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_TERM: 			this._calc._loanTerm.clear();	 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT: 	this._calc._downPayment.clear(); 	break;
	}
};

// Backspace button...
swisscalc.gui.loanCalculator.prototype.btnBackspace_Click = function() { 
	switch(this._inputIndex)
	{
		case swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT: 			this._calc._loanAmount.backspace(); 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_RATE: 			this._calc._interestRate.backspace(); 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_TERM: 			this._calc._loanTerm.backspace();	 	break;
		case swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT: 	this._calc._downPayment.backspace(); 	break;
	}
};

// Previous button...
swisscalc.gui.loanCalculator.prototype.btnPrev_Click = function()  { 
	if (this._orientation == swisscalc.gui.loanCalculator.ORIENTATION_PORTRAIT) 
	{
		switch(this._inputIndex)
		{
			case swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_TERM; 			break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_RATE: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT; 		break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_TERM: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_RATE; 			break;
		}		
	} 
	else if (this._orientation == swisscalc.gui.loanCalculator.ORIENTATION_LANDSCAPE) 
	{
		switch(this._inputIndex)
		{
			case swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT; 	break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_RATE: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT; 		break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_TERM: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_RATE; 			break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT: 	this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_TERM; 			break;
		}		
	}
};

// Next button...
swisscalc.gui.loanCalculator.prototype.btnNext_Click = function() {
	if (this._orientation == swisscalc.gui.loanCalculator.ORIENTATION_PORTRAIT) 
	{
		switch(this._inputIndex)
		{
			case swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_RATE; 			break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_RATE: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_TERM; 			break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_TERM: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT; 		break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT:	this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT;		break;
		}		
	} 
	else if (this._orientation == swisscalc.gui.loanCalculator.ORIENTATION_LANDSCAPE) 
	{
		switch(this._inputIndex)
		{
			case swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_RATE; 			break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_RATE: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_TERM; 			break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_TERM: 			this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT;	break;
			case swisscalc.gui.loanCalculator.INPUT_INDEX_DOWN_PAYMENT: 	this._inputIndex = swisscalc.gui.loanCalculator.INPUT_INDEX_AMOUNT;		break;
		}		
	}
};