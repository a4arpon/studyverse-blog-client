# [StudyVerse Blog Project](https://studyverse-wayne.web.app/)

## Setup Project

1. Clone repo from git.

```sh
git clone https://github.com/a4arpon/studyverse-blog-client.git
```

2. Change directory to server folder.

```sh
cd studyverse
```

3. Install NodeJS dependencies by using yarn.

```sh
yarn install
```

or by using NPM

```sh
npm install
```

4. Setup Environment variables.

```sh
touch .env.local
```

Properties

```properties
VITE_APIKEY=
VITE_AUTHDOMAIN=
VITE_PROJECTID=
VITE_STORAGEBUCKET=
VITE_MESSAGINGSENDERID=
VITE_APPID=
VITE_IMGBB_KEY=
VITE_SERVER_URL=http://localhost:5000
```

### Run the project

```sh
yarn run dev
```

### Build for production

```sh
yarn run build
```

## Directory Explanation

```sh
src
|
+-- assets   # this folder contains all assets file.
|
+-- components   # this folder contains common components in this web app.
|
+-- config   # this folder have firebase config file.
|
+-- hooks   # this folder contains custom hooks for components.
|
+-- layouts   # web app layouts are available in this folder.
|
+-- pages   # this folder contains all the pages in this web app.
|
+-- providers   # context providers are available in this directory.
|
+-- routes   # this folder contains all the route related files.
|
+-- utils   # utility functions and dummy data are available in this folder.
```

## Technologies and Packages are used,

```sh
|
+-- Firebase Auth   # For authentication and user management.
|
+-- React Helmet   # For dynamic header tags control.
|
+-- React Hook Form   # Form management.
|
+-- React Hot Toast   # Show toast messages on ui.
|
+-- React Icons   # Icon package.
|
+-- React Quill   # WYSIWYG Editor for React.
|
+-- React Router   # Routes management for react.
|
+-- TailwindCSS   # Utility based CSS Library.
|
+-- Daisyui   # TailwindCSS UI library.
|
+-- ESLint   # JavaScript styling guide.
```
