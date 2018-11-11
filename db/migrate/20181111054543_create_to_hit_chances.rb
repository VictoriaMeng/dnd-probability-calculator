class CreateToHitChances < ActiveRecord::Migration[5.2]
  def change
    create_table :to_hit_chances do |t|
      t.string :target_stat
      t.integer :target_value
      t.integer :stat_modifier
      t.integer :hit_chance
      t.timestamps
    end
  end
end
