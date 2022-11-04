import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-customer';

jest.mock('./sound-player');

describe('When SoundPlayer throws an error', () => {
  beforeAll(() => {
    SoundPlayer.mockImplementation(() => {
      return {
        playSoundFile: () => {
          throw new Error('Test error');
        },
      };
    });
  });

  it('Should throw an error when calling playSomethingCool', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
  });
});

// classのmethodを指定の値を返すようにMock化
describe('When SoundPlayer return value', () => {
  beforeAll(() => {
    SoundPlayer.mockImplementation(() => {
      return {
        playSoundFile: () => {
          return 999
        },
      };
    });
  });

  it('Should get 999 value', () => {
    const soundPlayer = new SoundPlayer();
    expect(soundPlayer.playSoundFile()).toBe(999);
  });
});
