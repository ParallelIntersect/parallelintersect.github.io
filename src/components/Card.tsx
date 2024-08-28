interface Props {
  title: string;
  body: string;
  href: string;
}
const Card = (props: Props) => {
  // const { href, title, body } = Astro.props;

  return (
    <section className="border border-black m-8 p-8 rounded-lg text-center">
      <a href={props.href}>
        <h2 className="text-2xl">
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p>{props.body}</p>
      </a>
    </section>
  );
};

export default Card;
