const productsItems = [
    {
      id: 1,
      title: "Fashion Coat",
      desc: "Elevate your style with this brown fashion coat, designed for timeless sophistication and everyday comfort. Crafted from premium fabric, it features a tailored fit and versatile design, perfect for any occasion. A must-have piece for every season.",
      img:  {url: "coat.jpg" },
      img2: { url: "coat2.jpg"},
      price: 23.99,
      oldPrice: 27.99,
      isNew: true,
      type: "featured",
      categories: ["Women", "Featured"],
      subCategories: ["Suit"] 
    },
    {
      id: 2,
      title: "Fashion Dress",
      desc: "This blue fashion dress combines elegance and versatility, perfect for any occasion. Made from high-quality fabric, it offers a flattering fit and timeless style. A stunning addition to your wardrobe for effortless sophistication.",
      img: { url: "dress.jpg"},
      img2: { url: "dress.jpg"},
      price: 28.99,
      oldPrice: 32.99,
      isNew: true,
      type: "featured",
      categories: ["Women", "Featured"],
      subCategories: ["Dress"]
    },
    {
      id: 3,
      title: "Long Sleeve T-Shirt",
      desc: "Experience comfort and style with this long sleeve t-shirt, perfect for any casual occasion. Made from soft, breathable fabric, it offers a relaxed fit and timeless appeal. A versatile staple for your everyday wardrobe.",
      img: { url: "long_sleeve.jpg"},
      img2: { url: "long_sleeve.jpg"},
      price: 15.99,
      oldPrice: 18.99,
      isNew: false,
      type: "featured",
      categories: ["Men", "Women", "Featured"],
      subCategories: ["T-shirt"]
    },
    {
      id: 4,
      title: "BFF Hoodie",
      desc: "Stay cozy and stylish with this red hoodie, crafted from soft, durable fabric for all-day comfort. Featuring a relaxed fit and classic design, it's perfect for casual outings or lounging. A vibrant wardrobe essential for every season.",
      img: { url: "/hoodie.jpg"},
      img2: { url: "hoodie.jpg"},
      price: 19.99,
      oldPrice: 23.99,
      isNew: false,
      type: "featured",
      categories: ["Men", "Women", "Featured"],
      subCategories: ["T-shirt"]
    },
    {
      id: 5,
      title: "White Suit",
      desc: "Step into timeless elegance with this white suit, tailored to perfection for a sleek and modern look. Made from high-quality fabric, it boasts a classic fit and versatile style, ideal for weddings, galas, or any formal occasion. A wardrobe essential that exudes sophistication year-round.",
      img: { url: "White_Suit.jpg"},
      img2: { url: "/White_Suit2.jpg"},
      price: 53.99,
      oldPrice: 57.99,
      isNew: true,
      type: "trending",
      categories: ["Men", "Trending"],
      subCategories: ["Suit"]
    },
    {
      id: 6,
      title: "Dinner Dress",
      desc: "Make a statement of grace and sophistication with this white dinner dress, designed to captivate with its elegant silhouette. Crafted from luxurious fabric, it features a flattering fit and timeless charm, perfect for upscale evenings and special occasions. An essential piece for a refined wardrobe.",
      img: { url: "White_Dress.jpg"},
      img2: { url: "White_Dress.jpg"},
      price: 28.99,
      oldPrice: 32.99,
      isNew: true,
      type: "trending",
      categories: ["Women", "Trending"],
      subCategories: ["Dress"]
    },
    {
      id: 7,
      title: "Black Summer Dress",
      desc: "Add a touch of charm to your child's wardrobe with this black summer dress, designed for comfort and style. Made from lightweight, breathable fabric, it features a playful yet elegant design, perfect for sunny days and special outings. A must-have for your little one's summer collection.",
      img: { url: "Kids_Summer.jpg"},
      img2: { url: "Kids_Summer.jpg"},
      price: 14.99,
      oldPrice: 18.99,
      isNew: false,
      type: "trending",
      categories: ["Women", "Trending"],
      subCategories: ["Dress"]
    },
    {
      id: 8,
      title: "Summer Shirt",
      desc: "Stay cool and stylish with this summer shirt, crafted from lightweight, breathable fabric for ultimate comfort. Featuring a relaxed fit and a versatile design, it’s perfect for casual outings, beach days, or warm evenings. A seasonal essential for effortless style.",
      img: { url: "Men_Summer.jpg"},
      img2: { url: "Men_Summer.jpg"},
      price: 20.99,
      oldPrice: 24.99,
      isNew: false,
      type: "trending",
      categories: ["Men", "Featured"],
      subCategories: ["T-shirt"]
    }
  ];
  
  export default productsItems;  