class Calculator
	def ask (question)
	 result = question.match( /What is (-?\d+) (\w+) \w? (-?\d+)?/ )
	 if result[2] == 'plus'
	   result[1].to_i + result[3].to_i
	 elsif result[2] == 'minus'
	   result[1].to_i - result[3].to_i
	 elsif result[2] == 'multiplied'
	   result[1].to_i * result[3].to_i
	 elsif result[2] == 'divided'
	   result[1].to_i / result[3].to_i
	 else
	   'could not complete the math'
	 end
	end
end

calc = Calculator.new
puts calc.ask("What is 5 plus 13?")
puts calc.ask("What is 7 minus 5?")
puts calc.ask("Whats -6 multiplied by 4?")
puts calc.ask("Whats 25 divided by -5?")
