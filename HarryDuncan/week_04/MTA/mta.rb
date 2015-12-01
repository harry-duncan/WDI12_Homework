# Title: MTA Lab
# Activity:

# Students should create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.

# There are 3 subway lines:

# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th

# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st

# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# All 3 subway lines intersect at Union Square, but there are no other intersection points.

# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.

# Hints:

# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.

# Make subway lines keys in a hash, while the values are an array of all the stops on each line.

# The key to the lab is to find the intersection of the lines at Union Square.

# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

require 'pry'
require 'colorize'

def lines
	{
		:lineN => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
		:lineL => ["8th Street", "6th", "Union Square", "3rd", "1st"],
		:line6 => ["Grand Central", "33rd", "28th Street", "23rd Street", "Union Square", "Astor Place"]
	}
end

def travel start_line, start_stop, end_line, end_stop
	
	trip = []
	trip_start = []
	trip_end = []

	if start_line == end_line

		start_point = lines[start_line].index(start_stop)
		end_point = lines[end_line].index(end_stop)

		if start_point < end_point
			lines[start_line][start_point..end_point].each do |x|
				trip << x
			end
			puts "You need to travel through these stations".green
			puts trip.join(' ')
		else  
			lines[start_line][end_point..start_point].reverse.each do |x|
				trip << x
			end
			puts "You need to travel through these stations".green
			puts trip.join(' ')
		end

	elsif start_line != end_line 

		start_point = lines[start_line].index(start_stop)
		end_point = lines[end_line].index(end_stop)
		union_start = lines[start_line].index("Union Square")
		union_end = lines[end_line].index("Union Square")

		if start_point < union_start
			lines[start_line][start_point..union_start].each do |x|
				trip_start << x
			end
			puts "You need to travel through these stations to Union".green
			puts trip_start.join(' ')
			puts "You need to change at Union Square".red
		else start_point > union_start
			lines[start_line][union_start..start_point].reverse.each do |x|
				trip_start << x
			end
			puts "You need to travel through these stations to Union".green
			puts trip_start.join(' ')
			puts "You need to change at Union Square".red
		end

		if end_point < union_end
			lines[end_line][end_point..union_end].reverse.each do |x|
				trip_end << x
			end
			puts "You need to travel through these stations from Union".green
			puts trip_end.join(' ')
		else end_point > union_end
			lines[end_line][union_end..end_point].reverse.each do |x|
				trip_end << x
			end
			puts "You need to travel through these stations from Union".green
			puts trip_end.join(' ')
		end
	end

end

puts "please enter your travel details".green

puts "(lineN) - Times Square, 34th, 28th, 23rd, Union Square, 8th.".colorize(:light_blue)

puts "(lineL) - 8th Street, 6th, Union Square, 3rd, 1st.".colorize(:light_blue)

puts "(line6) - Grand Central, 33rd, 28th Street, 23rd Street, Union Square, Astor Place.".colorize(:light_blue)

puts "Enter your start line".red

start_line = gets.chomp.to_sym

puts "Enter your start stop".red

start_stop = gets.chomp.to_s

puts "Enter your end line".red

end_line = gets.chomp.to_sym

puts "Enter your end stop".red

end_stop = gets.chomp.to_s

travel start_line, start_stop, end_line, end_stop