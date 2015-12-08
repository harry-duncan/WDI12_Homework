# CREATE TABLE movies (	
# 	id INTEGER PRIMARY KEY AUTOINCREMENT,
# 	title TEXT,
# 	genre TEXT,
# 	movie_poster TEXT,
# 	actors TEXT,
# 	plot TEXT
# );


require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3',
	:database => 'movie_data.db'
)

after do
	ActiveRecord::Base.connection.close
end

get '/' do 
	erb :home
end

get '/info' do
	# @movies = Movie.all
	# movie = movie.new
	# This will ultimately be an IF statement or a smaller function 
	# movie_title = params[:name_input]
	# redirect to('/') if @movie_title == ''
	# movie_url = "http://omdbapi.com/?t=#{params[:name_input]}"
	# movie_info = HTTParty.get movie_url;

	# @title = movie_info['Title'] # This displays 
	# @genre = movie_info['Genre']
	# @movie_poster = movie_info['Poster'] # This displays 
	# @Actors = movie_info['Actors'] # This displays 
	# @plot = movie_info['Plot'] # This displays 



@movie = Movie.find_by :name => params[:name_input].upcase

if @movie.nil
	movie_url = "http://omdbapi.com/?t=#{params[:name_input]}"
	movie_info = HTTParty.get movie_url;

	@movie = Movie.new
	@movie.name = movie_info['Title'].upcase
	@movie.genre = movie_info['Genre']
	@movie.poster = movie_info['Poster']
	@movie.actors = movie_info['Actors']
	@movie.plot = movie_info['Plot']

	@movie.save
end

	erb :info
	
end



















end




