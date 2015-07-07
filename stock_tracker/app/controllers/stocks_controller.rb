class StocksController < ApplicationController
  before_action :set_stock, only: [:show, :update, :destroy]

  # GET /stocks
  # GET /stocks.json
  def index
    @stocks = Stock.all

    render json: @stocks
  end

  # GET /stocks/1
  # GET /stocks/1.json
  def show
    render json: @stock
  end

  # POST /stocks
  # POST /stocks.json
  def create
    @stock = Stock.new(stock_params)

    if @stock.save
      render json: @stock, status: :created, location: @stock
    else
      render json: @stock.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stocks/1
  # PATCH/PUT /stocks/1.json
  def update
    @stock = Stock.find(params[:id])

    if @stock.update(stock_params)
      head :no_content
    else
      render json: @stock.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stocks/1
  # DELETE /stocks/1.json
  def destroy
    @stock.destroy

    head :no_content
  end

  private

    def set_stock
      @stock = Stock.find(params[:id])
    end

    def stock_params
      params.require(:stock).permit(:ticker, :name)
    end
end
