require 'test_helper'

class StocksControllerTest < ActionController::TestCase
  setup do
    @stock = stocks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:stocks)
  end

  test "should create stock" do
    assert_difference('Stock.count') do
      post :create, stock: { name: @stock.name, ticker: @stock.ticker }
    end

    assert_response 201
  end

  test "should show stock" do
    get :show, id: @stock
    assert_response :success
  end

  test "should update stock" do
    put :update, id: @stock, stock: { name: @stock.name, ticker: @stock.ticker }
    assert_response 204
  end

  test "should destroy stock" do
    assert_difference('Stock.count', -1) do
      delete :destroy, id: @stock
    end

    assert_response 204
  end
end
