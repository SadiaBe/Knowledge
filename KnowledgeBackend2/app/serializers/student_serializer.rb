class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :major, :age
  has_many :lectures
  has_many :teachers
end
