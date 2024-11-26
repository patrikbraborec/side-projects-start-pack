# Side Projects Starter Pack

I worked on few side projects over past years, and identified that the most important thing is to get things done very quickly to validate the idea. The best thing is that you can do it very quickly nowadays, not just because of large language models (AI), but mainly because of many existing tools with great developer experience. The following post summarize the tooling you can use to create prototypes of end-to-end application.

# Example Application

In order to demonstrate such a capability, I will show it on the application that will track stock price, summarize messages about particular stock in a feed, and send notification through email. As I believe it is very important to measure whatever the idea of the app is succesful, the analytics will be in place as well!

# Architecture

The following tools are chosen with just one metric in head: time to market; it means how fast the application will be live in front of users.

## Client / Frontend

The tools that will help with speedy delivery:

### Next.js, React-Query, Tailwind & Shadcn

I think that the combo is great, and will help you to build a application in couple of hours.

Tip: Try [v0.dev](https://v0.dev/)

Tip 2: Check all tran stack libraries, I use also form

## Backend

### Supabase

I think that Supabase will solve 80-90% of your initial backend needs out of the box, mainly:

- Database
- Authentication
- Storage (if you need to upload things like images)

### Bun

I found out that the best thing is to write simple scripts for simple tasks. For example, if you just need to get data from somewhere, and store it. Remember, the important thing is time to market; not to make it perfect. Also, with todays infrastructure tolls, it is simpler than ever.

The interesting thing is Bun (A fast JavaSript runtime similar to Node.js). It is:

- Super fast
- Work out of the box with TypeScript
- Have nice project initializer (these who initialized typescript project will know that it is pain)

## Infrastructure

The best thing is to use GitHub for source code control, and then based on your need you can use variety of tools. I mostly prefer [Cloudflare](https://www.cloudflare.com/) and [render.com](https://render.com/) (I run cron job over here)

## Notifications

The most simple thing to send emails nowadays is to use Resend.

## Analytics

For product analytics, the [Posthog](https://posthog.com/) is just the best. The best feature you will find useful is Session replay (you will actually see how your users use the app).

Use reverse proxy to capture all events...

Tip:  If you want to see how many people saw your landing page, I can encourage you [plausible.io](https://plausible.io/) (PS: you do not need to use cookie bar). 

Tip 2: Cloudflare has also analytics.

# The Application

## Changelog (remove later)

- Install next.js with shadcn (https://ui.shadcn.com/docs/installation/next)
- Use v0.dev (https://v0.dev/chat/wtf4251qtxJ):

```
Generate a simple layout with shadcn components for stock monitoring:

- It should be responsive
- It should have left and right panel (left panel for stock name and grapth, right panel for news feed)
```

- Simple app made in ~5 minutes (thanks to right tools).
- Add chart (https://ui.shadcn.com/docs/components/chart#add-a-grid) (< 5 minutes)
- Frontend is ready (from UI perspective), its time to fetch stock data
- Initialized Bun, create simple script to get stock data (polygon.io - the first result in google by typing stock data api)
- Install Supabase & React Query
- Connect data to stock monitor
- Add from & subsribe logic
- Add email notification
- Add Posthog

# Final words

Everyday it gets more easy to build the prototype of the app. I think it's still little bit naive that everyone can build the app, but we are getting there!
