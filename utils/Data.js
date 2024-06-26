'use client'
// import bcrypt from "bcrypt"



const data = {
	users: [
		{
			name: 'chukwuemeka',
			email: 'chukwuemekacodev@gmail.com',
			// password: bcrypt.hashSync('muna'),
			isAdmin: true,
		},
		{
			name: 'John',
			email: 'admin@example.com',
			// password: bcrypt.hashSync('123456'),
			isAdmin: true,
		},
	],


	products: [
		{
			name: "hoody sweater",
			slug: "nigeria-hoody",
			category: "hoody",
			image: "/images/1.jpg",
			price: 2.61,
			brand: "de nuelx",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " red hoody sweater",
		},

		{
			name: "hoody sweater",
			slug: "demark-hoody",
			category: "hoody",
			image: "/images/download (2).jpeg",
			price: 3.29,
			brand: "de nuelx",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " black hoody sweater",
		},
		{
			name: "nike shoes",
			slug: "savahan-f",
			category: "canvas shoes",
			image: "/images/images (15).jpeg",
			price: 1.99,
			brand: "nike",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " men shoes",
		},
		{
			name: "lavida shoes",
			slug: "lavida-shoes-fashion",
			category: "canvas shoes",
			image: "/images/images (17).jpeg",
			price: 2.00,
			brand: "lavida",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " men shoes",
		},
		{
			name: "catual shoes",
			slug: "men-catual-shoes",
			category: "canvas shoes",
			image: "/images/images (18).jpeg",
			price: 1.99,
			brand: "robbins",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " men shoes",
		},
		{
			name: "nike shoes NBA",
			slug: "nike-fashion",
			category: "canvas shoes",
			image: "/images/images (19).jpeg",
			price: 2.55,
			brand: "nike",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " men shoes",
		},
		{
			name: "apple watch",
			slug: "apple-fashion-watch",
			category: "watch",
			image: "/images/images (20).jpeg",
			price: 90.0,
			brand: "apple",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " smart watch",
		},
		{
			name: "apple watch",
			slug: "stylish-watch",
			category: "watch",
			image: "/images/images (21).jpeg",
			price: 100.0,
			brand: "apple",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " smart watch",
		},
		{
			name: "iPhone 14 pro max",
			slug: "iphone",
			category: "mobile",
			image: "/images/images (22).jpeg",
			price: 380.0,
			brand: "apple",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " iphone",
		},
		{
			name: "iphone 13pro max",
			slug: "iphone13",
			category: "mobile",
			image: "/images/images (25).jpeg",
			price: 240,
			brand: "apple",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " iphone 13pro max",
		},
		{
			name: "iphone 15 pro max",
			slug: "iphone15",
			category: "mobile",
			image: "/images/images (26).jpeg",
			price: 440,
			brand: "apple",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: "iphone15",
		},
		{
			name: "laptop bag",
			slug: "laptop-bag-joySmart",
			category: "backpack",
			image: "/images/images (27).jpeg",
			price: 2.90,
			brand: "joy-smart",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " bag for traveling",
		},
		{
			name: "backpack set",
			slug: "backpack-set",
			category: "backpack",
			image: "/images/images (28).jpeg",
			price: 1.90,
			brand: "joy-smart",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " bag",
		},
		{
			name: "HP pavillion 15",
			slug: "hp-pavillion-15",
			category: "laptop",
			image: "/images/images (29).jpeg",
			price: 140,
			brand: "HP",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " HP laptops",
		},
		{
			name: "apple mac retina",
			slug: "macbook-retina",
			category: "laptop",
			image: "/images/images (30).jpeg",
			price: 560,
			brand: "apple",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " macintosh",
		},
		{
			name: "macbook air",
			slug: "apple-macbook-air",
			category: "laptop",
			image: "/images/images (31).jpeg",
			price: 500,
			brand: "apple-macbook-air",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " laptop",
		},
		{
			name: "macbook pro",
			slug: "apple-macbook-pro",
			category: "laptop",
			image: "/images/images (32).jpeg",
			price: 640,
			brand: "apple",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " laptop",
		},
		{
			name: "nike shoes",
			slug: "brouncer-nike",
			category: "canvas shoes",
			image: "/images/images (33).jpeg",
			price: 2.93,
			brand: "nike",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " men shoes",
		},
		{
			name: "casio sleek watch",
			slug: "casio-watch",
			category: "watch",
			image: "/images/images (34).jpeg",
			price: 9.12,
			brand: "casio",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " men shoes",
		},
		{
			name: "edifice watch",
			slug: "stylish-fashion-men-watch",
			category: "watch",
			image: "/images/images (35).jpeg",
			price: 10.1,
			brand: "edifice",
			rating: 5,
			numReview: 8,
			countInStock: 10,
			description: " men shoes",
		},
	],


};
export default data;
