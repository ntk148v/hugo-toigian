+++
title = "Hugo Shortcodes"
date = 2022-10-21T17:12:11+07:00
comment = true
tags = ["hugo", "tech", "shortcode"]
+++

## Details

Details shortcode is a helper for `details` html5 element. It is going to replace `expand` shortcode.

### Example

```tpl
{{</* details "Title" [open] */>}}
## Markdown content
Lorem markdownum insigne...
{{</* /details */>}}
```

```tpl
{{</* details title="Title" open=true */>}}
## Markdown content
Lorem markdownum insigne...
{{</* /details */>}}
```

{{< details "Title" >}}
## Markdown content
Lorem markdownum insigne...
{{< /details >}}

## Quote

Quote shortcode can be used with 3 colors: `info`, `warn` and `critical`.

```tpl
{{</* quote [info|warning|danger] */>}}
**Markdown content**  
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{</* /quote */>}}
```

### Example

{{< quote info >}}
**Markdown content**  
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /quote >}}

{{< quote warn >}}
**Markdown content**  
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /quote >}}

{{< quote critical >}}
**Markdown content**  
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /quote >}}
