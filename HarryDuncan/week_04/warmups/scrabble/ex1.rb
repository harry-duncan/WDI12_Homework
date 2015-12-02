# Scrabble Score
# Write a JS function that, given a word, computes the scrabble score for that word.

# It should look like the following:

# Scrabble.score("cabbage")
# # => 14
# Letter Values

# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions (we won't tell you how to implement this!)

# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.

require 'pry'

def scores
    {
     'A' => 1,
     'B' => 3, 
     'C' => 3, 
     'D' => 2, 
     'E' => 1, 
     'F' => 4, 
     'G' => 2, 
     'H' => 4, 
     'I' => 1, 
     'J' => 8, 
     'K' => 5, 
     'L' => 1, 
     'M' => 3, 
     'N' => 1, 
     'O' => 1, 
     'P' => 3, 
     'Q' => 10, 
     'R' => 1, 
     'S' => 1, 
     'T' => 1, 
     'U' => 1, 
     'V' => 4, 
     'W' => 4, 
     'X' => 8, 
     'Y' => 4, 
     'Z' => 10,  
    }
end

def score word

	# score = 0

	# word.chars.each do |letter|
	# 	score += scores[letter] || 0
	# end
	# score 

	word.upcase.chars.reduce(0) {|sum, letter| sum += scores[letter] || 0} # This is using the reduce method called an enumerator kind of acts like an each loop behind the scenes
	# Takes a sum (0)

end

puts score('hello&')


puts "Please enter your word to be scored: "

word = gets.chomp.to_s.upcase



