class MagicController < ApplicationController 
	def home
	end
	def answer

			num = rand(10)
			if num >= 5
				@random = "Pretty likely"
			else 
				@random = "good luck son!"
			end
	
	end
end