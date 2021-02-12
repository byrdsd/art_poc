class Admin::FlashcardsController < ApplicationController

  def create
    flashcard = Flashcard.create(flashcard_params)
    redirect_to request.referrer
  end

  def update
    flashcard = Flashcard.find(params[:id])
    flashcard.update(flashcard_params)
    redirect_to request.referrer
  end

  def destroy
    flashcard = Flashcard.find(params[:id])
    flashcard.destroy
    redirect_to request.referrer
  end

  private

  def flashcard_params
    params.require(:flashcard).permit(:front, :front_image, :back, :back_image, :block_id)
  end
end
