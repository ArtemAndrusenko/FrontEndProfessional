let products = [
    ['Cамокат', 400],
    ['Велосипед', 1000],
    ['Ролики', 540],
    ['Ракетки', 670]
]
for (let elem of products) {
    let [title, price] = elem;
    console.log(price * 0.8);
}