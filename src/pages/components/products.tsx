import { Text } from "@components/common";
import ProductGrid from "@components/product/ProductGrid";
import ProductList from "@components/product/ProductList";
import React from "react";
import { Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import bgImg from "@assets/images/logo/logo_cover2.jpg";
import ProductGridSlide from "@components/product/ProductGridSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductListSlide from "@components/product/ProductListSlide";

function Products() {
  const productData = [
    {
      name: "Logitech G305 Gaming Mouse",
      category: "Computer & Accessories",
      id: "TN000005",
      features: [],
      price: 95,
      discount: 50,
      salePrice: 47.5,
      shippingCost: 20,
      rating: 3.5,
      totalReview: 6,
      favorite: 282,
      isInStock: true,
      isNew: true,
      tags: ["Computer", "Mac Book", "Mac Book Pro", "Laptop"],
      shortDescription:
        "Testing conducted by Apple in October 2018 using pre-production 2.9GHz 6‑core Intel Core i9‑based 15-inch MacBook Pro systems with Radeon Pro Vega 20 graphics, and shipping 2.9GHz 6‑core Intel Core i9‑based 15‑inch MacBook Pro systems with Radeon Pro 560X graphics, both configured with 32GB of RAM and 4TB SSD.",
      desc: `<p>Over the years, Apple has built a reputation for releasing its products with a lot of fanfare – but that didn’t exactly happen for the MacBook Pro 2018. Rather, Apple’s latest pro laptop experienced a subdued launch, in spite of it offering a notable spec upgrade over the 2017 model – along with an improved idboard. And, as with previous generations the 15-inch MacBook Pro arrives alongside a 13-inch model.</p>
                <p>Apple still loves the MacBook Pro though, despite the quiet release. This is because, while the iPhone XS and iPad, along with the 12-inch MacBook, are aimed at everyday consumers, the MacBook Pro has always aimed at the creative and professional audience. This new MacBook Pro brings a level of performance (and price) unlike its more consumer-oriented devices.</p>
                <p>Still, Apple wants mainstream users to buy the MacBook Pro, too. So, if you’re just looking for the most powerful MacBook on the market, you’ll love this new MacBook Pro. Just keep in mind that, while the idboard has been updated, there are still some issues with it.</p>
                <p>There’s enough of a difference between the two sizes when it comes to performance to warrant two separate reviews, and here we’ll be looking at how the flagship 15-inch MacBook Pro performs in 2019.</p>
                <p>It's build quality and design is batter than elit. Numquam excepturi a debitis, sint voluptates, nam odit vel delectus id repellendus vero reprehenderit quidem totam praesentium vitae nesciunt deserunt. Sint, veniam?</p>`,
      specification: {
        Processor: "2.3GHz quad-core Intel Core i5",
        Memory: "8GB of 2133MHz LPDDR3 onboard memory",
        "Brand Name": "Apple",
        Model: "Mac Book Pro",
        Display: "13.3-inch (diagonal) LED-backlit display with IPS technology",
        Storage: "512GB SSD",
        Graphics: "Intel Iris Plus Graphics 655",
        Weight: "7.15 pounds",
        Finish: "Silver, Space Gray",
      },
      reviews: [
        {
          id: 1,
          title: "Awesome support, great code 😍",
          rating: 5,
          author: "Drik Smith",
          date: "October 14, 2019",
          text: "You shouldn't need to read a review to see how nice and polished this theme is. So I'll tell you something you won't find in the demo. After the download I had a technical question, emailed the team and got a response right from the team CEO with helpful advice.",
        },
        {
          id: 2,
          title: "Outstanding Design, Awesome Support",
          rating: 4.5,
          author: "Liane",
          date: "December 14, 2019",
          text: "This really is an amazing template - from the style to the font - clean layout. SO worth the money! The demo pages show off what Bootstrap 4 can impressively do. Great template!! Support response is FAST and the team is amazing - communication is important.",
        },
      ],
      files: [{ id: 1, src: "https://i.imgur.com/3qJYpe5.jpg" }],
      video: "https://www.youtube.com/embed/i-LpFXPDHc8?si=8YtUosm1p5BvBcfI",
      videoPoster: bgImg,
    },
    {
      name: "Apple Watch Series 4 44mm GPS Only",
      category: "Watches & Accessories",
      id: "TN000006",
      features: [],
      price: 400,
      discount: 10,
      salePrice: 360,
      shippingCost: 24,
      rating: 5,
      totalReview: 4,
      favorite: 282,
      isInStock: true,
      isNew: true,
      tags: ["Computer", "Mac Book", "Mac Book Pro", "Laptop"],
      shortDescription:
        "Testing conducted by Apple in October 2018 using pre-production 2.9GHz 6‑core Intel Core i9‑based 15-inch MacBook Pro systems with Radeon Pro Vega 20 graphics, and shipping 2.9GHz 6‑core Intel Core i9‑based 15‑inch MacBook Pro systems with Radeon Pro 560X graphics, both configured with 32GB of RAM and 4TB SSD.",
      desc: `<p>Over the years, Apple has built a reputation for releasing its products with a lot of fanfare – but that didn’t exactly happen for the MacBook Pro 2018. Rather, Apple’s latest pro laptop experienced a subdued launch, in spite of it offering a notable spec upgrade over the 2017 model – along with an improved idboard. And, as with previous generations the 15-inch MacBook Pro arrives alongside a 13-inch model.</p>
                <p>Apple still loves the MacBook Pro though, despite the quiet release. This is because, while the iPhone XS and iPad, along with the 12-inch MacBook, are aimed at everyday consumers, the MacBook Pro has always aimed at the creative and professional audience. This new MacBook Pro brings a level of performance (and price) unlike its more consumer-oriented devices.</p>
                <p>Still, Apple wants mainstream users to buy the MacBook Pro, too. So, if you’re just looking for the most powerful MacBook on the market, you’ll love this new MacBook Pro. Just keep in mind that, while the idboard has been updated, there are still some issues with it.</p>
                <p>There’s enough of a difference between the two sizes when it comes to performance to warrant two separate reviews, and here we’ll be looking at how the flagship 15-inch MacBook Pro performs in 2019.</p>
                <p>It's build quality and design is batter than elit. Numquam excepturi a debitis, sint voluptates, nam odit vel delectus id repellendus vero reprehenderit quidem totam praesentium vitae nesciunt deserunt. Sint, veniam?</p>`,
      specification: {
        Processor: "2.3GHz quad-core Intel Core i5",
        Memory: "8GB of 2133MHz LPDDR3 onboard memory",
        "Brand Name": "Apple",
        Model: "Mac Book Pro",
        Display: "13.3-inch (diagonal) LED-backlit display with IPS technology",
        Storage: "512GB SSD",
        Graphics: "Intel Iris Plus Graphics 655",
        Weight: "7.15 pounds",
        Finish: "Silver, Space Gray",
      },
      reviews: [
        {
          id: 1,
          title: "Awesome support, great code 😍",
          rating: 5,
          author: "Drik Smith",
          date: "October 14, 2019",
          text: "You shouldn't need to read a review to see how nice and polished this theme is. So I'll tell you something you won't find in the demo. After the download I had a technical question, emailed the team and got a response right from the team CEO with helpful advice.",
        },
        {
          id: 2,
          title: "Outstanding Design, Awesome Support",
          rating: 4.5,
          author: "Liane",
          date: "December 14, 2019",
          text: "This really is an amazing template - from the style to the font - clean layout. SO worth the money! The demo pages show off what Bootstrap 4 can impressively do. Great template!! Support response is FAST and the team is amazing - communication is important.",
        },
      ],
      files: [{ id: 1, src: "https://i.imgur.com/3qJYpe5.jpg" }],
      // video: 'https://www.youtube.com/embed/i-LpFXPDHc8?si=8YtUosm1p5BvBcfI',
      videoPoster: bgImg,
    },
    {
      name: "Canon Standard Zoom Lens",
      category: "Camera",
      id: "TN000007",
      features: [],
      price: 500,
      discount: 20,
      salePrice: 400,
      shippingCost: 60,
      rating: 4,
      totalReview: 10,
      favorite: 282,
      isInStock: false,
      isNew: true,
      tags: ["Computer", "Mac Book", "Mac Book Pro", "Laptop"],
      shortDescription:
        "Testing conducted by Apple in October 2018 using pre-production 2.9GHz 6‑core Intel Core i9‑based 15-inch MacBook Pro systems with Radeon Pro Vega 20 graphics, and shipping 2.9GHz 6‑core Intel Core i9‑based 15‑inch MacBook Pro systems with Radeon Pro 560X graphics, both configured with 32GB of RAM and 4TB SSD.",
      desc: `<p>Over the years, Apple has built a reputation for releasing its products with a lot of fanfare – but that didn’t exactly happen for the MacBook Pro 2018. Rather, Apple’s latest pro laptop experienced a subdued launch, in spite of it offering a notable spec upgrade over the 2017 model – along with an improved idboard. And, as with previous generations the 15-inch MacBook Pro arrives alongside a 13-inch model.</p>
                <p>Apple still loves the MacBook Pro though, despite the quiet release. This is because, while the iPhone XS and iPad, along with the 12-inch MacBook, are aimed at everyday consumers, the MacBook Pro has always aimed at the creative and professional audience. This new MacBook Pro brings a level of performance (and price) unlike its more consumer-oriented devices.</p>
                <p>Still, Apple wants mainstream users to buy the MacBook Pro, too. So, if you’re just looking for the most powerful MacBook on the market, you’ll love this new MacBook Pro. Just keep in mind that, while the idboard has been updated, there are still some issues with it.</p>
                <p>There’s enough of a difference between the two sizes when it comes to performance to warrant two separate reviews, and here we’ll be looking at how the flagship 15-inch MacBook Pro performs in 2019.</p>
                <p>It's build quality and design is batter than elit. Numquam excepturi a debitis, sint voluptates, nam odit vel delectus id repellendus vero reprehenderit quidem totam praesentium vitae nesciunt deserunt. Sint, veniam?</p>`,
      specification: {
        Processor: "2.3GHz quad-core Intel Core i5",
        Memory: "8GB of 2133MHz LPDDR3 onboard memory",
        "Brand Name": "Apple",
        Model: "Mac Book Pro",
        Display: "13.3-inch (diagonal) LED-backlit display with IPS technology",
        Storage: "512GB SSD",
        Graphics: "Intel Iris Plus Graphics 655",
        Weight: "7.15 pounds",
        Finish: "Silver, Space Gray",
      },
      reviews: [
        {
          id: 1,
          title: "Awesome support, great code 😍",
          rating: 5,
          author: "Drik Smith",
          date: "October 14, 2019",
          text: "You shouldn't need to read a review to see how nice and polished this theme is. So I'll tell you something you won't find in the demo. After the download I had a technical question, emailed the team and got a response right from the team CEO with helpful advice.",
        },
        {
          id: 2,
          title: "Outstanding Design, Awesome Support",
          rating: 4.5,
          author: "Liane",
          date: "December 14, 2019",
          text: "This really is an amazing template - from the style to the font - clean layout. SO worth the money! The demo pages show off what Bootstrap 4 can impressively do. Great template!! Support response is FAST and the team is amazing - communication is important.",
        },
      ],
      files: [{ id: 1, src: "https://i.imgur.com/3qJYpe5.jpg" }],
      video: "https://www.youtube.com/embed/i-LpFXPDHc8?si=8YtUosm1p5BvBcfI",
      videoPoster: bgImg,
    },
    {
      name: "Nikon D3200 Digital DSLR Camera",
      category: "Camera",
      id: "TN000008",
      features: [],
      price: 2398,
      discount: "",
      salePrice: "",
      shippingCost: 30,
      rating: 4,
      totalReview: 5,
      favorite: 282,
      isInStock: true,
      isNew: false,
      tags: ["Computer", "Mac Book", "Mac Book Pro", "Laptop"],
      shortDescription:
        "Testing conducted by Apple in October 2018 using pre-production 2.9GHz 6‑core Intel Core i9‑based 15-inch MacBook Pro systems with Radeon Pro Vega 20 graphics, and shipping 2.9GHz 6‑core Intel Core i9‑based 15‑inch MacBook Pro systems with Radeon Pro 560X graphics, both configured with 32GB of RAM and 4TB SSD.",
      desc: `<p>Over the years, Apple has built a reputation for releasing its products with a lot of fanfare – but that didn’t exactly happen for the MacBook Pro 2018. Rather, Apple’s latest pro laptop experienced a subdued launch, in spite of it offering a notable spec upgrade over the 2017 model – along with an improved idboard. And, as with previous generations the 15-inch MacBook Pro arrives alongside a 13-inch model.</p>
                <p>Apple still loves the MacBook Pro though, despite the quiet release. This is because, while the iPhone XS and iPad, along with the 12-inch MacBook, are aimed at everyday consumers, the MacBook Pro has always aimed at the creative and professional audience. This new MacBook Pro brings a level of performance (and price) unlike its more consumer-oriented devices.</p>
                <p>Still, Apple wants mainstream users to buy the MacBook Pro, too. So, if you’re just looking for the most powerful MacBook on the market, you’ll love this new MacBook Pro. Just keep in mind that, while the idboard has been updated, there are still some issues with it.</p>
                <p>There’s enough of a difference between the two sizes when it comes to performance to warrant two separate reviews, and here we’ll be looking at how the flagship 15-inch MacBook Pro performs in 2019.</p>
                <p>It's build quality and design is batter than elit. Numquam excepturi a debitis, sint voluptates, nam odit vel delectus id repellendus vero reprehenderit quidem totam praesentium vitae nesciunt deserunt. Sint, veniam?</p>`,
      specification: {
        Processor: "2.3GHz quad-core Intel Core i5",
        Memory: "8GB of 2133MHz LPDDR3 onboard memory",
        "Brand Name": "Apple",
        Model: "Mac Book Pro",
        Display: "13.3-inch (diagonal) LED-backlit display with IPS technology",
        Storage: "512GB SSD",
        Graphics: "Intel Iris Plus Graphics 655",
        Weight: "7.15 pounds",
        Finish: "Silver, Space Gray",
      },
      reviews: [
        {
          id: 1,
          title: "Awesome support, great code 😍",
          rating: 5,
          author: "Drik Smith",
          date: "October 14, 2019",
          text: "You shouldn't need to read a review to see how nice and polished this theme is. So I'll tell you something you won't find in the demo. After the download I had a technical question, emailed the team and got a response right from the team CEO with helpful advice.",
        },
      ],
      files: [{ id: 1, src: "https://i.imgur.com/3qJYpe5.jpg" }],
      // video: 'https://www.youtube.com/embed/i-LpFXPDHc8?si=8YtUosm1p5BvBcfI',
      videoPoster: bgImg,
    },
    {
      name: "Nikon AF-S FX NIKKOR 24-70mm",
      category: "Camera",
      id: "TN000009",
      features: [],
      price: 956.57,
      discount: "",
      salePrice: "",
      shippingCost: 50,
      rating: 5,
      totalReview: 4,
      favorite: 282,
      isInStock: true,
      isNew: false,
      tags: ["Computer", "Mac Book", "Mac Book Pro", "Laptop"],
      shortDescription:
        "Testing conducted by Apple in October 2018 using pre-production 2.9GHz 6‑core Intel Core i9‑based 15-inch MacBook Pro systems with Radeon Pro Vega 20 graphics, and shipping 2.9GHz 6‑core Intel Core i9‑based 15‑inch MacBook Pro systems with Radeon Pro 560X graphics, both configured with 32GB of RAM and 4TB SSD.",
      desc: `<p>Over the years, Apple has built a reputation for releasing its products with a lot of fanfare – but that didn’t exactly happen for the MacBook Pro 2018. Rather, Apple’s latest pro laptop experienced a subdued launch, in spite of it offering a notable spec upgrade over the 2017 model – along with an improved idboard. And, as with previous generations the 15-inch MacBook Pro arrives alongside a 13-inch model.</p>
                <p>Apple still loves the MacBook Pro though, despite the quiet release. This is because, while the iPhone XS and iPad, along with the 12-inch MacBook, are aimed at everyday consumers, the MacBook Pro has always aimed at the creative and professional audience. This new MacBook Pro brings a level of performance (and price) unlike its more consumer-oriented devices.</p>
                <p>Still, Apple wants mainstream users to buy the MacBook Pro, too. So, if you’re just looking for the most powerful MacBook on the market, you’ll love this new MacBook Pro. Just keep in mind that, while the idboard has been updated, there are still some issues with it.</p>
                <p>There’s enough of a difference between the two sizes when it comes to performance to warrant two separate reviews, and here we’ll be looking at how the flagship 15-inch MacBook Pro performs in 2019.</p>
                <p>It's build quality and design is batter than elit. Numquam excepturi a debitis, sint voluptates, nam odit vel delectus id repellendus vero reprehenderit quidem totam praesentium vitae nesciunt deserunt. Sint, veniam?</p>`,
      specification: {
        Processor: "2.3GHz quad-core Intel Core i5",
        Memory: "8GB of 2133MHz LPDDR3 onboard memory",
        "Brand Name": "Apple",
        Model: "Mac Book Pro",
        Display: "13.3-inch (diagonal) LED-backlit display with IPS technology",
        Storage: "512GB SSD",
        Graphics: "Intel Iris Plus Graphics 655",
        Weight: "7.15 pounds",
        Finish: "Silver, Space Gray",
      },
      reviews: [
        {
          id: 1,
          title: "Awesome support, great code 😍",
          rating: 5,
          author: "Drik Smith",
          date: "October 14, 2019",
          text: "You shouldn't need to read a review to see how nice and polished this theme is. So I'll tell you something you won't find in the demo. After the download I had a technical question, emailed the team and got a response right from the team CEO with helpful advice.",
        },
        {
          id: 2,
          title: "Outstanding Design, Awesome Support",
          rating: 4.5,
          author: "Liane",
          date: "December 14, 2019",
          text: "This really is an amazing template - from the style to the font - clean layout. SO worth the money! The demo pages show off what Bootstrap 4 can impressively do. Great template!! Support response is FAST and the team is amazing - communication is important.",
        },
      ],
      files: [{ id: 1, src: "https://i.imgur.com/3qJYpe5.jpg" }],
      video: "https://www.youtube.com/embed/i-LpFXPDHc8?si=8YtUosm1p5BvBcfI",
      videoPoster: bgImg,
    },
  ];

  const { productLayout } = useParams();
  console.log(productLayout);

  const productGrid = (
    <div>
      <Text className="text-4-medium text-black ms-n1">Product Grid</Text>
      <Row>
        {productData.map((item, index) => (
          <ProductGrid product={item} key={index} index={index} />
        ))}
      </Row>
    </div>
  );

  const productList = (
    <div>
      <Text className="text-4-medium text-black ms-n1">Product List</Text>
      <Row>
        {productData.map((item, index) => (
          <ProductList product={item} key={index} index={index} />
        ))}
      </Row>
    </div>
  );

  const productGridSlide = (
    <div>
      <Text className="text-4-medium text-black ms-n1">Product Grid Slide</Text>
      <Swiper spaceBetween={16} slidesPerView={1.7}>
        {productData.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductGridSlide product={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  const productListSlide = (
    <div>
      <Text className="text-4-medium text-black ms-n1">Product Grid Slide</Text>
      <Swiper spaceBetween={16} slidesPerView={1.2}>
        {productData.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductListSlide product={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  return (
    <div className="px-4 mt-2">
      {productLayout == "products-grid" && productGrid}
      {productLayout == "products-list" && productList}
      {productLayout == "products-grid-slide" && productGridSlide}
      {productLayout == "products-list-slide" && productListSlide}
    </div>
  );
}

export default Products;
