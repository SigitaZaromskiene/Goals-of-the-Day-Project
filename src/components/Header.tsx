type Header = {
  text: string;
  img: {
    src: string;
    alt: string;
  };
};

export default function Header({ text, img }: Header) {
  return (
    <div className="header">
      <img className="header_img" src={img.src} alt={img.alt} />
      <h1>{text}</h1>
    </div>
  );
}
