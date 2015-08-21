class WelcomeController < ApplicationController

  def index
  	@baseURL = "https://s3-us-west-2.amazonaws.com/juicebox.xyz/audios/"
  	@audioList = ["FlipFlap1.mp3", "FlipFlap2.mp3", "FlipFlap3.mp3", "FlipFlap4.mp3",
  				  "FlipFlap5.mp3", "FlipFlap6.mp3", "FlipFlap7.mp3", "FlipFlap8.mp3"]

  end

  def about
  end
  
end

