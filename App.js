import React, { useState } from 'react';
import { View } from 'react-native';

import NotificationScreen from './src/screens/NotificationScreen';
import BottomTab from './src/components/BottomTab/BottomTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('notify');

  return (
    <View style={{ flex: 1 }}>
      {activeTab === 'notify' && <NotificationScreen />}

      <BottomTab
        activeTab={activeTab}
        onChangeTab={setActiveTab}
      />
    </View>
  );
}
