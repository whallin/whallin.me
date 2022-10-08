---
layout: "../../layouts/BlogPost.astro"
language: "en"
title: "The process of creating whallin.me"
seoTitle: "The process of creating whallin.me - Blog"
description: "Every time is a first. Looking at web development has always been challenging, but the time has come to take on a new challenge finally. This is the story of whallin.me."
pubDate: "October 11, 2022"
coverImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&q=85&w=1152&h=384&fit=crop"
---

## The beginning of it all

Okay. That description was a bit of an overstatement.

I've never had a problem of reading code, right? I mean, sure, shoot assembly at me, and you may very well startle me—but other than that, there hasn't been any problem reading code for me. And honestly, that's where this entire journey and story begins for me.

I've always told myself, "*What if I knew X?*" where **X** is just a random programming language. Now, what finally got the stone rolling for me to try learning development? And especially touch my hands on front-end web development?

Well, I find that quite surprising myself.

### Minecraft sparks passion

![Steve from the game Minecraft](https://images.unsplash.com/photo-1524685794168-52985e79c1f8?auto=format&q=85&w=1152&h=384&fit=crop)

<u>I've for a long time wanted to learn Java.</u>

It's almost been a childhood dream of mine as I wanted to create my own mods and plugins for Minecraft for me and my friends to play around with. This hasn't story hasn't started yet, sadly. 😔 

I've been in the scene of user interface design for a while, and it struck me, what if I could design the interface and also develop it?

That thought hit me approximately two weeks before writing this post. 🙂

So, that is where this journey started. I want to be able to design and sketch my UI designs and turn them into usable and publishable code so that the product can be used by whoever wishes.

## Okay, but how did you start then?

Great question! And I have a lame answer for you! 🤭

<u>I told myself to start working.</u>

I know. That's a very generic answer. What are going to do about it? 🙂

No, but in all seriousness, if we map the process, we can get a bit more detail. To make it slightly more straightforward, let's break it down into a few parts. I'm doing this primarily so you, the reader, won't get *as* bored as you probably would've otherwise.

### Part 1: Doing what I know

![Figma running on a computer](https://images.unsplash.com/photo-1621111848501-8d3634f82336?auto=format&q=85&w=1152&h=384&fit=crop)

One of the challenges I set for this project was that my knowledge in development wouldn't stop my creativity when designing the website in Figma. If my mind wanted it one way, then that was what I would create. Could I do the development part of it? Who knows, that's a problem for me later.

I was ready to take on a steep learning curve if it meant that it would give me a better sense of how to do front-end web development.

<u>*Spoiler alert: It felt like a steep learning curve.*</u>

### Part 2: Hell.

Oh god, where do I start? The first challenge was wrapping my head around all the various combinations of stacks. 😕

I had some prior knowledge of what technologies existed earlier, so this didn't take as long as I had first anticipated. One of the things I knew from the start was that the goto was probably looking at a static site generator and not something which targets dynamic content, like SvelteKit, for example.

It didn't take too long until I stood between two options, **Hugo and Astro**. Both target primarily static sites, while Astro still carries some support for server-side rendering. Now, would I come to need to serve much of any dynamic content?

I still don't know. But that was one of the reasons why I ended up running with Astro. What if I wanted to implement more dynamic features? What if I needed that extra set of features and integration? 🤔

Not only that, but Astro has a boatload of [officially supported integrations](https://astro.build/integrations/official/) to allow the use of components from frameworks such as React or Vue. 

<u>So, Astro it is.</u> 🚀

### Part 3: Hell, but less hell.

![Doorway leading into red light](https://images.unsplash.com/photo-1662204505164-36d52bb7b333?auto=format&q=85&w=1152&h=384&fit=crop)

Now that we've gotten that out of the way. I set up my first Astro project and felt ready to start, so I did.

The first goal was to get the design from Figma to code, at least, which went surprisingly quickly. Having access to use TailwindCSS made the entire process way more efficient. 💙

Sure, I knew a bare minimum amount of CSS beforehand, but Tailwind came in clutch to let me quickly turn ideas into code(?). But obviously, this part wouldn't have its name if something didn't take me an atrocious amount of time to get working.

There's a feature on the homepage of this website that shows what I'm listening to on Spotify, but it displays my most recently played song instead of a live overview.

<u>I'm sorry. You must be devastated by this.</u> 🙏

Back to topic. This feature was an absolute pain to get to work. Why? Because I had 0 knowledge of how to write code that would fulfill its purpose. And for anyone who knows front-end web development earlier—fetching data isn't something you do in HTML and CSS. This meant getting my hands wrapped around yet another language.

*Does the feature work?* Yes.

*Does the feature work properly?* Yes, again.

*Do you know JavaScript, William?* No. I don't.

Or, well, I knew enough to get that tiny little feature of the website to work. Now, I already knew this wouldn't be the first roadblock. This blog would require some JavaScript to function the way I wanted it to.

Thankfully, Astro had a blog project template that I reverse-engineered, for the most part, to understand how they did things and then to apply matters into my own hands. 😌

### Part 4: Realizing that hell wasn't so bad

![Papers outside a trash can](https://images.unsplash.com/photo-1517917822086-6988b4ca9b31?auto=format&q=85&w=1152&h=384&fit=crop)

Now, you might be asking yourself. William, why is there a picture of a trash can there? 🤔

<u>And I'm glad you asked!</u>

Because this was the part where I scraped all my progress to restart the project, and sure, that might sound like a foolish thing to do—but believe me when I say it wasn't.

What I had done by scraping my progress to start from square one again, with the knowledge I had built from creating a near-done website, was enough to efficiently get through the front-end development in just a few days.

**It felt perfect to be able to write code fluently and build components that worked and were responsive without having to doubt myself.**

Sure, I kept the code for my now-playing Spotify component because it worked and wasn't too bloated. I was, in short, happy with what I had written for it. There may very well be room for improvement, and I may very well end up improving it later down the line.

## What's next in this book?

*Well, what is next in the book?* 🤔

We're here now, and thanks to this challenge I put up for myself, you can read this blog in this exact layout.

My plans next are to create a few more front-end websites and then start getting my hands dirty on more back-end aspects of things. I have some open-source product ideas that I'd love to work on that would require their own unique set of features and potentially even APIs.

<u>Do I think I'll stick to web apps and services?</u>

To be honest with you, probably. As much as I'd love to learn Java and even Rust, for that matter, I don't think that'll be around the corner anytime soon. I'd love to be as fluent as possible in front-end development and explore the worlds of JavaScript and TypeScript.

Java and Rust can wait for a while. 🙄

## Outro

Well, thanks for taking the time to read this blog post. It means a lot to me. ❤️

I hope you found my journey as interesting as I did, and I hope you'll stick around to hear more from me and my journey. I suggest you check in once in a while if there are any new posts available for you to read. I also try to notify regarding new posts on my socials, which I've linked below for easy access.

- [Twitter (twitter.com/w_hallin)](https://twitter.com/w_hallin)
- [LinkedIn (linkedin.com/in/williamhallin/)](https://linkedin.com/in/williamhallin/)
- [Polywork (polywork.com/whallin)](https://polywork.com/whallin)
- [Instagram (instagram.com/w_hallinig/)](https://instagram.com/w_hallinig/)

For the ones interested, there's also an RSS feed available for my blog over at [https://whallin.me/rss.xml](https://whallin.me/rss.xml). But as of writing this, the RSS feed is only available in English. Hopefully, it doesn't cause too much trouble.

Anywho, see you next time. 👋

## Quote

> True knowledge exists in knowing that you know nothing.