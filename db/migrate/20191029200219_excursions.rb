class Excursions < ActiveRecord::Migration[5.2]
  def change
    create_table :excurions do |t|
      t.belongs_to :user, null: false
      t.belongs_to :dive, null: false
      t.timestamps
    end
  end
end
