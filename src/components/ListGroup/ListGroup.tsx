import { useState } from "react";
import "./ListGroup.css";

/**
 * Interface for required props in App component
 */
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {/* Conditional && works as a return */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-none p-0" style={{ backgroundColor: "yellow" }}>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              {
                setSelectedIndex(index);
                onSelectItem(item);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
