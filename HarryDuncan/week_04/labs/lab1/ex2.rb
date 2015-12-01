# 2. Air Conditioning

# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."


puts "what is the current temperature?"

current_temp = gets.to_i

puts "Is the air con working Y/N?"

air_con_status = gets.chomp.downcase

if air_con_status == 'y'
	air_con_status = true 
else 
	air_con_status = false
end

puts "What temp would you like it to be?"

desired_temp = gets.to_i



if air_con_status == true
	puts "Turn on the A/C Please"
elsif air_con_status == false && current_temp == desired_temp 
	puts "Fix the A/C now! It's hot!"
else air_con_status == false && current_temp < desired_temp
	puts "Fix the A/C whenever you have the chance... It's cool..."
end
