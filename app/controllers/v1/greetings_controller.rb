class V1::GreetingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'some-thing',
        guid: '4512-4587-54965'
      }
    ] }.to_json
  end
end
