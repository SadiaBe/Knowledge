class LectureSerializer < ActiveModel::Serializer
  attributes :id, :topic, :student_id, :teacher_id
end
