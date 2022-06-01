# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Greeting.destroy_all

Greeting.create(message: 'Nice to meet you')
Greeting.create(message: 'Cheers')
Greeting.create(message: 'Guten Tag')
Greeting.create(message: 'Buenos dias')
Greeting.create(message: 'Konichiwa')
Greeting.create(message: 'Bonjour')
Greeting.create(message: 'Buongiorno')
Greeting.create(message: 'Servus')
Greeting.create(message: 'Assalamu alaikum')