# flutter-asdf-config-action
An action that parses an [ASDF](https://asdf-vm.com/) config file into environment variables which 
can then be used to configure the [flutter-action](https://github.com/subosito/flutter-action).

## Usage

### Basic usage
```yaml
    steps:
      - uses: actions/checkout@v3
      - uses: utamori/flutter-asdf-config-action@v0.2.3
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: ${{ env.FLUTTER_VERSION }}
          channel: ${{ env.FLUTTER_CHANNEL }}
```

### Custom config path
```yaml
    steps:
      - uses: actions/checkout@v3
      - uses: utamori/flutter-asdf-config-action@v0.2.3
        with:
          path: 'some-path/.fvm/fvm_config.json'
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: ${{ env.FLUTTER_VERSION }}
          channel: ${{ env.FLUTTER_CHANNEL }}
```
