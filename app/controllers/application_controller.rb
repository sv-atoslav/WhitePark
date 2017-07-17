class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
	
	WillPaginate.per_page = 1
	
	def set_photo_list
		@photo_list = Photo.all.order(description: :asc)
	end

	def determine_word_to_see
		@word_to_see = "prosmotr"
	end
end