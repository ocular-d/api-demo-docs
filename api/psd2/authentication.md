# Authentication

The Psd2 API uses API keys to authenticate requests.

Your API keys carry many privileges, so be sure to keep them secure!

**Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.**

First, you'll need to register your application.
Every registered OAuth application is assigned a unique Client ID and Client Secret.

## Accepting user authorization

Now, let's start filling out our simple server.

Create a file called *server.rb* and paste this into it:

```ruby
require 'sinatra'
require 'rest-client'
require 'json'

CLIENT_ID = ENV['GH_BASIC_CLIENT_ID']
CLIENT_SECRET = ENV['GH_BASIC_SECRET_ID']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end
```
