class Review < ActiveRecord::Base

	belongs_to :user
	belongs_to :product


	validates :comment, presence: true

	# before_validation: titlelize_title
	# private
	# def titlelize_title
		#self.title = title.titlelize
	# end
	# def notify_owner
	# 	sends email to owner of belongs_to
	# end

end
