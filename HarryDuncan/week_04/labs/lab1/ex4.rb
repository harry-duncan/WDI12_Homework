# Title: Guess The Number
# Activity:

# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:

# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:

# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

print "what is the maximum number you want to set"
max_guess = gets.to_i

random_number = Random.rand 0..max_guess
puts "guess a number(0- #{max_guess})!"

guess = gets.to_i


until random_number == guess 
	if guess > random_number
		puts "Wrong, guess lower"
	else 
		puts "wrong, guess higher"
	end
		puts "guess again(0- #{max_guess}!"
		guess = gets.to_i
end

puts "you win"




	
