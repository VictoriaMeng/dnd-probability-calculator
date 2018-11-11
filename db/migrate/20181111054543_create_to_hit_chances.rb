class CreateToHitChances < ActiveRecord::Migration[5.2]
  def change
    create_table :to_hit_chances do |t|

      t.timestamps
    end
  end
end
