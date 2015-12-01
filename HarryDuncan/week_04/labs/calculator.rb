def prompt(message)
	print message
	gets.chomp
end

# choice = prompt("Please enter your choice: ")

# puts "You entered your #{choice}."

def menu
	puts "(a) - addition"
	puts "(s) - subtraction"
	puts "(m) - muliplication"
	puts "(d) - division"
	puts "(p) - power"
	puts "(sq) - square"
	puts "(q) - quit"
	prompt("enter your choice: ").downcase
end

def add
	puts prompt("firstnumber: ").to_f + prompt("Second number: ").to_f
end

def subtract
	puts prompt("firstnumber: ").to_f - prompt("Second number: ").to_f
end

def mulitiply
	puts prompt("firstnumber: ").to_f * prompt("Second number: ").to_f
end

def divide
	puts prompt("firstnumber: ").to_f / prompt("Second number: ").to_f
end

def power
	puts prompt("firstnumber: ").to_f ** prompt("Second number: ").to_f
end

def square
	puts "please enter number: "
	x = gets.to_i
	puts Math.sqrt(x)
end

choice = menu

until choice == "q"

	case choice
	when "a"
		add
	when "s"
		subtract
	when "m"
		mulitiply
	when "d"
		divide
	when "p"
		power
	when "sq"
		square
	else
		puts "invalid selection"
	end

	choice = menu
end

puts "thankyou for using this calculator"














	
