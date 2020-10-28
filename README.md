# instantRahmen
https://instantrahmen.herokuapp.com (updates in progress)

Ramen (ラーメン), or "pulled noodles", is a Japanese dish that consists of Chinese wheat noodles served in a meat or (occasionally) fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, dried seaweed, egg, and scallions. But what does that have to do with code snippets? Absolutely nothing. The word 'ramen,' however, does sound like the German word 'Rahmen' which means context or framework.

![alt text](https://github.com/winslowdev/instantrahmen/blob/master/images-new/05%20recipes.png "New recipes page")

Welcome to instantRahmen, an app that lets developers save their favorite code snippets. I originally completed this project as part of my General Assembly Software Engineering course in August 2019. While the site was fully functional, there was a lot to be desired in terms of the design and features of the app. So, in December 2019, I decided to redesign the app with improved features and a completely new design, which I expect to complete by January 2020.

#### Here is some stuff users should be able to do:
1. View an example of a recipe card without signing in. It's important to know what you're getting into before you get into it. ✅
2. Sign up for a new account or log into an existing one. ✅
3. Log out from their sessions—which I have to add here because there was some glitch in the old version that didn't let users log out from certain pages. This has been fixed. ✅
4. NEW — Delete their own accounts.
5. NEW — Edit or delete only the cards created by the logged in user. ✅

![alt text](https://github.com/winslowdev/instantrahmen/blob/master/images-old/05%20recipes.png "Old recipes page")

#### Improvements
* New design language featuring bold lettering and a darker theme, but colors that pop more. ✅
* Previously, when signing up for an account, it would redirect to the home page. Then the user would have to click log in. This has been changed. When clicking the submit button after signing up, it automatically logs the user in. ✅
* TBI — Before, entering the recipe used text boxes per line. I'd like to implement a <textarea> that parses the data into an array and correctly renders it on the recipe card. 🤔

### Technologies used
* HTML/CSS
* NodeJS (https://nodejs.org/en/)
* MongoDB (https://www.mongodb.com)
* Mongoose (https://mongoosejs.com/)
* Express (https://expressjs.com/)
* EJS (https://ejs.co/)
