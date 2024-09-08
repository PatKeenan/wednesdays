# Wednesdays

### About

Tee up your social golfing experience with Wednesdays - the ultimate app for golf enthusiasts who love to hit the links with friends!
Wednesdays transforms your casual golf outings into unforgettable social experiences:

- Create your own exclusive golf club or join existing ones
- Personalize your club's dashboard with custom branding
- Track rounds and scores effortlessly
- Compete on dynamic leaderboards
- Spice up your games with customizable game modes
- Receive expert advice from our AI caddy

Whether you're a weekend warrior or a seasoned pro, Wednesdays helps you connect with fellow golf lovers, improve your game, and add a dash of friendly competition to every round. Our intuitive interface makes organizing golf outings a breeze, while robust tracking features let you monitor your progress over time.
With Wednesdays, every golf day feels like the best day of the week. Download now and elevate your golfing journey!

---

### Overview

I used Anthropic to create that description...
This project is version 2 of a [previous project](https://github.com/PatKeenan/wednesday) which was just a PWA. After testing on the course with my friends, I was able to get enough info to start version 2. Version 2 will still include the PWA but it will primarily a mobile app using React Native. This project, like the last one, is built purely with typescript on the frontend and backend. The project is organized using yarn workspaces with the server and mobile app living in the `./apps` directory while all project specific tooling resides in the `./tooling` directory.

### Technology

- pnpm workspaces
- [Hono](https://hono.dev/) for the api
- [Hono RPC](https://hono.dev//docs/guides/rpc) and [Hono Client](https://hono.dev/docs/guides/rpc#client) for end-to-end type-safety
- React Native (using expo) for the mobile app
- [Nativewind](https://www.nativewind.dev/v4/overview) for styling
- [React Native Reusables](https://rnr-docs.vercel.app/getting-started/introduction/) for the UI (shadcn for react-native)
- Zod for validation
