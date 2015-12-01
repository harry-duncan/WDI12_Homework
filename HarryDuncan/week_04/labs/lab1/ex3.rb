# 3. Sydney Suburbs

# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

puts "What suburb do you live in?"

suburb = gets.chomp.downcase

# if suburb == "potts point"
# 	puts "Look at me"
# elsif suburb == "newtown"
# 	puts "nice try melbourne"
# else
# 	puts "nice mate"
# end


puts case suburb 
when "potts point", "mosman", "pymble"
	"look at me"
when "newtown"
	"nice try melbourne"
else 
	"nice mate"
end


