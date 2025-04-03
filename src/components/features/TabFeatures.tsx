import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabSection from "@/components/features/TabSection";

const tabSections = [
  { name: "Frontend", section: "frontend", title: "1 Medium length section heading goes here", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 1", image: "face.png" },
  { name: "Backend", section: "backend", title: "2 Medium length section heading goes here", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 2", image: "phone2.png" },
  { name: "Cloud", section: "cloud", title: "3 Medium length section heading goes here", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 3", image: "image.png" },
];

type Props = {}

const TabFeature = (props: Props) => {
  return (
    <Tabs defaultValue={tabSections[0].section} className="border border-black flex-1 flex w-full">
      <TabsList className="w-full gap-2 flex-col md:flex-row h-full">
        {
          tabSections.map((tab) => (
            <TabsTrigger key={tab.name} value={tab.section} className="w-full">{tab.name}</TabsTrigger>
          ))
        }

      </TabsList>
      {
        tabSections.map((tab) => (
          <TabsContent key={tab.name} value={tab.section} className="flex h-full">
            <TabSection
              title={tab.title}
              description={tab.description}
              image={tab.image}
            />
          </TabsContent>
        ))
      }
    </Tabs>

  )
}

export default TabFeature