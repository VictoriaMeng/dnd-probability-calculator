# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(email: 'me@gmail.com', password_digest: 'xfewerfdsfdfig')
hitChance = ToHitChance.create(
  target_stat: 'AC',
  target_value: 15,
  stat_modifier: 8,
  result: 0.5,
  result_text: '50%',
  user_id: 1
)