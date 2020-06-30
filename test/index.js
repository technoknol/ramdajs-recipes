var assert = require('assert');

var index = require('../index');

const data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
    },
];

it('can update object from array of objects by key', () => {
    const newUser = {
        "id": 3,
        "name": "Paul Derek",
        "username": "Technoknol",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
    };

    const expextedResponse = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
        },
        {
            "id": 3,
            "name": "Paul Derek",
            "username": "Technoknol",
            "email": "Nathan@yesenia.net",
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
        }
    ];
    const updated = index.updateByKeyInArray('id', 3, newUser , data);
    assert.strictEqual(updated, expextedResponse);

});