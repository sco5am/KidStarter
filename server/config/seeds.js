const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Lemonade' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Lemonade',
      //to change to array from seller input 
      organization: 'Cbus T-ball league',
      description:
        'Small',
      image: 'lemonade.png',
      category: categories[0]._id,
      price: 2.99,
      quantity: 10
    },
    {
        name: 'Lemonade',
        organization: 'Cville Girl Scouts',
        description:
          'Medium',
        image: 'lemonade.png',
        category: categories[0]._id,
        price: 1.99,
        quantity: 12
    },
    {
        name: 'Lemonade',
        organization: 'Steves Camp Fund',
        description:
          'Large',
        image: 'lemonade.png',
        category: categories[0]._id,
        price: 3.99,
        quantity: 20
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Karen',
    lastName: 'Jefferson',
    email: 'jeffersonk@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Kevin',
    lastName: 'Binks',
    email: 'binksk@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
