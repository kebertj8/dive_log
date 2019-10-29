class Sites < ActiveRecord::Migration[5.2]
  def change
    create_table :sites do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :region, null: false
      t.string :longitude, null: false
      t.string :latitude, null: false
      t.belongs_to :diver, null: false
      t.belongs_to :dive, null: false

      t.timestamps
    end
  end
end
