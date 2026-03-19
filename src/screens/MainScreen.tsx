import './MainScreen.css';
import { SectionHeader } from '../components/SectionHeader';
import { BuyList } from '../components/BuyList';
import { PurchasedList } from '../components/PurchasedList';
import { useGroceries } from '../store/grocery-context';

export function MainScreen() {
  const { state } = useGroceries();
  const toBuy = state.items.filter(item => !item.bought);
  const purchased = state.items.filter(item => item.bought);

  return (
    <main className="main-screen">
      <SectionHeader title="To Buy" count={toBuy.length} />
      <BuyList items={toBuy} />
      <SectionHeader title="Purchased" count={purchased.length} />
      <PurchasedList items={purchased} />
    </main>
  );
}
