import TapDetector from '@/components/TapsDetector';
import { router, Stack } from 'expo-router';
import React from 'react';

export default function LayoutService() {
    // const deviceId = Platform.OS === 'android'
    //     ? Application.getAndroidId()
    //     : Application.applicationId || '';
    // 
    // const config = useAppSelector((state: RootState) => state.config);
    // const { data: deviceStatus, isLoading, error } = useCheckDeviceQuery({
    //     id: deviceId,
    //     type: DeviceType.KIOSK
    // });
    // 
    // useEffect(() => {
    //     if (!config.ipAddress || !config.port) {
    //         router.replace('/(developer)/setting');
    //         return;
    //     }
    // 
    //     if (!isLoading) {
    //         if (!deviceStatus?.registered) {
    //             router.replace('/(service)/unauthorize');
    //         }
    //     }
    // }, [config.ipAddress, config.port, deviceStatus, isLoading, error]);

    return (
        <TapDetector
            TAPS_COUNT_THRESHOLD={7}
            alertTitle="🚀 Developer Mode"
            alertMessage="You've unlocked developer settings! Want to continue?"
            onThresholdReached={() => {
                console.log("Dev mode activated!");
                router.push('/(developer)/setting');
            }}
        >
            <Stack screenOptions={{ headerShown: false }} />
        </TapDetector>
    );
}