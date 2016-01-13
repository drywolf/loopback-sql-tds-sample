var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var ds = app.dataSources.accountDs;

var sql = 'USE AdventureWorks2012;\r\nEXEC dbo.uspGetEmployeeManagers 50;\r\n';
ds.connector.execute(sql, [], console.log);
