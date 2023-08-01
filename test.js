db.createCollection("workers")
db.users.insertMany([
    {id: 1, firstname: 'Петр', lastname: 'Сергеев', position: 'CEO', salary: 7000}
    {id: 2, firstname: 'Виктор', lastname: 'Семенов', position: 'Web-developer', salary: 5000}
    {id: 3, firstname: 'Никита', lastname: 'Петров', position: 'Assistant', salary: 3500}
    {id: 4, firstname: 'Инна', lastname: 'Орлова', position: 'Accountant', salary: 4500}
])

db.createCollection("fruits")
db.fruits.insertMany([
    {
     id: 1,
     title: 'Apple',
     price: 280,
     count: 4
    },
    {
    id: 2,
    title: 'Lemon',
    price: 300,
    count: 8
    },
    {
    id: 3,
    title: 'Lime',
    price: 500,
    count: 3
    },
    {
    id: 4,
    title: 'Orange',
    price: 200,
    count: 8
    },
])

gt - >
lt - <
gte - >=
lte - <=
eq - =
ne - <>


db.users.insertMany([
    {
    id: 1,
    name: 'Анатолий',
    age: 28,
    gender: 'm'
    },
    {
    id: 2,
    name: 'Светлана',
    age: 25,
    gender: 'f'
    },
    {
    id: 3,
    name: 'Никита',
    age: 33,
    gender: 'm'
    },
    {
    id: 4,
    name: 'Ольга',
    age: 22,
    gender: 'f'
    },
])