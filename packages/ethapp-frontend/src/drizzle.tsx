import { Drizzle, generateStore } from '@drizzle/store';
import { Migrations } from '@ethapp/contracts';

const options = {
  contracts: [
    Migrations,
  ],
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545',
    },
  },
};
const store = generateStore({
  drizzleOptions: options,
  disableReduxDevTools: false,
});
const drizzle = new Drizzle(options, store);

export default drizzle;
