---
layout: "post"
title:  "Initial thoughts on new side project"
date:   2024-08-02
categories: blog
---

I started a graduate program in Computer Science from Franklin University at the beginning of the year.
While the initial prerequisite class on basic data structures & algorithms in Java was not that inspiring,
my recent class on "advanced data structures & algorithms" -
recursion, trees, heaps, graphs, sorting -
got me excited about programming again.
Moreover, I've been acting as the technical lead for a generative AI chat application at work.
Although we mostly inherited the code from a contracting company,
it's been exciting digging into it as we work to own the platform.
All of this said,
I will soon have a nice break until I start my next class on algorithm analysis in September.

But... with all of this excitement,
I also have a strong desire to start a new side project!

Instead of just implementing another chat-focused app with generative AI integration,
I want to create an application that uses RAG with a GenAI model around my family's personal library.
That is,
I want to create a simple web app for **The Churchill Library**.

Here are my thoughts around starting the project:
- I want to steer clear from most of the technology I'm using at work to help broaden my experiences and allow me to utilize my learnings from work in a new environment.
Thus, I'm choosing Ruby on Rails with Hotwire to provide a dynamic, SPA-like user experience and styling done with TailwindCSS (which is a crossover from work but I feel like I'd be crazy not to use it).
- Realistically, I'll likely spend my month just learning how to work with the Rails framework and overall application design (both the the data model and UI/UX).
My goal before my class starts in September is to have a nicely designed, easy to use website that is publicly available and provides basic functionality for browsing our collections of books.
- Speaking of publicly available, I'll likely just utilize Heroku to host the Rails app.
I'll utilize GitHub Actions if I want to automate the deployment but it won't be priority right away.

Now, before the end of the year I would also like to get RAG integrated with an LLM API:
- I just learned about AstraDB as a hosted vector database solution so I'll likely look into that unless Heroku has options.
- OpenAI is a classic choice for LLM API, but given these are the models we're using at work it would be nice to look into other options.
For instance, checking out AWS Bedrock and what the costs look like to set something up for low volume usage (remember to set a budget!) could be interesting.
- If I remember my Rails terminology then I believe I could make use of Active Jobs to embed new and modified books when they're added to the CRUD app.
- Briefly looking at the Rails guides, I saw there is a gem/pattern for integrating websockets into Rails apps via `ActionCable`.
However, I also just learned about "server-side events" as an alternative, one-way HTTP-based mechanism to push data assuming I use a streaming request.

Although I can't promise I will stay up-to-date, I do plan on using a
[GitHub Project](https://github.com/users/zachchurchill/projects/3)
to help plan and manage the work.
