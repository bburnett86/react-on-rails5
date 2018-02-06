# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Quote.delete_all

Quote.create!(
    [
        {
            text: "It's in the act of having to do things that you don't want to that you learn something about moving past the self. Past the ego.",
            author: "Bell Hooks"
        },
        {
            text: "If you have only one smile in you give it to the people you love.",
            author: "Maya Angelou"
        },
        {
            text: "Sometimes the heart sees what is invisible to the eye.",
            author: "H. Jackson Brown Jr."
        },
        {
            text: "There are years that ask questions, and years that answer.",
            author: "Zora Neale Hurston"
        },
        {
            text: "Never be afraid to sit a while and think",
            author: "Lorraine Hansberry"
        },
        {
            text: "Patience is bitter, but it's fruit is sweet",
            author: "Aristotle"
        },
        {
            text: "Great works are performed not by strength, but by perserverance",
            author: "Samuel Jackson"
        },
        {
            text: "Every failure is a setup for success",
            author: "William Whewell"
        },
        {
            text: "Try not to become a man of success, but rather try to become a man of value",
            author: "Albert Einstein"
        },
        {
            text: "The key to immortality is first living a life worth remembering.",
            author: "Bruce Lee"
        }

    ]
)

puts "Quotes Seeded!"