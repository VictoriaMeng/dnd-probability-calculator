class CreateToHitChances < ActiveRecord::Migration[5.2]
  def change
    create_table :to_hit_chances do |t|
      t.integer :target
      t.string :stat
      t.integer :modifier
      t.float :result
      t.string :result_text
      t.integer :user_id
      t.timestamps
    end
  end
end
