# Title

    Interactive Bookstore Application

## Objective

    Build an application that allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.

## Tech Stack

    Frontend - React JS (React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.)

## Completion Instructions

### Functionality
      
#### Must Have

    1.Build a ReactJS application with multiple pages/components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.
    2.Implement features such as book search, book filtering, adding to cart, removing from cart, and order placement.

#### Nice to Have

    Bonus tasks include implementing user authentication, unit tests, and deploying the application on a hosting platform.

Pages

| page         | Page Details                                                                                                                              | Navigation                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Home         | Header - links for pages Home, Book List, Cart, Banner - Heading, description, and “Explore Books” Button                                 | -                                                                                      |     
| Book List    | Header - links for pages Home, Book List, Cart, Book Items (title, subtitle, image, price ), Search (by title, author), Filter (by Price) | "Book List" link in Header, "Explore Books" Button, "Back" Button in Book Details Page |
| Book Details | Book detailed Information (title, subtitle, image, description, price), "Add to cart" Button, "Back" button                               | Each Book Item in Book List Page                                                       |
| Cart         | Cart Items (title, subtitle, image, price), "Remove" Button, Order Summary, "Checkout" Button                                             | "Cart" link in Header, "Back" Button in Checkout Page                                  |
| Checkout     | "Back" Button,Order Form (Personal Details, Summary, Place Order)                                                                         | Checkout in Cart                                                                       |
         
             

### Guidelines to develop a project

#### Must Have

    * Utilize GitHub

        1.Commit code regularly and commit messages should be clear
        2.Include a README file explaining the project setup, usage instructions, and any additional information
        3.The repo should be well organized and easy to understand.
        4.The code should be clean, modular, and well-structured

    * The application should be visually appealing.

    * The application should handle all the errors.

#### Nice to Have

    * Implement Unit Tests

### Submission Instructions

#### Must Have

    Github Repository

#### Nice to Have

    Deploy the Application in github

## Technical Details

### Routes
     
| Page         | Route	      | Path       |
| ------------ | ------------ | ---------- |
| Home	       | Home         | /          |   
| Book List    | Book List	  | /books     |
| Book Details | Book Details | /books/:id |
| Cart	       | Cart	      | /cart      |
| Checkout     | Checkout	  | /checkout  |
| Not Found    | Not Found	  | /not-found |

### Routes & Components 

**Home**

| Component	|         Details	                              | State | API (IT Bookstore) |
| --------- | ----------------------------------------------- | ----- | ------------------ |
| Home	    | Heading, Description, and "ExploreBooks" button | -	  | -                  |
| Header	| links for pages Home, Book List, Cart	          | -     | -	               |  

**Book List**

| Components   | Details	                                | State                                 | API (IT Bookstore) |
| ------------ | ------------------------------------------ | ------------------------------------- | ------------------ |
| BookList	   | -	                                        | apiStatus, booksData, priceRangeValue | /new               |
| Header       | links for pages Home, Book List, Cart	    | -                                     | -                  |
| SearchInput  | Search (by title, author)                  | searchInputValue                      | /search/{query}    |
| PriceRange   | Filter (by price)                          | -	                                    | -                  |
| BookItem	   | Book Items (title, subtitle, image, price) | -	                                    | -                  |
| Loader       | -                                          | -                                     | -                  |
| ErrorMessage | -                                          | -                                     | -                  |

**Book Details**

| Components   | Details	                                                                                                       | State                      | API (IT Bookstore) |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| BookDetails  | Book detailed Information - image, title, subtitle, price, description, etc., “Add to cart” Button, “Back” button | apiStatus, bookDetailsData | /books/{isbn}      |
| Header       | links for pages Home, Book List, Cart                                                                       	   | -	                        | -                  |
| Loader       | -	                                                                                                               | -                          | -                  |                                                            
| ErrorMessage | -                                                                                                                 | -                          | -                  |

**Cart**

| Components | Details	                                                       | State              | API (IT Bookstore) |
| ---------- | --------------------------------------------------------------- | ------------------ | ------------------ |
| Cart       | Cart Items, “Remove” Button, Order Summary, “Checkout” Button   | (Context Consumer) | -                  |                        
| Header 	 | links for pages Home, Book List, Cart                           | -                  | -                  |
| CartItem   | Book Detailed Info (image, title, subtitle, price, description) | (Context Consumer) | -                  |
                      
        
**Checkout**

| Components      | Details	                                                                                                     | State                        | API (IT Bookstore) |
| --------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| Checkout        |	“Back” button                             	                                                                 | (Context Consumer)           | -                  |
| UserDetailsForm | Order Form - Personal Details - First Name, Last Name, Email, Mobile No. ,Place  Order Button, Order Summary | userDetails, isFormSubmitted | -                  |

**Not Found**

| Components | Details	                             | State  | API (IT Bookstore)                     |
| ---------- | ------------------------------------- | ------ | -------------------------------------- |
| NotFound   | -                                     | - 	  | -                                      |
| Header     | links for pages Home, Book List, Cart | Header | links for pages Home, Book List, Cart  |

**App**

| Components | Details | State	                                                                                  | API (IT Bookstore) |
| ---------- | ------- | ---------------------------------------------------------------------------------------- | ------------------ |
| App	     | -	   | cartList (Context Provider), Context: cartList, addToCart(), deleteFromCart, resetCart() | -                  |


## Resources

### Design files

    Home, Book Lists, Book Details, Shopping Cart, Checkout

    Reference: https://www.crossword.in/

### APIs

    Books, Book Details, Search, Filter

    Reference: https://api.itbook.store

### Third-party packages

    * React Router (react-router-dom)
    * Loader (react-loader-spinner)
    * Icons (react-icons)
    * Range Slider (rc-slider)
