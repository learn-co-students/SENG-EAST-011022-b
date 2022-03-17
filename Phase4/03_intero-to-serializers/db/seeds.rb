# This file should contain all the record creation needed to seed the database with its default value
#
# Examples:
#
#   movies = Movie.create([{name "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
WinterItem.destroy_all
Review.destroy_all

User.create(name: "Nicole", city: "NYC", age: rand(500...10000))
User.create(name: "Liz", city: "NYC", age: rand(500...10000))
User.create(name: "Julia", city: "NYC", age: rand(500...10000))
User.create(name: "Sam", city: "NYC", age: rand(500...10000))


winterThings = [
  {
    name: "Cozy Hot Cocoa",
    img_url: "https://i.pinimg.com/originals/90/0f/21/900f210fc14bd69eca0d66ed14c0c9bd.png"
  },
  {
    name: "NYC Snow Globe",
    img_url: "https://cdn11.bigcommerce.com/s-18e00/images/stencil/1280x1280/products/10545/17701/WG-306__04483.1500052148.png?c=2"
  },
  {
    name: "Super Sled",
    img_url: "https://texvisionsprod-18d8a.kxcdn.com/design_tool/data/cscart_files/images/detailed/20/TV-Davos-NoPrint-01.png"
  },
  {
    name: "Peppermint - Taste Winter",
    img_url: "https://polkagris.com/wp-content/uploads/2018/10/1105-Polkagrishjarta-50g.png"
  },
  {
    name: "Mittens",
    img_url: "https://hestra-products.imgix.net/images/749_e3a3547309-35711-710-1-original.jpg?q=70&fit=clip&w=1000&fm=png&auto=png"
  },
  {
    name: "Ice Skates",
    img_url: "https://cdn11.bigcommerce.com/s-g2t6t8cwx3/images/stencil/1280x1280/products/267/386/FS_016a_Jackson_Artiste_Girls_Figure_Skate__07117.1617381699.png?c=1"
  },
  {
    name: "Movie Nights & Days",
    img_url: "https://cdn.shopify.com/s/files/1/0193/6473/products/HallmarkMovies_Mysteriescollection_1400x.png?v=1638666844"
  },
  {
    name: "Snowmobiling",
    img_url: "https://cdn1.polaris.com/globalassets/snow/2021/model/vehicle-cards/850-sks-155.png?v=979cfe49"
  },
  {
    name: "Car Window Scraper",
    img_url: "https://www.uwbookstore.com/storeimages/177-467844-1_hi.png"
  }
]


winterThings.each do |thing|
  thing[:price] = rand(100..1000000)
  thing[:user_id] = User.all.sample.id

  WinterItem.create(thing)

end 



100.times do
  Review.create(winter_item_id: WinterItem.all.sample.id, content: Faker::Hipster.sentence(word_count: 3))
end 