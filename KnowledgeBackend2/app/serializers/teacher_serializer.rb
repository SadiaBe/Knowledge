class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :years
  has_many :lectures
  has_many :students
end
