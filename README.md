This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You can see the project here --> [http://prestalana-challenge.vercel.app](https://prestalana-challenge.vercel.app)




First, you should install node 20 by:

- [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) - All instructions.
- [Node.js](https://nodejs.org/en) - Nodejs official website


After that, please run the following command:
```bash
npm i
```

Before start the proyect, please create a file `.env.local` in the root project whit this

```bash
REMOTE_API_URL=https://reqres.in/api
```

Finally, please run the following command:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

-- -
## Project structure and decisions

##### In this project you will find an application with the following features:

```
- User login.
  - Persist favorites by user.
  - Persist cart by user.
- Product listing.
- Product favorites.
  - Add favorite by Drag & Drop.
```
##### Breve explicación
The project is built with Nextjs 14, React 18, TypeScript 5 and reduxjs/toolkit. I decided to use redux toolkit because its configuration is easier and faster to set up state management in your application compared to previous versions. As for Next, it is a very powerful framework that thanks to its generator, allowed me to save a lot of initial configuration and I was able to get an initial project structure.

Regarding configurations, I have created an eslint configuration compiled from the best rules I have used in my projects, while adding my own configuration rules. Also, I have configured aliases inside my `tsconfig.json` file to reduce the use of paths that are not very readable. Finally, I set up the unit tests to be able to run them in an environment where we can still use `Typescript` and reuse our code already created for our application.


##### Structure

I have defined the following folder structure

<img src="https://i.ibb.co/8YLHLfM/structure.png">

* `__mocks__` : All dummy data for tests
* `__tests__` : All unit tests
* `__components__` : All the components that are used in the whole application. If some component has some constant, an interface or something that will be used only in that component, I declare it and create it in the same folder or file.
* `__context__` : All the HOC and Context purposes that the application may have. For example, here we can see the withAuth.tsx
* `__pages__` : All the pages that finally generate the route. In the new versions of nextjs, there is a new routing system, however I have decided to keep the old one because it is what I have used and know the most.
* `__redux__` : All slices for state management, the application provider and the store.
* `__services__` : Todos los servicios que consumen peticiones http para el uso de la API `https://reqres.in/`
* `__shared__` : All the cross-cutting source code of the application. It can be const, helpers, hooks, interfaces


##### Decisions

Before starting my development, I made a general sketch of the application based on the requested requirements. Once I had the sketch, I decided to use redux for the global management of the app and if I had to perform some behavior at the component level that was not very extensive I decided to use context. For example I used a hook to handle internal state and product loads that connected to the global state.

For the purposes of this technical test, I have emulated certain things as much as possible. Regarding the handling of session data, I preferred to use sessionStorage so that when the tab is closed, the user's data is deleted. However, for the saving of favorite products per user, I preferred to use localStorage to persist the data even if the user closes the tab. Indeed, it is known that there are many 100% better ways to do this, including using Nextjs, so that in SSR you can validate sessions via the request object and even validating sessions before rendering on the client side.