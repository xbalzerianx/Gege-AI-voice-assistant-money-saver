import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../App';

// Mock transactions data
const transactions = [
  { id: '1', title: 'PayPal - Sarah Chen', amount: -45.00, currency: 'USD', date: 'Today, 10:23 AM', type: 'Send Money', app: 'PayPal' },
  { id: '2', title: 'GCash - John Doe', amount: 2500, currency: 'PHP', date: 'Today, 9:15 AM', type: 'Receive Money', app: 'GCash' },
  { id: '3', title: 'Wise - Transfer to Mom', amount: -120.50, currency: 'CAD', date: 'Yesterday, 4:30 PM', type: 'Bank Transfer', app: 'Wise' },
  { id: '4', title: 'Maya - Grocery Payment', amount: -850, currency: 'PHP', date: 'Yesterday, 2:00 PM', type: 'QR Payment', app: 'Maya' },
  { id: '5', title: 'Stripe - Client Payment', amount: 350.00, currency: 'USD', date: 'Feb 20, 3:45 PM', type: 'Receive Money', app: 'Stripe' },
  { id: '6', title: 'BPI - Electric Bill', amount: -2450, currency: 'PHP', date: 'Feb 19, 10:00 AM', type: 'Bill Payment', app: 'BPI' },
  { id: '7', title: 'Messenger - Mike', amount: -500, currency: 'PHP', date: 'Feb 18, 8:30 PM', type: 'Chat Transfer', app: 'Messenger' },
  { id: '8', title: 'Chase - Salary', amount: 2500.00, currency: 'USD', date: 'Feb 15, 9:00 AM', type: 'Receive Money', app: 'Chase' },
];

export default function TransactionsScreen() {
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

  const renderTransaction = ({ item }: { item: typeof transactions[0] }) => (
    <TouchableOpacity style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View style={[styles.transactionIcon, { backgroundColor: item.amount < 0 ? `${COLORS.danger}10` : `${COLORS.success}10` }]}>
          <Ionicons 
            name={item.amount < 0 ? 'arrow-up' : 'arrow-down'} 
            size={18} 
            color={item.amount < 0 ? COLORS.danger : COLORS.success} 
          />
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <View style={styles.transactionMeta}>
            <Text style={styles.transactionType}>{item.type}</Text>
            <Text style={styles.transactionDot}> • </Text>
            <Text style={styles.transactionApp}>{item.app}</Text>
          </View>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      
      <Text style={[styles.transactionAmount, item.amount < 0 ? styles.negative : styles.positive]}>
        {item.amount < 0 ? '-' : '+'}{formatCurrency(item.amount, item.currency)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transactions</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={20} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>This Month</Text>
          <Text style={styles.summaryAmount}>47 transactions</Text>
        </View>
        <View style={styles.summaryDivider} />
        
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total Volume</Text>
          <Text style={styles.summaryAmount}>$12,450.50</Text>
        </View>
      </View>

      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  summaryCard: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryDivider: {
    width: 1,
    backgroundColor: COLORS.border,
  },
  summaryLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    padding: 16,
    borderRadius: 12,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  transactionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  transactionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  transactionType: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  transactionDot: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  transactionApp: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  transactionDate: {
    fontSize: 11,
    color: COLORS.textMuted,
  },
  transactionAmount: {
    fontSize: 15,
    fontWeight: '600',
  },
  negative: {
    color: COLORS.danger,
  },
  positive: {
    color: COLORS.success,
  },
  separator: {
    height: 8,
  },
});
