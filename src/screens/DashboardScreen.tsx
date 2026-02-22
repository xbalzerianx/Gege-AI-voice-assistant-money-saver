import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../App';

export default function DashboardScreen() {
  // Mock data - will be replaced with real data
  const totalBalance = 45230.50;
  const monthlySpent = 8234.75;
  const monthlyReceived = 12500.00;
  const transactionCount = 47;

  const recentTransactions = [
    { id: '1', title: 'PayPal - Sarah Chen', amount: -45.00, currency: 'USD', date: 'Today' },
    { id: '2', title: 'GCash - John Doe', amount: 2500, currency: 'PHP', date: 'Today' },
    { id: '3', title: 'Wise - Transfer', amount: -120.50, currency: 'CAD', date: 'Yesterday' },
  ];

  const formatCurrency = (amount: number, currency: string) => {
    const symbols: Record<string, string> = {
      USD: '$',
      PHP: '₱',
      CAD: 'CA$',
      EUR: '€',
      GBP: '£',
    };
    const symbol = symbols[currency] || currency + ' ';
    const formatted = Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${symbol}${formatted}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning, Boss! 👋</Text>
            <Text style={styles.subGreeting}>Here's your money overview</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <View style={styles.profileCircle}>
              <Text style={styles.profileText}>B</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Total Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Tracked</Text>
          <Text style={styles.balanceAmount}>{formatCurrency(totalBalance, 'USD')}</Text>
          <Text style={styles.balanceNote}>Across all currencies</Text>
        </View>

        {/* Monthly Stats */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, styles.spentCard]}>
            <View style={styles.statIconContainer}>
              <Ionicons name="arrow-up" size={20} color={COLORS.danger} />
            </View>
            <Text style={styles.statLabel}>Spent</Text>
            <Text style={[styles.statAmount, styles.spentText]}>{formatCurrency(monthlySpent, 'USD')}</Text>
            <Text style={styles.statPeriod}>This month</Text>
          </View>

          <View style={[styles.statCard, styles.receivedCard]}>
            <View style={styles.statIconContainer}>
              <Ionicons name="arrow-down" size={20} color={COLORS.success} />
            </View>
            <Text style={styles.statLabel}>Received</Text>
            <Text style={[styles.statAmount, styles.receivedText]}>{formatCurrency(monthlyReceived, 'USD')}</Text>
            <Text style={styles.statPeriod}>This month</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: `${COLORS.primary}15` }]}>
              <Ionicons name="mic" size={24} color={COLORS.primary} />
            </View>
            <Text style={styles.actionText}>Say "Hey Gege"</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: `${COLORS.primary}15` }]}>
              <Ionicons name="camera" size={24} color={COLORS.primary} />
            </View>
            <Text style={styles.actionText}>Scan Receipt</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={[styles.actionIcon, { backgroundColor: `${COLORS.primary}15` }]}>
              <Ionicons name="add" size={24} color={COLORS.primary} />
            </View>
            <Text style={styles.actionText}>Add Manual</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Transactions */}
        <View style={styles.transactionsHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionsList}>
          {recentTransactions.map((tx) => (
            <TouchableOpacity key={tx.id} style={styles.transactionItem}>
              <View style={styles.transactionLeft}>
                <View style={[styles.transactionIcon, { backgroundColor: tx.amount < 0 ? `${COLORS.danger}10` : `${COLORS.success}10` }]}>
                  <Ionicons 
                    name={tx.amount < 0 ? 'arrow-up' : 'arrow-down'} 
                    size={16} 
                    color={tx.amount < 0 ? COLORS.danger : COLORS.success} 
                  />
                </View>
                <View>
                  <Text style={styles.transactionTitle}>{tx.title}</Text>
                  <Text style={styles.transactionDate}>{tx.date}</Text>
                </View>
              </View>
              
              <Text style={[styles.transactionAmount, tx.amount < 0 ? styles.negative : styles.positive]}>
                {tx.amount < 0 ? '-' : '+'}{formatCurrency(tx.amount, tx.currency)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Transaction Count */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>📊 {transactionCount} transactions tracked this month</Text>
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
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },
  subGreeting: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  profileButton: {
    padding: 4,
  },
  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  balanceCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
  },
  balanceNote: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  spentCard: {
    borderLeftWidth: 4,
    borderLeftColor: COLORS.danger,
  },
  receivedCard: {
    borderLeftWidth: 4,
    borderLeftColor: COLORS.success,
  },
  statIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  statAmount: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  spentText: {
    color: COLORS.danger,
  },
  receivedText: {
    color: COLORS.success,
  },
  statPeriod: {
    fontSize: 11,
    color: COLORS.textMuted,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary,
  },
  transactionsList: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  transactionDate: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: '600',
  },
  negative: {
    color: COLORS.danger,
  },
  positive: {
    color: COLORS.success,
  },
  footer: {
    marginTop: 24,
    marginBottom: 32,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
});
