# - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [audiophile-pink.vercel.app](https://audiophile-pink.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- CSS Grid
- Mobile-first workflow
- React
- React Router DOM

### What I learned

- Media queries for different img sources at different screen sizes

```html
<picture className="category-page-card__picture">
  <source media="(min-width: 1000px)"
  srcSet={`/assets/product-${product.slug}/desktop/image-category-page-preview.jpg`}
  /> <source media="(min-width: 750px)"
  srcSet={`/assets/product-${product.slug}/tablet/image-category-page-preview.jpg`}
  />
  <img
    className="category-page-card__img"
    src="{product.image.mobile.substring(1)}"
    alt="{product.name}"
  />
</picture>
```
