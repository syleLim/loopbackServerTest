// Uncomment these imports to begin using these cool features!

import { get } from '@loopback/rest';

// import {inject} from '@loopback/context';


export class TestController {
  @get("/test")
  hello() : string {
    return "test"
  }
}
