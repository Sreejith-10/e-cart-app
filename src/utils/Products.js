import aipod from "../assets/images/airpodmax.webp";
import asuslap from "../assets/images/asusstrixf15.jpeg";
import boathead from "../assets/images/boatheadset.webp";
import googlehome from "../assets/images/googlehome.webp";
import ipadpro from "../assets/images/ipadpro.webp";
import iphone14 from "../assets/images/iphone14.jpg";
import iphone14pro from "../assets/images/iphone14pro.webp";
import macbookpro from "../assets/images/macbookpro.webp";
import memorycard from "../assets/images/memorycard.webp";
import msigt from "../assets/images/msigttitan.webp";
import galxyfold from "../assets/images/samsunggalaxy.webp";
import galaxys22 from "../assets/images/smgalaxys22.jpeg";
import sonyhead from "../assets/images/sonyheadeset.webp";

const Products = [
	{
		id: 0,
		proName: "Iphone 14",
		proCategory: "Mobile",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 45000,
		totalPrice: 45000,
		proImg: iphone14,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 1,
		proName: "Samsung Galaxy  s22",
		proCategory: "Mobile",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 65000,
		totalPrice: 65000,
		proImg: galaxys22,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 2,
		proName: "Msi GT Titan",
		proCategory: "Laptop",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 150000,
		totalPrice: 150000,
		proImg: msigt,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 3,
		proName: "Apple MacBook Pro",
		proCategory: "Laptop",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 79800,
		totalPrice: 79800,
		proImg: macbookpro,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 4,
		proName: "Asus Strix Laptop",
		proCategory: "Laptop",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 129999,
		totalPrice: 129999,
		proImg: asuslap,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 5,
		proName: "Iphone 14 por",
		proCategory: "Mobile",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 124000,
		totalPrice: 124000,
		proImg: iphone14pro,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 6,
		proName: "Sandisk memorycard 512 Gb",
		proCategory: "Accessories",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 1450,
		totalPrice: 1450,
		proImg: memorycard,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 7,
		proName: "Apple AirPods",
		proCategory: "Accessories",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 49990,
		totalPrice: 49990,
		proImg: aipod,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 8,
		proName: "Ipad Pro",
		proCategory: "Tab",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 172300,
		totalPrice: 172300,
		proImg: ipadpro,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 9,
		proName: "Google Home",
		proCategory: "Accessories",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 5490,
		totalPrice: 5490,
		proImg: googlehome,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 10,
		proName: "Samsung Galaxy Fold Z5",
		proCategory: "Mobile",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 152350,
		totalPrice: 152350,
		proImg: galxyfold,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 11,
		proName: "Sony Wrieless HeadPhone",
		proCategory: "HeadPhone",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 5499,
		totalPrice: 5499,
		proImg: sonyhead,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
	{
		id: 12,
		proName: "Boat Bluetooth HeadPhone",
		proCategory: "HeadPhone",
		proDescription:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum minima sint, autem quos labore magni voluptatem accusantium accusamus, quidem corporis, dolore et facere impedit consectetur a? Nostrum, voluptatibus tempore.",
		proPrice: 3200,
		totalPrice: 3200,
		proImg: boathead,
		proQuantity: 1,
		cartState: false,
		favState: false,
	},
];

export default Products;
