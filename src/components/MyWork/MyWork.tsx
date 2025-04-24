import Lightbox from "yet-another-react-lightbox";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyWork = ({ open, setOpen }: Props) => {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={[
        { src: "Courses/baza1.jpg" },
        { src: "Courses/baza1.jpg" },
        { src: "Courses/baza1.jpg" },
        { src: "Courses/baza1.jpg" },
      ]}
    />
  );
};

export default MyWork;
