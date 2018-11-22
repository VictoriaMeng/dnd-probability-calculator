class DamageCalculation < ActiveRecord::Base
  belongs_to :user

  validates :dice_count, presence: true, numericality: {only_integer: true, greater_than: 0} 
  validates :die_value, presence: true, inclusion: {in: [4, 6, 8, 10, 12]}

  def fill
    self.average = self.find_average
    self.max = self.find_max
    self.min = self.find_min
  end

  def find_average
    (self.die_value.to_f + 1.0) * self.dice_count.to_f / 2
  end

  def find_min
    self.dice_count
  end

  def find_max
    self.die_value * self.dice_count
  end
end
