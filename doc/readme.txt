Operators.js

// Operators are required to have the following properties/methods:
// Arity:
//      0 = Nullary
//		1 = Unary
//		2 = Binary
//
// Associativity:
// 		0 = None
//		1 = Right
// 		2 = Left
//
// Precedence:
//		Relative to other operators
//
// NumOperands:
//		Number of operands used by operator
//
// IsOpenParen:
//		False unless open parenthesis
//
// IsCloseParen:
//		False unless close parenthesis
//
// Evaluate(sy)
//		Must evaluate the operator from the given ShuntingYard object.







Calculator.js
//
//
// State:
//	0 = AwaitingOperand
//	0 = AwaitingOperator
//	1 = EnteringOperand
//	2 = EnteringOperator
//
// You may notice that AwaitingOperand and AwaitingOperator have the same state
// For all practical purposes, these states are identical.
// You will always have a number on the screen, so it doesn't matter if you press
// an operator (like +) or start typing a new number. The behavior will be the same.
// TODO: Consider changing it to "AwaitingCommand"