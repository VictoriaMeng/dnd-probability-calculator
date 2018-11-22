class User < ActiveRecord::Base
  has_secure_password
  
  has_many :damage_calculations
  has_many :to_hit_chances

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
end