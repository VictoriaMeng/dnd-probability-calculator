class ToHitChance < ActiveRecord::Base
  belongs_to :user

  STATS = %w(AC Strength Dexterity Constitution Intelligence Wisdom Charisma)

  validates :stat, presence: true, inclusion: {in: STATS} 
  validates :modifier, presence: true, numericality: {only_integer: true}
  validates :target, presence: true, numericality: {only_integer: true, greater_than: 0}

  def calculate_result
    self.result = self.ac? ? self.calculate_ac : self.calculate_saving_throw
    self.result_text = "#{result * 100.0}%"
    self
  end

  def ac?
    self.stat == 'AC'
  end

  def calculate_ac
    # ((21–(TargetValue–Modifier)/20)*100
    (21.0-(self.target.to_f-self.modifier.to_f))/20.0
  end

  def calculate_saving_throw
    1.0-self.calculate_ac
  end
end
