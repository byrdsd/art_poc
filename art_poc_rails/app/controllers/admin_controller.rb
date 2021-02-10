class AdminController < ApplicationController
  def show
    @blocks = Block.select(:title)
  end
end
