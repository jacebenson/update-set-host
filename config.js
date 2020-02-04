var config = {
    port: '3000' || process.env.PORT,
    instance_id: 'deadbeefdeadbeefdeadbeefdead8888' || process.env.INSTANCE_ID,
    auth_enabled: true || process.env.AUTH_ENABLED,
    instance_properties: 'glide-orlando-12-11-2019__patch0-hotfix1-01-08-2020_01-12-2020_1944.zip' || process.env.INSTANCE_PROPERTIES,
    users: {}
};
var user = 'test' || process.env.USERNAME;
config.users[user] = process.env.PASSWORD;

module.exports = config;