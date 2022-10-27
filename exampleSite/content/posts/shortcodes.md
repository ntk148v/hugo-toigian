+++
title = "Shortcodes"
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
