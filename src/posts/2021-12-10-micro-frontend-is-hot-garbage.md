---
title: "Micro frontend is hot garbage"
date: 2021-12-10
tags: [web]
published: true
---

[[snippet]]
|As some of us probably heard of the buzz around "micro frontend" recently, some even went as far as calling it "the future of the web" ([I kid you not](https://www.sitepoint.com/micro-frontend-architecture-benefits/)), that I have to come out and state my viewpoint of it all: it is utter garbage.

# What it is
---

At first glance, one can surmise from the name that it is the backend microservices wannabe, with none of the associated benefits. Backend microservices is a thing because people want to deploy different services independently, scale independently, and having things break without affecting one another.

Micro frontend has none of those benefits: you still end up with 1 user-facing frontend that you have to deploy at once thanks to how client-side caching might work. There's nothing to scale independently. If there's 1 unhandled javascript error, the whole page still crashes. This assumes you're not using iframes in 2021, which is not that bad to be honest - though a lot pentest might flag out of their checklist.

There has been a longstanding argument against backend microservices: it's actually beneficial in a lot of cases to have a monolith backend: there's no need for RPC, and everything's in the same codebase so it's easy to cross reference. The one problem is backend project tends to quickly get complex enough to warrant microservices.

It is obvious that micro frontend are *horrible* in terms of technical efficiency/complexity. You might be delievering x times the javascript bundle size, because there's frameworks overhead. Build times get longer, because you need to build multiple bundles instead of one. We live in a world where organizations are spending hundreds of thousands of dollars on max-speced Macbook Pros for employees just to reduce the build time. There's a famous Amazon metric on extra *microseconds* on page load leading to reduction in sales. Google has a smaller-than-150kb bundle size recommendation, which most React pages never meet. So micro frontend are neither doing a favor to your developers, nor to your users in this regard.

So let's go over what people say are the organizational benefits of micro frontend.

# Scaling up to multiple teams with different skillsets
---
Probably the biggest argument for micro frontend: there's existing teams in the organization with different preferences. The most commmon case: there's a legacy Angular app, but you can only hire React people, so you use micro frontend for the new app.

This would definitely warrant the use of micro frontend - but only as a stop-gap measure. There ought to be a structured vision to migrate and unite. You should *not* be encouraging multiple frontend frameworks and libraries that does the same thing - that's additional build time and bundle size that's not helping anyone.

What about the point on hiring? Well, if you already cannot hire more Angular people, isn't that the reason to eventually migrate away from it? React people are abundant for hiring - it's the new jQuery, for better or worse. Neither is it hard to learn: most people need 2 weeks to pick it up, especially if you have a good grasp of Javascript in general. I would generally convince Angular people to pick up React - just because of the job opportunities that are open to it. Typescript has flags so it can be less strict and accept Javascript as well - in fact, if you want to adopt Typescript, there's a officially recommended approach to transition from Javascript. What if there's some major, structural libraries like RxJS vs Redux-saga, Immutable vs Immer, Moment vs date-fns etc.? You can technically have both at the same time, but there's most usually one that's recommended over the other.

Here's a counter argument: team flexibility: if everyone settles on the same framework/libraries, you can have people jumping between teams and quickly become efficient. New joiners can also pick things up faster. The argument *for* micro frontend is decoupling - but if there *is* any dependency, that would be a big plus for the monolith frontend.

# Agility in adopting new tech stacks
---
In any serious project with commercial consequences, for either front or backend, it's *always* recommended to stick with tried-and-true frameworks/libraries. If you want to experiment with newer, shinier stuffs, **do it on your pet projects** - your responsibility as a tech lead is to pick then align everyone on what you picked. Especially now that the frontend world is so fast moving, that people are arguing against the need of frameworks at all - chasing new stuffs will just bring fatigue and if it's to the detriment of the project (remember, build time and bundle size), then this is the worst argument ever.

# Decoupling of teams/apps
---
This is also a senseless argument - you can totally decouple app logic with a monolith frontend. That's what frontend *Components* are for. There's no need, in the first place, for components to have dependencies in a monolith frontend, nor is the monolith frontend encouraging components to be correlated.

It costs additional *effort* to actually share components logic on a monolith frontend project, and if there was a need to go that extra mile - the monolith frontend has *proper* developed frameworks to share global state - whereas it will always be hackier if you're using micro frontends.

If you're having problems with *correlated* components in a large project, consider changing your *folder structure*. Did you know that in a standard React/Redux app, there's 2 ways to organize things:

```
- components
  - ComponentOne.jsx
  - ComponentTwo.jsx
- actions
  - actionTypes.js
  - actions.js
- reducers
  - firstReducer.js
  - secondReducer.js
  - rootReducer.js
store.js
```

But you can also organize as
```
- components
  - ComponentOne
    - ComponentOne.jsx (or just index.js)
    - actions.js
    - reducer.js
    - styles.scss
  - ComponentTwo
    - ComponentTwo.jsx
    - actions.js
    - reducer.js
    - styles.scss
rootReducer.js
store.js
```

Which would reduce code navigation and make everything more self-contained.

# Conclusion
---

First and foremost my point - micro frontend should always be considered a hacky, stop gap measure along the migration path from a legacy app to a newer framework.

I understand that at enterprise level, it's hard to migrate legacy, 10-year-old web apps to a newer framework, to the detriment of young developers who would have to maintain (imagine doing Angular or Knockout JS in this day and age). That's why I don't dismiss it completely, but to go as far as to *advocate* for micro-frontend, is where the problem is. There's a reason COBAL is still in use - old tech *works*. It is irresponsible as a team lead to encourage your team to chase after every new and shiny frontend framework or library there is, unless there's measurable, tangible benefit - which, in the case of micro-frontend: with the added client side load time, build time and framework overload for developers, I would stay doubtful at least.

And if you already have a React app but want to add a VueJS micro-frontend to it just for kicks - dear god please don't. This is my whole problem with the "micro frontend is the future" line of thinking.

If you ask me on the future of frontend development: it's hard to say, but I can confidently say it's not going to be micro-frontend, even as internet transfer speeds and computational power are making overheads negligible. If anything, the current state of frontend is overly complex. There are a handful of common interactions and usage patterns that are eventually being abstracted away (i.e React suspense, React toolkit, CSS Container queries etc.). In fact, even web frameworks (Angular and React) etc. are stop-gap measures themselves, to quickly add features to a longstanding tech debt on Javascript and browsers, because features need time to be adopted into the HTML spec. In the ideal world - plain HTML and CSS should be able to do it all - just take a look at what Google and Chrome is doing, and all the SSR stuffs which are developing very nicely.