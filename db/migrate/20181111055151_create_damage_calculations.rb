class CreateDamageCalculations < ActiveRecord::Migration[5.2]
  def change
    create_table :damage_calculations do |t|
      t.integer :dice_count
      t.integer :die_value
      t.integer :average_damage
      t.integer :max_damage
      t.integer :min_damage
      t.timestamps
    end
  end
end
