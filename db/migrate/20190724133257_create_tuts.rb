class CreateTuts < ActiveRecord::Migration[5.2]
  def change
    create_table :tuts do |t|
      t.string :title
      t.references :users, foreign_key: true

      t.timestamps
    end
  end
end
