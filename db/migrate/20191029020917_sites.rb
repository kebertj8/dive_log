class Sites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :region, null: false
      t.string :longitude, null: false
      t.string :latitude, null: false
      t.string :description, null: false
      t.string :image

      t.timestamps
    end
  end
end
