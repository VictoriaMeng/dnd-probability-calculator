class DamageCalculation < ActiveRecord::Base
  belongs_to :user

  def fill
    self.find_average
    self.find_max
    self.find_min
    self
  end

  def find_average
    (self.die_value + 1) / 2
  end

  def find_min
    self.dice_count
  end

  def find_max
    self.die_value * self.dice_count
  end
end
