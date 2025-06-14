// Find all books
db.books.find()

// Find book by a specific author
db.books.find({ author: "George Orwell" })

// Find books that are in stock
db.books.find({ in_stock: true })

// Count the number of books
db.books.countDocuments()

// Find books published between certain years
db.books.find({
    published_year: {
        $gte: 1940,
        $lte: 1960
    }
}).sort({ published_year: 1 })

// Find books with "The" in the title
db.books.find({
    title: {
        $regex: "The",
        $options: "i"
    }
})

// Find books by price range
db.books.find({
    price: {
        $gte: 10,
        $lt: 15
    }
})

// Find books by multiple criteria
db.books.find({
    genre: "Fiction",
    in_stock: true,
    price: { $lt: 12 }
})

// Update the price of a book
db.books.updateOne(
    { title: "1984" },
    { $set: { price: 15.99 } }
)

// Update multiple books
db.books.updateMany(
    { author: "George Orwell" },
    { $set: { featured: true } }
)

// Delete a book
db.books.deleteOne({ title: "Animal Farm" })

// Get distinct genres
db.books.distinct("genre")

// Sort books by price (highest first)
db.books.find().sort({ price: -1 })

// Get top 3 most expensive books
db.books.find().sort({ price: -1 }).limit(3)

// Aggregation: Average price by genre with book count
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      bookCount: { $sum: 1 },
      totalPages: { $sum: "$pages" }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
])

// Find authors with multiple books and their details
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 },
      books: { $push: "$title" },
      avgPrice: { $avg: "$price" }
    }
  },
  {
    $match: { bookCount: { $gt: 1 } }
  },
  {
    $sort: { bookCount: -1 }
  }
])

// Books published by decade
db.books.aggregate([
  {
    $addFields: {
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      bookCount: { $sum: 1 },
      avgPrice: { $avg: "$price" }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

// Create text index for full-text search
db.books.createIndex({
  title: "text",
  author: "text",
  genre: "text"
})

// Perform text search
db.books.find({
  $text: { $search: "brave dystopian" }
}, {
  score: { $meta: "textScore" }
}).sort({
  score: { $meta: "textScore" }
})

// Create compound index for better performance
db.books.createIndex({ genre: 1, in_stock: 1, price: 1 })

// Bulk operations
db.books.bulkWrite([
  {
    updateOne: {
      filter: { title: "1984" },
      update: { $set: { featured: true } }
    }
  },
  {
    updateMany: {
      filter: { genre: "Fiction" },
      update: { $inc: { views: 1 } }
    }
  }
])