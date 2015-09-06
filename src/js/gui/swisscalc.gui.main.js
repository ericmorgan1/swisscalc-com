//
// Eric Morgan
// Copyright (c) 2014. Do not copy or redistribute.
//

var swisscalc = swisscalc || {};
swisscalc.gui = swisscalc.gui || {};
swisscalc.gui.main = function() {};

// Returns the version. SHOULD BE SYNCED WITH cache.manifest
swisscalc.gui.main.getVersion = function() { return "20150827.001"; };

// Switches the CSS theme.
swisscalc.gui.main.setTheme = function(themeName) {
	switch(themeName)
	{
		case "spring":
			$("link[title=theme]").attr("href", "css/spring.min.css");
			break;
		case "summer":
			$("link[title=theme]").attr("href", "css/summer.min.css");
			break;
		case "fall":
			$("link[title=theme]").attr("href", "css/fall.min.css");
			break;
		case "winter":
			$("link[title=theme]").attr("href", "css/winter.min.css");
			break;
	}
};

// Saves the theme to localStorage
swisscalc.gui.main.saveTheme = function(themeName) {
	try { localStorage.Theme = themeName; }
	catch(err) { }
};

// Returns the current theme
swisscalc.gui.main.getTheme = function(themeName) {
	var cssTheme = $("link[title=theme]").attr("href");
	switch(cssTheme)
	{
		case "css/spring.min.css":
			return "spring";
		case "css/summer.min.css":
			return "summer";
		case "css/fall.min.css":
			return "fall";
		case "css/winter.min.css":
			return "winter";
	}
};

// Returns the theme saved in localStorage
swisscalc.gui.main.loadTheme = function() {
	try { return localStorage.Theme; }
	catch(err) { return ""; }	
};

// Changes the theme
swisscalc.gui.main.changeTheme = function(theme) {
	swisscalc.gui.main.setTheme(theme);
	swisscalc.gui.main.saveTheme(theme);
	$('#panelSettingsAll').panel('close');
};

// Finds and returns the "materialize.css" file...
swisscalc.gui.main.getWavesCss = function() {
	var cssFiles = document.querySelectorAll("link[rel='stylesheet']");
	for (var i = 0; i < cssFiles.length; i++)
		if (cssFiles[i].href.indexOf("materialize.css") >= 0)
			return cssFiles[i];	
	return null;
};

// Returns true if the Waves CSS is disabled...
swisscalc.gui.main.isWavesDisabled = function() {
	var cssWaves = swisscalc.gui.main.getWavesCss();
	var isDisabled = cssWaves.getAttribute("disabled");
	if (isDisabled == null) isDisabled = false;
	return isDisabled;
};

// Sets the Waves CSS to enabled/disabled...
swisscalc.gui.main.setWavesDisabled = function(isDisabled) {
	var cssWaves = swisscalc.gui.main.getWavesCss();
	if (isDisabled) { cssWaves.setAttribute("disabled", "disabled"); } 
	else { cssWaves.removeAttribute("disabled"); }
};

// Toggles the "materialize.css" file on/off
swisscalc.gui.main.toggleWavesDisabled = function() {
	var isDisabled = swisscalc.gui.main.isWavesDisabled();
	swisscalc.gui.main.setWavesDisabled(!isDisabled);
	swisscalc.gui.main.saveWavesDisabled(!isDisabled);
};

// Saves IsWavesDisabled to local storage
swisscalc.gui.main.saveWavesDisabled = function(isDisabled) {
	try { localStorage.IsWavesDisabled = isDisabled; }
	catch(err) { }
};

// Returns the IsWavesDisabled saved in local storage
swisscalc.gui.main.loadWavesDisabled = function() {
	try { var isDisabled = localStorage.IsWavesDisabled; return isDisabled === "true"; }
	catch(err) { return ""; }	
};

// Does a page change to the given href with the given transition
swisscalc.gui.main.changePage = function(href, transition) {
	$.mobile.changePage(href, { transition: transition });
};

// Returns the page that is needed, based on the current active page and whether we are in portrait or landscape orientation
swisscalc.gui.main.getNeededPage = function(activePage, isPortrait) {
	if (activePage.indexOf("pageScientific") >= 0) {
		return (isPortrait) ? "#pageScientificPortrait" : "#pageScientificLandscape";
	} else if (activePage.indexOf("pageTip") >= 0) {
		return (isPortrait) ? "#pageTipPortrait" : "#pageTipLandscape";
	} else if (activePage.indexOf("pageLoan") >= 0) {
		return (isPortrait) ? "#pageLoanPortrait" : "#pageLoanLandscape";
	}
	
	return "";
}

// SCRIPTS TO RUN IMMEDIATELY...

// Create each page, initialize sliders, etc.
$(document).ready(function() {
	$(document).trigger("create", "#pageScientificPortrait");
	$(document).trigger("create", "#pageScientificLandscape");
	$(document).trigger("create", "#pageTipPortrait");
	$(document).trigger("create", "#pageTipLandscape");
	$(document).trigger("create", "#pageLoanPortrait");
	$(document).trigger("create", "#pageLoanLandscape");
	
	$("#rngTip").slider();
	$("#rngTipLS").slider();
});

// Initialize calculators and theme...
;(function() {	
	// Keep static references to each calculator (makes initialization easier)...
	swisscalc.gui.main.scientificCalculator = new swisscalc.gui.scientificCalculator();
	swisscalc.gui.main.loanCalculator = new swisscalc.gui.loanCalculator();
	swisscalc.gui.main.tipCalculator = new swisscalc.gui.tipCalculator();
	
	// Initialize calculators...
	swisscalc.gui.main.scientificCalculator.init();
	swisscalc.gui.main.tipCalculator.init();
	swisscalc.gui.main.loanCalculator.init();
	
	// Initialize the theme...
	var themeName = swisscalc.gui.main.loadTheme();
	if (themeName != "") swisscalc.gui.main.setTheme(themeName);
	
	// Initialize WavesDisabled...
	var isWavesDisabled = swisscalc.gui.main.loadWavesDisabled();
	swisscalc.gui.main.setWavesDisabled(isWavesDisabled);
})();

// Initialize settings panel...
;(function() {
	// Initialize settings panel...
	$('.panelSettingsAll').panel();
	$(document).off("click", ".spnMenuStatic").on("click", ".spnMenuStatic", function() {
		$('.panelSettingsAll').panel('open');
	});
	
	$("#spnVersion").text("Version: " + swisscalc.gui.main.getVersion());
})();

// Handle orientation changes...
;(function() {
	$(window).off('orientationchange').on('orientationchange', function(e) { 		
		if (e.orientation) {
			var activePage = ($.mobile.activePage) ? $.mobile.activePage.attr("id") : window.location.hash;
			var isPortrait = (e.orientation === "portrait");
			var newPage = swisscalc.gui.main.getNeededPage(activePage, isPortrait);
			
			// TODO: This is needed for the loan calculator for some reason.
			if (activePage.indexOf("pageLoan") == 0) {
				swisscalc.gui.main.loanCalculator._orientation = (isPortrait)
					? swisscalc.gui.loanCalculator.ORIENTATION_PORTRAIT
					: swisscalc.gui.loanCalculator.ORIENTATION_LANDSCAPE;
			}
			
			$.mobile.changePage(newPage, { transition: "none" });
			$.mobile.navigate(newPage, { transition: "none" });
		}
	});
})();

// Set default view (if not one) and update the orientation...
;(function() {	
	// Set the defalt view if there wasn't one in the URL...
	var hash = window.location.hash;
	if (hash.indexOf("#page") < 0) {
		// Use scientific as default; Initialize based on starting orientation...
		window.location.hash = "pageScientificPortrait";
		var startingDiv = (window.innerHeight > window.innerWidth) ? "#pageScientificPortrait" : "#pageScientificLandscape";
		$.mobile.navigate(startingDiv,  { transition: "none" });
	}
	
	// Update page based on orientation...
	$(window).orientationchange();
})();
