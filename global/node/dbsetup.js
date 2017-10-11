var Sqlite3 = require('better-sqlite3');

var options = {
		memory: false,
		readonly: false,
		fileMustExist: false
};

var db = new Sqlite3('playfriend.db', options);

db.prepare(`CREATE TABLE accounts (
			ID INT PRIMARY KEY NOT NULL, 
			CREATED REAL DEFAULT (datetime('now', 'localtime')))`).run();
			
db.prepare(`CREATE TABLE auth_secret (
	ID INT NOT NULL, 
	SECRET TEXT NOT NULL)`).run();

