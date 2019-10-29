import './cowList.scss';
import smash from '../../helpers/data/smash';

const buildCows = () => {
  smash.getCompleteCows()
    .then((response) => {
      console.error('cow array from cowlist', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
