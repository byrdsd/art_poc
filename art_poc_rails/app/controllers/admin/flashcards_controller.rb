class Admin::FlashcardsController < ApplicationController

  def create
    flashcard = Flashcard.create(front: params[:front], back: params[:back], block_id: params[:block_id])
    redirect_to request.referrer
  end

  def update
    flashcard = Flashcard.find(params[:id])
    flashcard.update(front: params[:flashcard][:front], back: params[:flashcard][:back])
    redirect_to request.referrer
  end

  def destroy
    flashcard = Flashcard.find(params[:id])
    flashcard.destroy
    redirect_to request.referrer
  end
end
