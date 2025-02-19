interface IProps {
    ImageUrl:string;
    alt:string;
    className:string;
}

const Image = ({ImageUrl,alt,className}: IProps) => {
  return (
        <img  src={ImageUrl} alt={alt} className={className} />
  )
}

export default Image
