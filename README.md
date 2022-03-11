# Bedrock-TS

Create bedrock addons using TypeScript

## About This Project

Bedrock-TS is a tool that will help you develop addons faster and avoid any unnecessary hassle

Please note that this project is currently in the early stage of development

## Getting Started

### Installation

```sh
yarn add https://github.com/RedEagleStudios/bedrock-ts
```

### Usage Example

You can use [this project template](https://github.com/RedEagleStudios/bedrock-ts-template) to get started

```ts
const example: CoreEntity = {
  identifier: "re:example",
  createBP(bp) {
    bp.setComponents({
      MCTypeFamily: {
        family: ["example"],
      },
      MCCollisionBox: {
        height: 1,
        width: 1,
      },
      MCPhysics: {},
      MCPushable: {
        is_pushable: false,
      },
      MCHealth: {
        value: 1,
        max: 1,
      },
    })
    return bp.build()
  },
  createRP(rp) {
    return rp.build()
  },
}

const addon: MCAddon = {
  packName: "Addon",
  entities: [example],
}

new AddonGenerator(addon).generate()
```

Output will be generated at ./out

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/xyz`)
3. Commit your Changes (`git commit -m 'Add xyz'`)
4. Push to the Branch (`git push origin feature/xyz`)
5. Open a Pull Request

## License

Distributed under the MIT license. See [LICENSE](LICENSE) for more information.
