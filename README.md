# LoopBack server test

```bash
npm -g install @loopback/cli
//if you need, sudo or version3(npm install -g loopback-cli)
```

[loopback 4.0 start](https://loopback.io/doc/en/lb4/Getting-started.html)

```bash
lb4 app
? Project name: loopback-test
? Project description: loopback testing for my api server
? Project root directory: loopback-test
? Application class name: App
? Select features to enable in the project Enable eslint, Enable, prettier, Enable mocha, Enable loopbackBuild, Enable vscode, Enable docker, Enable repositories, Enable services
```

Make controller
It is one of API
```
lb4 controller
```

or just typing in ./src/controller
```typescript
import { get } from '@loopback/rest';

export class TestController {
  @get("/test")
  hello() : string {
    return "test"
  }
}
```