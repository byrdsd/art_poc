class BlocksController < ApplicationController
  def index
    blocks = Block.all.joins(:flashcards).order('blocks.id ASC').distinct
    render json: blocks.as_json(only: [:title, :id], include: {flashcards: {only: [:front, :back, :id]}})
  end
end
