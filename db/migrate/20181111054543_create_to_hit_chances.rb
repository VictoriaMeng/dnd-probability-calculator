class CreateToHitChances < ActiveRecord::Migration[5.2]
  def change
    create_table :to_hit_chances do |t|
      t.string :target
      t.integer :stat
      t.integer :modifier
      t.float :result
      t.string :result_text
      t.integer :user_id
      t.timestamps
    end
  end
end
