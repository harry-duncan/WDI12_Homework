class OceansController < ApplicationController
  def index
  	@oceans = Ocean.all
  end

  def show
  	@ocean = Ocean.find params[:id] 
  end

  def new
  end
  
end
