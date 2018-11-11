class CreateDamageCalculations < ActiveRecord::Migration[5.2]
  def change
    create_table :damage_calculations do |t|

      t.timestamps
    end
  end
end
