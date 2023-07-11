let names = [
    {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
    {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
    {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
    {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
    {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
    {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
    {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
    {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
    {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
];

let div_root = document.querySelector('#root');

for (let elem of names) {
    let div_elem = document.createElement('div');
    let image_user = document.createElement('img');
    let name_user = document.createElement('p');
    let salary_user = document.createElement('p');
    let id_user = document.createElement('p');
    let div_info = document.createElement('div');

    div_elem.className = 'user';
    div_info.className = 'user_info';
    image_user.src = elem.image;
    name_user.innerText = `Name: ${elem.name}`;
    salary_user.innerText = `Salary: ${elem.salary}`;
    id_user.innerText = `User number: ${elem.id}`;


    div_info.append(name_user,salary_user,id_user);
    div_elem.append(image_user, div_info);
    div_root.append(div_elem);
};