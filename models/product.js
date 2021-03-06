const db = require("./config");
db.run("CREATE TABLE IF NOT EXISTS `products` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` TEXT, `price` INTEGER,`quantity` TEXT,`unit` TEXT, `category` TEXT,`description` TEXT, `image` TEXT)");

let create = (name, price,quantity, unit, category, description, image) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO products (name, price,quantity, unit, category, description, image) VALUES (?,?, ?, ?, ?, ?, ?)', [name, price,quantity, unit, category, description, image], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    id: this.lastID,
                    name: name,
                    price: price,
                    unit: unit,
                    category: category,
                    description: description,
                    image: image
                });
            }
        });
    });
};
let getAll = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM products", (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const list = [];
                rows.forEach(function (row) {
                    list.push(row);
                });
                resolve(list);
            }
        });
    });
};

let getById = (id) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};
let updateById = (id, name, price,quantity, unit, category, description, image) => {
    return new Promise((resolve, reject) => {
        db.run("UPDATE products SET name = ?, price = ?,quantity=?, unit = ?, category = ?, description = ?, image = ? WHERE id = ?", [name, price,quantity, unit, category, description, image, id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    id: id,
                    name: name,
                    price: price,
                    quantity:quantity,
                    unit: unit,
                    category: category,
                    description: description,
                    image: image
                });
            }
        });
    });
};
let deleteById = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM products WHERE id = ?", [id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    id: id
                });
            }
        });
    });
};
let getProductByCategory = (category) => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM products WHERE category = ?", [category], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const list = [];
                rows.forEach(function (row) {
                    list.push(row);
                });
                resolve(list);
            }
        });
    });
};
module.exports ={
    create,getAll,getById,updateById,deleteById,getProductByCategory
}