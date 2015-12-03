require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'


get '/' do 
	erb :home
end

get '/artists' do 
	@artists = query_db 'SELECT * FROM artists'
	erb :artists_index
end

get '/artists/new' do 
	erb :artists_new	
end

post '/artists' do 
	query = "INSERT INTO artists (name, stage_name, genre, label, image, site, sound) VALUES ('#{params[:name]}', '#{params[:stage_name]}', '#{params[:genre]}', '#{params[:label]}', '#{params[:image]}', '#{params[:site]}', '#{params[:sound]}')"
	query_db query
	redirect to('/artists')
end

get '/artists/:id' do 
	@artists = query_db "SELECT * FROM artists WHERE id=#{params[:id]}"
	@artist = @artists.first
	erb :artists_show
end

def query_db sql 
	db = SQLite3::Database.new 'music_artists.db'
	db.results_as_hash = true

	puts sql

	result = db.execute sql
	result
end

get '/artists/:id/delete' do 
	query_db "DELETE FROM artists WHERE id=#{ params[:id] }"
	redirect to('/artists')
end

get '/artists/:id/edit' do 
	artists = query_db "SELECT * FROM artists WHERE id=#{params[:id] }"
	@artist = artists.first

	erb :artists_edit
end

post '/artists/:id' do
	query = "UPDATE artists SET name='#{params[:name]}', stage_name='#{params[:stage_name]}', genre='#{params[:genre]}', label='#{params[:label]}', image='#{params[:image]}', site='#{params[:site]}', sound='#{params[:sound]}' WHERE id=#{ params['id'] }"
	query_db query

	redirect to "/artists/#{ params[:id] }"
end