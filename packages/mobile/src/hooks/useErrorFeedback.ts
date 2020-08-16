import { useEffect } from 'react';
import { Alert } from 'react-native';

type Props = {
  message: string;
  enabled: boolean;
};

export function useErrorFeedback({ message, enabled }: Props) {
  useEffect(() => {
    if (!enabled) return;
    Alert.alert('Error', message || 'something went wrong');
  }, [enabled, message]);
}
