class Admin::BlocksController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @blocks = Block.all
  end

  def new; end

  def edit
    @id = params[:id]
    @block = Block.find(@id)
  end

  def create
    block = Block.create(title: params[:title])
    redirect_to admin_root_path
  end

  def update
    block = Block.find(params[:id])
    block.update(title: params[:block][:title])
    redirect_to request.referrer
  end

  def destroy
    block = Block.find(params[:id])
    block.destroy
  end
end
