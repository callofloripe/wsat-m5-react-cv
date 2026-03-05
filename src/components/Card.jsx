function Card({ title, children }) {
return (
<section className="card">
<h2>{title}</h2>
{children}
</section>
);
}
export default Card;

import Card from "./Card";
function About() {
return (
<Card title="About Me">
<p>This is my personal profile.</p>
</Card>
);
}

