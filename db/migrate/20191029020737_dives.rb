class Dives < ActiveRecord::Migration[5.2]
  def change
      create_table :dives do |t|
       t.string :style, null: false
       t.string :number, null: false
       t.string :depth, null: false
       t.string :visibility, null: false
       t.string :tempurature, null: false
       t.string :longitude, null: false
       t.string :latitude, null: false
       t.string :dive_buddy, null: false
       t.belongs_to :site

       t.timestamps null: false
   end
  end
end
