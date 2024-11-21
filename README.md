<a name="readme-top"></a>

<!-- <br /> -->
<div align="center">
  <h3 align="center">Payload Monorepo Template (Payload | Next.js | Astro | Svelte)</h3>

  <p align="center">
    A monorepo built on Payload 3 to demonstrate the use of frameworks other than Next.js for their frontend.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#tooling">Tooling</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#project-structure">Project structure</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is designed to show how you can use Payload 3 on top of Next.js with alternate frontend frameworks such as Astro. The goal is to provide a boilerplate for users to get started with minimal architectural setup but with an excellent developer experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Payload CMS][payload-shield]][payload-url]
- [![Next][next-shield]][next-url]
- [![Astro][astro-shield]][astro-url]
- [![Svelte][svelte-shield]][svelte-url]
- [![TypeScript][typescript-shield]][typescript-url]
- [![TailwindCSS][tailwind-shield]][tailwind-url]

### Tooling

- [![Storybook][storybook-shield]][storybook-url]
- [![ESLint][eslint-shield]][eslint-url]
- [![Prettier][prettier-shield]][prettier-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Make sure you have the following tools installed on your system to run this project.

### Prerequisites

#### Required

- [![nvm][nvm-shield]][nvm-url] or [![Node 20+][node-shield]][node-url]
- [![pnpm][pnpm-shield]][pnpm-url]

#### Optional

- [![vscode][vscode-shield]][vscode-url]

This project includes recommended VS Code extensions. While these extensions are optional your experience will be greatly enhanced by having them.

### Installation

1. Clone this repo

   ```sh
   git clone github.com/fusionary/turbo-payload.git
   ```

2. Use recommended node version (if using NVM)

   ```sh
   nvm use
   ```

3. Install node packages

   ```sh
   pnpm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Structure

```
├── apps
│   ├── astro
│   ├── docs
│   ├── payload
│   ├── svelte
├── packages
│   ├── env
│   ├── icons
│   ├── payload
│   ├── svg
│   │   ├── README.md
│   ├── types
│   ├── ui
│   ├── utils
├── tooling
│   ├── eslint
│   ├── github
│   ├── prettier
│   ├── storybook
│   ├── tailwind
│   ├── typescript
```

<p align="right">(<a href="#readme-top" align="right">back to top</a>)</p>

### Apps

#### astro

Astro frontend application leveraging Payload 3 local API. Astro is configured with Tailwind for styling. Additionally it is configured for dynamic routes using SSR. This can be optimized for production to use SSG in the build phase or SSR/SSG hybrid.

#### docs

This is a Storybook instance to help you create and preview your components as isolated stories.

#### payload

This app serves two purposes. It includes Next.js and Payload 3. This is configured to serve as the Payload admin as well as a Next.js frontend. This is currently set up as the payload preview app and is also configured to run in hybrid rendering mode.

#### svelte

Svelte frontend application leveraging Payload 3 local API. Svelte is configured with Tailwind for styling. Additionally it is configured for dynamic routes using SSR. This can be optimized for production to use SSG in the build phase or SSR/SSG hybrid.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Packages

#### env

This package contains environment variable configuration for use in various apps and packages. It performs environment variable validation and is recommended to ensure all necessary env vars are populated and valid.

#### icons

Here is where we store reusable iconography. By default it includes Lucide React icons that can be selectively exported. In addition, you can bring your own icons.

#### payload

This is where all of the magic occurs. This is a Payload package which contains all of the shared Payload configuration (e.g. fields, collections, access control, etc.). When you are building out your payload configuration, this is where you want to be. This enables you an elegant way to use a single Payload configuration across multiple apps with no effort and maximum developer productivity.

#### svg

Collection of SVGs for use in various client apps. This is where all SVGs should be exported. There is a [README](/packages/svg/README.md) that contains information on converting SVGs to React components.

#### types

Types (and zod schemas) to be used across various different packages and applications.

#### ui

Shared UI components. Generally speaking we have used this for shared React components.

#### utils

Shared utility functions to be used throughout.

### tooling

#### eslint

Customized eslint rules that are the basis for all other JavaScript/TypeScript projects in this repo. If you need to adjust global rules, this is the place to do it. Note that these rules are extended in each package directory so if you need to adjust configuration for a particular package, that is the place to do it.

#### github

Baseline Github action configuration to be shared across different pipelines.

#### prettier

Shared prettier configuration settings.

#### storybook

This package provides a Storybook configuration that can be used be different packages.

#### tailwind

This package provides the Tailwind CSS configuration. Any changes to Tailwind configuration should be completed here.

#### typescript

This packages contains several different tsconfigs form which to extend from.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Developing

### Environment Variables

Environment variables are already defined in each app. We use the dotnnvx package along with the ability to encrypt values to store all environment variables in the repo. The only thing that you need to do is to ensure that there is a .env.keys file in the root of the repo. All apps should symlink this so you only need to maintain one set of private keys.

### Database

By default, the local development uses MongoDB for a database. The easiest way to spin up MongoDB is to run it in docker. Run the command below to start a MongoDB instance.

```bash
  docker run -d --name payload-monorepo -p 27017:27017 mongo
```

### Modeling (Payload Config)

If you are just doing modeling or entering content, you only need to execute the Payload app. Running the Payload app will ensure that types are generated for _all_ clients. If you are doing anything that will result in types changing, it is recommended to run this project. There are two ways to do this. First, if you're using VS Code, you can click the run and debug menu (play icon) and then select Payload from the dropdown and then click the play icon. Alternatively, from a terminal you can type `pnpm dev --filter payload...`.

### Frontend

If you are only doing frontend coding, and will not be adjusting content or modeling you can just run the frontend project. Right now the only project is Astro. To run this there are two choices. In VS Code you can select astro from the run and debug menu and click play. Alternatively, you can type `pnpm dev --filter astro...`.

If you plan on doing frontend coding as well as updating content or models, then it is recommended to run Payload and your frontend project concurrently. Again, you can do this from the run and debug menu or you can type `pnpm dev --filter astro... --filter payload...`. This will make sure both projects are running.

### Package Updates

This project has shortcuts to `npm-check-updates` in the package scripts. To check for the latest node packages, run `pnpm packages:check` from the root of the repo. This will list all outstanding dependencies by project. To update the packages, run `pnpm packages:upate`. Executing the updates will automatically run pnpm install after the package.json files are updated.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Hosting

More information coming soon.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/fusionary/turbo-payload/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/fusionary/turbo-payload](https://github.com/fusionary/turbo-payload)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[typescript-shield]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=358ef1
[typescript-url]: https://www.typescriptlang.org/
[next-shield]: https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[astro-shield]: https://img.shields.io/badge/Astro-20232A?style=for-the-badge&logo=Astro&logoColor=BC52EE
[astro-url]: https://astro.build
[svelte-shield]: https://img.shields.io/badge/Svelte-20232A?style=for-the-badge&logo=Svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev
[payload-shield]: https://img.shields.io/badge/Payload%20CMS-20232A?style=for-the-badge&logo=payloadcms&logoColor=white
[payload-url]: https://payloadcms.com/
[tailwind-shield]: https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=0ea5e9
[tailwind-url]: https://tailwindcss.com/
[storybook-shield]: https://img.shields.io/badge/storybook-20232A?style=for-the-badge&logo=storybook&logoColor=ff4785
[storybook-url]: https://storybook.js.org/
[eslint-shield]: https://img.shields.io/badge/eslint-20232A?style=for-the-badge&logo=eslint&logoColor=4B32C3
[eslint-url]: https://eslint.org/
[prettier-shield]: https://img.shields.io/badge/prettier-20232A?style=for-the-badge&logo=prettier&logoColor=f8bc45
[prettier-url]: https://prettier.io/
[node-shield]: https://img.shields.io/badge/node.js-20232A?style=for-the-badge&logo=node.js&logoColor=336633
[node-url]: https://nodejs.org/
[nvm-shield]: https://img.shields.io/badge/nvm-20232A?style=for-the-badge&logoColor=ffffff
[nvm-url]: https://github.com/nvm-sh/nvm
[pnpm-shield]: https://img.shields.io/badge/pnpm-20232A?style=for-the-badge&logo=pnpm&logoColor=f6922
[pnpm-url]: https://pnpm.io/installation
[vscode-shield]: https://img.shields.io/badge/vscode-20232A?style=for-the-badge&logo=visualstudiocode&logoColor=0098FF
[vscode-url]: https://code.visualstudio.com/
