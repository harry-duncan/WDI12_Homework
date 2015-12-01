require 'pry'

puts "what year do you want to convert?"

year = gets.chomp.to_i

def is_leap_year? year
	if year % 4 == 0 && (year % 100 != 0  || year % 400 == 0)
		true
	else 
		false
	end
end

binding.pry

is_leap_year? 1900































