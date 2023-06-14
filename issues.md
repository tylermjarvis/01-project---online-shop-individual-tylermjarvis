# Planning

## Deciding on what to sell

Choose the type of product you want to sell on your online shop. Think about how you will source content and images. Once you have decided what you will sell, move onto the rest of this issue.

## Understanding the project

Read through each of the GitHub issues in the To Do column. For every ticket, ensure you understand what is being asked of you. It is your responsibility to ensure you understand every ticket.

Feel free to pull in an instructor if the requirements are not clear. It's vital that you understand what is being asked of you.

In particular, identify if any tickets depend on each other. For example, you need to create a Stripe account before you can add products to the Stripe account.

## How to work on issues

Now you know what the project is, and what items you will be selling, it's time to get started.

The backlog is in priority order. You should complete the issues at the top of the column before starting any more issues. Never start a new issue before completing the previous issue. That means you should **never** have more than one issue in progress at a time.

In summary:

- You should only ever be working on one issue at a time
- Finish an issue before starting a new issue
- Start with the issues at the top of the column first. Do not re-prioritise them.

## Acceptance criteria

- [ ] You know what product you are selling
- [ ] You have one issue _In Progress_

---

# Wireframes

Produce some wireframes for your project.

Put screenshots or images of the wireframes in the `wireframes` folder in this project, add and commit them to git.

## Acceptance Criteria

- [ ] Wireframes exist in the wireframes folder in the project root

---

# Shop design and CSS

Implement a design for your shop using CSS. You should add your styles into `src/App.css`

Refer to the wireframes you generated to inform your website design.

## Acceptance criteria

- [ ] The shop has a unique design, and considers design principles
- [ ] The design is responsive and works across all screen resolutions
- [ ] CSS Grid is used for the page layout

---

# Setup Stripe Account

Follow the tutorial for setting up a new Stripe account: [Setup a Stripe account](https://www.loom.com/share/e862bc3d5c674203af78ec4d45430403)

1. Sign up for an account on [Stripe.com](https://stripe.com/nz). Use your Developers Institute email address.
2. Verify your email address
3. Enter a name for your company
4. Create a test store, and ensure you can see the API Keys

## Acceptance criteria

- [ ] A Stripe account is created
- [ ] The Stripe public key is added to the `VITE_REACT_APP_STRIPE_PUBLIC_KEY` variable in the `.env` file

---

# Set up Stripe API server

Watch the tutorial on [Setting up a Stripe API server in Render](https://www.loom.com/share/ca9149f795f34b4287c0b24895c68c21?sid=326e61ad-cc6d-4705-afe4-b165b481ac50)

1. Accept the [Online Shop Passthrough GitHub Project](https://classroom.github.com/a/NnudZCqT)
2. Login to [Render](https://render.com/) and navigate to the [Render Dashboard](https://dashboard.render.com/)
3. Click on `New` and select `Web Service` from the dropdown
4. Under `Public Git repository`, paste the URL of your project from Step 1 and click `Continue` - (this should look something like `https://github.com/Developers-Institute-Classrooms/01-project---online-shop-passthrough-XXX`)
5. Update the following fields for your new Web Service
   - `Name` set to `React Online Shop Passthrough`
   - `Start Command` set to `node app.js`
   - Expand the `Advanced` dropdown just above the `Create Web Service` button and add the following variables (Click `Add Environment Variable` for each):
      - `REDIRECT_TO` set to `http://localhost:3000`
      - `STRIPE_SECRET_KEY` set to the secret key provided by Stripe. **Important:** treat this key like a password to your Facebook account. **DO NOT SHARE IT IN SLACK, OR PUT IT IN GITHUB.** It's called a secret on purpose!
6. Click `Create Web Service` to finish creating your Web Service
7. Once your app is deployed, verify it works by clicking on the Web Service URL and adding `/products` to the end. You should see a list of your products from Stripe.
8. Take your Web Service URL, and add it to the `.env` file in this repository, under the `VITE_REACT_APP_API_URL` variable.

## Acceptance criteria

- [ ] The Web Service is deployed and accessible with from the Render URL
- [ ] The following environment variables are configured in the Web Service:
  - `REDIRECT_TO` is set to `http://localhost:3000`
  - `STRIPE_SECRET_KEY`
- [ ] The Web Service URL is added to the `VITE_REACT_APP_API_URL` variable in the `.env` file

---

# Create products in Stripe

Watch the [Adding products in Stripe](https://www.loom.com/share/16e40fb713554338adeedc72cc3eaefb) tutorial

## Acceptance criteria

- [ ] At least 6 products are created in Stripe
- [ ] Each product has the category set in the `metadata`
- [ ] Each product has a one time price associated with it

---

# Fetch products from API

1. Open `./src/services/getProducts`
2. Inside the `getProducts` function, make a fetch request to your API server to get the products and prices for your online shop.

The URL you need to call for your fetch request has been put on a variable already. It reads the value you put in your .env file. Use the `url` variable for your fetch request.

## Acceptance criteria

- [ ] The products are fetched from the Products API and returned from the `getProducts` function
- [ ] The tests pass for the `getProducts` module
- [ ] The URL is read from the `VITE_REACT_APP_API_URL` environment variable

---

# Display products on the page

Now you are fetching the products, they are put onto a variable in `App.jsx` named `products`.

Read from this variable to display all of the products on your page.

Focus on generating the correct HTML for your webpage, don't focus on the design at this stage.

## Acceptance criteria

- [ ] All products are displayed on the React page
- [ ] The HTML is semantic
- [ ] Each product should have an image, name, description, price, and buy now button.

---

# Implement the Buy Now button

Some functionality has been provided by the previous developer. There is a function that you can call that will allow customers to complete the checkout process. You will need to call this function whenever the Buy Now button is clicked.

1. Open the React Component where your Buy Now button is implemented
2. At the top of this file, import the `checkout` function. Make sure you have the correct file path, it will look something like this:

   `import { checkout } from "../../services/checkout";`

3. Add an `onClick` event handler to the button element. When it is clicked, you will need to call the `checkout` function and pass in the price id from the product. The function call might look something like this:

   `checkout(product.priceId);`

4. When implemented, you should be able to click the Buy Now button and be redirected to the Stripe checkout page. You can complete the checkout process by entering fake credit card details:

   - Credit card number: `4242424242424242`
   - Other fields: Enter any valid fields, including an expiry date in the future

## Acceptance criteria

- [ ] When the Buy Now button is clicked, the customer is redirected to the Stripe checkout page

---

# Deploy Application to Render

Watch the [Deploying a static website to Render](https://loom.com/share/d2829cd646884658a1bee1e44a4108c8) tutorial

    In the configuration screen set the following:
    - Branch: main
    - Build Command: npm run build
    - Publish directory: build

## Acceptance criteria

- [ ] Application is deployed to Render
- [ ] Link to application is included in the README

---

# Create a README

All the projects you work on should have some form of documentation. This helps others understand what the application is, how it works, and how they can contribute.

Replace the existing [README.md](README.md) file with your own documentation.

Write Markdown to format your text nicely. Watch [Writing a README file in Markdown](https://www.loom.com/share/67d4749818a545e5b1aab77102f8d4cf) to see how you can markup your plain text using the markdown syntax.

Ensure your README.md covers all the items in the acceptance criteria.

## Acceptance criteria

- [ ] Overview of what the product is, with a screenshot of how it looks.
- [ ] Lists the dependencies of the app, such as Stripe and Begin
- [ ] Includes instructions for how to use the app for development:
  - What needs to be installed on the developer's computer to run this application (e.g Node)
  - What terminal commands need to be run to get the app up and running (e.g `npm install`)
- [ ] Includes links to the deployed applications:
  - Begin
  - Render

---
