class ToHitChance < ActiveRecord::Base
  belongs_to :user

  def calculate_ac
    # ((21–(TargetValue–Modifier)/20)*100
    result = (21.0-(self.target.to_f-self.modifier.to_f))/20.0
    self.result = result
    self.result_text = "#{result * 100.0}%"
    self
  end

  def calculate_saving_throw
    result = 1.0-((21.0-(self.target.to_f-self.modifier.to_f))/20.0)
    self.result = result 
    self.result_text = "#{result * 100.0}%"
    self
  end
end
