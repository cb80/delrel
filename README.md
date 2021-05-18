![CI/CD](https://github.com/cb80/delrel/workflows/CI/CD/badge.svg)

# Description

This action can delete releases by tag name. It supports GitHub Enterprise.

# Examples
```
uses: cb80/delrel@v0.2.0
with:
  tag: latest
```

Use a different token:
```
uses: cb80/delrel@v0.2.0
with:
  tag: latest
  token: ${{ secrets.MY_TOKEN }}
```

# Inputs

| Option    | Use       | Default                | Description |
|-----------|-----------|------------------------|-------------|
| `tag`     | mandatory |                        | The tag which identifies the release. |
| `token`   | optional  | `secrets.GITHUB_TOKEN` | The token for authentication and authorization. |

# Credits

This action is inspired by the official [typescript action template][tstpl].

[tstpl]: https://github.com/actions/typescript-action
