class UserSerializer < ActiveModel::Serializer
  attributes :id
  has_many :damage_calculations
  has_many :to_hit_chances
end
