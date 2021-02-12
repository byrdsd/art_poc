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
    block = Block.create(block_params)
    redirect_to edit_admin_block_path block
  end

  def update
    block = Block.find(params[:id])
    block.update(block_params)
    redirect_to request.referrer
  end

  def destroy
    block = Block.find(params[:id])
    block.destroy
  end

  private

  def block_params
    params.require(:block).permit(:title)
  end
end
