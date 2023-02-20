---
title: "Welcome to Hugo Toigian"
date: 2022-10-25T18:12:11+07:00
comment: true
tags: ["hugo", "tech", "toigian"]
---

{{< quote info >}}
`Toigian` - `Tối giản` (vietnamese): Minimalist (english)

**Disclaimer**: I'm not a front-end developer, just a guy who like tweaking stuff, so my code may not be pretty/clean. I attempt to learn [Tailwind CSS](https://tailwindcss.com/), and hugo-toigian is the result.
{{< /quote >}}

## 0. Showcase

Take a look at [demo site](https://ntk148v.github.io/hugo-toigian).

| Dark                                                                                                                        | Light                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| {{< figure src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/dark-home.png" class="figure" >}} | {{< figure src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/light-home.png" class="figure" >}} |
| {{< figure src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/dark-list.png" class="figure" >}} | {{< figure src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/light-list.png" class="figure" >}} |
| {{< figure src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/dark-post.png" class="figure" >}} | {{< figure src="https://raw.githubusercontent.com/ntk148v/hugo-toigian/master/images/light-post.png" class="figure" >}} |

## 1. Features

- Minimalist (`tối giản`) design. Highly inspired by [mellow.dev](https://mellow.dev/).
- Use the classy minimalist [Rosé Pine](https://github.com/rose-pine/palette) color palette.
- Customizable.
- Support light/dark mode.
- Useful shortcodes.
- Comments support.
- Syntax highlighting: use server-side solution (Chroma, hugo built-in), I've added [Rosé Pine styles to Chroma](https://github.com/alecthomas/chroma/pull/689), so everything is the same vibe.

## 2. Prerequisites

- `git`, `npm` installed.
- A minimum Hugo "extended" version of v0.93.0 and above.

```shell
snap install hugo --channel=extended
```

## 3. Installation

- Go to root directory of your Hugo website, or create a new site with:

```shell
hugo new site hugo-example-site
cd hugo-example-site
git init
```

- Add the theme.

```shell
git submodule add https://github.com/ntk148v/hugo-toigian.git themes/hugo-toigian
```

- Install Nodejs modules.

```shell
cd themes/hugo-toigian
npm install
```

- Finally, update theme in your configuration `config.toml` file in the root directory of your Hugo website.

```toml
theme: "hugo-toigian"
```

- Run server to see a live preview of it.

```shell
hugo server -DF --disableFastRender
```

- Build static pages

```shell
hugo --environment production --minify
```

## 3. Configuration

### 3.1. Site configuration

There are a few configuration options that you can add to [config.toml](./exampleSite/config.toml) file.

```toml
baseURL: 'http://example.org/'
languageCode: 'en-us'
title: 'Toigian'
theme: "hugo-toigian"
themesDir: "../.."
# (Optional) If you provide a Disqus shortname, comments will be enabled on
# all pages.
# disqusShortname: "my-site"

[params]
# (Optional, default true): Controls table of contents visibility on right side of pages.
# Start and end levels can be controlled with markup.tableOfContents setting.
toc: true
# (Optional, default true) Enables comments template on pages
# By default partials/docs/comments.html includes Disqus template
# See https://gohugo.io/content-management/comments/#configure-disqus
# Can be overwritten by same param in page frontmatter
comments: true

[params.author]
name: "Kien Nguyen-Tuan"
email: "kiennt2609@gmail.com"

[markup]
  defaultMarkdownHandler: "goldmark"
  # By default, Goldmark trims unsafe outputs which might prevent some shortcodes from rendering.
  # It is recommended to set markup.goldmark.renderer.unsafe=true if you encounter problems.
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe: true  # Enable user to embed HTML snippets in Markdown content.
  [markup.highlight]
    codeFences: true
    guessSyntax: true
    lineNos: false
    noClasses: false
    tabWidth: 4
  [markup.tableOfContents]
    startLevel: 2
    endLevel: 4
    ordered: true

# The left side navbar at the top
[menu]
  [[menu.nav]]
  name: "About"
  url: "/about"
  weight: 2

  [[menu.nav]]
  name: "Posts"
  url: "/posts"
  weight: 3
```

### 3.2. Page configuration

You can specify additional params in the front matter of individual pages.

```md
# Your posts tags
tags: []
# If you have enabled comments for the site, you can disable it for specific pages
comment: true
```

## 4. Shortcodes

Check out [shortcodes](https://ntk148v.github.io/hugo-toigian/posts/shortcodes).

## 5. Customization

- Partials: There are layout partials available for you to easily override components of the theme in `layouts/partials/`.

| Empty partial                                 | Placement                   | Usage             |
| --------------------------------------------- | --------------------------- | ----------------- |
| `layouts/partials/custom/head.html`           | Before closing `<head>` tag | Add custom css/js |
| `layouts/partials/custom/content-before.html` | Before page content         |                   |
| `layouts/partials/custom/content-after.html`  | After page content          |                   |

- Extra customization:

| File                    | Description                      |
| ----------------------- | -------------------------------- |
| `assets/css/custom.css` | Customize or override css styles |

## 6. Contributing

As you already known, I'm not front-end developer. Therefore, if you find anything wrong or want to make improvement, don't hesitate to open an issue/pull request.

Primary goals are:

- Keep it simple.
- Avoid using JS if it can be solved by CSS>

Feel free to open issues if you find missing configuration or customization options.

## 7. Credits

- [hugo-book](https://github.com/alex-shpak/hugo-book)
- [dirkolbrich/hugo-tailwindcss-starter-theme](https://github.com/dirkolbrich/hugo-tailwindcss-starter-theme)
