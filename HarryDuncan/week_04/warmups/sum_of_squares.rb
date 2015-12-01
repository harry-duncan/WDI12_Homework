# Sum of Squares and Squares of Sums
# The sum of the squares of the first ten natural numbers is,

# 1**2 + 2**2 + ... + 10**2 = 385

# The square of the sum of the first ten natural numbers is,

# (1 + 2 + ... + 10)**2 = 55**2 = 3025

# Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

# Make it so that it doesn't just work for the number 10.

require 'pry'

def sum_of_squares num_for_sum

	result = 0
	1.upto(num_for_sum) {|x| result += (x ** 2)}
	puts result

end

def squares_of_sums num_for_square

	result = 0
	1.upto(num_for_square) {|x| result += x}
	puts result ** 2

end

puts "Enter a number get the sum of its squares: "

num_for_sum = gets.to_i

puts "you chose #{num_for_sum}."

sum_of_squares num_for_sum

puts "Enter a number get the sum of its squares: "

num_for_square = gets.to_i

puts "you chose #{num_for_square}."

squares_of_sums num_for_square
