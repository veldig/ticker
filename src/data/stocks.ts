import type { Stock } from '../types/stock'

export const stocks: Stock[] = [
  // Technology
  { ticker: 'AAPL',  name: 'Apple',              sector: 'Technology',     marketCap: 3100, pe: 31.2, return5y: 285,  exchange: 'NASDAQ' },
  { ticker: 'MSFT',  name: 'Microsoft',           sector: 'Technology',     marketCap: 3050, pe: 35.8, return5y: 272,  exchange: 'NASDAQ' },
  { ticker: 'NVDA',  name: 'NVIDIA',              sector: 'Technology',     marketCap: 2950, pe: 55.4, return5y: 1840, exchange: 'NASDAQ' },
  { ticker: 'GOOGL', name: 'Alphabet',            sector: 'Technology',     marketCap: 2100, pe: 23.6, return5y: 155,  exchange: 'NASDAQ' },
  { ticker: 'META',  name: 'Meta Platforms',      sector: 'Technology',     marketCap: 1450, pe: 28.1, return5y: 180,  exchange: 'NASDAQ' },
  { ticker: 'AMZN',  name: 'Amazon',              sector: 'Technology',     marketCap: 2050, pe: 42.5, return5y: 95,   exchange: 'NASDAQ' },
  { ticker: 'TSLA',  name: 'Tesla',               sector: 'Consumer',       marketCap: 760,  pe: 62.3, return5y: 730,  exchange: 'NASDAQ' },
  { ticker: 'AMD',   name: 'AMD',                 sector: 'Technology',     marketCap: 245,  pe: 38.9, return5y: 620,  exchange: 'NASDAQ' },
  { ticker: 'INTC',  name: 'Intel',               sector: 'Technology',     marketCap: 88,   pe: -1,   return5y: -42,  exchange: 'NASDAQ' },
  { ticker: 'ORCL',  name: 'Oracle',              sector: 'Technology',     marketCap: 420,  pe: 40.2, return5y: 195,  exchange: 'NYSE'   },
  { ticker: 'CRM',   name: 'Salesforce',          sector: 'Technology',     marketCap: 305,  pe: 46.1, return5y: 78,   exchange: 'NYSE'   },
  { ticker: 'ADBE',  name: 'Adobe',               sector: 'Technology',     marketCap: 185,  pe: 29.4, return5y: 128,  exchange: 'NASDAQ' },
  { ticker: 'QCOM',  name: 'Qualcomm',            sector: 'Technology',     marketCap: 175,  pe: 17.8, return5y: 145,  exchange: 'NASDAQ' },
  { ticker: 'TXN',   name: 'Texas Instruments',   sector: 'Technology',     marketCap: 165,  pe: 34.6, return5y: 82,   exchange: 'NASDAQ' },
  { ticker: 'AVGO',  name: 'Broadcom',            sector: 'Technology',     marketCap: 890,  pe: 28.7, return5y: 430,  exchange: 'NASDAQ' },
  { ticker: 'MU',    name: 'Micron Technology',   sector: 'Technology',     marketCap: 105,  pe: 22.1, return5y: 115,  exchange: 'NASDAQ' },
  { ticker: 'NOW',   name: 'ServiceNow',          sector: 'Technology',     marketCap: 195,  pe: 68.4, return5y: 310,  exchange: 'NYSE'   },
  { ticker: 'SHOP',  name: 'Shopify',             sector: 'Technology',     marketCap: 110,  pe: 88.5, return5y: 420,  exchange: 'NYSE'   },
  { ticker: 'PYPL',  name: 'PayPal',              sector: 'Financial',      marketCap: 68,   pe: 14.2, return5y: -42,  exchange: 'NASDAQ' },
  { ticker: 'NFLX',  name: 'Netflix',             sector: 'Communications', marketCap: 420,  pe: 46.8, return5y: 318,  exchange: 'NASDAQ' },

  // Healthcare
  { ticker: 'JNJ',   name: 'Johnson & Johnson',   sector: 'Healthcare',     marketCap: 395,  pe: 22.4, return5y: 18,   exchange: 'NYSE'   },
  { ticker: 'PFE',   name: 'Pfizer',              sector: 'Healthcare',     marketCap: 145,  pe: 12.1, return5y: -12,  exchange: 'NYSE'   },
  { ticker: 'MRK',   name: 'Merck',               sector: 'Healthcare',     marketCap: 260,  pe: 14.8, return5y: 88,   exchange: 'NYSE'   },
  { ticker: 'ABBV',  name: 'AbbVie',              sector: 'Healthcare',     marketCap: 325,  pe: 17.6, return5y: 128,  exchange: 'NYSE'   },
  { ticker: 'UNH',   name: 'UnitedHealth Group',  sector: 'Healthcare',     marketCap: 440,  pe: 19.2, return5y: 145,  exchange: 'NYSE'   },
  { ticker: 'LLY',   name: 'Eli Lilly',           sector: 'Healthcare',     marketCap: 760,  pe: 72.4, return5y: 580,  exchange: 'NYSE'   },
  { ticker: 'TMO',   name: 'Thermo Fisher',       sector: 'Healthcare',     marketCap: 200,  pe: 28.5, return5y: 98,   exchange: 'NYSE'   },
  { ticker: 'AMGN',  name: 'Amgen',               sector: 'Healthcare',     marketCap: 155,  pe: 15.8, return5y: 42,   exchange: 'NASDAQ' },
  { ticker: 'GILD',  name: 'Gilead Sciences',     sector: 'Healthcare',     marketCap: 105,  pe: 14.5, return5y: 25,   exchange: 'NASDAQ' },
  { ticker: 'ISRG',  name: 'Intuitive Surgical',  sector: 'Healthcare',     marketCap: 185,  pe: 68.2, return5y: 162,  exchange: 'NASDAQ' },
  { ticker: 'MDT',   name: 'Medtronic',           sector: 'Healthcare',     marketCap: 95,   pe: 16.4, return5y: -8,   exchange: 'NYSE'   },
  { ticker: 'CVS',   name: 'CVS Health',          sector: 'Healthcare',     marketCap: 58,   pe: 9.8,  return5y: -28,  exchange: 'NYSE'   },

  // Financial
  { ticker: 'JPM',   name: 'JPMorgan Chase',      sector: 'Financial',      marketCap: 680,  pe: 13.2, return5y: 148,  exchange: 'NYSE'   },
  { ticker: 'BAC',   name: 'Bank of America',     sector: 'Financial',      marketCap: 335,  pe: 14.8, return5y: 78,   exchange: 'NYSE'   },
  { ticker: 'GS',    name: 'Goldman Sachs',       sector: 'Financial',      marketCap: 195,  pe: 14.1, return5y: 168,  exchange: 'NYSE'   },
  { ticker: 'MS',    name: 'Morgan Stanley',      sector: 'Financial',      marketCap: 185,  pe: 17.4, return5y: 112,  exchange: 'NYSE'   },
  { ticker: 'BLK',   name: 'BlackRock',           sector: 'Financial',      marketCap: 155,  pe: 22.6, return5y: 98,   exchange: 'NYSE'   },
  { ticker: 'V',     name: 'Visa',                sector: 'Financial',      marketCap: 620,  pe: 30.4, return5y: 118,  exchange: 'NYSE'   },
  { ticker: 'MA',    name: 'Mastercard',          sector: 'Financial',      marketCap: 490,  pe: 37.8, return5y: 142,  exchange: 'NYSE'   },
  { ticker: 'AXP',   name: 'American Express',    sector: 'Financial',      marketCap: 215,  pe: 20.5, return5y: 185,  exchange: 'NYSE'   },
  { ticker: 'BRK-B', name: 'Berkshire Hathaway',  sector: 'Financial',      marketCap: 1050, pe: 22.8, return5y: 118,  exchange: 'NYSE'   },
  { ticker: 'C',     name: 'Citigroup',           sector: 'Financial',      marketCap: 118,  pe: 11.5, return5y: 28,   exchange: 'NYSE'   },
  { ticker: 'WFC',   name: 'Wells Fargo',         sector: 'Financial',      marketCap: 215,  pe: 13.8, return5y: 88,   exchange: 'NYSE'   },
  { ticker: 'SCHW',  name: 'Charles Schwab',      sector: 'Financial',      marketCap: 128,  pe: 27.4, return5y: 45,   exchange: 'NYSE'   },

  // Consumer
  { ticker: 'WMT',   name: 'Walmart',             sector: 'Consumer',       marketCap: 770,  pe: 38.2, return5y: 168,  exchange: 'NYSE'   },
  { ticker: 'COST',  name: 'Costco',              sector: 'Consumer',       marketCap: 395,  pe: 52.4, return5y: 218,  exchange: 'NASDAQ' },
  { ticker: 'TGT',   name: 'Target',              sector: 'Consumer',       marketCap: 52,   pe: 14.8, return5y: -12,  exchange: 'NYSE'   },
  { ticker: 'HD',    name: 'Home Depot',          sector: 'Consumer',       marketCap: 365,  pe: 24.6, return5y: 78,   exchange: 'NYSE'   },
  { ticker: 'LOW',   name: "Lowe's",              sector: 'Consumer',       marketCap: 145,  pe: 22.1, return5y: 142,  exchange: 'NYSE'   },
  { ticker: 'MCD',   name: "McDonald's",          sector: 'Consumer',       marketCap: 215,  pe: 24.8, return5y: 68,   exchange: 'NYSE'   },
  { ticker: 'SBUX',  name: 'Starbucks',           sector: 'Consumer',       marketCap: 98,   pe: 28.4, return5y: -8,   exchange: 'NASDAQ' },
  { ticker: 'NKE',   name: 'Nike',                sector: 'Consumer',       marketCap: 82,   pe: 25.6, return5y: -18,  exchange: 'NYSE'   },
  { ticker: 'KO',    name: 'Coca-Cola',           sector: 'Consumer',       marketCap: 298,  pe: 26.4, return5y: 38,   exchange: 'NYSE'   },
  { ticker: 'PEP',   name: 'PepsiCo',             sector: 'Consumer',       marketCap: 205,  pe: 22.8, return5y: 28,   exchange: 'NASDAQ' },
  { ticker: 'PG',    name: 'Procter & Gamble',    sector: 'Consumer',       marketCap: 388,  pe: 27.4, return5y: 58,   exchange: 'NYSE'   },
  { ticker: 'PM',    name: 'Philip Morris',       sector: 'Consumer',       marketCap: 198,  pe: 18.6, return5y: 72,   exchange: 'NYSE'   },
  { ticker: 'AMZN',  name: 'Amazon',              sector: 'Consumer',       marketCap: 2050, pe: 42.5, return5y: 95,   exchange: 'NASDAQ' },
  { ticker: 'ABNB',  name: 'Airbnb',              sector: 'Consumer',       marketCap: 85,   pe: 22.4, return5y: 48,   exchange: 'NASDAQ' },

  // Energy
  { ticker: 'XOM',   name: 'ExxonMobil',          sector: 'Energy',         marketCap: 495,  pe: 14.8, return5y: 88,   exchange: 'NYSE'   },
  { ticker: 'CVX',   name: 'Chevron',             sector: 'Energy',         marketCap: 265,  pe: 15.2, return5y: 72,   exchange: 'NYSE'   },
  { ticker: 'COP',   name: 'ConocoPhillips',      sector: 'Energy',         marketCap: 128,  pe: 13.4, return5y: 142,  exchange: 'NYSE'   },
  { ticker: 'SLB',   name: 'Schlumberger',        sector: 'Energy',         marketCap: 58,   pe: 13.8, return5y: 38,   exchange: 'NYSE'   },
  { ticker: 'EOG',   name: 'EOG Resources',       sector: 'Energy',         marketCap: 72,   pe: 10.8, return5y: 98,   exchange: 'NYSE'   },

  // Industrials
  { ticker: 'CAT',   name: 'Caterpillar',         sector: 'Industrials',    marketCap: 175,  pe: 17.4, return5y: 212,  exchange: 'NYSE'   },
  { ticker: 'DE',    name: 'Deere & Company',     sector: 'Industrials',    marketCap: 118,  pe: 18.6, return5y: 165,  exchange: 'NYSE'   },
  { ticker: 'BA',    name: 'Boeing',              sector: 'Industrials',    marketCap: 128,  pe: -1,   return5y: -52,  exchange: 'NYSE'   },
  { ticker: 'HON',   name: 'Honeywell',           sector: 'Industrials',    marketCap: 135,  pe: 22.4, return5y: 42,   exchange: 'NASDAQ' },
  { ticker: 'GE',    name: 'GE Aerospace',        sector: 'Industrials',    marketCap: 215,  pe: 38.4, return5y: 248,  exchange: 'NYSE'   },
  { ticker: 'LMT',   name: 'Lockheed Martin',     sector: 'Industrials',    marketCap: 118,  pe: 17.2, return5y: 52,   exchange: 'NYSE'   },
  { ticker: 'RTX',   name: 'RTX Corporation',     sector: 'Industrials',    marketCap: 165,  pe: 36.8, return5y: 78,   exchange: 'NYSE'   },
  { ticker: 'UPS',   name: 'UPS',                 sector: 'Industrials',    marketCap: 88,   pe: 18.4, return5y: -18,  exchange: 'NYSE'   },
  { ticker: 'FDX',   name: 'FedEx',               sector: 'Industrials',    marketCap: 68,   pe: 14.8, return5y: 42,   exchange: 'NYSE'   },

  // Real Estate
  { ticker: 'AMT',   name: 'American Tower',      sector: 'Real Estate',    marketCap: 98,   pe: 42.6, return5y: 18,   exchange: 'NYSE'   },
  { ticker: 'PLD',   name: 'Prologis',            sector: 'Real Estate',    marketCap: 108,  pe: 38.4, return5y: 72,   exchange: 'NYSE'   },
  { ticker: 'EQIX',  name: 'Equinix',             sector: 'Real Estate',    marketCap: 82,   pe: 88.4, return5y: 88,   exchange: 'NASDAQ' },
  { ticker: 'SPG',   name: 'Simon Property Group',sector: 'Real Estate',    marketCap: 60,   pe: 20.8, return5y: 48,   exchange: 'NYSE'   },
  { ticker: 'O',     name: 'Realty Income',       sector: 'Real Estate',    marketCap: 48,   pe: 44.2, return5y: 18,   exchange: 'NYSE'   },

  // Utilities
  { ticker: 'NEE',   name: 'NextEra Energy',      sector: 'Utilities',      marketCap: 155,  pe: 22.4, return5y: 42,   exchange: 'NYSE'   },
  { ticker: 'DUK',   name: 'Duke Energy',         sector: 'Utilities',      marketCap: 88,   pe: 18.8, return5y: 22,   exchange: 'NYSE'   },
  { ticker: 'SO',    name: 'Southern Company',    sector: 'Utilities',      marketCap: 92,   pe: 21.4, return5y: 28,   exchange: 'NYSE'   },
  { ticker: 'D',     name: 'Dominion Energy',     sector: 'Utilities',      marketCap: 48,   pe: 16.8, return5y: -22,  exchange: 'NYSE'   },

  // Materials
  { ticker: 'LIN',   name: 'Linde',               sector: 'Materials',      marketCap: 228,  pe: 32.4, return5y: 138,  exchange: 'NASDAQ' },
  { ticker: 'APD',   name: 'Air Products',        sector: 'Materials',      marketCap: 62,   pe: 22.8, return5y: 28,   exchange: 'NYSE'   },
  { ticker: 'NEM',   name: 'Newmont',             sector: 'Materials',      marketCap: 58,   pe: 24.6, return5y: 12,   exchange: 'NYSE'   },
  { ticker: 'FCX',   name: 'Freeport-McMoRan',    sector: 'Materials',      marketCap: 68,   pe: 18.4, return5y: 118,  exchange: 'NYSE'   },

  // Communications
  { ticker: 'T',     name: 'AT&T',                sector: 'Communications', marketCap: 168,  pe: 10.4, return5y: -18,  exchange: 'NYSE'   },
  { ticker: 'VZ',    name: 'Verizon',             sector: 'Communications', marketCap: 172,  pe: 9.8,  return5y: -22,  exchange: 'NYSE'   },
  { ticker: 'CMCSA', name: 'Comcast',             sector: 'Communications', marketCap: 148,  pe: 11.4, return5y: -8,   exchange: 'NASDAQ' },
  { ticker: 'DIS',   name: 'Disney',              sector: 'Communications', marketCap: 195,  pe: 42.8, return5y: -12,  exchange: 'NYSE'   },
  { ticker: 'PARA',  name: 'Paramount Global',    sector: 'Communications', marketCap: 8,    pe: -1,   return5y: -72,  exchange: 'NASDAQ' },
  { ticker: 'SNAP',  name: 'Snap',                sector: 'Communications', marketCap: 18,   pe: -1,   return5y: -38,  exchange: 'NYSE'   },
  { ticker: 'PINS',  name: 'Pinterest',           sector: 'Communications', marketCap: 22,   pe: 32.4, return5y: 12,   exchange: 'NYSE'   },
  { ticker: 'SPOT',  name: 'Spotify',             sector: 'Communications', marketCap: 88,   pe: 68.4, return5y: 145,  exchange: 'NYSE'   },

  // Additional notable stocks
  { ticker: 'UBER',  name: 'Uber',                sector: 'Technology',     marketCap: 168,  pe: 28.4, return5y: 88,   exchange: 'NYSE'   },
  { ticker: 'LYFT',  name: 'Lyft',                sector: 'Technology',     marketCap: 6,    pe: -1,   return5y: -52,  exchange: 'NASDAQ' },
  { ticker: 'ABNB',  name: 'Airbnb',              sector: 'Consumer',       marketCap: 85,   pe: 22.4, return5y: 48,   exchange: 'NASDAQ' },
  { ticker: 'COIN',  name: 'Coinbase',            sector: 'Financial',      marketCap: 72,   pe: 28.8, return5y: 88,   exchange: 'NASDAQ' },
  { ticker: 'SQ',    name: 'Block',               sector: 'Financial',      marketCap: 42,   pe: -1,   return5y: -28,  exchange: 'NYSE'   },
  { ticker: 'HOOD',  name: 'Robinhood',           sector: 'Financial',      marketCap: 18,   pe: -1,   return5y: -22,  exchange: 'NASDAQ' },
  { ticker: 'PLTR',  name: 'Palantir',            sector: 'Technology',     marketCap: 145,  pe: 268,  return5y: 245,  exchange: 'NYSE'   },
  { ticker: 'SNOW',  name: 'Snowflake',           sector: 'Technology',     marketCap: 52,   pe: -1,   return5y: -28,  exchange: 'NYSE'   },
  { ticker: 'DDOG',  name: 'Datadog',             sector: 'Technology',     marketCap: 48,   pe: 98.4, return5y: 168,  exchange: 'NASDAQ' },
  { ticker: 'NET',   name: 'Cloudflare',          sector: 'Technology',     marketCap: 38,   pe: 188,  return5y: 218,  exchange: 'NYSE'   },
  { ticker: 'ZM',    name: 'Zoom',                sector: 'Technology',     marketCap: 22,   pe: 24.8, return5y: -28,  exchange: 'NASDAQ' },
  { ticker: 'DOCU',  name: 'DocuSign',            sector: 'Technology',     marketCap: 18,   pe: 28.4, return5y: -18,  exchange: 'NASDAQ' },
  { ticker: 'TWLO',  name: 'Twilio',              sector: 'Technology',     marketCap: 12,   pe: -1,   return5y: -58,  exchange: 'NYSE'   },
  { ticker: 'RBLX',  name: 'Roblox',              sector: 'Technology',     marketCap: 22,   pe: -1,   return5y: -32,  exchange: 'NYSE'   },
  { ticker: 'RIVN',  name: 'Rivian',              sector: 'Consumer',       marketCap: 12,   pe: -1,   return5y: -82,  exchange: 'NASDAQ' },
  { ticker: 'LCID',  name: 'Lucid Group',         sector: 'Consumer',       marketCap: 6,    pe: -1,   return5y: -92,  exchange: 'NASDAQ' },
  { ticker: 'F',     name: 'Ford Motor',          sector: 'Consumer',       marketCap: 42,   pe: 12.4, return5y: 28,   exchange: 'NYSE'   },
  { ticker: 'GM',    name: 'General Motors',      sector: 'Consumer',       marketCap: 48,   pe: 5.8,  return5y: 52,   exchange: 'NYSE'   },
  { ticker: 'MMM',   name: '3M',                  sector: 'Industrials',    marketCap: 62,   pe: 14.8, return5y: -28,  exchange: 'NYSE'   },
]

// Deduplicate by ticker (AMZN and ABNB appear twice)
const seen = new Set<string>()
export const stocksData: Stock[] = stocks.filter(s => {
  if (seen.has(s.ticker)) return false
  seen.add(s.ticker)
  return true
})
