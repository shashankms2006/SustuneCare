import React, { createContext, useContext, useState } from 'react';
import { Currency } from '../types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInUSD: number) => string;
  convertFromUSD: (amountInUSD: number) => number;
  getSymbol: () => string;
}

const RATES: Record<Currency, { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1.0 },
  GBP: { symbol: '£', rate: 0.79 },
  EUR: { symbol: '€', rate: 0.92 },
  AED: { symbol: 'AED ', rate: 3.67 },
  CAD: { symbol: 'CA$', rate: 1.36 },
  AUD: { symbol: 'A$', rate: 1.52 },
  INR: { symbol: '₹', rate: 84.5 },
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const convertFromUSD = (amountInUSD: number): number => {
    return Math.round(amountInUSD * RATES[currency].rate);
  };

  const formatPrice = (amountInUSD: number): string => {
    const val = convertFromUSD(amountInUSD);
    const { symbol } = RATES[currency];
    if (currency === 'INR') {
      return `${symbol}${val.toLocaleString('en-IN')}`;
    }
    return `${symbol}${val.toLocaleString('en-US')}`;
  };

  const getSymbol = (): string => {
    return RATES[currency].symbol;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertFromUSD, getSymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
