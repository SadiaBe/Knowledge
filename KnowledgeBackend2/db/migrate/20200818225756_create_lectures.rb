class CreateLectures < ActiveRecord::Migration[6.0]
  def change
    create_table :lectures do |t|
      t.references :teacher, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true
      t.string :topic

      t.timestamps
    end
  end
end
