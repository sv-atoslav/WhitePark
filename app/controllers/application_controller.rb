class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
	
	WillPaginate.per_page = 5

	before_action :divider_access
	
	def set_photo_list
		@photo_list = Photo.all.order(description: :asc)
	end

	def determine_word_to_see
		@word_to_see = "/prosmotr"
	end

	# def my_automatic_redirecter
	# 	if way=="sitemap.xml"
	# 		redirect_to "sitemaps/sitemap.xml"
	# 	end
	# end

	def divider_access
		puts "controller_name = " + controller_name
		puts "action_name = " + action_name
		info_about_wiever = " "
		puts current_moderator
		# current_moderator.confirmed?
		if current_moderator.nil?
			info_about_wiever += "guest"
		else
			info_about_wiever += "moder "
			info_about_wiever += current_moderator.email
		end
		puts "current viever =" + info_about_wiever
		if moderator_signed_in?
			if (controller_name == "pages" && action_name == "log_out")
				# unauthenticate_moderator!
				# current_moderator = nil
				sign_out
				redirect_to controller: "dashboards", action: "dashboard_white_park"
			elsif (controller_name ==  "sessions" && action_name == "new")
				redirect_to controller: "dashboards", action: "dashboard_white_park"
				$nwtgis = 0
			end
		else
			unless   (controller_name == "guest_pages" || action_name == "beauty")
				unless (controller_name ==  "sessions"   && action_name == "new")
					# redirect_to controller: "dashboards", action: "dashboard_white_park"
					authenticate_moderator!
				end
			end
		end
	end

	def divider_access
		puts "controller_name = " + controller_name
		puts "action_name = " + action_name
		info_about_wiever = " "
		puts current_moderator
		# current_moderator.confirmed?
		if current_moderator.nil?
			info_about_wiever += "guest"
		else
			info_about_wiever += "moder "
			info_about_wiever += current_moderator.email
		end
		puts "current viever =" + info_about_wiever
		if moderator_signed_in?
			if (controller_name == "pages" && action_name == "log_out")
				# unauthenticate_moderator!
				# current_moderator = nil
				sign_out
				redirect_to controller: "dashboards", action: "dashboard_white_park"
			elsif (controller_name ==  "sessions" && action_name == "new")
				redirect_to controller: "dashboards", action: "dashboard_white_park"
				$nwtgis = 0
			end
		else
			unless   (controller_name == "guest_pages" || action_name == "beauty")
				unless (controller_name ==  "sessions"   && action_name == "new")
					# redirect_to controller: "dashboards", action: "dashboard_white_park"
					authenticate_moderator!
				end
			end
		end
	end
end