class Admin::SlaydersController < ApplicationController
  before_action :set_slayder, only: [:show, :edit, :update, :destroy]
  # GET /slayders
  # GET /slayders.json
  def index
    @slayders = Slayder.all.order(updated_at: :desc)
  end

  # GET /slayders/1
  # GET /slayders/1.json
  def show
  end

  # GET /slayders/new
  def new
    @slayder = Slayder.new
  end

  # GET /slayders/1/edit
  def edit
  end

  # POST /slayders
  # POST /slayders.json
  def create
    @slayder = Slayder.new(slayder_params)
    respond_to do |format|
      if @slayder.save
        format.html { redirect_to admin_slayder_path(@slayder), notice: 'Slayder was successfully created.' }
        format.json { render :show, status: :created, location: @slayder }
      else
        format.html { render :new }
        format.json { render json: @slayder.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /slayders/1
  # PATCH/PUT /slayders/1.json
  def update
    respond_to do |format|
      if @slayder.update(slayder_params)
        format.html { redirect_to admin_slayder_path(@slayder), notice: 'Slayder was successfully updated.' }
        format.json { render :show, status: :ok, location: @slayder }
      else
        format.html { render :edit }
        format.json { render json: @slayder.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /slayders/1
  # DELETE /slayders/1.json
  def destroy
    @slayder.destroy
    respond_to do |format|
      format.html { redirect_to action: "index", notice: 'Slayder was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # находит по названию слайдера его ид
  def find_id_slayder( word )
    variant_of_slayders = Slayder.where(title: word)
    if (variant_of_slayders.count != 1)
      return -1
    end
    return variant_of_slayders.first.id
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_slayder
      @slayder = Slayder.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def slayder_params
      params.require(:slayder).permit(:title)
    end
end
