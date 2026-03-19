# Groceries

Mobile-first checklist app for grocery shopping. Personal use, single device.

## Items

- Each item has: name, purchase history, and purchase order
- The **purchase history** is an array of timestamps, one per purchase. It drives both the sort order and the displayed purchase interval
- The **purchase order** is the manual position the user assigns by dragging the item in the list

### Purchase frequency calculation

Frequency is derived from the purchase history using **exponential decay**:

```
score = Σ exp(-λ × days_since_purchase)   where λ = ln(2) / 30
```

A purchase made today contributes 1.0 to the score; one made 30 days ago contributes 0.5; 60 days ago contributes 0.25; and so on. This means recent buying habits are weighted much more heavily than old ones, without any hard cutoff.

**Pruning:** When a new purchase is recorded, all timestamps older than 180 days are removed from the array before appending the new one. This keeps the array bounded (≤ 180 entries for daily purchases) while discarding data that contributes less than ~1.5% to the score anyway.

**Displayed interval (`c/Nd`):** Computed as the median gap between consecutive purchase timestamps in the history array. Items with fewer than 2 purchases show no interval.

## Adding items

The main screen has a floating button in the bottom-right corner to add items.

### Add screen

When the button is tapped, the main screen is replaced by the add screen, which contains:

- A text field at the top to search/create items
- Below it, the list of items from the **purchased** list
- A button to return to the main screen (the user can add multiple items before going back)

### Search and filter behavior

- If the text field is empty, the full purchased list is shown unfiltered
- As the user types, the purchased list filters to show only items whose name matches the entered text
- Each item in the list has a **+** button on its right
  - If the item has already been added to the to-buy list: the **+** button is shown in **green**
  - If the item is not yet in the to-buy list: the **+** button is shown in **gray**
- When the **+** button is pressed, the item is added to the to-buy list (button changes from gray to green), the text field is cleared, and the list resets to show all items. The item does not disappear from the add screen list

### Creating a new item

- If the entered text does not exactly match any existing item, the first element in the list shows the entered text as a new item
- When the **+** button of that new item is pressed, the item is created and added to the to-buy list

## Deleting items

- Items can be permanently deleted from the list

## Lists

The interface is divided into two sections: the **to-buy** list on top, the **purchased** list below.

### To-buy list

- Shows items whose checkbox is unchecked
- Sorted by purchase order
- Can be reordered by dragging items (this updates their purchase order)

### Purchased list

- Shows items whose checkbox is checked
- Sorted by purchase frequency by default (highest frequency first)
- Sort order can be changed to:
  - Alphabetical order
  - Purchase order (in this mode items can be reordered by dragging)

## Checking and unchecking

- Checking an item's checkbox (to-buy → purchased): records the current timestamp in its purchase history (pruning entries older than 180 days) and moves it to the purchased list
- Unchecking an item's checkbox (purchased → to-buy): returns it to its previous position in the to-buy list (purchase order is preserved)

## Persistence

- Data is saved in the browser's localStorage
- No backend or cross-device sync

## Design

- Mobile-first: optimized for small screens
- Stack: React + TypeScript + Vite (already configured in the project)
