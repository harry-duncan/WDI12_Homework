class SecretController < ApplicationController
	def home
	end

	def answer
		@result = params[:answer]

		if @result == rand(1..10)
			@answer = "you win"
		else 
			@answer = "you lose" 
		end
	end
end