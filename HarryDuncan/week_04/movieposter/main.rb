require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do 
	erb :home
end

get '/info' do

	movie_title = params[:name_input]

	redirect to('/') if @movie_title == ''

	movie_url = "http://omdbapi.com/?t=#{movie_title}"

	movie_info = HTTParty.get movie_url;

	@title = movie_info['Title'] # This displays 
	@genre = movie_info['Genre']
	@movie_poster = movie_info['Poster'] # This displays 
	@Actors = movie_info['Actors'] # This displays 
	@plot = movie_info['Plot'] # This displays 

	erb :info
end



