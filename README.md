# Build Next.js 15 Crash Course

|                |                                                |
| -------------- | ---------------------------------------------- |
| Tech           | Next.js 15, React 19, Sanity, Shadcn, Tailwind |
| UI             | Tailwind, Shadcn                               |
| Database       | Sanity, typegen                                |
| Deployment     | Github, Vercel                                 |
| Authentication | Auth.js,                                       |
| Others         | zod , sentry, markdown, slugify, ...           |

[![yc-directory](/public/yc-directory-page.png)](https://58mustafasahin-yc-directory.vercel.app)

## View Demo Website

https://58mustafasahin-yc-directory.vercel.app

## What you will learn

- creating admin dashboard web app by next.js 15 and react 19
- designing header, view, card and search box by shadcn and tailwind
- enable partial pre-rendering to improve website performance
- create database models by sanity database to handle authors, playlists and startups.
- handling form inputs by useActionState and Zod data validator
- updating data by server actions without using any api
- handling authentication and authorization by next-auth
- at the end you'll learn how to deploy yc-directory on vercel.

## Run Locally

1. Clone repo

   ```shell
    $ git clone git@github.com:58mustafasahin/yc-directory.git
    $ cd yc-directory
   ```

2. Create .env.local File

- Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholder values with your actual Sanity credentials. You can obtain these credentials by signing up &
creating a new project on the [Sanity website](https://www.sanity.io/).

3. Install and Run

   ```shell
     npm install
     npm run dev
   ```

4. Login

   - Open http://localhost:3000
   - Click Login button
   - Connect with Github account

## 🔋 Features

👉 **Live Content API**: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.

👉 **GitHub Authentication**: Allows users to log in easily using their GitHub account.

👉 **Pitch Submission**: Users can submit startup ideas, including title, description, category, and multimedia links (
image or video).

👉 **View Pitches**: Browse through submitted ideas with filtering options by category.

👉 **Pitch Details Page**: Click on any pitch to view its details, with multimedia and description displayed.

👉 **Profile Page**: Users can view the list of pitches they've submitted.

👉 **Editor Picks**: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.

👉 **Views Counter**: Tracks the number of views for each pitch instead of an upvote system.

👉 **Search**: Search functionality to load and view pitches efficiently.

👉 **Minimalistic Design**: Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.

and many more, including the latest **React 19**, **Next.js 15** and **Sanity** features alongside code architecture and
reusability
