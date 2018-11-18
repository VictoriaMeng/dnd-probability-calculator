class ToHitChanceSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :target, :stat, :modifier, :result, :result_text
end
