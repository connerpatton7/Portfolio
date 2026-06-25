import './Shelf.css';
import ShelfItem from './ShelfItem';

const items = [
	{ id: 1, title: 'React', img: '/src/assets/react.svg' },
	{ id: 2, title: 'C++', img: '/src/assets/C++_logo.png' },
	{ id: 3, title: 'Godot', img: '/src/assets/godot_logo.png' },
	{ id: 4, title: 'HTML', img: '/src/assets/html_logo.png' },
	{ id: 5, title: 'Python', img: '/src/assets/python_logo.png' },
	{ id: 6, title: 'Headshot', img: '/src/assets/headshot.jpg' },
];

export default function Shelf() {
	return (
		<div className="shelf-root">
			<div className="shelf">
				{items.map((it) => (
					<ShelfItem key={it.id} title={it.title} img={it.img} />
				))}
			</div>
			<div className="shelf-base" />
		</div>
	);
}
 /* SHELF IDEAS */
 /** CALORIE TRACKER
  *  MUSIC PLAYER
  *  STOCK MARKET CHART
  *  INTERACTIVE STICK MAN
   */
