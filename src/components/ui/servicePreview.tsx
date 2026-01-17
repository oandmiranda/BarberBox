import Image from "next/image";
import Heading from "./heading";
import Text from "./text";
import Button from "./button";

type ServicePreviewProps = {
    src: string;
    alt: string;
    heading: string;
    description?: string;
    price: string;
    duration?: number;
    onClick: () => void;
}

const ServicePreview = ({src, alt, heading, description, price, duration, onClick}: ServicePreviewProps) => {
    return (
        <div className="flex gap-2 bg-surface rounded-xl p-2 w-full">
            <div>
                <Image src={src} alt={alt} width={50} height={50} className="rounded-xl bg-cover"/>
            </div>

            {/* // service informations */}
            <div className="flex flex-col justify-between">
                <div className="flex items-center">
                    <Heading>{heading}</Heading>
                    <p>star icon here</p>
                </div>

                <div className="flex flex-col">
                    <Text>{description}</Text>
                    <Text>{duration}</Text>
                </div>

                <div className="flex justify-between items-center">
                    <Text>{price}</Text>
                    <Button variant="primary" onClick={onClick}>Agendar</Button>
                </div>
            </div>
        </div>
    )
}

export default ServicePreview;