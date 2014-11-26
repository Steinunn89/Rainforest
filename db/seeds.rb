Product.destroy_all

100.times do
  Product.create(
    name: Faker::Company.catch_phrase,
    description: "#{Faker::Company.bs} from #{Faker::Company.name} #{Faker::Company.suffix}",
    price_in_cents: rand(100000)
  )
end
