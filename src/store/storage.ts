import type { GroceryItem, PurchasedSortMode } from '../types';

export interface GroceryState {
  items: GroceryItem[];
  sortMode: PurchasedSortMode;
}

const STORAGE_KEY = 'groceries-app-state';
const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function saveState(state: GroceryState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore write errors
  }
}

export function loadState(): GroceryState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed?.items)) return null;
    return parsed as GroceryState;
  } catch {
    return null;
  }
}

export function seedData(): GroceryItem[] {
  const now = Date.now();
  return [
    {
      id: 'seed-1',
      name: 'Milk',
      purchaseHistory: [now - 7 * MS_PER_DAY, now - 14 * MS_PER_DAY, now - 21 * MS_PER_DAY],
      purchaseOrder: 0,
      bought: false,
    },
    {
      id: 'seed-2',
      name: 'Eggs',
      purchaseHistory: [now - 5 * MS_PER_DAY, now - 19 * MS_PER_DAY],
      purchaseOrder: 1,
      bought: false,
    },
    {
      id: 'seed-3',
      name: 'Bread',
      purchaseHistory: [now - 3 * MS_PER_DAY, now - 10 * MS_PER_DAY, now - 17 * MS_PER_DAY],
      purchaseOrder: 2,
      bought: false,
    },
    {
      id: 'seed-4',
      name: 'Cheese',
      purchaseHistory: [now - 30 * MS_PER_DAY],
      purchaseOrder: 3,
      bought: false,
    },
    {
      id: 'seed-5',
      name: 'Butter',
      purchaseHistory: [],
      purchaseOrder: 4,
      bought: false,
    },
    {
      id: 'seed-6',
      name: 'Apples',
      purchaseHistory: [now - 8 * MS_PER_DAY, now - 22 * MS_PER_DAY],
      purchaseOrder: 5,
      bought: false,
    },
    {
      id: 'seed-7',
      name: 'Chicken',
      purchaseHistory: [],
      purchaseOrder: 6,
      bought: false,
    },
    {
      id: 'seed-8',
      name: 'Yogurt',
      purchaseHistory: [now - 2 * MS_PER_DAY, now - 9 * MS_PER_DAY, now - 16 * MS_PER_DAY],
      purchaseOrder: 7,
      bought: true,
    },
    {
      id: 'seed-9',
      name: 'Orange Juice',
      purchaseHistory: [now - 4 * MS_PER_DAY, now - 18 * MS_PER_DAY],
      purchaseOrder: 8,
      bought: true,
    },
    {
      id: 'seed-10',
      name: 'Pasta',
      purchaseHistory: [now - 12 * MS_PER_DAY],
      purchaseOrder: 9,
      bought: true,
    },
  ];
}
