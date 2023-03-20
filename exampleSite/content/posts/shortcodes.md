---
title: "Hugo Shortcodes"
date: 2022-10-21T17:12:11+07:00
comment: true
tags: ["hugo", "tech", "shortcode"]
---

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
{{</* quote [info|warn|critical] */>}}
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

## Mermaid

[Mermaid](https://mermaidjs.github.io/) is a library helping you to generate diagram and flowcharts from text, in a similar manner as Markdown.

```tpl
{{</* mermaid */>}}

{{</* /mermaid */>}}
```

### Example

{{< mermaid >}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
{{< /mermaid >}}

## Remote Github

Hugo is great in many ways. However as a static site generator it doesn’t offer much to embed external content in your pages. Remote-github shortcode helps you to render Github remote content using [Github API](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content).

This shortcode is inspired from [this issue](https://discourse.gohugo.io/t/include-content-of-a-url/27357).

```tpl
{{%/* remote-github "user/repo" "filepath" */%}}
```

### Example

**The following content is render from my [til post](https://github.com/ntk148v/til/blob/master/linux/iptables.md).**

{{% remote-github "ntk148v/til" "linux/iptables.md" %}}
