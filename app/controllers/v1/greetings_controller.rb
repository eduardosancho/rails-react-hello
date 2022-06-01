class V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      {
        name: 'some-thing',
        guid: '4512-4587-54965'
      }
    ] }.to_json
  end
end
