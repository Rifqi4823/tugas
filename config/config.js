module.exports = {
    DB : process.env.HOST ?process.env.HOST : 'mongodb+srv://admin:iniMongo@sandbox-workshop-jfeue.mongodb.net/learnit-react',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 81,
};