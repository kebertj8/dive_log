class Divers < ActiveRecord::Migration[5.2]
  def change
    create_table :divers do |t|
     t.string :name, null: false
     t.string :address, null: false
     t.string :gender, null: false
     t.string :diving_since, null: false

     t.timestamps null: false
    end
  end
end
