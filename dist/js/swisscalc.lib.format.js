var swisscalc=swisscalc||{};swisscalc.lib=swisscalc.lib||{},swisscalc.lib.format=function(){},swisscalc.lib.format.groupDigits=function(s){var i=s.toString().split(".");return i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),i.join(".")},swisscalc.lib.format.asUSCurrency=function(s){var i=s.toFixed(2);return i=swisscalc.lib.format.groupDigits(i),"-"==i.charAt(0)?"-$"+i.substring(1):"$"+i};