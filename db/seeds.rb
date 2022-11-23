# This file should contain all the record creation needed to seed the 
# database with its default values.
# The data can then be loaded with the bin/rails db:seed command 
# (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

pp "Seeding...   "
pp "Current data will be deleted and PK sequence reset. "

default_password = BCrypt::Password.create('1234')

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
3.times do
    name = Faker::Name.first_name
    User.create!([{
        username: name,
        password_digest: default_password,
        email: name + "@gmail.com",
        interval: 5,
        preferences: ""
    }])
end

List.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('lists')
6.times do
    List.create!([{
        user_id: rand(3) + 1,
        list_name: Faker::Hobby.activity,
        order: ""
    }])
end

Task.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('tasks')
18.times do
    Task.create!([{
        list_id: rand(6) + 1,
        name: Faker::Company.bs,
        length: rand(30) + 1,
        status: "incomplete"
    }])
end

pp "Seeding done! "