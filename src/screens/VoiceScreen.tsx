import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../App';

export default function VoiceScreen() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [gegeResponse, setGegeResponse] = useState('Say "Hey Gege" to start');
  
  // Animation values
  const [pulseAnim] = useState(new Animated.Value(1));
  const [waveAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isListening) {
      // Pulse animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      // Wave animation
      Animated.loop(
        Animated.timing(waveAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        })
      ).start();
    } else {
      pulseAnim.setValue(1);
      waveAnim.setValue(0);
    }
  }, [isListening]);

  const startListening = () => {
    setIsListening(true);
    setGegeResponse('Listening...');
    setTranscript('');
    
    // Simulate wake word detection after 2 seconds
    setTimeout(() => {
      setGegeResponse('Yes! 👋');
      setTranscript('Hey Gege');
      
      // Simulate transaction capture after another 2 seconds
      setTimeout(() => {
        setTranscript('I just sent $45 to Sarah via PayPal');
        setGegeResponse('Got it! You sent $45 to Sarah via PayPal. Logged! ✓');
        setIsListening(false);
      }, 2000);
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
    setGegeResponse('Say "Hey Gege" to start');
    setTranscript('');
  };

  const quickCommands = [
    { icon: 'camera', label: 'Camera', action: () => {} },
    { icon: 'image', label: 'Screenshot', action: () => {} },
    { icon: 'create', label: 'Manual', action: () => {} },
    { icon: 'list', label: 'History', action: () => {} },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gege Voice</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="help-circle-outline" size={24} color={COLORS.textSecondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Voice Circle */}
        <View style={styles.voiceContainer}>
          {isListening && (
            <>
              <Animated.View
                style={[
                  styles.wave,
                  {
                    transform: [{ scale: waveAnim }],
                    opacity: waveAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 0],
                    }),
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.wave,
                  styles.wave2,
                  {
                    transform: [{ scale: waveAnim }],
                    opacity: waveAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.3, 0],
                    }),
                  },
                ]}
              />
            </>
          )}
          
          <Animated.View
            style={[
              styles.voiceButton,
              isListening && styles.voiceButtonActive,
              { transform: [{ scale: pulseAnim }] },
            ]}
          >
            <TouchableOpacity
              onPressIn={startListening}
              onPressOut={isListening ? stopListening : undefined}
              activeOpacity={0.8}
              style={styles.voiceButtonInner}
            >
              <Ionicons
                name={isListening ? 'mic' : 'mic-outline'}
                size={40}
                color={isListening ? '#fff' : COLORS.primary}
              />
            </TouchableOpacity>
          </Animated.View>

          <Text style={styles.voiceHint}>
            {isListening ? 'Listening...' : 'Tap & hold to speak'}
          </Text>
        </View>

        {/* Transcript Area */}
        <View style={styles.transcriptContainer}>
          {transcript ? (
            <View style={styles.transcriptBox}>
              <Text style={styles.transcriptLabel}>You said:</Text>
              <Text style={styles.transcriptText}>{transcript}</Text>
            </View>
          ) : null}

          <View style={[styles.responseBox, isListening && styles.responseBoxActive]}>
            <Text style={styles.responseText}>{gegeResponse}</Text>
          </View>
        </View>

        {/* Quick Commands */}
        <View style={styles.commandsContainer}>
          <Text style={styles.commandsTitle}>Quick Actions</Text>
          
          <View style={styles.commandsGrid}>
            {quickCommands.map((cmd, index) => (
              <TouchableOpacity key={index} style={styles.commandButton}>
                <View style={styles.commandIcon}>
                  <Ionicons name={cmd.icon as any} size={24} color={COLORS.primary} />
                </View>
                <Text style={styles.commandLabel}>{cmd.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },
  helpButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  voiceContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 32,
  },
  wave: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
  },
  wave2: {
    width: 240,
    height: 240,
    borderRadius: 120,
  },
  voiceButton: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.border,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  voiceButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  voiceButtonInner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceHint: {
    marginTop: 20,
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  transcriptContainer: {
    marginBottom: 24,
  },
  transcriptBox: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  transcriptLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  transcriptText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500',
  },
  responseBox: {
    backgroundColor: `${COLORS.primary}15`,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: `${COLORS.primary}30`,
  },
  responseBoxActive: {
    backgroundColor: `${COLORS.primary}25`,
  },
  responseText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: '600',
    textAlign: 'center',
  },
  commandsContainer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  commandsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 12,
    textAlign: 'center',
  },
  commandsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  commandButton: {
    alignItems: 'center',
  },
  commandIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 8,
  },
  commandLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
});
