class DamageCalculation < ActiveRecord::Base
  belongs_to :user

  def fill
    self.average = self.find_average
    self.max = self.find_max
    self.min = self.find_min
  end

  def find_average
    (self.die_value.to_f + 1.0) / 2.0
  end

  def find_min
    self.dice_count
  end

  def find_max
    self.die_value * self.dice_count
  end
end
