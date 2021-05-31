![CI/CD](https://github.com/cb80/delrel/workflows/CI/CD/badge.svg)
[![](https://img.shields.io/badge/GitHub-Marketplace-blue)](https://github.com/marketplace/actions/delete-a-release-by-tag-name)

# Description

This action can delete releases by tag name. It supports GitHub Enterprise.

# Examples
```
uses: cb80/delrel@latest
with:
  tag: latest
```

Use a different token:
```
uses: cb80/delrel@latest
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
