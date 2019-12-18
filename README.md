# instantRahmen (#WIP December 2019)
https://instantrahmen.herokuapp.com

I originally completed this project as part of my General Assembly Software Engineering course in August 2019. While the site was fully functional, there was a lot to be desired in terms of the design and features of the app. So, in December 2019, I decided to redesign the app with improved features and a completely new design. I expect to be done with everything in January 2020.

![alt text](https://github.com/winslowdev/instantrahmen/blob/master/images-new/06%20recipes-add.png "New add recipes page")

#### User Stories
1. Users should be able to sign up for an account and log in to add code snippets.
2. Users should be able to edit their code snippets and delete them if necessary.
3. Users should be able to log out from sessions.
4. NEW — Users should be able to delete their own accounts.

![alt text](https://github.com/winslowdev/instantrahmen/blob/master/images-old/06%20recipes-add.png "Old add recipes page")

#### Improvements
* New design language featuring bold lettering and a darkened theme.
* Previously, when signing up for an account, it would redirect to the home page. Then the user would have to click log in. This has been changed. When clicking the submit button after signing up, it automatically logs the user in.
* TBI — Before, entering the recipe used text boxes per line. I'd like to implement a <textarea> that parses the data into an array and correctly renders it on the recipe card.

### Technologies used
* HTML/CSS
* NodeJS (https://nodejs.org/en/)
* MongoDB (https://www.mongodb.com)
* Mongoose (https://mongoosejs.com/)
* Express (https://expressjs.com/)
* EJS (https://ejs.co/)
