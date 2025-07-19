import { Audio } from 'expo-av';

import type { PermissionsHandlers, Response } from '../../../types';

const TAG = 'AUDIO PERMISSION';

const CheckPermission = async (): Response => {
  try {
    const { status } = await Audio.getPermissionsAsync();
    console.log(TAG, status);
    return status === 'granted';
  } catch (error: any) {
    console.log(TAG, error.message);
    return null;
  }
};

const RequestPermission = async (): Response => {
  try {
    const { status } = await Audio.requestPermissionsAsync();
    console.log(TAG, status);
    return status === 'granted';
  } catch (error: any) {
    console.log(TAG, error.message);
    return null;
  }
};

export default (): PermissionsHandlers => {
  return { CheckPermission, RequestPermission };
};
