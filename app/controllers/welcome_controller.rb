class WelcomeController < ApplicationController

  def index
  	@baseURL = "https://s3-us-west-2.amazonaws.com/juicebox.xyz/audios/"
  	@audioList = ["FlipFlap1", "FlipFlap2", "FlipFlap3", "FlipFlap4",
  				  "FlipFlap5", "FlipFlap6", "FlipFlap7", "FlipFlap8"]

  end

  def about
  end
  
end

