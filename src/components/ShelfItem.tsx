import React, {useState} from 'react';
import './ShelfItem.css';

type Props = {
  title?: string;
  img?: string;
};

export default function ShelfItem({title, img}: Props) {
  const [pulled, setPulled] = useState(false);

  function togglePull() {
    setPulled((p) => !p);
  }

  return (
    <button
      className={"shelf-item" + (pulled ? ' pulled' : '')}
      onClick={togglePull}
      aria-pressed={pulled}
      title={title}
    >
      <div className="shelf-item-front">
        {img ? <img src={img} alt={title ?? 'cover'} /> : <div className="cover-filler" />}
      </div>
    </button>
  );
}
