import { Button } from '../ui/button'

type TabSectionProps = {
  title: string
  description?: string
  image?: string
}

const TabSection = ({ title, description, image }: TabSectionProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 flex md:justify-center md:items-center p-6 md:p-12">
        <img src={image} alt={title} width={612} height={408} className="w-full h-auto object-contain" />
      </div>
      <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center gap-4">
        <h3 className="text-[2rem] md:text-[2.5rem] font-bold">{title}</h3>
        <p className="font-normal">{description}</p>
        <Button>Go!</Button>
      </div>
    </div>
  );
};


export default TabSection