//
// Eric Morgan
// Copyright (c) 2014. Do not copy or redistribute.
//

// Handles the actual SwissCalc GUI (has hard-coded IDs, etc.)

var swisscalc = swisscalc || {};
swisscalc.gui = swisscalc.gui || {};
swisscalc.gui.scientificCalculator = function() {
	this._calc = new swisscalc.calc.calculator();
	this._buttonPage = 1;	// BUTTON_PAGE_1ST
	this._angleUnit  = 1;	// ANGLE_UNIT_DEG
};

swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST = 1;
swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND = 2;
swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG = 1;
swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD = 2;

// Updates GUI elements based on _calc state
swisscalc.gui.scientificCalculator.prototype.update = function() {
	this.txtDisplay.value = this._calc._mainDisplay.getCurrentDisplay();
	this.txtDisplayLS.value = this._calc._mainDisplay.getCurrentDisplay();	
	// TODO: Memory label: Want to put a little "M" on the display
	// TODO: Parentheses label: Want to put a little "()" on the display if using parentheses
};

// Initializes the entire GUI. Sets initial values/views. Subscribes to events. Etc.
swisscalc.gui.scientificCalculator.prototype.init = function() {
	this.initComponents();
	this.initEvents();	
	this.update();
};

// Initializes GUI components
swisscalc.gui.scientificCalculator.prototype.initComponents = function() {
	this.txtDisplay   = document.getElementById("txtDisplay");
	this.txtDisplayLS = document.getElementById("txtDisplayLS");
};

// Initializes events 
swisscalc.gui.scientificCalculator.prototype.initEvents = function() {
	this.initEventsKeyboard();
	this.initEventsPortrait();
	this.initEventsLandscape();
};

// Initializes events on the keyboard
swisscalc.gui.scientificCalculator.prototype.initEventsKeyboard = function() {
	var that = this;	
	$(document).off("keypress").on("keypress", function(e) { that.keyPress(e); });	// Numbers, etc.
	$(document).off("keydown").on("keydown", function(e) { that.keyDown(e); });		// Backspace/enter/delete
};

// Initializes events for portrait style
swisscalc.gui.scientificCalculator.prototype.initEventsPortrait = function() {
	var that = this;

	// Numeric keys...
	$(document).off("tap", "#pageScientificPortrait #btnZero").on("tap", "#pageScientificPortrait #btnZero", function(event) {
		event.preventDefault();
		that.btnZero_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnOne").on("tap", "#pageScientificPortrait #btnOne", function(event) {
		event.preventDefault();
		that.btnOne_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnTwo").on("tap", "#pageScientificPortrait #btnTwo", function(event) {
		event.preventDefault();
		that.btnTwo_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnThree").on("tap", "#pageScientificPortrait #btnThree", function(event) {
		event.preventDefault();
		that.btnThree_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnFour").on("tap", "#pageScientificPortrait #btnFour", function(event) {
		event.preventDefault();
		that.btnFour_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnFive").on("tap", "#pageScientificPortrait #btnFive", function(event) {
		event.preventDefault();
		that.btnFive_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnSix").on("tap", "#pageScientificPortrait #btnSix", function(event) {
		event.preventDefault();
		that.btnSix_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnSeven").on("tap", "#pageScientificPortrait #btnSeven", function(event) {
		event.preventDefault();
		that.btnSeven_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnEight").on("tap", "#pageScientificPortrait #btnEight", function(event) {
		event.preventDefault();
		that.btnEight_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnNine").on("tap", "#pageScientificPortrait #btnNine", function(event) {
		event.preventDefault();
		that.btnNine_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnDecimal").on("tap", "#pageScientificPortrait #btnDecimal", function(event) {
		event.preventDefault();
		that.btnDecimal_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnNegative").on("tap", "#pageScientificPortrait #btnNegative", function(event) {
		event.preventDefault();
		that.btnNegative_Click();
		that.update();
	});
	
	// Operator buttons...
	$(document).off("tap", "#pageScientificPortrait #btnClear").on("tap", "#pageScientificPortrait #btnClear", function(event) {
		event.preventDefault();
		that.btnClear_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnBackspace").on("tap", "#pageScientificPortrait #btnBackspace", function(event) {
		event.preventDefault();
		that.btnBackspace_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnEquals").on("tap", "#pageScientificPortrait #btnEquals", function(event) {
		event.preventDefault();
		that.btnEquals_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnPlus").on("tap", "#pageScientificPortrait #btnPlus", function(event) {
		event.preventDefault();
		that.btnPlus_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnMinus").on("tap", "#pageScientificPortrait #btnMinus", function(event) {
		event.preventDefault();
		that.btnMinus_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnMultiply").on("tap", "#pageScientificPortrait #btnMultiply", function(event) {
		event.preventDefault();
		that.btnMultiply_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnDivide").on("tap", "#pageScientificPortrait #btnDivide", function(event) {
		event.preventDefault();
		that.btnDivide_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnExponent").on("tap", "#pageScientificPortrait #btnExponent", function(event) {
		event.preventDefault();
		that.btnExponent_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnSine").on("tap", "#pageScientificPortrait #btnSine", function(event) {
		event.preventDefault();
		if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnSineDegrees_Click(); }
		else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnSine_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnCosine").on("tap", "#pageScientificPortrait #btnCosine", function(event) {
		event.preventDefault();
		if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnCosineDegrees_Click(); }
		else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnCosine_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnTangent").on("tap", "#pageScientificPortrait #btnTangent", function(event) {
		event.preventDefault();
		if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnTangentDegrees_Click(); }
		else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnTangent_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificPortrait #btnSquareRoot").on("tap", "#pageScientificPortrait #btnSquareRoot", function(event) {
		event.preventDefault();
		that.btnSquareRoot_Click();
		that.update();
	});
};

// Initializes events for landscape style
swisscalc.gui.scientificCalculator.prototype.initEventsLandscape = function() {
	var that = this;

	// Numeric keys...
	$(document).off("tap", "#pageScientificLandscape #btnZeroLS").on("tap", "#pageScientificLandscape #btnZeroLS", function(event) {
		event.preventDefault();
		that.btnZero_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnOneLS").on("tap", "#pageScientificLandscape #btnOneLS", function(event) {
		event.preventDefault();
		that.btnOne_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnTwoLS").on("tap", "#pageScientificLandscape #btnTwoLS", function(event) {
		event.preventDefault();
		that.btnTwo_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnThreeLS").on("tap", "#pageScientificLandscape #btnThreeLS", function(event) {
		event.preventDefault();
		that.btnThree_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnFourLS").on("tap", "#pageScientificLandscape #btnFourLS", function(event) {
		event.preventDefault();
		that.btnFour_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnFiveLS").on("tap", "#pageScientificLandscape #btnFiveLS", function(event) {
		event.preventDefault();
		that.btnFive_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnSixLS").on("tap", "#pageScientificLandscape #btnSixLS", function(event) {
		event.preventDefault();
		that.btnSix_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnSevenLS").on("tap", "#pageScientificLandscape #pageScientificLandscape #btnSevenLS", function(event) {
		event.preventDefault();
		that.btnSeven_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnEightLS").on("tap", "#pageScientificLandscape #btnEightLS", function(event) {
		event.preventDefault();
		that.btnEight_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnNineLS").on("tap", "#pageScientificLandscape #btnNineLS", function(event) {
		event.preventDefault();
		that.btnNine_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnDecimalLS").on("tap", "#pageScientificLandscape #btnDecimalLS", function(event) {
		event.preventDefault();
		that.btnDecimal_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnNegativeLS").on("tap", "#pageScientificLandscape #btnNegativeLS", function(event) {
		event.preventDefault();
		that.btnNegative_Click();
		that.update();
	});
	
	// Operator buttons...
	$(document).off("tap", "#pageScientificLandscape #btnClearLS").on("tap", "#pageScientificLandscape #btnClearLS", function(event) {
		event.preventDefault();
		that.btnClear_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnBackspaceLS").on("tap", "#pageScientificLandscape #btnBackspaceLS", function(event) {
		event.preventDefault();
		that.btnBackspace_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnEqualsLS").on("tap", "#pageScientificLandscape #btnEqualsLS", function(event) {
		event.preventDefault();
		that.btnEquals_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnPlusLS").on("tap", "#pageScientificLandscape #btnPlusLS", function(event) {
		event.preventDefault();
		that.btnPlus_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnMinusLS").on("tap", "#pageScientificLandscape #btnMinusLS", function(event) {
		event.preventDefault();
		that.btnMinus_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnMultiplyLS").on("tap", "#pageScientificLandscape #btnMultiplyLS", function(event) {
		event.preventDefault();
		that.btnMultiply_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnDivideLS").on("tap", "#pageScientificLandscape #btnDivideLS", function(event) {
		event.preventDefault();
		that.btnDivide_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnExponentLS").on("tap", "#pageScientificLandscape #btnExponentLS", function(event) {
		event.preventDefault();
		that.btnExponent_Click();
		that.update();
	});
	
	// First page...	
	$(document).off("tap", "#pageScientificLandscape #btnMCLS").on("tap", "#pageScientificLandscape #btnMCLS", function(event) {
		event.preventDefault();
		that.btnMC_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnMRLS").on("tap", "#pageScientificLandscape #btnMRLS", function(event) {
		event.preventDefault();
		that.btnMR_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnMPlusLS").on("tap", "#pageScientificLandscape #btnMPlusLS", function(event) {
		event.preventDefault();
		that.btnMPlus_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnInverseLS").on("tap", "#pageScientificLandscape #btnInverseLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnInverse_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnPercent_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnSquareRootLS").on("tap", "#pageScientificLandscape #btnSquareRootLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnSquareRoot_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnXSquared_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnRootLS").on("tap", "#pageScientificLandscape #btnRootLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnRoot_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnModulus_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnPiLS").on("tap", "#pageScientificLandscape #btnPiLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnPi_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnE_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnSineLS").on("tap", "#pageScientificLandscape #btnSineLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		
		{ 
			if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnSineDegrees_Click(); }
			else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnSine_Click(); }
		}
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	
		{ 
			if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnArcSineDegrees_Click(); }
			else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnArcSine_Click(); }
		}
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnCosineLS").on("tap", "#pageScientificLandscape #btnCosineLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		
		{ 
			if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnCosineDegrees_Click(); }
			else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnCosine_Click(); }
		}
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	
		{ 
			if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnArcCosineDegrees_Click(); }
			else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnArcCosine_Click(); }
		}
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnTangentLS").on("tap", "#pageScientificLandscape #btnTangentLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		
		{ 
			if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnTangentDegrees_Click(); }
			else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnTangent_Click(); }
		}
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	
		{ 
			if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) 		{ that.btnArcTangentDegrees_Click(); }
			else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) { that.btnArcTangent_Click(); }
		}
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnNaturalLogLS").on("tap", "#pageScientificLandscape #btnNaturalLogLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnNaturalLog_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnEExponential_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnHyperbolicSineLS").on("tap", "#pageScientificLandscape #btnHyperbolicSineLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnHyperbolicSine_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnInverseHyperbolicSine_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnHyperbolicCosineLS").on("tap", "#pageScientificLandscape #btnHyperbolicCosineLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnHyperbolicCosine_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnInverseHyperbolicCosine_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnHyperbolicTangentLS").on("tap", "#pageScientificLandscape #btnHyperbolicTangentLS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnHyperbolicTangent_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnInverseHyperbolicTangent_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnLogBase10LS").on("tap", "#pageScientificLandscape #btnLogBase10LS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnLogBase10_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnTenExponential_Click(); }
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnOpenParenLS").on("tap", "#pageScientificLandscape #btnOpenParenLS", function(event) {
		event.preventDefault();
		that.btnOpenParen_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnCloseParenLS").on("tap", "#pageScientificLandscape #btnCloseParenLS", function(event) {
		event.preventDefault();
		that.btnCloseParen_Click();
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnEELS").on("tap", "#pageScientificLandscape #btnEELS", function(event) {
		event.preventDefault();
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) 		{ that.btnEE_Click(); }
		else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) 	{ that.btnRandom_Click(); }
		that.update();
	});	
	
	// State Functions...
	$(document).off("tap", "#pageScientificLandscape #btnSecondLS").on("tap", "#pageScientificLandscape #btnSecondLS", function(event) {
		event.preventDefault();
		
		// Switch internal state...
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) {
			that._buttonPage = swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND;
		} else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) {
			that._buttonPage = swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST;
		}
		
		// Change button texts...
		if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_1ST) {
			$("#pageScientificLandscape #btnSecondLS").html("2nd");
			$("#pageScientificLandscape #btnInverseLS").html("1/x");
			$("#pageScientificLandscape #btnSquareRootLS").html("&radic;<span style='text-decoration:overline'>x</span>");
			$("#pageScientificLandscape #btnRootLS").html("<span style='position:relative; top: -0.3em'>y</span>&radic;<span style='text-decoration:overline'>x</span>");
			$("#pageScientificLandscape #btnPiLS").html("Pi");
			$("#pageScientificLandscape #btnSineLS").html("Sin");
			$("#pageScientificLandscape #btnCosineLS").html("Cos");
			$("#pageScientificLandscape #btnTangentLS").html("Tan");
			$("#pageScientificLandscape #btnNaturalLogLS").html("ln");
			$("#pageScientificLandscape #btnHyperbolicSineLS").html("Sinh");
			$("#pageScientificLandscape #btnHyperbolicCosineLS").html("Cosh");
			$("#pageScientificLandscape #btnHyperbolicTangentLS").html("Tanh");
			$("#pageScientificLandscape #btnLogBase10LS").html("log<span style='position:relative; top: 0.3em'>10</span>");
			$("#pageScientificLandscape #btnEELS").html("EE");
		} else if (that._buttonPage == swisscalc.gui.scientificCalculator.BUTTON_PAGE_2ND) {
			$("#pageScientificLandscape #btnSecondLS").html("1st");
			$("#pageScientificLandscape #btnInverseLS").html("%");
			$("#pageScientificLandscape #btnSquareRootLS").html("x<span style='position:relative; top: -0.3em'>2</span>");
			$("#pageScientificLandscape #btnRootLS").html("Mod");
			$("#pageScientificLandscape #btnPiLS").html("e");
			$("#pageScientificLandscape #btnSineLS").html("Sin<span style='position:relative; top: -0.3em'>-1</span>");
			$("#pageScientificLandscape #btnCosineLS").html("Cos<span style='position:relative; top: -0.3em'>-1</span>");
			$("#pageScientificLandscape #btnTangentLS").html("Tan<span style='position:relative; top: -0.3em'>-1</span>");
			$("#pageScientificLandscape #btnNaturalLogLS").html("e<span style='position:relative; top: -0.3em'>x</span>");
			$("#pageScientificLandscape #btnHyperbolicSineLS").html("Sinh<span style='position:relative; top: -0.3em'>-1</span>");
			$("#pageScientificLandscape #btnHyperbolicCosineLS").html("Cosh<span style='position:relative; top: -0.3em'>-1</span>");
			$("#pageScientificLandscape #btnHyperbolicTangentLS").html("Tanh<span style='position:relative; top: -0.3em'>-1</span>");
			$("#pageScientificLandscape #btnLogBase10LS").html("10<span style='position:relative; top: -0.3em'>x</span>");
			$("#pageScientificLandscape #btnEELS").html("Rand");
		}		
		
		that.update();
	});
	
	$(document).off("tap", "#pageScientificLandscape #btnDegLS").on("tap", "#pageScientificLandscape #btnDegLS", function(event) {
		event.preventDefault();
		
		// Switch internal state...
		if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) {
			that._angleUnit = swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD;
		} else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) {
			that._angleUnit = swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG;
		}
		
		// Change button texts...
		if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_DEG) {
			$("#pageScientificLandscape #btnDegLS").html("Deg");
		} else if (that._angleUnit == swisscalc.gui.scientificCalculator.ANGLE_UNIT_RAD) {
			$("#pageScientificLandscape #btnDegLS").html("Rad");
		}

		that.update();
	});
};

// Occurs on keypress. Handles keyboard input.
swisscalc.gui.scientificCalculator.prototype.keyPress = function(e) {	
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
		case '+': this.btnPlus_Click(); 		this.update(); break;
		case '-': this.btnMinus_Click(); 		this.update(); break;
		case '*': this.btnMultiply_Click(); 	this.update(); break;
		case '/': this.btnDivide_Click(); 		this.update(); break;
		case '%': this.btnPercent_Click(); 		this.update(); break;
		case '^': this.btnExponent_Click(); 	this.update(); break;
		case '(': this.btnOpenParen_Click(); 	this.update(); break;
		case ')': this.btnCloseParen_Click(); 	this.update(); break;
	}
};

// Occurs on keydown. Handles "non-character" keyboard input.
swisscalc.gui.scientificCalculator.prototype.keyDown = function(e) {
	var code = e.keyCode || e.which;
	switch(code)
	{		
		// Backspace...
		case 8: this.btnBackspace_Click(); this.update(); break;
		
		// Enter...
		case 13: this.btnEquals_Click(); this.update(); break;
		
		// Delete...
		case 46: this.btnClear_Click(); this.update(); break;
	}
};

// Digit commands...
swisscalc.gui.scientificCalculator.prototype.btnZero_Click = function()  							{ this._calc.addDigit("0"); };
swisscalc.gui.scientificCalculator.prototype.btnOne_Click = function()   							{ this._calc.addDigit("1"); };
swisscalc.gui.scientificCalculator.prototype.btnTwo_Click = function()   							{ this._calc.addDigit("2"); };
swisscalc.gui.scientificCalculator.prototype.btnThree_Click = function() 							{ this._calc.addDigit("3"); };
swisscalc.gui.scientificCalculator.prototype.btnFour_Click = function()  							{ this._calc.addDigit("4"); };
swisscalc.gui.scientificCalculator.prototype.btnFive_Click = function()  							{ this._calc.addDigit("5"); };
swisscalc.gui.scientificCalculator.prototype.btnSix_Click = function()   							{ this._calc.addDigit("6"); };
swisscalc.gui.scientificCalculator.prototype.btnSeven_Click = function() 							{ this._calc.addDigit("7"); };
swisscalc.gui.scientificCalculator.prototype.btnEight_Click = function() 							{ this._calc.addDigit("8"); };
swisscalc.gui.scientificCalculator.prototype.btnNine_Click = function()  							{ this._calc.addDigit("9"); };
swisscalc.gui.scientificCalculator.prototype.btnDecimal_Click = function() 							{ this._calc.addDigit("."); };
swisscalc.gui.scientificCalculator.prototype.btnNegative_Click = function() 						{ this._calc.negate(); };

// Control commands...
swisscalc.gui.scientificCalculator.prototype.btnClear_Click = function() 							{ this._calc.clear(); };
swisscalc.gui.scientificCalculator.prototype.btnBackspace_Click = function() 						{ this._calc.backspace(); };
swisscalc.gui.scientificCalculator.prototype.btnEquals_Click = function() 							{ this._calc.equalsPressed(); };

// Nullary operators...
swisscalc.gui.scientificCalculator.prototype.btnPi_Click = function() 								{ this._calc.addNullaryOperator(swisscalc.lib.operatorCache.PiOperator); };
swisscalc.gui.scientificCalculator.prototype.btnE_Click = function() 								{ this._calc.addNullaryOperator(swisscalc.lib.operatorCache.EOperator); };
swisscalc.gui.scientificCalculator.prototype.btnRandom_Click = function() 							{ this._calc.addNullaryOperator(swisscalc.lib.operatorCache.RandomOperator); };

// Unary operators...
swisscalc.gui.scientificCalculator.prototype.btnSquareRoot_Click = function() 						{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.SquareRootOperator); };
swisscalc.gui.scientificCalculator.prototype.btnPercent_Click = function() 							{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.PercentOperator); };
swisscalc.gui.scientificCalculator.prototype.btnSine_Click = function() 							{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.SineOperator); };
swisscalc.gui.scientificCalculator.prototype.btnCosine_Click = function() 							{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.CosineOperator); };
swisscalc.gui.scientificCalculator.prototype.btnTangent_Click = function() 							{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.TangentOperator); };
swisscalc.gui.scientificCalculator.prototype.btnArcSine_Click = function() 							{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.ArcSineOperator); };
swisscalc.gui.scientificCalculator.prototype.btnArcCosine_Click = function() 						{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.ArcCosineOperator); };
swisscalc.gui.scientificCalculator.prototype.btnArcTangent_Click = function() 						{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.ArcTangentOperator); };
swisscalc.gui.scientificCalculator.prototype.btnSineDegrees_Click = function() 						{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.SineDegreesOperator); };
swisscalc.gui.scientificCalculator.prototype.btnCosineDegrees_Click = function() 					{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.CosineDegreesOperator); };
swisscalc.gui.scientificCalculator.prototype.btnTangentDegrees_Click = function() 					{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.TangentDegreesOperator); };
swisscalc.gui.scientificCalculator.prototype.btnArcSineDegrees_Click = function() 					{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.ArcSineDegreesOperator); };
swisscalc.gui.scientificCalculator.prototype.btnArcCosineDegrees_Click = function() 				{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.ArcCosineDegreesOperator); };
swisscalc.gui.scientificCalculator.prototype.btnArcTangentDegrees_Click = function() 				{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.ArcTangentDegreesOperator); };
swisscalc.gui.scientificCalculator.prototype.btnHyperbolicSine_Click = function() 					{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.HyperbolicSineOperator); };
swisscalc.gui.scientificCalculator.prototype.btnHyperbolicCosine_Click = function() 				{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.HyperbolicCosineOperator); };
swisscalc.gui.scientificCalculator.prototype.btnHyperbolicTangent_Click = function() 				{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.HyperbolicTangentOperator); };
swisscalc.gui.scientificCalculator.prototype.btnInverseHyperbolicSine_Click = function() 			{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.InverseHyperbolicSineOperator); };
swisscalc.gui.scientificCalculator.prototype.btnInverseHyperbolicCosine_Click = function() 			{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.InverseHyperbolicCosineOperator); };
swisscalc.gui.scientificCalculator.prototype.btnInverseHyperbolicTangent_Click = function() 		{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.InverseHyperbolicTangentOperator); };
swisscalc.gui.scientificCalculator.prototype.btnInverse_Click = function()							{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.InverseOperator); };
swisscalc.gui.scientificCalculator.prototype.btnNaturalLog_Click = function()  						{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.NaturalLogOperator); };
swisscalc.gui.scientificCalculator.prototype.btnLogBase10_Click = function()						{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.LogBase10Operator); };
swisscalc.gui.scientificCalculator.prototype.btnXSquared_Click = function()							{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.XSquaredOperator); };
swisscalc.gui.scientificCalculator.prototype.btnXCubed_Click = function()							{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.XCubedOperator); };
swisscalc.gui.scientificCalculator.prototype.btnEExponential_Click = function()						{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.EExponentialOperator); };
swisscalc.gui.scientificCalculator.prototype.btnTenExponential_Click = function()					{ this._calc.addUnaryOperator(swisscalc.lib.operatorCache.TenExponentialOperator); };

// Binary operators...
swisscalc.gui.scientificCalculator.prototype.btnPlus_Click = function() 							{ this._calc.addBinaryOperator(swisscalc.lib.operatorCache.AdditionOperator); };
swisscalc.gui.scientificCalculator.prototype.btnMinus_Click = function() 							{ this._calc.addBinaryOperator(swisscalc.lib.operatorCache.SubtractionOperator); };
swisscalc.gui.scientificCalculator.prototype.btnMultiply_Click = function() 						{ this._calc.addBinaryOperator(swisscalc.lib.operatorCache.MultiplicationOperator); };
swisscalc.gui.scientificCalculator.prototype.btnDivide_Click = function() 							{ this._calc.addBinaryOperator(swisscalc.lib.operatorCache.DivisionOperator); };
swisscalc.gui.scientificCalculator.prototype.btnModulus_Click = function() 							{ this._calc.addBinaryOperator(swisscalc.lib.operatorCache.ModulusOperator); };
swisscalc.gui.scientificCalculator.prototype.btnExponent_Click = function() 						{ this._calc.addBinaryOperator(swisscalc.lib.operatorCache.ExponentialOperator); };
swisscalc.gui.scientificCalculator.prototype.btnRoot_Click = function() 							{ this._calc.addBinaryOperator(swisscalc.lib.operatorCache.RootOperator); };
swisscalc.gui.scientificCalculator.prototype.btnEE_Click = function()								{ this._calc.addBinaryOperator(swisscalc.lib.operatorCache.EEOperator); };

// Parenthesis operators...
swisscalc.gui.scientificCalculator.prototype.btnOpenParen_Click = function() 						{ this._calc.openParen(); };
swisscalc.gui.scientificCalculator.prototype.btnCloseParen_Click = function()						{ this._calc.closeParen(); };

// Memory commands...
swisscalc.gui.scientificCalculator.prototype.btnMC_Click = function() 								{ this._calc.memoryClear(); };
swisscalc.gui.scientificCalculator.prototype.btnMR_Click = function() 								{ this._calc.memoryRecall(); };
swisscalc.gui.scientificCalculator.prototype.btnMPlus_Click = function() 							{ this._calc.memoryPlus(); };
