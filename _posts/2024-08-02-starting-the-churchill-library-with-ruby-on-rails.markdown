---
layout: "post"
title:  "The Churchill Library built with RoR"
date:   2024-08-02
categories: blog
---

<section class="text-sm">
  <strong>tl;dr</strong>
  <ul>
    <li><span class="italic">Project</span>&nbsp;&nbsp;&nbsp;<strong>The Churchill Library</strong>, a Ruby on Rails app to catalogue family's books and provide interaction with via LLM</li>
    <li><span class="italic">Tech Stack</span>&nbsp;&nbsp;&nbsp;Ruby on Rails, Hotwire, TailwindCSS, TBD vector database, and TBD LLM API though interested in AWS Bedrock</li>
    <li><span class="italic">Goals</span>&nbsp;&nbsp;&nbsp;Functional, publicly available app by September; full RAG integration with LLM chat by year-end</li>
  </ul>
</section>

---

I am excited to start a new side project!

**settin' the stage**

I started a graduate program in Computer Science from
[Franklin University](https://cs.franklin.edu/program.php?id=mscs)
at the beginning of the year.
While the initial prerequisite class on basic data structures & algorithms in Java was not that inspiring,
my recent class on "advanced data structures & algorithms" -
recursion, trees, heaps, graphs, sorting -
has renewed my excitement in programming for fun again.
Furthermore, I've been acting as the technical lead for a generative AI chat application at work.
Although we mostly inherited the code from a contracting company,
it's been exciting having the opportunity to own the platform.

Instead of just implementing another chat app,
I wanted to create an application that interacts with an LLM using RAG with data I actually care about.
Given that my whole family are avid readers -
even my toddler has amassed quite a large collection of books, often with duplicates -
I had the idea to create a web app to help catalogue these books for my data source.

**the deets**

As for the tech stack, here are my thoughts around why I am going to use Ruby on Rails styled with TailwindCSS and using Hotwire for a dynamic UI:
- I use Java for my coursework and C#/.Net with React for the app at work &mdash; I chose to steer clear of these in my side project to help broaden my experiences.
- I've always wanted to dive deeper into [Ruby on Rails](https://rubyonrails.org/), or RoR, as it's known for its simplicity and convention-over-configuration philosophy. Moreover, [Root Insurance](https://www.joinroot.com/) built up its product using the framework so I figure if it can handle that kind of load, it's a shoe-in for my app.
- [Hotwire](https://hotwired.dev/) provides SPA-like functionality, speeding up page changes and providing partial page updates, while actually being reliant on the backend for server-side rendering. Given this was created to work with RoR, this is a nice replacement for React.
- The only crossover to work is my choice of [TailwindCSS](https://tailwindcss.com/) - I don't think I need to explain myself here.
- [Heroku](https://www.heroku.com/) will be how I deploy my app as I remember it being tightly integrated with Rails apps.
- I'll be using a [GitHub Actions](https://docs.github.com/en/actions) workflow to ensure my app has continuous integration and deployment.
- Although I started out planning with GitHub Projects, I've decided to use a [Trello board](https://trello.com/invite/b/66c21f9804fb35bcdd1f1d47/ATTI7469991d933e9a0ea0a8305a89186fd4DEA5A74E/the-churchill-library) to track my work as it is actually useful through the iOS app.

Although I have the desire to *get it* with this app, here are my realistic goals given my limited spare time:
- I will have a nicely designed, functional website that is publicly available and provides an enjoyable user experience for browsing our collection of books.
- A stretch goal will be to have a vector database chosen and an [`Active Job`](https://guides.rubyonrails.org/active_job_basics.html) pipeline for embedding books by September as well.
  - ["Don't build another effin' chatbot &mdash; Web Dev Challenge S1E1](https://youtu.be/8RCL5neas_M?si=_YG7kwGq2qYkaMS8), from *Learn With Jason*, introduced me to [Astra DB](https://www.datastax.com/products/datastax-astra) as an option for doing the whole shebang but I plan to also check out what Heroku has to offer.
- By year-end I want to have RAG fully integrated into the app as a "virtual librarian".
  - Even though OpenAI is the obvious choice, given ChatGPT has been my LLM tool of choice, I want to challenge myself to look at other options. Specifically, I am interested in seeing what it would take to set something up in AWS Bedrock. As for the integration, I will either look into just using a WebSocket via [`ActionCable`](https://guides.rubyonrails.org/action_cable_overview.html) or research more about "server-side events", an alternative one-way HTTP-based mechanism to stream data.
