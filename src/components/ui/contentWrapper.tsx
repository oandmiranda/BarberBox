import { TitleSizes } from "@/types/ui/titleSizes";
import Heading from "./heading";
import Text from "./text";
import { TitleAs } from "@/types/ui/titleAs";

type ContentWrapperProps = {
  title: string;
  titleAs?: TitleAs;
  titleSize?: TitleSizes;
  subtitle?: string;
  isColumn?: boolean;
  children?: React.ReactNode;
}

const ContentWrapper = ({title, titleAs, titleSize, subtitle, isColumn, children}: ContentWrapperProps) => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <Heading as={titleAs} size={titleSize}>{title}</Heading>
          <Text>{subtitle}</Text>
        </div>

        <div className={`flex gap-3 ${isColumn ? 'flex-col' : ''}`}>
          {children}
        </div>
    </section>
  );
};

export default ContentWrapper;
