#start list of .css
	
# 	#for beauty evant, articles
# 	Rails.application.config.assets.precompile += %w( wpstyles/index.css )
# 	Rails.application.config.assets.precompile += %w( wpstyles/reset.min.css )
# 	Rails.application.config.assets.precompile += %w( wpstyles/font-awesome.min.css )
# 	Rails.application.config.assets.precompile += %w( wpstyles/owlcarousel/owl.carousel.min.css )
# 	Rails.application.config.assets.precompile += %w( wpstyles/owlcarousel/owl.theme.default.min.css )
# #end list of .css
# #start list of javascripts (.js)

# 	#for beauty evant, articles
# 	Rails.application.config.assets.precompile += %w( jquery/jquery-2.2.3.min.js )
# 	Rails.application.config.assets.precompile += %w( jquery/jquery-ui.min.js )
# 	Rails.application.config.assets.precompile += %w( jquery/jquery-ui.multidatespicker.js )
# 	Rails.application.config.assets.precompile += %w( jquery/jquery.maskedinput.min.js )
# 	Rails.application.config.assets.precompile += %w( owl.carousel.min.js )

#end list of javascripts (.js)

#compile all
Rails.application.config.assets.precompile += %w( *.sass  *.scss *.css *.js *.coffee )