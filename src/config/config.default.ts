import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1651221217039_4749',
  koa: {
    port: 5001,
    globalPrefix: '/api',
  },
} as MidwayConfig;
