## Installation

- Run `npm install`

## Adding Scopes

- Clone the 'global.xml' file in scopes and name it the sys_id of the scope you want to add
- Edit the details of the XML file to match that of the scope you want to add

## Adding Update Sets

- Copy Update Set to the 'src' folder (create this folder if it does not exist)
- Update sets will be copied from src, to update sets as the need this naming format 'sys_remote_update_set_SYSID.xml'
- Running `npm build` will do this for you

## Authentication

- By default authentatication is enabled by default, to disable this, set `enable_auth` to false in `config.js`
- By default authentatication is set to.
	- User: `user`
	- Password: `password`

## Environment variables

| Variable               | Description                                     | Default Value                                                           |
| ---------------------- | ----------------------------------------------- | ----------------------------------------------------------------------- |
| `PORT`                 | Port used to expose the server                  | 3000                                                                    |
| `INSTANCE_ID`          | SysId to identify this server                   | deadbeefdeadbeefdeadbeefdead8888                                        |
| `AUTH_ENABLED`         | Allows authentation, required to be true        | true                                                                    |
| `INSTANCE_PROPERTIES`  | The build name ServiceNow uses to compare build | glide-orlando-12-11-2019__patch0-hotfix1-01-08-2020_01-12-2020_1944.zip |
| `USERNAME`             | Username used for authentication                | test                                                                    |
| `PASSWORD`             | Password used for authentication                | test                                                                    |
