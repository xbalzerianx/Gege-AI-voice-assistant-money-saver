import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../App';

export default function SettingsScreen() {
  const [notifications, setNotifications] = React.useState(true);
  const [autoCapture, setAutoCapture] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        {
          icon: 'notifications-outline',
          label: 'Notifications',
          type: 'toggle',
          value: notifications,
          onToggle: setNotifications,
        },
        {
          icon: 'camera-outline',
          label: 'Auto Screen Capture',
          type: 'toggle',
          value: autoCapture,
          onToggle: setAutoCapture,
        },
        {
          icon: 'moon-outline',
          label: 'Dark Mode',
          type: 'toggle',
          value: darkMode,
          onToggle: setDarkMode,
        },
      ],
    },
    {
      title: 'Data',
      items: [
        {
          icon: 'cloud-upload-outline',
          label: 'Export Data',
          type: 'link',
        },
        {
          icon: 'cloud-download-outline',
          label: 'Backup & Restore',
          type: 'link',
        },
        {
          icon: 'trash-outline',
          label: 'Clear All Data',
          type: 'link',
          danger: true,
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          icon: 'help-circle-outline',
          label: 'Help & Support',
          type: 'link',
        },
        {
          icon: 'document-text-outline',
          label: 'Privacy Policy',
          type: 'link',
        },
        {
          icon: 'information-circle-outline',
          label: 'About Gege',
          type: 'link',
          value: 'v1.0.0',
        },
      ],
    },
  ];

  const renderSettingItem = (item: any, index: number) => (
    <View key={index} style={[styles.settingItem, index === 0 && styles.firstItem]}>
      <View style={styles.settingLeft}>
        <View style={[styles.iconContainer, item.danger && styles.dangerIcon]}>
          <Ionicons 
            name={item.icon} 
            size={20} 
            color={item.danger ? COLORS.danger : COLORS.primary} 
          />
        </View>
        <Text style={[styles.settingLabel, item.danger && styles.dangerText]}>
          {item.label}
        </Text>
      </View>

      {item.type === 'toggle' ? (
        <Switch
          value={item.value}
          onValueChange={item.onToggle}
          trackColor={{ false: COLORS.border, true: `${COLORS.primary}50` }}
          thumbColor={item.value ? COLORS.primary : '#f4f3f4'}
        />
      ) : (
        <View style={styles.settingRight}>
          {item.value && <Text style={styles.settingValue}>{item.value}</Text>}
          <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileInitial}>B</Text>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Boss</Text>
            <Text style={styles.profileEmail}>boss@example.com</Text>
          </View>
          
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={24} color={COLORS.textMuted} />
          </TouchableOpacity>
        </View>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            
            <View style={styles.sectionContent}>
              {section.items.map((item, itemIndex) => renderSettingItem(item, itemIndex))}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color={COLORS.danger} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Gege Money Tracker v1.0.0</Text>
          <Text style={styles.footerSubtext}>Made with ❤️ for Boss</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },
  scrollView: {
    flex: 1,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  profileAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
  },
  profileEmail: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  sectionContent: {
    backgroundColor: COLORS.surface,
    marginHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  firstItem: {
    borderTopWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: `${COLORS.primary}15`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dangerIcon: {
    backgroundColor: `${COLORS.danger}15`,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.text,
  },
  dangerText: {
    color: COLORS.danger,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  settingValue: {
    fontSize: 14,
    color: COLORS.textMuted,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 8,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.danger,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  footerText: {
    fontSize: 13,
    color: COLORS.textMuted,
  },
  footerSubtext: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 4,
  },
});
