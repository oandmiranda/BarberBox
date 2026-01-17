import Heading from "./heading";
import Text from "./text";

type ContentWrapperProps = {
  title: string;
  subtitle?: string;
  isColumn?: boolean;
  children?: React.ReactNode;
}

const ContentWrapper = ({title, subtitle, isColumn, children}: ContentWrapperProps) => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <Heading>{title}</Heading>
          <Text>{subtitle}</Text>
        </div>

        <div className={`flex gap-3 ${isColumn ? 'flex-col' : ''}`}>
          {children}
        </div>
    </section>
  );
};

export default ContentWrapper;
// sdfndsfnmdf