# Side Projects Starter Pack

I have worked on a few side projects over the past few years and have identified that the most important thing is to get things done quickly to validate an idea. The best part is that you can do this very fast nowadays, not just because of large language models (AI), but mainly because of the many existing tools with great developer experiences. The following post summarizes the tools you can use to create prototypes of end-to-end applications.

## The Example Application

To demonstrate this capability, I will showcase it in an application that tracks stock prices, summarizes messages about particular stocks in a feed, and sends emails. Since I believe it is very important to measure whether the app's idea is successful, analytics will also be implemented!

## Tools

The following tools are chosen based on a single metric: **time to market**, which measures how quickly the application will be available to users.

## Client

### Next.js, React Query, Tailwind & Shadcn

I think that this combo is great and will help you build an application in a couple of hours.

Tip 1: Try [v0.dev](https://v0.dev/). It generated the entire UI for the example application.

Tip 2: Check all [TanStack libraries](https://tanstack.com/); I also use [TanStack From](https://tanstack.com/form/latest).

## Backend

### Supabase

I think that Supabase will solve 80-90% of your initial backend needs out of the box, mainly:

- Database
- Authentication
- Storage (if you need to upload things like images)

Also, theirs GraphQL-like queries are awesome!

### Bun

I found that the best approach is to write simple scripts for simple tasks, such as getting data from somewhere and storing it. Remember, the important thing is **time to market**, not to make it perfect. With today's infrastructure tools, it is simpler than ever.

The interesting thing is [Bun](https://bun.sh/) (a fast JavaScript runtime similar to Node.js). It is:

- Super fast
- Works out of the box with TypeScript
- Has a nice project initializer (those who have initialized TypeScript projects will know that it is a pain)

## Infrastructure

The best approach is to use GitHub for source code control, and then, based on your needs, you can use a variety of tools. I mostly prefer [Cloudflare](https://www.cloudflare.com/) and [Render](https://render.com/) (I run cron jobs over here).

Tip 1: Cloudflare offers very generous [free hosting](https://www.cloudflare.com/plans/developer-platform/).

## Notifications

The simplest way to send emails nowadays is to use [Resend](https://resend.com/).

## Analytics

For product analytics, [Posthog](https://posthog.com/) is simply the best. The best feature you will find useful is Session Replay (you will actually see how your users use the app).

Tip 1: If you want to see how many people saw your landing page, I encourage you to use [plausible.io](https://plausible.io/) (PS: you do not need to use a cookie bar).

Tip 2: Cloudflare also has analytics.

Tip 3: Be sure to use a reverse proxy with Posthog. Next.js makes it simple to configure.

## The Application

If you are interested, you can check out the application: [Side Projects Starter Pack](https://side-projects-starter-pack.pages.dev/).

## Final Words

Thanks for reading! If you want to support my work, you can fill [the very short survey](https://tally.so/r/3l0jVo). It would mean a lot to me!