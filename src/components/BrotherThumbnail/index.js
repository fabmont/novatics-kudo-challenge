import { toast } from 'react-toastify';
import moment from 'moment';

import BrotherThumbnail from './BrotherThumbnail';
import { firestore } from '../../services/firebase';

export function giveKudo(payload) {
  return async () => {
    const { myUid, receiverUid, type, availableBrooches } = payload;
    const newAvailableBrooches = {};

    if (type === 'learned') {
      if (availableBrooches.learned === 0) {
        return toast.error('Seus kudos de #aprendi esgotaram 😢');
      }

      newAvailableBrooches.learned = availableBrooches.learned - 1;
    }

    if (type === 'thankful') {
      if (availableBrooches.thankful === 0) {
        return toast.error('Seus kudos de #foitop esgotaram 😢');
      }

      newAvailableBrooches.thankful = availableBrooches.thankful - 1;
    }

    if (type === 'grateful') {
      if (availableBrooches.grateful === 0) {
        return toast.error('Seus kudos de #gratidão esgotaram 😢');
      }

      newAvailableBrooches.grateful = availableBrooches.grateful - 1;
    }

    newAvailableBrooches.lastChange = moment().format('YYYY-MM-DD');

    try {
      await firestore
        .collection('users')
        .doc(receiverUid)
        .collection('receivedBrooches')
        .doc()
        .set({ uid: myUid, type });

      await firestore
        .collection('users')
        .doc(myUid)
        .set({ availableBrooches: newAvailableBrooches }, { merge: true });

      return toast.success('Seu kudo foi dado com sucesso! ❤️');
    } catch (error) {
      return toast.error('Ocorreu um erro ao enviar o kudo 😢');
    }
  };
}

export default BrotherThumbnail;
