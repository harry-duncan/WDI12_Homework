require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
	erb :home 
end

get '/result' do


	@x = params[:stock_code].upcase.to_s

	redirect to('/') if @x == ''
	
	@stock_data = YahooFinance::get_quotes(YahooFinance::StandardQuote,@x)
	@value = @stock_data[@x].lastTrade

	erb :result 
end