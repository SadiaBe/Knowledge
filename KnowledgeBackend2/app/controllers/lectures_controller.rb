class LecturesController < ApplicationController

    def index
        @lectures = Lecture.all
        render json: @lectures
    end
    
    def show
        @lecture = Lecture.find(params[:id])
        render json: @lecture
    end
end
