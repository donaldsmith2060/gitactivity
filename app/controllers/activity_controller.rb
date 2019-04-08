class ActivityController < ApplicationController
  def index

  end

  def user
	  url = URI("https://api.github.com/users/"+params[:id]+"/events")

	  http = Net::HTTP.new(url.host, url.port)
	  http.use_ssl = true
	  http.verify_mode = OpenSSL::SSL::VERIFY_NONE

	  request = Net::HTTP::Get.new(url)
	  request["cache-control"] = 'no-cache'

	  response = http.request(request)
	  render json: response.read_body
  end
end
