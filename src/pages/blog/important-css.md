---
layout: '../../layouts/BlogPost.astro'
title: '!important CSS. The bad, The Ugly, and The Alternative, and When Does It Might Be Usefull'
description: "It's Friday, 1 hour before a long weekend and your CSS is not working as it is supposed to be.
You are running out of time and you are tempted to just add `!important` and call it a day."
publishDate: '16 Jul 2022'
heroImage:
  src: '/blogs/istockphoto-1071204136-612x612.jpg'
  alt: 'Cat'
---

It's Friday, 1 hour before a long weekend and your CSS is not working as it is supposed to be.
You are running out of time and you are tempted to just add `!important` and call it a day.

Most experts consider the use of the !important declaration (or !important tag) as an anti-pattern.

!important is a useful tool, but the drawback is that it's kind of a tool of last resort. So you don't want to over-use it as you'll end up causing headaches down the road for anyone that's maintaining the site.

It will be a nightmare to maintain a website that has `!important` scatter around like crazy.
They're called Cascading for a reason, It's best to use specificity in CSS rules to get something to work.

<blockquote><p lang="en" dir="ltr">Using `!important` in your CSS usually means you&#39;re narcissistic &amp; selfish or lazy. Respect the devs to come...</p>&mdash; Stephanie Rewis (@stefsull) <a href="https://twitter.com/stefsull/status/70631020352913408?ref_src=twsrc%5Etfw">May 17, 2011</a></blockquote>

**CSS Specifity**

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

Think of specificity as prioritization, each selector has its own prioritization. The browser will prioritize the highest one when it decides which style will be applied in the element.

Example:
In this example, we have used the "p" element as a selector and specified a red color for this element. The text will be blue:

```html
<html>
  <head>
    <style>
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>Hello Blue World!</p>
  </body>
</html>
```

Then I decide to override the style by changing the color of Hello Blue World! into red. I can't change the global css of p. so I'll add a class selector "text-red" instead.

```html
<html>
  <head>
    <style>
      p {
        color: blue;
      }
      .text-red {
        color: red;
      }
    </style>
  </head>
  <body>
    <p class="text-red">Hello Blue World!</p>
  </body>
</html>
```

The text will be red now because class selector has a higher priority.

**Specificity Hierarchy**

Every CSS selector has its place in the specificity hierarchy.

There are four categories that define the specificity level of a selector:

Inline styles
Example: `<h1 style="color: pink;">`

IDs - Example: #navbar

Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]

Elements and pseudo-elements - Example: h1, :before

**Why does it feel so evil? what does `!important` tag do?**

When you are using `!important`, it forces your style specificity priority to be the highest.
this includes inline style.

Say you have this css:

```css
.heading {
  font-size: 24px;
  color: blue `!important`;
}
```

You use this class through many pages, then you have a specific use-case where you should change your heading to black color

```html
<h1 class="heading" style="color:black;">Header</h1>
```

Too bad! it won't work. you must also add `!important` into your style

```html
<h1 class="heading" style="color:black `!important`;">Header</h1>
```

Then your team tried to reuse your class only to find that they must do the same thing.
It was hard to work around.

**What is the alternative?**

There are some alternatives you should try:

**1. Try to increase your specificity**

Say we have this :

```html
<html>
  <head>
    <style>
      .text {
        color: red;
      }
    </style>
  </head>
  <body>
    <p class="text">Hello Red World!</p>
  </body>
</html>
```

Then you can do this:

```html
<html>
  <head>
    <style>
      .text {
        color: red;
      }
      .text-blue-wrapper .text {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div class="text-blue-wrapper">
      <p class="text">Hello Red World!</p>
    </div>
  </body>
</html>
```

As you can see the `text-blue-wrapper .text` will override `.text` because it has higher specificity.

**2. Double class selector**

Say you have used a UI library, it has a really specific theme color that cannot be changed and you have a hard time changing it.
You feel the urge to use the `!important` rule for this case but hold your horses. The case might not be a total disaster yet! You can easily put this knowledge into practice.

```html
<html>
  <head>
    <style>
      .text {
        color: red;
      }
      .text.text {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p class="text">Hello World!</p>
  </body>
</html>
```

<iframe src="https://codesandbox.io/embed/thirsty-sun-oxx60i?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="thirsty-sun-oxx60i"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   
The second selector has its specificity increasing by writing it like that.
It might not a good practice, but better than using `!important` and ID's selector.
If you don't want to use that, so manage your specificity in a smart way!

**When using `!important` might be a good idea**

So when is the `!important` rule useful and a good idea?
Well, it does have a potential use-case, like when you create a utility class.

For example :

```css
.text-underline {
  text-decoration: underline !important;
}

.tex-bold {
  font-weight: bold !important;
}
```

In this case, you are already expecting the text to be underlined or bold when you are using the class,
so it might be an awesome idea to do it like this.

**Wrapping Up**

`!important` CSS is like a special power,
you must know what you do before deciding to use it, otherwise, you will screw up your css code.
But it also has some potential use-case as I mentioned above, what's your thought?
