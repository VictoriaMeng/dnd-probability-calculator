class DamageCalculationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dice_count, :die_value, :average, :min, :max
end
