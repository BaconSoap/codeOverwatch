#codeOverwatch

mmmmm code review

##install

```bash
npm install -g forever bower
cd client && npm install && cd ../server && bower install && npm install
```

then go config it.

##config

move config.json to secrets/config.json and populate it with your info

The owner is the org/user that owns the repo. Get a key by going to your github account, then applications, then generate new personal access token.

##edit/run

in client, do

```bash
grunt w
```

in server, do

```bash
./runServer
```

## LICENSE

MIT License
