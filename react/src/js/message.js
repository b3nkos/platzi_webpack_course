import renderToDom from './render-to-dom';
import messageMaker from './message-maker';

const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Han pasado 3 segundos OMG');
  }, 3000);
});

module.exports = {
  firstMessage: 'Hello World from a module',
  delayedMessage: async () => {
    const message = await waitTime;
    renderToDom(messageMaker(message));
  }
};
