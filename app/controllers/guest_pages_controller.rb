class GuestPagesController < ApplicationController
	before_action :determine_word_to_see,	only: [:main, :list_of_articles, :eventlist]
	layout "application_guest"
	
	def main
		@main_slayder = Slayder.find_by(title: "главная")
		if !@main_slayder.nil?
			@main_photo_list = PhotoInSlayder.where(slyder: @main_slayder.id)
		end
		@category_list = CategoryEvent.all
		exist_list(@category_list)
	end

	def kitchen
		@kitchen_slayder = Slayder.find_by(title: "кухня")
		@visible_part = !(@kitchen_slayder.nil?)
		if @visible_part
			@kitchen_photo_list = PhotoInSlayder.where(slyder: @kitchen_slayder.id)
			exist_list(@kitchen_photo_list)
		end
	end

	def review
		@opinion_list = Opinion.paginate(:page => params[:page])
		exist_list(@opinion_list)
	end

	def list_of_articles
		@article_list = Article.paginate(:page => params[:page])
		exist_list(@article_list)
	end

	def map_park
		@tent_list = Tent.all
		exist_list(@tent_list)
	end

	def eventlist
		@event_list = Event.paginate(:page => params[:page])
		exist_list(@event_list)
	end

	def about_us
	end

	private

	def exist_list(list)
		@visible_part = (list.count > 0)
	end
end
