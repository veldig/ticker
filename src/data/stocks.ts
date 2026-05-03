import type { Stock } from '../types/stock'

export const stocks: Stock[] = [
  // Technology
  { ticker: 'AAPL',  name: 'Apple',              sector: 'Technology',     marketCap: 4111, pe: 33.9, return5y: 117,  exchange: 'NASDAQ' },
  { ticker: 'MSFT',  name: 'Microsoft',           sector: 'Technology',     marketCap: 3077, pe: 24.7, return5y: 71,  exchange: 'NASDAQ' },
  { ticker: 'NVDA',  name: 'NVIDIA',              sector: 'Technology',     marketCap: 4851, pe: 40.6, return5y: 1241, exchange: 'NASDAQ' },
  { ticker: 'GOOGL', name: 'Alphabet',            sector: 'Technology',     marketCap: 4673, pe: 29.4, return5y: 232,  exchange: 'NASDAQ' },
  { ticker: 'META',  name: 'Meta Platforms',      sector: 'Technology',     marketCap: 1553, pe: 22.3, return5y: 90,  exchange: 'NASDAQ' },
  { ticker: 'AMZN',  name: 'Amazon',              sector: 'Technology',     marketCap: 2851, pe: 31.7, return5y: 58,   exchange: 'NASDAQ' },
  { ticker: 'TSLA',  name: 'Tesla',               sector: 'Consumer',       marketCap: 1468,  pe: 358.6, return5y: 71,  exchange: 'NASDAQ' },
  { ticker: 'AMD',   name: 'AMD',                 sector: 'Technology',     marketCap: 578,  pe: 135.3, return5y: 359,  exchange: 'NASDAQ' },
  { ticker: 'INTC',  name: 'Intel',               sector: 'Technology',     marketCap: 475,   pe: -1,   return5y: 91,  exchange: 'NASDAQ' },
  { ticker: 'ORCL',  name: 'Oracle',              sector: 'Technology',     marketCap: 494,  pe: 30.9, return5y: 138,  exchange: 'NYSE'   },
  { ticker: 'CRM',   name: 'Salesforce',          sector: 'Technology',     marketCap: 150,  pe: 23.6, return5y: -17,   exchange: 'NYSE'   },
  { ticker: 'ADBE',  name: 'Adobe',               sector: 'Technology',     marketCap: 101,  pe: 14.6, return5y: -50,  exchange: 'NASDAQ' },
  { ticker: 'QCOM',  name: 'Qualcomm',            sector: 'Technology',     marketCap: 187,  pe: 19.1, return5y: 44,  exchange: 'NASDAQ' },
  { ticker: 'TXN',   name: 'Texas Instruments',   sector: 'Technology',     marketCap: 256,  pe: 48.0, return5y: 80,   exchange: 'NASDAQ' },
  { ticker: 'AVGO',  name: 'Broadcom',            sector: 'Technology',     marketCap: 1995,  pe: 82.0, return5y: 934,  exchange: 'NASDAQ' },
  { ticker: 'MU',    name: 'Micron Technology',   sector: 'Technology',     marketCap: 583,  pe: 24.4, return5y: 554,  exchange: 'NASDAQ' },
  { ticker: 'NOW',   name: 'ServiceNow',          sector: 'Technology',     marketCap: 94,  pe: 54.3, return5y: -7,  exchange: 'NYSE'   },
  { ticker: 'SHOP',  name: 'Shopify',             sector: 'Technology',     marketCap: 166,  pe: 135.8, return5y: 14,  exchange: 'NYSE'   },
  { ticker: 'PYPL',  name: 'PayPal',              sector: 'Financial',      marketCap: 45,   pe: 9.3, return5y: -80,  exchange: 'NASDAQ' },
  { ticker: 'NFLX',  name: 'Netflix',             sector: 'Communications', marketCap: 388,  pe: 29.7, return5y: 81,  exchange: 'NASDAQ' },

  // Healthcare
  { ticker: 'JNJ',   name: 'Johnson & Johnson',   sector: 'Healthcare',     marketCap: 547,  pe: 26.3, return5y: 58,   exchange: 'NYSE'   },
  { ticker: 'PFE',   name: 'Pfizer',              sector: 'Healthcare',     marketCap: 150,  pe: 19.4, return5y: -15,  exchange: 'NYSE'   },
  { ticker: 'MRK',   name: 'Merck',               sector: 'Healthcare',     marketCap: 270,  pe: 15.0, return5y: 81,   exchange: 'NYSE'   },
  { ticker: 'ABBV',  name: 'AbbVie',              sector: 'Healthcare',     marketCap: 365,  pe: 100.8, return5y: 117,  exchange: 'NYSE'   },
  { ticker: 'UNH',   name: 'UnitedHealth Group',  sector: 'Healthcare',     marketCap: 335,  pe: 27.9, return5y: -1,  exchange: 'NYSE'   },
  { ticker: 'LLY',   name: 'Eli Lilly',           sector: 'Healthcare',     marketCap: 862,  pe: 34.2, return5y: 445,  exchange: 'NYSE'   },
  { ticker: 'TMO',   name: 'Thermo Fisher',       sector: 'Healthcare',     marketCap: 174,  pe: 25.8, return5y: 2,   exchange: 'NYSE'   },
  { ticker: 'AMGN',  name: 'Amgen',               sector: 'Healthcare',     marketCap: 178,  pe: 22.9, return5y: 57,   exchange: 'NASDAQ' },
  { ticker: 'GILD',  name: 'Gilead Sciences',     sector: 'Healthcare',     marketCap: 163,  pe: 19.4, return5y: 141,   exchange: 'NASDAQ' },
  { ticker: 'ISRG',  name: 'Intuitive Surgical',  sector: 'Healthcare',     marketCap: 162,  pe: 55.6, return5y: 58,  exchange: 'NASDAQ' },
  { ticker: 'MDT',   name: 'Medtronic',           sector: 'Healthcare',     marketCap: 103,   pe: 22.4, return5y: -29,   exchange: 'NYSE'   },
  { ticker: 'CVS',   name: 'CVS Health',          sector: 'Healthcare',     marketCap: 105,   pe: 59.1,  return5y: 25,  exchange: 'NYSE'   },

  // Financial
  { ticker: 'JPM',   name: 'JPMorgan Chase',      sector: 'Financial',      marketCap: 837,  pe: 14.9, return5y: 131,  exchange: 'NYSE'   },
  { ticker: 'BAC',   name: 'Bank of America',     sector: 'Financial',      marketCap: 381,  pe: 13.3, return5y: 48,   exchange: 'NYSE'   },
  { ticker: 'GS',    name: 'Goldman Sachs',       sector: 'Financial',      marketCap: 274,  pe: 16.9, return5y: 197,  exchange: 'NYSE'   },
  { ticker: 'MS',    name: 'Morgan Stanley',      sector: 'Financial',      marketCap: 301,  pe: 17.1, return5y: 171,  exchange: 'NYSE'   },
  { ticker: 'BLK',   name: 'BlackRock',           sector: 'Financial',      marketCap: 165,  pe: 26.7, return5y: 45,   exchange: 'NYSE'   },
  { ticker: 'V',     name: 'Visa',                sector: 'Financial',      marketCap: 624,  pe: 28.6, return5y: 46,  exchange: 'NYSE'   },
  { ticker: 'MA',    name: 'Mastercard',          sector: 'Financial',      marketCap: 438,  pe: 28.7, return5y: 34,  exchange: 'NYSE'   },
  { ticker: 'AXP',   name: 'American Express',    sector: 'Financial',      marketCap: 216,  pe: 19.7, return5y: 119,  exchange: 'NYSE'   },
  { ticker: 'BRK-B', name: 'Berkshire Hathaway',  sector: 'Financial',      marketCap: 1020, pe: 15.2, return5y: 69,  exchange: 'NYSE'   },
  { ticker: 'C',     name: 'Citigroup',           sector: 'Financial',      marketCap: 223,  pe: 15.8, return5y: 110,   exchange: 'NYSE'   },
  { ticker: 'WFC',   name: 'Wells Fargo',         sector: 'Financial',      marketCap: 247,  pe: 12.5, return5y: 100,   exchange: 'NYSE'   },
  { ticker: 'SCHW',  name: 'Charles Schwab',      sector: 'Financial',      marketCap: 159,  pe: 18.0, return5y: 38,   exchange: 'NYSE'   },

  // Consumer
  { ticker: 'WMT',   name: 'Walmart',             sector: 'Consumer',       marketCap: 1049,  pe: 48.4, return5y: 197,  exchange: 'NYSE'   },
  { ticker: 'COST',  name: 'Costco',              sector: 'Consumer',       marketCap: 449,  pe: 52.6, return5y: 182,  exchange: 'NASDAQ' },
  { ticker: 'TGT',   name: 'Target',              sector: 'Consumer',       marketCap: 59,   pe: 15.8, return5y: -29,  exchange: 'NYSE'   },
  { ticker: 'HD',    name: 'Home Depot',          sector: 'Consumer',       marketCap: 323,  pe: 22.8, return5y: 11,   exchange: 'NYSE'   },
  { ticker: 'LOW',   name: "Lowe's",              sector: 'Consumer',       marketCap: 131,  pe: 19.7, return5y: 29,  exchange: 'NYSE'   },
  { ticker: 'MCD',   name: "McDonald's",          sector: 'Consumer',       marketCap: 204,  pe: 24.0, return5y: 36,   exchange: 'NYSE'   },
  { ticker: 'SBUX',  name: 'Starbucks',           sector: 'Consumer',       marketCap: 120,   pe: 80.4, return5y: 3,   exchange: 'NASDAQ' },
  { ticker: 'NKE',   name: 'Nike',                sector: 'Consumer',       marketCap: 66,   pe: 29.2, return5y: -64,  exchange: 'NYSE'   },
  { ticker: 'KO',    name: 'Coca-Cola',           sector: 'Consumer',       marketCap: 338,  pe: 24.7, return5y: 67,   exchange: 'NYSE'   },
  { ticker: 'PEP',   name: 'PepsiCo',             sector: 'Consumer',       marketCap: 215,  pe: 24.7, return5y: 26,   exchange: 'NASDAQ' },
  { ticker: 'PG',    name: 'Procter & Gamble',    sector: 'Consumer',       marketCap: 343,  pe: 21.6, return5y: 24,   exchange: 'NYSE'   },
  { ticker: 'PM',    name: 'Philip Morris',       sector: 'Consumer',       marketCap: 259,  pe: 23.4, return5y: 120,   exchange: 'NYSE'   },
  { ticker: 'AMZN',  name: 'Amazon',              sector: 'Consumer',       marketCap: 2851, pe: 31.7, return5y: 58,   exchange: 'NASDAQ' },
  { ticker: 'ABNB',  name: 'Airbnb',              sector: 'Consumer',       marketCap: 84,   pe: 35.2, return5y: -16,   exchange: 'NASDAQ' },

  // Energy
  { ticker: 'XOM',   name: 'ExxonMobil',          sector: 'Energy',         marketCap: 635,  pe: 25.7, return5y: 215,   exchange: 'NYSE'   },
  { ticker: 'CVX',   name: 'Chevron',             sector: 'Energy',         marketCap: 380,  pe: 33.2, return5y: 122,   exchange: 'NYSE'   },
  { ticker: 'COP',   name: 'ConocoPhillips',      sector: 'Energy',         marketCap: 150,  pe: 20.9, return5y: 179,  exchange: 'NYSE'   },
  { ticker: 'SLB',   name: 'Schlumberger',        sector: 'Energy',         marketCap: 85,   pe: 25.1, return5y: 125,   exchange: 'NYSE'   },
  { ticker: 'EOG',   name: 'EOG Resources',       sector: 'Energy',         marketCap: 74,   pe: 15.2, return5y: 134,   exchange: 'NYSE'   },

  // Industrials
  { ticker: 'CAT',   name: 'Caterpillar',         sector: 'Industrials',    marketCap: 414,  pe: 44.2, return5y: 326,  exchange: 'NYSE'   },
  { ticker: 'DE',    name: 'Deere & Company',     sector: 'Industrials',    marketCap: 157,  pe: 32.7, return5y: 65,  exchange: 'NYSE'   },
  { ticker: 'BA',    name: 'Boeing',              sector: 'Industrials',    marketCap: 179,  pe: 90.2,   return5y: -3,  exchange: 'NYSE'   },
  { ticker: 'HON',   name: 'Honeywell',           sector: 'Industrials',    marketCap: 135,  pe: 33.9, return5y: 12,   exchange: 'NASDAQ' },
  { ticker: 'GE',    name: 'GE Aerospace',        sector: 'Industrials',    marketCap: 299,  pe: 35.6, return5y: 338,  exchange: 'NYSE'   },
  { ticker: 'LMT',   name: 'Lockheed Martin',     sector: 'Industrials',    marketCap: 118,  pe: 24.8, return5y: 52,   exchange: 'NYSE'   },
  { ticker: 'RTX',   name: 'RTX Corporation',     sector: 'Industrials',    marketCap: 237,  pe: 33.1, return5y: 131,   exchange: 'NYSE'   },
  { ticker: 'UPS',   name: 'UPS',                 sector: 'Industrials',    marketCap: 91,   pe: 17.4, return5y: -37,  exchange: 'NYSE'   },
  { ticker: 'FDX',   name: 'FedEx',               sector: 'Industrials',    marketCap: 96,   pe: 21.6, return5y: 43,   exchange: 'NYSE'   },

  // Real Estate
  { ticker: 'AMT',   name: 'American Tower',      sector: 'Real Estate',    marketCap: 85,   pe: 29.3, return5y: -16,   exchange: 'NYSE'   },
  { ticker: 'PLD',   name: 'Prologis',            sector: 'Real Estate',    marketCap: 132,  pe: 35.6, return5y: 40,   exchange: 'NYSE'   },
  { ticker: 'EQIX',  name: 'Equinix',             sector: 'Real Estate',    marketCap: 107,   pe: 75.2, return5y: 68,   exchange: 'NASDAQ' },
  { ticker: 'SPG',   name: 'Simon Property Group',sector: 'Real Estate',    marketCap: 61,   pe: 13.3, return5y: 114,   exchange: 'NYSE'   },
  { ticker: 'O',     name: 'Realty Income',       sector: 'Real Estate',    marketCap: 59,   pe: 54.4, return5y: 24,   exchange: 'NYSE'   },

  // Utilities
  { ticker: 'NEE',   name: 'NextEra Energy',      sector: 'Utilities',      marketCap: 202,  pe: 24.6, return5y: 44,   exchange: 'NYSE'   },
  { ticker: 'DUK',   name: 'Duke Energy',         sector: 'Utilities',      marketCap: 100,   pe: 20.4, return5y: 55,   exchange: 'NYSE'   },
  { ticker: 'SO',    name: 'Southern Company',    sector: 'Utilities',      marketCap: 109,   pe: 24.7, return5y: 76,   exchange: 'NYSE'   },
  { ticker: 'D',     name: 'Dominion Energy',     sector: 'Utilities',      marketCap: 56,   pe: 18.4, return5y: -1,  exchange: 'NYSE'   },

  // Materials
  { ticker: 'LIN',   name: 'Linde',               sector: 'Materials',      marketCap: 235,  pe: 33.7, return5y: 88,  exchange: 'NASDAQ' },
  { ticker: 'APD',   name: 'Air Products',        sector: 'Materials',      marketCap: 67,   pe: 31.8, return5y: 18,   exchange: 'NYSE'   },
  { ticker: 'NEM',   name: 'Newmont',             sector: 'Materials',      marketCap: 116,   pe: 14.1, return5y: 96,   exchange: 'NYSE'   },
  { ticker: 'FCX',   name: 'Freeport-McMoRan',    sector: 'Materials',      marketCap: 83,   pe: 30.6, return5y: 56,  exchange: 'NYSE'   },

  // Communications
  { ticker: 'T',     name: 'AT&T',                sector: 'Communications', marketCap: 181,  pe: 8.6, return5y: 50,  exchange: 'NYSE'   },
  { ticker: 'VZ',    name: 'Verizon',             sector: 'Communications', marketCap: 201,  pe: 11.7,  return5y: 13,  exchange: 'NYSE'   },
  { ticker: 'CMCSA', name: 'Comcast',             sector: 'Communications', marketCap: 97,  pe: 5.3, return5y: -40,   exchange: 'NASDAQ' },
  { ticker: 'DIS',   name: 'Disney',              sector: 'Communications', marketCap: 183,  pe: 15.2, return5y: -43,  exchange: 'NYSE'   },
  { ticker: 'PSKY',  name: 'Paramount Skydance',  sector: 'Communications', marketCap: 15,    pe: 444.7,   return5y: -68,  exchange: 'NASDAQ' },
  { ticker: 'SNAP',  name: 'Snap',                sector: 'Communications', marketCap: 11,   pe: -1,   return5y: -89,  exchange: 'NYSE'   },
  { ticker: 'PINS',  name: 'Pinterest',           sector: 'Communications', marketCap: 13,   pe: 33.1, return5y: -68,   exchange: 'NYSE'   },
  { ticker: 'SPOT',  name: 'Spotify',             sector: 'Communications', marketCap: 92,   pe: 29.6, return5y: 78,  exchange: 'NYSE'   },

  // Additional notable stocks
  { ticker: 'UBER',  name: 'Uber',                sector: 'Technology',     marketCap: 155,  pe: 15.9, return5y: 37,   exchange: 'NYSE'   },
  { ticker: 'LYFT',  name: 'Lyft',                sector: 'Technology',     marketCap: 6,    pe: 2.1,   return5y: -75,  exchange: 'NASDAQ' },
  { ticker: 'ABNB',  name: 'Airbnb',              sector: 'Consumer',       marketCap: 84,   pe: 35.2, return5y: -16,   exchange: 'NASDAQ' },
  { ticker: 'COIN',  name: 'Coinbase',            sector: 'Financial',      marketCap: 51,   pe: 42.9, return5y: -35,   exchange: 'NASDAQ' },
  { ticker: 'XYZ',   name: 'Block',               sector: 'Financial',      marketCap: 44,   pe: 34.5,   return5y: -71,  exchange: 'NYSE'   },
  { ticker: 'HOOD',  name: 'Robinhood',           sector: 'Financial',      marketCap: 66,   pe: 35.8,   return5y: 112,  exchange: 'NASDAQ' },
  { ticker: 'PLTR',  name: 'Palantir',            sector: 'Technology',     marketCap: 345,  pe: 228.7,  return5y: 546,  exchange: 'NYSE'   },
  { ticker: 'SNOW',  name: 'Snowflake',           sector: 'Technology',     marketCap: 49,   pe: -1,   return5y: -37,  exchange: 'NYSE'   },
  { ticker: 'DDOG',  name: 'Datadog',             sector: 'Technology',     marketCap: 50,   pe: 453.3, return5y: 75,  exchange: 'NASDAQ' },
  { ticker: 'NET',   name: 'Cloudflare',          sector: 'Technology',     marketCap: 75,   pe: -1,  return5y: 159,  exchange: 'NYSE'   },
  { ticker: 'ZM',    name: 'Zoom',                sector: 'Technology',     marketCap: 30,   pe: 16.7, return5y: -67,  exchange: 'NASDAQ' },
  { ticker: 'DOCU',  name: 'DocuSign',            sector: 'Technology',     marketCap: 9,   pe: 32.4, return5y: -78,  exchange: 'NASDAQ' },
  { ticker: 'TWLO',  name: 'Twilio',              sector: 'Technology',     marketCap: 28,   pe: 277.8,   return5y: -49,  exchange: 'NYSE'   },
  { ticker: 'RBLX',  name: 'Roblox',              sector: 'Technology',     marketCap: 32,   pe: -1,   return5y: -37,  exchange: 'NYSE'   },
  { ticker: 'RIVN',  name: 'Rivian',              sector: 'Consumer',       marketCap: 20,   pe: -1,   return5y: -85,  exchange: 'NASDAQ' },
  { ticker: 'LCID',  name: 'Lucid Group',         sector: 'Consumer',       marketCap: 2,    pe: -1,   return5y: -97,  exchange: 'NASDAQ' },
  { ticker: 'F',     name: 'Ford Motor',          sector: 'Consumer',       marketCap: 48,   pe: -1, return5y: 36,   exchange: 'NYSE'   },
  { ticker: 'GM',    name: 'General Motors',      sector: 'Consumer',       marketCap: 68,   pe: 27.6,  return5y: 38,   exchange: 'NYSE'   },
  { ticker: 'MMM',   name: '3M',                  sector: 'Industrials',    marketCap: 74,   pe: 27.5, return5y: 3,  exchange: 'NYSE'   },
]

// Deduplicate by ticker (AMZN and ABNB appear twice)
const seen = new Set<string>()
export const stocksData: Stock[] = stocks.filter(s => {
  if (seen.has(s.ticker)) return false
  seen.add(s.ticker)
  return true
})
