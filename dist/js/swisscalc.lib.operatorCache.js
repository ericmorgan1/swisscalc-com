var swisscalc=swisscalc||{};swisscalc.lib=swisscalc.lib||{},swisscalc.lib.operatorCache=function(){},swisscalc.lib.operatorCache.AdditionOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_BINARY,swisscalc.lib.operator.ASSOCIATIVITY_LEFT,2,2,!1,!1,function(r){var a=r.popOperand(),s=r.popOperand();return a+s}),swisscalc.lib.operatorCache.SubtractionOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_BINARY,swisscalc.lib.operator.ASSOCIATIVITY_LEFT,2,2,!1,!1,function(r){var a=r.popOperand(),s=r.popOperand();return s-a}),swisscalc.lib.operatorCache.MultiplicationOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_BINARY,swisscalc.lib.operator.ASSOCIATIVITY_LEFT,3,2,!1,!1,function(r){var a=r.popOperand(),s=r.popOperand();return a*s}),swisscalc.lib.operatorCache.DivisionOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_BINARY,swisscalc.lib.operator.ASSOCIATIVITY_LEFT,3,2,!1,!1,function(r){var a=r.popOperand(),s=r.popOperand();return s/a}),swisscalc.lib.operatorCache.ModulusOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_BINARY,swisscalc.lib.operator.ASSOCIATIVITY_LEFT,3,2,!1,!1,function(r){var a=r.popOperand(),s=r.popOperand();return s%a}),swisscalc.lib.operatorCache.ExponentialOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_BINARY,swisscalc.lib.operator.ASSOCIATIVITY_RIGHT,4,2,!1,!1,function(r){var a=r.popOperand(),s=r.popOperand();return Math.pow(s,a)}),swisscalc.lib.operatorCache.RootOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_BINARY,swisscalc.lib.operator.ASSOCIATIVITY_RIGHT,4,2,!1,!1,function(r){var a=r.popOperand(),s=r.popOperand();return Math.pow(s,1/a)}),swisscalc.lib.operatorCache.EEOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_BINARY,swisscalc.lib.operator.ASSOCIATIVITY_RIGHT,10,2,!1,!1,function(r){var a=r.popOperand(),s=r.popOperand();return s*Math.pow(10,a)}),swisscalc.lib.operatorCache.PiOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_NULLARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,0,!1,!1,function(r){return Math.PI}),swisscalc.lib.operatorCache.EOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_NULLARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,0,!1,!1,function(r){return Math.E}),swisscalc.lib.operatorCache.RandomOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_NULLARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,0,!1,!1,function(r){return Math.random()}),swisscalc.lib.operatorCache.NegateOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return-1*a}),swisscalc.lib.operatorCache.InverseOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return 1/a}),swisscalc.lib.operatorCache.EExponentialOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.pow(Math.E,a)}),swisscalc.lib.operatorCache.TenExponentialOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.pow(10,a)}),swisscalc.lib.operatorCache.SquareRootOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.sqrt(a)}),swisscalc.lib.operatorCache.CubeRootOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.cbrt(a)}),swisscalc.lib.operatorCache.XSquaredOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return a*a}),swisscalc.lib.operatorCache.XCubedOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.pow(a,3)}),swisscalc.lib.operatorCache.PercentOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return a/100}),swisscalc.lib.operatorCache.LogBase10Operator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.log(a)/Math.LN10}),swisscalc.lib.operatorCache.NaturalLogOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.log(a)}),swisscalc.lib.operatorCache.SineOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.sin(a)}),swisscalc.lib.operatorCache.CosineOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.cos(a)}),swisscalc.lib.operatorCache.TangentOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.tan(a)}),swisscalc.lib.operatorCache.ArcSineOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.asin(a)}),swisscalc.lib.operatorCache.ArcCosineOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.acos(a)}),swisscalc.lib.operatorCache.ArcTangentOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.atan(a)}),swisscalc.lib.operatorCache.SineDegreesOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.sin(swisscalc.lib.operator.degreesToRadians(a))}),swisscalc.lib.operatorCache.CosineDegreesOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.cos(swisscalc.lib.operator.degreesToRadians(a))}),swisscalc.lib.operatorCache.TangentDegreesOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.tan(swisscalc.lib.operator.degreesToRadians(a))}),swisscalc.lib.operatorCache.ArcSineDegreesOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return swisscalc.lib.operator.radiansToDegrees(Math.asin(a))}),swisscalc.lib.operatorCache.ArcCosineDegreesOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return swisscalc.lib.operator.radiansToDegrees(Math.acos(a))}),swisscalc.lib.operatorCache.ArcTangentDegreesOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return swisscalc.lib.operator.radiansToDegrees(Math.atan(a))}),swisscalc.lib.operatorCache.HyperbolicSineOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return.5*(Math.pow(Math.E,a)-Math.pow(Math.E,-1*a))}),swisscalc.lib.operatorCache.HyperbolicCosineOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return.5*(Math.pow(Math.E,a)+Math.pow(Math.E,-1*a))}),swisscalc.lib.operatorCache.HyperbolicTangentOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return(1-Math.pow(Math.E,-2*a))/(1+Math.pow(Math.E,-2*a))}),swisscalc.lib.operatorCache.InverseHyperbolicSineOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.log(a+Math.sqrt(a*a+1))}),swisscalc.lib.operatorCache.InverseHyperbolicCosineOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return Math.log(a+Math.sqrt(a*a-1))}),swisscalc.lib.operatorCache.InverseHyperbolicTangentOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_UNARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,1,!1,!1,function(r){var a=r.popOperand();return.5*Math.log((1+a)/(1-a))}),swisscalc.lib.operatorCache.OpenParenOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_NULLARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,0,!0,!1,function(r){console.error("Cannot evaluate open parenthesis.")}),swisscalc.lib.operatorCache.CloseParenOperator=new swisscalc.lib.operator(swisscalc.lib.operator.ARITY_NULLARY,swisscalc.lib.operator.ASSOCIATIVITY_NONE,0,0,!1,!0,function(r){console.error("Cannot evaluate close parenthesis.")});