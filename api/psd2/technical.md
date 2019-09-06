# Overview

Most applications will use an existing [wrapper library](https://developer.github.com/libraries/ "Link to docs about libraries")
in the language of your choice, but it's important to familiarize yourself with the underlying API HTTP methods first.

There's no better way to kick the tires than through [cURL](http://curl.haxx.se/ "Link to cUrl").

If you are using an alternative client, note that you are required to send a valid
[User Agent header](https://developer.github.com/v3/#user-agent-required "Link to docs") in your request.

## Hello World

Let's start by testing our setup. Open up a command prompt and enter the following command:

```shell
curl https://api.github.com/zen
Keep it logically awesome.
```

The response will be a random selection from our design philosophies.

Next, let's `GET` [Chris Wanstrath's](https://github.com/defunkt "Link to https://github.com/defunkt")
[GitHub profile](https://developer.github.com/v3/users/#get-a-single-user "Link to API docs"):

```json
# GET /users/defunkt
curl https://api.github.com/users/defunkt
{
  "login": "defunkt",
  "id": 2,
  "url": "https://api.github.com/users/defunkt",
  "html_url": "https://github.com/defunkt",
  ...
}
```