// store products as database:

var id = 0;

function nextId() {
    id++;
    return id;
}

function Product(departure, destination, type,time,see,gender,avatarUrl,start,over,date) {
    this.id = nextId();
    this.departure = departure;
    this.destination = destination;
    this.type = type;
    this.time = time;
    this.see = see;
    this.gender = gender;
    this.avatarUrl = avatarUrl;
    this.start=start;
    this.over=over;
    this.date=date;
}
var now = 123;
var products = [
    new Product('南京市鼓楼区110号', '淮安市淮阴区100号', 1,now,"see","gender","avatarlUrl",now,now,now),
    new Product('南京市鼓楼区110号', '淮安市淮阴区100号', 1,now,"see","gender","avatarlUrl",now,now,now),
    new Product('南京市鼓楼区110号', '淮安市淮阴区100号', 1,now,"see","gender","avatarlUrl",now,now,now),
    new Product('南京市鼓楼区110号', '淮安市淮阴区100号', 2,now,"see","gender","avatarlUrl",now,now,now),
    new Product('南京市鼓楼区110号', '淮安市淮阴区100号', 2,now,"see","gender","avatarlUrl",now,now,now),
    new Product('南京市鼓楼区110号', '淮安市淮阴区100号', 2,now,"see","gender","avatarlUrl",now,now,now),
    // new Product('iPhone 7', 'Apple', 6800),
    // new Product('ThinkPad T440', 'Lenovo', 5999),
    // new Product('LBP2900', 'Canon', 1099)
];

module.exports = {
    getProducts: () => {
        return products;
    },

    getProduct: (id) => {
        var i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                return products[i];
            }
        }
        return null;
    },

    createProduct: (name, manufacturer, price) => {
        var p = new Product(name, manufacturer, price);
        products.push(p);
        return p;
    },

    deleteProduct: (id) => {
        var
            index = -1,
            i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            // remove products[index]:
            return products.splice(index, 1)[0];
        }
        return null;
    }
};
