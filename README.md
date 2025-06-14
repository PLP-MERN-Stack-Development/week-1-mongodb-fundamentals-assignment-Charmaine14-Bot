# MongoDB Bookstore Database 

## Project Overview

This is a comprehensive MongoDB database setup designed for bookstore applications, serving as both a learning resource and development foundation. The project includes pre-configured sample data, automated setup scripts, and educational query examples.

## Key Features

**Database Contents:**
- Collection of 12 diverse book records with complete metadata
- Automated population script for quick setup
- Range of example queries from basic to advanced levels
- Thorough documentation for easy implementation

**Book Record Structure:**
Each book entry includes essential information such as title, author, genre, publication year, pricing, stock status, page count, and publisher details.

## Technical Requirements

**Essential Software:**
- Node.js (v14+)
- MongoDB (v4.4+)
- npm package manager

**MongoDB Setup Options:**
- Local installation with community server
- Cloud-based MongoDB Atlas service
- Docker containerized deployment (recommended for development)

## Implementation Process

**Getting Started:**
1. Clone the project repository:
   ```bash
   git clone <repository-url>
   cd mongodb-bookstore-setup
   ```
2. Install Node.js dependencies:
   ```bash
   npm init -y
   npm install mongodb
   ```
3. Verify MongoDB is running (local installation)
4. Execute the database setup script:
   ```bash
   node insert_books.js
   ```

**Key Files:**
- `insert_books.js` - Contains the complete list of 12 sample books and handles database population
- `queries.js` - Includes a comprehensive collection of MongoDB queries ranging from beginner to advanced levels
- Both files work together to provide a complete learning experience

**Configuration Details:**
- Default database: `plp_bookstore`
- Collection name: `books`
- Standard connection: `mongodb://localhost:27017`
- Customizable for different MongoDB instances (Atlas, Docker, etc.)

## Sample Dataset

The database features 12 carefully curated books representing various genres and publication periods, including classics like "To Kill a Mockingbird," "1984," "The Great Gatsby," and "The Hobbit." Each record contains comprehensive metadata for realistic database operations.

## Query Examples & Learning Resources

**File Structure:**
- `insert_books.js` - Database setup script containing all 12 book records
- `queries.js` - Comprehensive query collection organized by skill level

**Query Categories in queries.js:**

**Beginner Level:**
- Basic find operations (retrieve all books, find by author)
- Simple filtering (price ranges, stock status)
- Document counting and basic aggregation

**Intermediate Level:**
- Complex filtering with multiple conditions
- Sorting and limiting results
- Basic aggregation pipelines
- Field projection and data transformation

**Advanced Level:**
- Complex aggregation operations
- Text search with indexing
- Genre analysis and statistical operations
- Performance optimization techniques

**Usage:**
After running `insert_books.js` to populate your database, you can practice with the queries from `queries.js` directly in MongoDB shell or through your preferred MongoDB client.

## Troubleshooting Support

The documentation includes solutions for common issues such as authentication failures, connection problems, missing dependencies, and network timeouts. It also provides verification steps to ensure proper setup and data integrity.

## Development Benefits

This setup serves as an excellent learning tool for MongoDB operations, providing hands-on experience with database design, data insertion, querying techniques, and best practices for bookstore or similar inventory management applications.

## Extensibility

The project welcomes contributions and can be expanded with additional book records, more complex queries, data validation schemas, and performance optimization examples, making it a valuable resource for ongoing MongoDB skill development.