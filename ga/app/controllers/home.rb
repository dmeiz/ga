class Home < Application

  # ...and remember, everything returned from an action
  # goes to the client...
  def index
    render
  end

  def hello
    "cb('I gotzt #{params[:url]}')"
  end
end
