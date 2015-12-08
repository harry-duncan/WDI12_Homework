class RpsController < ApplicationController
	def home
	end

	def choice

		@player = params[:choice]
		if @player == "rock"
			@player_image = '<img src="http://www.prowrestling.com/wp-content/uploads/2015/10/the-rock.png" alt="">'
		elsif @player == "paper"
			@player_image = '<img src="https://avoidingserfdom.files.wordpress.com/2015/03/htler.jpg" alt="">'
		else 
			@player_image = '<img src="http://www.sacredheart.edu/media/sacredheart/vista/EdwardScissorhandsAliciaProvenzano.jpg" alt="">'
		end


		@random = rand(1..3)
		if @random == 1
			@computer = '<img src="http://www.prowrestling.com/wp-content/uploads/2015/10/the-rock.png" alt="">'
		elsif @random == 2
			@computer = '<img src="https://avoidingserfdom.files.wordpress.com/2015/03/htler.jpg" alt="">'
		else
			@computer = '<img src="http://www.sacredheart.edu/media/sacredheart/vista/EdwardScissorhandsAliciaProvenzano.jpg" alt="">'
		end

	  if @random == 1 && params[:choice] == "rock"
	    @result = "Tie"
	  elsif @random == 1 && params[:choice] == "paper"
	    @result = "You Win" 
	  elsif @random == 1 && params[:choice] == "scissors"
	    @result = "You Lose"
	  elsif @random == 2 && params[:choice] == "rock"
	    @result = "You Lose"
	  elsif @random == 2 && params[:choice] == "paper"
	    @result = "Tie"
	  elsif @random == 2 && params[:choice] == "scissors"
	    @result = "You Win"
	  elsif @random == 3 && params[:choice] == "rock"
	    @result = "You Win" 
	  elsif @random == 3 && params[:choice] == "paper"
	    @result = "You Lose"
	  elsif @random == 3 && params[:choice] == "scissors"
	    @result = "You Tie"
	  end    
	  
	end
end




# if rock wins http://4.bp.blogspot.com/-gpFgKrBo_vU/U_DbfxhGtQI/AAAAAAAACU0/lqK0bIcTv00/s1600/scissors.jpg



# if paper wins https://upload.wikimedia.org/wikipedia/commons/f/fc/USA_in_The_Man_in_the_High_Castle.png



# if scissors wins http://static3.fjcdn.com/comments/Biggest+war+solved+by+rock+paper+scissors+ww2+_6bacc0e7d2a4929e2230b9791f6ff6a5.jpg