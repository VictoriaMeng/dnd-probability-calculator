class CreateDamageCalculations < ActiveRecord::Migration[5.2]
  def change
    create_table :damage_calculations do |t|
      t.integer :dice_count
      t.integer :die_value
      t.integer :average
      t.integer :max
      t.integer :min
      t.integer :modifer
      t.integer :user_id
      t.timestamps
    end
  end
end
