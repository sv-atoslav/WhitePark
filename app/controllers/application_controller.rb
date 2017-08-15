class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
	
	WillPaginate.per_page = 5

	INE = "<i>картинка отсутствует</i>" 
	WORD_TO_SEE = "/prosmotr"

	before_action :divider_access
	
	def set_photo_list
		@photo_list = Photo.all.order(description: :asc)
	end

	def legaly_actions
		return ["beauty", "robots"]
	end

	def divider_access
		puts "controller_name = " + controller_name
		puts "action_name = " + action_name
		info_about_wiever = " "
		puts current_moderator
		if current_moderator.nil?
			info_about_wiever += "guest"
		else
			info_about_wiever += "moder "
			info_about_wiever += current_moderator.email
		end
		puts "current viever =" + info_about_wiever
		if moderator_signed_in?
			if (controller_name == "pages" && action_name == "log_out")
				sign_out
			elsif (controller_name ==  "sessions" && action_name == "new")
				redirect_to controller: "dashboards", action: "dashboard_white_park"
				$nwtgis = 0
			end
		else
			unless  	(controller_name == "guest_pages" || legaly_actions.include?(action_name) )
				unless  (controller_name ==  "sessions"   && action_name == "new")
					authenticate_moderator!
				end
			end
		end
	end

	def robots
	end
end