class V1::GreetingsController < ApplicationController
  def index
    size = Greeting.all.count
    greeting = Greeting.find(rand(1..size))
    render json: { greetings: [
      {
        message: greeting.message
      }
    ] }.to_json
  end
end
