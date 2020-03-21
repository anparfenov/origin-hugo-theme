# ORIGIN HUGO THEME

simple hugo theme for blogging

![screenshot](images/screenshot.png)

# Installation

1. Create a new site

```sh
hugo new site myblog
```

2. Add a theme

```sh
cd myblog
git init
git submodule add https://gitlab.com/asleeppiano/origin-hugo-theme.git themes/origin
```

# Featured posts

You can replace homescreen grid with default post list item.

edit config.toml

```toml
[params]
  featured = false
```
