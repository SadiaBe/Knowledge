class CreateTeachers < ActiveRecord::Migration[6.0]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :subject
      t.integer :years

      t.timestamps
    end
  end
end
