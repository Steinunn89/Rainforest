class User < ActiveRecord::Base
	has_secure_password

	has_many :reviews
	has_many :products, through: :reviews

	validates :email, :name, presence: true
	validates :email, uniqueness: { message: "This email already has an account set up. Please use a different email."}

end
