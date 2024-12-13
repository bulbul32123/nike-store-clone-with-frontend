const express = require('express');
const authRoutes = require('./routes/authRoutes')
const { config } = require('dotenv');
const { connectToMongoDB } = require('./lib/connection');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const app = express();
config()

const PORT = process.env.PORT || 5000;

// Mongodb Connection Starts
connectToMongoDB()
// Mongodb Connection Ends

// Middleware Start
app.use(express.json({ limit: "10mb" }))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173" // Replace with your frontend's URL
}));
// Middleware Ends

// Route Start
const products = [
    {
        "_id": "6753ebcc18af1a84c7c9c6fb",
        "name": "Nike Dunk Low Retro",
        "description": "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
        "price": 8295,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553101/products/itjxxv0bn9esmcqshp2a.webp",
        "category": "shoes",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:31:40.753Z",
        "updatedAt": "2024-12-07T06:31:40.753Z",
        "__v": 0
    },
    {
        "_id": "6753ec2618af1a84c7c9c6fe",
        "name": "Nike Air Max 1 '86 OG x Eastside Golf",
        "description": "A streetwear legend hits the links in this Air Max 1. Featuring the 4-window design that lets you peek at the large Air unit underneath, this is on-course cool, confidence and comfort personified. It sports the vintage Air Max 1 details you love, like clean lines and unmistakable colours, and melds them with our game-changing golf technology, so you can play all day, all year round in a timeless fit.",
        "price": 16995,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553190/products/zbqy7hgxs1nwn7sp1zjq.webp",
        "category": "shoes",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:33:10.394Z",
        "updatedAt": "2024-12-07T06:33:10.394Z",
        "__v": 0
    },
    {
        "_id": "6753ed2a18af1a84c7c9c701",
        "name": "Jordan Stadium 90",
        "description": "Comfort is king, but that doesn't mean you have to sacrifice style. Taking design inspiration from the AJ1 and AJ5, the Stadium 90 is ready for everyday wear. The leather upper delivers on durability while Nike Air technology cushions your every step.",
        "price": 12795,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553451/products/tabuauzomvkbef4bjd3n.webp",
        "category": "shoes",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:37:30.771Z",
        "updatedAt": "2024-12-07T06:37:30.771Z",
        "__v": 0
    },
    {
        "_id": "6753ed4918af1a84c7c9c704",
        "name": "Air Jordan 1 Low",
        "description": "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.",
        "price": 8995,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553482/products/wfqhoytpyweymc5g3qr9.webp",
        "category": "shoes",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:38:01.876Z",
        "updatedAt": "2024-12-07T06:38:01.876Z",
        "__v": 0
    },
    {
        "_id": "6753ed7118af1a84c7c9c707",
        "name": "Air Jordan 1 Mid SE",
        "description": "New colours and fresh textures update this all-time favourite without losing its classic look and familiar feel. Made from premium materials and pumped full of comfortable Nike Air cushioning, it features subtle details that make it a staple sneaker with a modern expression.",
        "price": 12295,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553521/products/wmsfvtrkenaq1ctlogan.jpg",
        "category": "shoes",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:38:41.366Z",
        "updatedAt": "2024-12-07T06:38:41.366Z",
        "__v": 0
    },
    {
        "_id": "6753ed9018af1a84c7c9c70a",
        "name": "Air Jordan 13 Retro 'White and Midnight Navy'",
        "description": "The Air Jordan 13 Retro brings back the memorable game shoe that Michael Jordan wore during the '97–98 season, all the way to his 6th championship title. All the classic details are there like the quilted overlay, iconic sculpted midsole and holographic eye.",
        "price": 19295,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553553/products/nkgphzd3gohgxcpdx9qj.jpg",
        "category": "shoes",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:39:12.855Z",
        "updatedAt": "2024-12-07T06:39:12.855Z",
        "__v": 0
    },
    {
        "_id": "6753edb718af1a84c7c9c70d",
        "name": "Nike Air Max 90",
        "description": "Lace up and feel the legacy in a champion running shoe that helped define the '90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its striking visuals, Waffle outsole and Max Air cushioning keep the Air Max 90 alive and well.",
        "price": 14995,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553591/products/nyf8dpmjy6qbt2fdw6vo.webp",
        "category": "shoes",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:39:51.296Z",
        "updatedAt": "2024-12-07T06:39:51.296Z",
        "__v": 0
    },
    {
        "_id": "6753edda18af1a84c7c9c710",
        "name": "Nike Dunk Low SE",
        "description": "Wildly versatile, strikingly clean and oh-so classic. The Dunk Low mixes suede and leather for a flawless finish. It comes complete with a padded collar, lightweight cushioning and a gum sole. Lace up and bring the beach vibes with you.\n\n",
        "price": 11895,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553626/products/zc9fwk2yhrdh2czhb0ph.webp",
        "category": "shoes",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:40:26.024Z",
        "updatedAt": "2024-12-07T06:40:26.024Z",
        "__v": 0
    },
    {
        "_id": "6753eee718af1a84c7c9c714",
        "name": "Nike Club Fleece",
        "description": "Go big on comfort with this roomy French terry hoodie. Its midweight, loopback fabric offers a soft-but-breathable feel that's smooth on the outside and soft on the inside.",
        "price": 3995,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553896/products/c78i5sz0mqq4ihez4kll.webp",
        "category": "t-shirts",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:44:55.700Z",
        "updatedAt": "2024-12-07T06:44:55.700Z",
        "__v": 0
    },
    {
        "_id": "6753ef4a18af1a84c7c9c719",
        "name": "Nike Club Fleece",
        "description": "Go big on comfort with this spacious Club Fleece crew. This midweight French terry fabric (with unbrushed loops on the inside) gives structure, breathability and softness—so it's just as ready for the gym as it is for the sofa. The dropped shoulders, longer sleeves and room through the body offer plenty of space for movement and layering.",
        "price": 3695,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733553995/products/epbgyjdq2lem8oqcx9ry.jpg",
        "category": "t-shirts",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:46:34.591Z",
        "updatedAt": "2024-12-07T06:46:34.591Z",
        "__v": 0
    },
    {
        "_id": "6753ef7918af1a84c7c9c71c",
        "name": "Nike Club",
        "description": "Go big on comfort with this spacious sweatshirt. Densely knit, with unbrushed loops on the inside, this heavyweight French terry fabric helps keep you warm and comfortable.\n\n",
        "price": 3795,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554041/products/vdfrxli3t8hzauonffrc.webp",
        "category": "t-shirts",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:47:21.217Z",
        "updatedAt": "2024-12-07T06:47:21.217Z",
        "__v": 0
    },
    {
        "_id": "6753eff718af1a84c7c9c720",
        "name": "Nike Sportswear",
        "description": "Dropped shoulders, longer sleeves and a roomy fit through the body and hips give this Max90 tee a relaxed look. The rich, heavyweight cotton fabric has a stiff drape and structured feel.\n\n",
        "price": 2695,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554166/products/zmjn4pps68fh11xzeave.webp",
        "category": "t-shirts",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:49:27.557Z",
        "updatedAt": "2024-12-07T06:49:27.557Z",
        "__v": 0
    },
    {
        "_id": "6753f0a118af1a84c7c9c723",
        "name": "Nike Repel Miler",
        "description": "An essential piece to your running game gets an update on the Nike Repel Miler Jacket. It's built to take on wet weather with a water-repellent design and a hood. The packable design features a look steeped in Nike's heritage. This product is made from 100% recycled polyester fibres.",
        "price": 4695,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554338/products/sdmdgim8robvr8jo2kwn.webp",
        "category": "jackets",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:52:17.464Z",
        "updatedAt": "2024-12-07T06:52:17.464Z",
        "__v": 0
    },
    {
        "_id": "6753f0c918af1a84c7c9c726",
        "name": "Jordan Flight",
        "description": "Warmth and a standout look? That's Jordan for you. Get cosy in high-pile fleece that has a thick, woolly feel. A two-way zip adds casual style to this roomy jacket, so you look as good as you feel.",
        "price": 7995,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554377/products/dkqfopiyhnmbs1uciump.jpg",
        "category": "jackets",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:52:57.056Z",
        "updatedAt": "2024-12-07T06:52:57.056Z",
        "__v": 0
    },
    {
        "_id": "6753f10318af1a84c7c9c729",
        "name": "Nike Sportswear Club",
        "description": "This casual full-zip jacket is made from super-warm high-pile fleece. Zip side and chest pockets let you securely store your essentials on the go.",
        "price": 6295,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554436/products/dsztz1pwwfa7mjap1yyo.webp",
        "category": "jackets",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:53:55.501Z",
        "updatedAt": "2024-12-07T06:53:55.501Z",
        "__v": 0
    },
    {
        "_id": "6753f15d18af1a84c7c9c72c",
        "name": "Nike Utility Speed",
        "description": "If your gym locker was a backpack, this is how it'd look. The spacious main compartment has a mesh pocket, laptop sleeve and enough room for a pair of shoes and change of clothes. It makes getting from work to your next training session a breeze.\n\n",
        "price": 4995,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554526/products/cul7rmrizmlg9eu4eoiu.jpg",
        "category": "bags",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:55:25.496Z",
        "updatedAt": "2024-12-07T06:55:25.496Z",
        "__v": 0
    },
    {
        "_id": "6753f17e18af1a84c7c9c72f",
        "name": "Nike Heritage",
        "description": "Keep the cold at bay with the Nike Heritage Backpack. Reinforced panels help protect your gear from the elements and oversized zip pulls provide easy access, so you can keep moving when it feels like the world is frozen solid",
        "price": 3795,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554558/products/ayqpj4pts423gskqdotz.webp",
        "category": "bags",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:55:58.134Z",
        "updatedAt": "2024-12-07T06:55:58.134Z",
        "__v": 0
    },
    {
        "_id": "6753f1ab18af1a84c7c9c732",
        "name": "Nike Hayward",
        "description": "The Nike Hayward Backpack is a new twist on an old favourite with plenty of room for your gear. The durable design has webbing at the front to hold a jacket and side pockets for a water bottle.",
        "price": 3795,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554603/products/ntxwuqndfqjsp4d40hsc.webp",
        "category": "bags",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:56:43.062Z",
        "updatedAt": "2024-12-07T06:56:43.062Z",
        "__v": 0
    },
    {
        "_id": "6753f1cb18af1a84c7c9c735",
        "name": "Nike Academy",
        "description": "The Nike Academy Gymsack is a lightweight design with a drawstring closure, so you can quickly access your belongings when you're on the go. An exterior pocket lets you keep smaller items separate. This product is made from at least 50% recycled polyester fibres.",
        "price": 895,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733554635/products/wnhtjsn2zhwfvctdxn3x.jpg",
        "category": "bags",
        "isFeatured": false,
        "createdAt": "2024-12-07T06:57:15.139Z",
        "updatedAt": "2024-12-07T06:57:15.139Z",
        "__v": 0
    },
    {
        "_id": "6753f39318af1a84c7c9c739",
        "name": "Nike Form",
        "description": "Built for running, training and yoga, the Form collection helps you through your favourite exercises with lightweight fabric and essential features. These relaxed-fit trousers help keep the sweat away throughout your workout. Plus, the handy pockets let you take along a key, card or phone.\n\n",
        "price": 2795,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733555091/products/tvd3bijaq6rztmnhsdua.webp",
        "category": "trousers",
        "isFeatured": false,
        "createdAt": "2024-12-07T07:04:51.172Z",
        "updatedAt": "2024-12-07T07:04:51.172Z",
        "__v": 0
    },
    {
        "_id": "6753f3b318af1a84c7c9c73c",
        "name": "Jordan Sport Hoop Fleece",
        "description": "Look and feel fresh on and off the court in our premium, lightweight fleece. Smooth both inside and outside, these trousers give you plenty of warmth without adding bulk. Plus, their sweat-wicking fabric helps you stay dry and comfortable when things heat up.",
        "price": 5495,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733555122/products/sdtvpbe6rozg7uay6zkn.webp",
        "category": "trousers",
        "isFeatured": false,
        "createdAt": "2024-12-07T07:05:23.984Z",
        "updatedAt": "2024-12-07T07:05:23.984Z",
        "__v": 0
    },
    {
        "_id": "6753f45218af1a84c7c9c73f",
        "name": "Nike Icon",
        "description": "Lightweight and breathable, these Icon Basketball Trousers have a sweat-wicking woven shell and inner mesh lining to help keep you cool. Their loose fit gives a throwback warm-up feel that easily layers over your shorts.",
        "price": 3695,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733555219/products/rwof9pweghnbsgrwaqdr.webp",
        "category": "trousers",
        "isFeatured": false,
        "createdAt": "2024-12-07T07:08:02.119Z",
        "updatedAt": "2024-12-07T07:08:02.119Z",
        "__v": 0
    },
    {
        "_id": "6753f47518af1a84c7c9c742",
        "name": "Jordan Brooklyn Fleece",
        "description": "Joggers you can reach for any day of the week? Yeah, we've got 'em. Smooth on the outside with unbrushed loops on the inside, this midweight French terry layer is breathable enough to wear all year long. Plus, an elastic waistband with a drawcord makes securing your fit easy.",
        "price": 3795,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733555318/products/dzxizats1bdcd2zfiibj.webp",
        "category": "trousers",
        "isFeatured": false,
        "createdAt": "2024-12-07T07:08:37.539Z",
        "updatedAt": "2024-12-07T07:08:37.539Z",
        "__v": 0
    },
    {
        "_id": "6753f5d018af1a84c7c9c745",
        "name": "Nike Club",
        "description": "A classic mid-depth cap with plenty of styling options, this Nike Club Cap comes in smooth cotton twill that has a soft wash for easy comfort from day 1. The pre-curved bill lends itself to casual styling, and the adjustable back-strap lets you find the right fit.",
        "price": 1195,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733555665/products/oxdlyf2uj8k7juqkwjgw.webp",
        "category": "headwears",
        "isFeatured": false,
        "createdAt": "2024-12-07T07:14:24.794Z",
        "updatedAt": "2024-12-07T07:14:24.794Z",
        "__v": 0
    },
    {
        "_id": "6753f61e18af1a84c7c9c748",
        "name": "Jordan Rise Cap",
        "description": "Is your outfit missing an understated dad hat to show the world your Jordan pride? We've got you. This classic structured fit has a sloped crown and a curved bill for a casual, broken-in look. And the metal Jumpman emblem makes a perfectly subtle statement.",
        "price": 1195,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733555743/products/emtfoitkvgvcad50aikr.webp",
        "category": "headwears",
        "isFeatured": false,
        "createdAt": "2024-12-07T07:15:42.968Z",
        "updatedAt": "2024-12-07T07:15:42.968Z",
        "__v": 0
    },
    {
        "_id": "6753f68718af1a84c7c9c74b",
        "name": "Nike Dri-FIT Fly",
        "description": "From the gym, to the trail, to the course—this Nike Fly cap is ready for it all. The 5-panel low-depth design features stretchy, sweat-wicking fabric that will keep you fresh through every move. Its unstructured crown and curved bill are made for immediate comfort so you can focus on tackling your goals ahead.",
        "price": 1295,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733555847/products/lphyrfkhjnmit03tj6bl.webp",
        "category": "headwears",
        "isFeatured": false,
        "createdAt": "2024-12-07T07:17:27.396Z",
        "updatedAt": "2024-12-07T07:17:27.396Z",
        "__v": 0
    },
    {
        "_id": "6753f6bc18af1a84c7c9c74e",
        "name": "Nike Dri-FIT ADV Ace",
        "description": "This unstructured low-depth visor is made for tennis lovers both on and off the court. Ventilation in the design provides a breezy feel where you need it most, while the stretchy, sweat-wicking fabric helps you stay fresh. The shortened AeroBill is designed for minimal distractions while you're serving so you can confidently play your best.\n\n",
        "price": 1195,
        "image": "https://res.cloudinary.com/dtwbjriwu/image/upload/v1733555900/products/c1f3hus4ktc5v0jliypj.webp",
        "category": "headwears",
        "isFeatured": false,
        "createdAt": "2024-12-07T07:18:20.393Z",
        "updatedAt": "2024-12-07T07:18:20.393Z",
        "__v": 0
    }
]
app.get('/api/products', (req, res) => {
    return res.status(200).json(products)
});
app.use('/api/auth', authRoutes)
// Route Ends

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:` + PORT);
});

