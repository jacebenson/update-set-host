var port;
var instance_id;
var auth_enabled;
var instance_properties;
var password;
if(process.env.PORT){
    port = process.env.PORT
} else {
    port = '3000';
}
if(process.env.INSTANCE_ID){
    instance_id = process.env.INSTANCE_ID
} else {
    instance_id = 'deadbeefdeadbeefdeadbeefdead8888';
}
if(process.env.AUTH_ENABLED){
    auth_enabled = process.env.AUTH_ENABLED
} else {
    auth_enabled = 'true';
}
if(process.env.INSTANCE_PROPERTIES){
    instance_properties = process.env.INSTANCE_PROPERTIES
} else {
    instance_properties = 'glide-orlando-12-11-2019__patch0-hotfix1-01-08-2020_01-12-2020_1944.zip';
}
if(process.env.PASSWORD){
    password = process.env.PASSWORD
} else {
    password = 'test';
}

var config = {
    port: port,
    instance_id: instance_id,
    auth_enabled: auth_enabled,
    instance_properties: instance_properties,
    users: {
        'test': password
    }
};

module.exports = config;