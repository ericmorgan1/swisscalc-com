var swisscalc=swisscalc||{};swisscalc.display=swisscalc.display||{},swisscalc.display.memoryDisplay=function(){this._display="",this._memValue=0,this._hasMemory=!1},swisscalc.display.memoryDisplay.prototype.hasMemory=function(){return this._hasMemory},swisscalc.display.memoryDisplay.prototype.getCurrentDisplay=function(){return this._display},swisscalc.display.memoryDisplay.prototype.memoryRecall=function(){return this._memValue},swisscalc.display.memoryDisplay.prototype.memorySet=function(s){this._hasMemory=!0,this._memValue=s,this._display="M"},swisscalc.display.memoryDisplay.prototype.memoryPlus=function(s){this._hasMemory=!0,this._memValue+=s,this._display="M"},swisscalc.display.memoryDisplay.prototype.memoryMinus=function(s){this._hasMemory=!0,this._memValue-=s,this._display="M"},swisscalc.display.memoryDisplay.prototype.memoryClear=function(){this._hasMemory=!1,this._memValue=0,this._display=""};