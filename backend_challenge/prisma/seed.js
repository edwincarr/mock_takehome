const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const coffeeData = [
{
  name: 'Espresso',
  year: 1906,
  caffine_content: 64,
  caffine_percentage: 0.5,
  posts: {
    create: [
      {
        title: 'The First Cup',
        text: "I can't quite remember what It was, but it was made by Ann. I loved It because of that.",
        rating: 5.0,
      }
    ]
  }
},
{
  name: 'Black',
  year: 1671,
  caffine_content: 12,
  caffine_percentage: 0.5,
  posts: {
    create: [
      {
        title: 'The Second Cup',
        text: "She always makes the best coffee. I don't think there is any other like it.",
        rating: 5.0,
      }
    ]
  }
},
{
  name: 'Latte',
  year: 1950,
  caffine_content: 64,
  caffine_percentage: 0.5,
  posts: {
    create: [
      {
        title: 'The Third Cup',
        text: "Ann made me a latte. This time with honey and cinnamon. She always puts so much of herself into the coffee she makes.",
        rating: 5.0,

      }
    ]
  }
}
]

const postData = [

]

const main = async() => {
  console.log('Started Seeding...')
  for(const cd of coffeeData){
    const coffee = await prisma.coffee.create({
      data: cd
    })
  }
  console.log('Seeding Complete.')
  }



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
