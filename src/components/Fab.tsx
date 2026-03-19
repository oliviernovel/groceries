import './Fab.css';

interface FabProps {
  onClick: () => void;
}

export function Fab({ onClick }: FabProps) {
  return (
    <button className="fab" onClick={onClick} aria-label="Add item">
      +
    </button>
  );
}
